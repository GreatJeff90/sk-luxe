// src/components/Journal.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  { title: "The Art of Silk", date: "June 15, 2026", excerpt: "Exploring the delicate craftsmanship behind our signature evening wear." },
  { title: "Summer Minimalism", date: "June 02, 2026", excerpt: "A guide to curating a timeless capsule wardrobe for the warmer months." },
];

export default function Journal() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-brand-green uppercase tracking-widest font-light mb-16 text-center">
          The Journal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              whileHover={{ opacity: 0.8 }}
              className="group"
            >
              <div className="aspect-[16/9] bg-brand-green/5 mb-8" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-green/50">
                {article.date}
              </span>
              <h3 className="text-2xl text-brand-green my-3">{article.title}</h3>
              <p className="text-brand-green/70 mb-6">{article.excerpt}</p>
              <Link href="#" className="border-b border-brand-green pb-1 text-sm uppercase tracking-widest">
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}