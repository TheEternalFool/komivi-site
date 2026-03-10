export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  fullName: string;
  headline: string;
  intro: string;
  background: string[];
  interests: string[];
  skills: string[];
  email: string;
  socials: SocialLink[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  description?: string;
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

export type BookEntry = {
  title: string;
  author?: string;
  note?: string;
};

export type ReadingCategory = {
  name: string;
  description?: string;
  books: BookEntry[];
};

export type ChessProfile = {
  intro: string;
  lichessUrl: string;
};
