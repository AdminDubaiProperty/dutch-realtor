import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug, getAbsoluteUrl } from "@/lib/blog";
import { MarkdownContent } from "@/components/MarkdownContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = getAbsoluteUrl(`/blog/${post.slug}`);
  return {
    title: `${post.title} | The Dutch Realtor`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      locale: "nl_NL",
      images: [{ url: post.image, alt: post.imageAlt }],
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const related = getAllPosts().filter((item) => item.slug !== post.slug).slice(0, 3);
  const url = getAbsoluteUrl(`/blog/${post.slug}`);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: post.image,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      inLanguage: "nl-NL",
      author: { "@type": "Organization", name: post.author, url: getAbsoluteUrl() },
      publisher: { "@type": "Organization", name: "The Dutch Realtor", url: getAbsoluteUrl() },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: getAbsoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Blog", item: getAbsoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <main className="bg-dark-950 min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <header className="pt-28 pb-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 mb-8 text-sm"><ArrowLeft size={16} /> Terug naar kennisbank</Link>
            <p className="text-gold-400 uppercase tracking-[0.3em] text-xs mb-4">{post.category}</p>
            <h1 className="font-heading text-4xl md:text-6xl text-dark-50 mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-dark-50/65 leading-relaxed mb-6">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-dark-50/45">
              <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {new Date(post.date).toLocaleDateString("nl-NL")}</span>
              <span className="inline-flex items-center gap-2"><Clock size={16} /> {post.readingTime}</span>
              <span>Door {post.author}</span>
            </div>
          </div>
        </header>
        <div className="px-4 sm:px-6 mb-12">
          <div className="max-w-5xl mx-auto relative aspect-[16/8] rounded-3xl overflow-hidden border border-dark-700/60">
            <Image src={post.image} alt={post.imageAlt} fill className="object-cover" unoptimized priority />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 to-transparent" />
          </div>
        </div>
        <div className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <MarkdownContent content={post.content} />
            <div className="mt-12 rounded-3xl border border-gold-400/25 bg-gold-500/10 p-6">
              <h2 className="font-heading text-2xl text-dark-50 mb-2">Algemene oriëntatie</h2>
              <p className="text-dark-50/65">Deze kennisbank is bedoeld om vragen, kosten en documenten beter te begrijpen. De inhoud is geen financieel, fiscaal of juridisch advies.</p>
            </div>
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <section className="px-4 sm:px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl text-dark-50 mb-6">Verder lezen</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-2xl border border-dark-700/60 p-5 text-dark-50/75 hover:border-gold-400/40 hover:text-gold-200 transition-colors">{item.title}</Link>)}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
