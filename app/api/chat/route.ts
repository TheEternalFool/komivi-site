import { NextResponse } from "next/server";
import OpenAI from "openai";
import { profile } from "@/content/profile";
import { education } from "@/content/education";
import { projects } from "@/content/projects";
import { readingCategories } from "@/content/reading";

export const runtime = "nodejs";

function buildContext() {
  const educationSummary = education
    .map((entry) => `${entry.degree} — ${entry.institution} (${entry.startYear}–${entry.endYear})`)
    .join("\n");

  const projectSummary = projects
    .map((project) => `${project.title}: ${project.summary}`)
    .join("\n");

  const readingSummary = readingCategories
    .map((category) => `${category.name}: ${category.books.map((book) => book.title).slice(0, 5).join(", ")}`)
    .join("\n");

  return `You are the site assistant for Komivi Jarod Manuel Assiamua.\n\nProfile:\n${profile.fullName}\n${profile.headline}\n${profile.intro}\n\nBackground:\n${profile.background.join("\n")}\n\nEducation:\n${educationSummary}\n\nProjects:\n${projectSummary}\n\nReading:\n${readingSummary}\n\nRules:\n- Answer concisely and professionally.\n- Do not invent facts.\n- If information is missing, say it is not yet available.`;
}

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { reply: "The assistant is not configured yet. Please add OPENAI_API_KEY." },
      { status: 500 }
    );
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { messages } = (await req.json()) as {
    messages: { role: "user" | "assistant"; content: string }[];
  };

  const userMessage = messages[messages.length - 1]?.content ?? "";

  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
    input: [
      { role: "system", content: buildContext() },
      { role: "user", content: userMessage }
    ]
  });

  return NextResponse.json({ reply: response.output_text || "" });
}
