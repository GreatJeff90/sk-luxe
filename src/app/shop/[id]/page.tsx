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
  const [mainImage, setMainImage] = useState("");

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div className="py-20 text-center">Product not found</div>;

  // Use the main image initially, then allow clicking thumbnails
  const displayImage = mainImage || product.image;

  return (
    <main className="bg-white dark:bg-black min-h-screen py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Gallery Section */}
        <div className="flex flex-col gap-4">
          <div className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 relative rounded-3xl overflow-hidden shadow-sm">
            <Image src={displayImage} alt={product.name} fill className="object-cover" priority />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {product.images?.map((img: string, idx: number) => (
              <button key={idx} onClick={() => setMainImage(img)} className="aspect-square bg-gray-100 relative rounded-xl overflow-hidden border-2 border-transparent hover:border-black dark:hover:border-white">
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{product.name}</h1>
          <p className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">₦{product.price.toLocaleString()}</p>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {product.description || "Sophisticated design meets premium craftsmanship. Built for those who demand excellence in every detail."}
          </p>

          <div className="mb-10">
            <p className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-500">Select size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-8 py-3 border rounded-full transition-all dark:text-white ${
                    selectedSize === size 
                      ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black" 
                      : "border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => addToCart(product, selectedSize || product.sizes[0])}
            className="w-full md:w-auto bg-black dark:bg-white text-white dark:text-black py-4 px-12 rounded-full font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}