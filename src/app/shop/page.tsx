"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [size, setSize] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSize = size === "All" || p.sizes.includes(size);
      const matchesPrice = p.price <= maxPrice;
      return matchesCategory && matchesSize && matchesPrice;
    });
  }, [category, size, maxPrice]);

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-48 space-y-10 flex-shrink-0">
          <div>
            <h3 className="uppercase text-[10px] tracking-[0.2em] mb-4 text-brand-green/50 font-bold">Category</h3>
            {["All", "Tracksuits", "Apparel", "Trousers", "Jackets"].map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)} className={`block text-sm py-1 transition ${category === cat ? "text-brand-green underline" : "text-brand-green/60 hover:text-brand-green"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div>
            <h3 className="uppercase text-[10px] tracking-[0.2em] mb-4 text-brand-green/50 font-bold">Max Price: ₦{maxPrice.toLocaleString()}</h3>
            <input type="range" min="20000" max="100000" step="5000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-brand-green h-1 bg-brand-green/20" />
          </div>

          <div>
            <h3 className="uppercase text-[10px] tracking-[0.2em] mb-4 text-brand-green/50 font-bold">Size</h3>
            <div className="flex flex-wrap gap-2">
              {["All", "XL", "2XL", "3XL"].map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`px-3 py-1 border text-[10px] uppercase tracking-widest transition ${size === s ? "border-brand-green bg-brand-green text-brand-cream" : "border-brand-green/20 text-brand-green hover:border-brand-green"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((p) => (
            <Link href={`/shop/${p.id}`} key={p.id} className="group">
              <div className="aspect-[3/4] bg-brand-green/5 overflow-hidden mb-6 relative">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-brand-green font-medium mb-1">{p.name}</h3>
              <p className="text-brand-green/60 text-sm">₦{p.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}