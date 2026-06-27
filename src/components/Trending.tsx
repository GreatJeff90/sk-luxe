"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products"; // Importing from your data file

export default function Trending() {
  // Display a selection of your products (e.g., the first 8 items)
  const trendingProducts = products.slice(0, 8);

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl text-brand-green uppercase tracking-widest font-light">
            Trending Now
          </h2>
          <Link href="/shop" className="text-brand-green border-b border-brand-green pb-1 text-sm uppercase tracking-widest hover:opacity-60 transition">
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
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-green text-brand-cream px-2 py-1 text-[10px] uppercase tracking-widest">
                  Trending
                </div>
              </div>
              <h3 className="text-brand-green text-sm">{product.name}</h3>
              <p className="text-brand-green/70 text-sm">₦{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}