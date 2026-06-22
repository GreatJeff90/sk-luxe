"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featured = [
  { id: 1, title: "The Art of Silk", date: "June 15, 2026", excerpt: "Exploring the delicate craftsmanship behind our signature evening wear.", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800" },
  { id: 2, title: "Summer Minimalism", date: "June 02, 2026", excerpt: "A guide to curating a timeless capsule wardrobe for the warmer months.", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800" },
];

const sidebar = [
  { id: 3, title: "Modern Horology", author: "Elena R." },
  { id: 4, title: "Leather Care 101", author: "Marcus T." },
  { id: 5, title: "The Quiet Luxury", author: "Sofia L." },
];

export default function Journal() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-brand-green uppercase tracking-widest font-light mb-16 text-center">
          The Journal
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Articles */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((post) => (
              <motion.div key={post.id} whileHover={{ y: -5 }} className="group">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative aspect-[4/3] bg-brand-green/5 mb-6 overflow-hidden">
                    <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green/50">{post.date}</span>
                  <h3 className="text-xl text-brand-green my-2">{post.title}</h3>
                  <p className="text-brand-green/70 text-sm mb-4">{post.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <h4 className="text-sm uppercase tracking-widest text-brand-green border-b border-brand-green/20 pb-4">Most Popular</h4>
            {sidebar.map((item) => (
              <Link key={item.id} href={`/blog/${item.id}`} className="flex gap-4 items-center group cursor-pointer block">
                <div className="w-20 h-20 bg-brand-green/5 flex-shrink-0" />
                <div>
                  <h5 className="text-sm text-brand-green group-hover:underline">{item.title}</h5>
                  <span className="text-[10px] text-brand-green/50 uppercase">{item.author}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}