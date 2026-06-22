"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const trendingProducts = [
  { id: 1, name: "Midnight Blazer", price: "$950", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800" },
  { id: 2, name: "Silk Scarf", price: "$250", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800" },
  { id: 3, name: "Minimalist Watch", price: "$1,200", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800" },
  { id: 4, name: "Leather Loafers", price: "$650", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800" },
  // { id: 5, name: "Gold Cuff", price: "$400", img: "https://images.unsplash.com/photo-1599643478518-a854e5da4cfa?q=80&w=800" },
  { id: 6, name: "Cashmere Knit", price: "$600", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800" },
  { id: 7, name: "Silk Gown", price: "$1,200", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800" },
  { id: 8, name: "Statement Ring", price: "$900", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" },
  { id: 9, name: "Italian Briefcase", price: "$1,100", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800" },
  { id: 10, name: "Wool Overcoat", price: "$1,500", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" },
  // { id: 11, name: "Leather Belt", price: "$350", img: "https://images.unsplash.com/photo-1624222244084-486955743d4d?q=80&w=800" },
  // { id: 12, name: "Suede Gloves", price: "$280", img: "https://images.unsplash.com/photo-1601053075191-23700b656755?q=80&w=800" },
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
                <Image 
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
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