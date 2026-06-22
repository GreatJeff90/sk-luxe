"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Watch, 
  ShoppingBag, 
  Shirt, 
  Gem, 
  GlassWater, 
  Briefcase, 
  ArrowRight 
} from "lucide-react";

const categories = [
  { name: "Watches", icon: Watch },
  { name: "Apparel", icon: Shirt },
  { name: "Accessories", icon: ShoppingBag },
  { name: "Jewelry", icon: Gem },
  { name: "Fragrance", icon: GlassWater },
  { name: "Leather", icon: Briefcase },
];

export default function Categories() {
  return (
    <section className="py-24 overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl text-brand-green uppercase tracking-widest font-light">
          Shop by Collection
        </h2>
      </div>

      {/* Auto-sliding container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...categories, ...categories].map((cat, index) => (
            <Link 
              href={`/shop/${cat.name.toLowerCase()}`} 
              key={index} 
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 bg-brand-green/5 border border-brand-green/10 flex flex-col items-center justify-center gap-6 hover:bg-brand-green/10 transition-colors group">
                <cat.icon size={48} className="text-brand-green/40 group-hover:text-brand-green transition-colors" />
                <div className="text-center">
                  <h3 className="text-lg text-brand-green uppercase tracking-widest font-medium">
                    {cat.name}
                  </h3>
                  <ArrowRight size={16} className="mx-auto mt-4 text-brand-green/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}