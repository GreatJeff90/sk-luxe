"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Importing your existing components
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Silk",
    date: "June 15, 2026",
    excerpt: "Exploring the delicate craftsmanship behind our signature evening wear.",
    category: "Craftsmanship",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200",
  },
  {
    id: 2,
    title: "Summer Minimalism",
    date: "June 02, 2026",
    excerpt: "A guide to curating a timeless capsule wardrobe.",
    category: "Style",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1200",
  },
  {
    id: 3,
    title: "Modern Horology",
    date: "May 28, 2026",
    excerpt: "Why the classic watch remains the ultimate luxury staple.",
    category: "Accessories",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-brand-cream">
      <Navbar />

      {/* Journal Content */}
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green mb-6">The Journal</h1>
            <p className="text-brand-green/70 text-lg max-w-lg">
              Curated stories on design, craftsmanship, and the lifestyle of SK Luxe.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <motion.div 
                key={post.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                {/* 
                  The Link here correctly wraps the image and title area 
                  to ensure the user navigates to /blog/1, /blog/2, etc.
                */}
                <Link href={`/blog/${post.id}`}>
                  <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-brand-green/5">
                    <Image 
                      src={post.img} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green/50">
                      {post.category} • {post.date}
                    </span>
                    <h2 className="text-2xl text-brand-green font-medium">{post.title}</h2>
                    <p className="text-brand-green/70 text-sm leading-relaxed">{post.excerpt}</p>
                    <span className="inline-block border-b border-brand-green pb-1 text-[10px] uppercase tracking-widest mt-4">
                      Read More
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}