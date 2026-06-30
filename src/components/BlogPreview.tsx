import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getFeaturedPosts(3);
  if (!posts.length) return null;
  return (
    <section className="py-24 md:py-32 bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-gold-400 uppercase tracking-[0.3em] text-xs mb-4">Kennisbank</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-dark-50 mb-4 tracking-tight">
              Leer vastgoed beter <span className="text-gradient-gold">vergelijken</span>
            </h2>
            <p className="text-dark-50/55 text-lg max-w-2xl font-extralight">
              Diepe Nederlandse gidsen over kosten, woonwaarde, aankoopproces en projectinformatie.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-medium">
            Alle gidsen <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-3xl overflow-hidden border border-dark-700/60 bg-dark-950/60 hover:border-gold-400/40 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={post.image} alt={post.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
              <div className="p-6">
                <p className="text-gold-400 text-xs uppercase tracking-[0.2em] mb-3">{post.category}</p>
                <h3 className="font-heading text-2xl text-dark-50 mb-3 group-hover:text-gold-200 transition-colors">{post.title}</h3>
                <p className="text-dark-50/55 text-sm leading-6">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
