"use client";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Tracksuits", "Apparel", "Trousers", "Jackets"];

export default function Categories() {
  const [active, setActive] = useState("All");

  return (
    <section className="py-8 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Horizontal scroll container with increased padding and text size for all screens */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Link
              href={`/shop/${cat.toLowerCase()}`}
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                px-8 py-3 rounded-full text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-all duration-300
                ${active === cat 
                  ? "bg-black text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
              `}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}