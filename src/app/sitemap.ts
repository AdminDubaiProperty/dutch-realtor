import type { MetadataRoute } from "next";
import { getAllPosts, getAbsoluteUrl } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: getAbsoluteUrl(), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: getAbsoluteUrl("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
  ];

  const blogRoutes = getAllPosts().map((post) => ({
    url: getAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
