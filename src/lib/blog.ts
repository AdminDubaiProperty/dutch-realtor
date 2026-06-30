import fs from "node:fs";
import path from "node:path";

export type BlogPostMeta = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  author: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  readingTime: string;
  canonical?: string;
  draft?: boolean;
};

export type BlogPost = BlogPostMeta & {
  slug: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): { meta: BlogPostMeta; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Blogpost mist frontmatter");
  const frontmatter = match[1];
  const content = match[2].trim();
  const data: Record<string, string | string[] | boolean> = {};

  for (const line of frontmatter.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const rawValue = line.slice(idx + 1).trim();
    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      data[key] = rawValue
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^['\"]|['\"]$/g, ""))
        .filter(Boolean);
    } else if (rawValue === "true" || rawValue === "false") {
      data[key] = rawValue === "true";
    } else {
      data[key] = rawValue.replace(/^['\"]|['\"]$/g, "");
    }
  }

  return { meta: data as BlogPostMeta, content };
}

function fileToPost(file: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { meta, content } = parseFrontmatter(raw);
  return { ...meta, slug: file.replace(/\.md$/, ""), content };
}

export function getAllPosts({ includeDrafts = false }: { includeDrafts?: boolean } = {}): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(fileToPost)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const post = fileToPost(`${slug}.md`);
  if (post.draft) return null;
  return post;
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function getAbsoluteUrl(pathname = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://thedutchrealtor.nl";
  return `${base}${pathname}`;
}
