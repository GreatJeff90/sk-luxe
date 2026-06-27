"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { ShoppingBag } from "lucide-react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Product Image */}
          <div className="aspect-[3/4] bg-brand-green/5 relative overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green/50">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-serif text-brand-green mt-2">{product.name}</h1>
              <p className="text-2xl text-brand-green/80 mt-4">₦{product.price.toLocaleString()}</p>
            </div>

            {/* Size Selector */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-green mb-4">Select Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border transition-all ${selectedSize === size ? "border-brand-green bg-brand-green text-brand-cream" : "border-brand-green/20 hover:border-brand-green"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <button className="w-full md:w-auto px-12 py-4 bg-brand-green text-brand-cream uppercase tracking-widest text-xs font-bold hover:opacity-90 transition flex items-center justify-center gap-3">
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            {/* Description */}
            <div className="border-t border-brand-green/10 pt-8">
              <h4 className="text-sm font-bold text-brand-green uppercase mb-2">Product Details</h4>
              <p className="text-brand-green/70 text-sm leading-relaxed">
                Handcrafted with premium materials, this piece reflects the core of SK Luxe. Designed for a tailored fit and everyday comfort.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}