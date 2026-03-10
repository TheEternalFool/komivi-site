import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { WritingPost, WritingPostMeta } from "@/lib/content";

const writingDirectory = path.join(process.cwd(), "content", "writing");

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const minutes = Math.max(1, Math.ceil(words.length / 200));
  return `${minutes} min read`;
}

export function getAllWriting(): WritingPostMeta[] {
  const fileNames = fs.readdirSync(writingDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(writingDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        title: data.title ?? "Untitled",
        slug,
        summary: data.summary ?? data.excerpt ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
        readingTime: estimateReadingTime(content)
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getWritingBySlug(slug: string): Promise<WritingPost> {
  const fullPath = path.join(writingDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title ?? "Untitled",
    slug,
    summary: data.summary ?? data.excerpt ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    readingTime: estimateReadingTime(content),
    contentHtml
  };
}
