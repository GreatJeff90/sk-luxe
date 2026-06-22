// src/components/Trending.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const trendingProducts = [
  { id: 1, name: "Midnight Blazer", price: "$950" },
  { id: 2, name: "Silk Scarf", price: "$250" },
  { id: 3, name: "Minimalist Watch", price: "$1,200" },
  { id: 4, name: "Leather Loafers", price: "$650" },
];

export default function Trending() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl text-brand-green uppercase tracking-widest font-light">
            Trending Now
          </h2>
          <Link href="/shop" className="text-brand-green border-b border-brand-green pb-1 text-sm uppercase tracking-widest">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-brand-green/5 mb-4 overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-brand-green/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-brand-green text-brand-cream px-2 py-1 text-[10px] uppercase tracking-widest">
                  Trending
                </div>
              </div>
              <h3 className="text-brand-green text-sm">{product.name}</h3>
              <p className="text-brand-green/70 text-sm">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}