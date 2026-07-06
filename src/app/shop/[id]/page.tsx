"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div className="py-20 text-center">Product not found</div>;

  return (
    <main className="bg-white min-h-screen py-12 pb-24 md:py-20">
      {/* Container with increased max-width for desktop */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        
        {/* Product Image */}
        <div className="aspect-[4/5] bg-gray-100 relative rounded-3xl overflow-hidden shadow-sm">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col pt-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-8 text-gray-700">₦{product.price.toLocaleString()}</p>

          {/* Size Selector */}
          <div className="mb-10">
            <p className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-500">Select size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-8 py-3 border rounded-full transition-all ${
                    selectedSize === size 
                      ? "border-black bg-black text-white" 
                      : "border-gray-200 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={() => addToCart(product, selectedSize || product.sizes[0])}
            className="w-full md:w-auto bg-black text-white py-4 px-12 rounded-full font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}