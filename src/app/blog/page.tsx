import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { getAllPosts, getAbsoluteUrl } from "@/lib/blog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kennisbank buitenlands vastgoed | The Dutch Realtor",
  description: "Diepe Nederlandse gidsen over vastgoed kopen in het buitenland: Dubai, Marokko, Spanje, kosten, servicekosten, aankoopproces en huurscenario's.",
  alternates: { canonical: getAbsoluteUrl("/blog") },
  openGraph: {
    title: "Kennisbank buitenlands vastgoed | The Dutch Realtor",
    description: "Nederlandse gidsen en checklists voor vastgoedorientatie in het buitenland.",
    url: getAbsoluteUrl("/blog"),
    type: "website",
    locale: "nl_NL",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kennisbank buitenlands vastgoed",
    url: getAbsoluteUrl("/blog"),
    inLanguage: "nl-NL",
    about: "Buitenlands vastgoed kopen en vergelijken",
    mainEntity: posts.map((post) => ({
      "@type": "Article",
      headline: post.title,
      url: getAbsoluteUrl(`/blog/${post.slug}`),
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
    })),
  };

  return (
    <main className="bg-dark-950 min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold-400 uppercase tracking-[0.3em] text-xs mb-4">Kennisbank</p>
          <h1 className="font-heading text-4xl md:text-6xl text-dark-50 mb-6">Buitenlands vastgoed beter vergelijken</h1>
          <p className="text-dark-50/65 text-xl max-w-3xl leading-relaxed">
            Diepe Nederlandse gidsen over kosten, aankoopproces, servicekosten, huurscenario&apos;s en praktische voorbereiding. Geen garanties, wel betere vragen en betere vergelijkingen.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-3xl overflow-hidden border border-dark-700/60 bg-dark-900/60 hover:border-gold-400/40 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={post.image} alt={post.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent" />
                <span className="absolute left-4 bottom-4 bg-gold-500/20 border border-gold-400/30 text-gold-200 px-3 py-1 rounded-full text-xs">{post.category}</span>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-2xl text-dark-50 mb-3 group-hover:text-gold-200 transition-colors">{post.title}</h2>
                <p className="text-dark-50/60 text-sm leading-6 mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-dark-50/45 mb-5">
                  <span className="inline-flex items-center gap-1"><CalendarDays size={14} /> {new Date(post.date).toLocaleDateString("nl-NL")}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={14} /> {post.readingTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-gold-300 text-sm font-medium">Lees gids <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
