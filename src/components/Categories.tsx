"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shirt, 
  Waves, 
  Wind, 
  Tag, 
  ArrowRight 
} from "lucide-react";

// Updated to match the 4 main inventory categories
const categories = [
  { name: "Tracksuits", icon: Shirt },
  { name: "Apparel", icon: Tag },
  { name: "Trousers", icon: Waves },
  { name: "Jackets", icon: Wind },
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
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicating the array to ensure smooth infinite loop */}
          {[...categories, ...categories, ...categories, ...categories].map((cat, index) => (
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