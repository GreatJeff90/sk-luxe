"use client";
import { notFound } from "next/navigation";
import React, { use, useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Params = Promise<{ id: string }>;

export default function ProductDetail({ params }: { params: Params }) {
  const { id } = use(params);
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="aspect-[3/4] bg-brand-green/5 relative overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>

          {/* Details */}
          <div className="space-y-8">
            <h1 className="text-4xl text-brand-green">{product.name}</h1>
            <p className="text-2xl text-brand-green/80">₦{product.price.toLocaleString()}</p>
            
            {/* Size Select */}
            <div className="flex gap-2">
              {product.sizes.map((s) => (
                <button key={s} onClick={() => setSelectedSize(s)} className={`px-4 py-2 border ${selectedSize === s ? "bg-brand-green text-white" : "border-brand-green"}`}>
                  {s}
                </button>
              ))}
            </div>

            <button 
              onClick={() => addToCart(product, selectedSize)}
              className="w-full py-4 bg-brand-green text-white uppercase"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}