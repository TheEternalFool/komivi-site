export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  summary: string;
  email: string;
  location?: string;
  interests: string[];
  education?: string[];
  skills: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  technologies: string[];
  tags: string[];
  links?: {
    label: string;
    href: string;
  }[];
  featured?: boolean;
  status?: "active" | "archived" | "experiment";
};

export type WritingPost = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  tags: string[];
  readingTime: string;
  contentHtml: string;
};

export type WritingPostMeta = Omit<WritingPost, "contentHtml">;
