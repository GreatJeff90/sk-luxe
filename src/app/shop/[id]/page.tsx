"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CartItem } from "@/types/index";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div className="py-20 text-center">Product not found</div>;

  const displayImage = mainImage || product.image;
  const images = product.images || [product.image];

  const handleAddToCart = () => {
  const size = selectedSize || product.sizes[0];
  const color = selectedColor || (product.colors && product.colors.length > 0 ? product.colors[0] : "Default");
  
  // Explicitly type the constant as CartItem
  const cartItem: CartItem = {
    ...product,
    selectedSize: size,
    selectedColor: color
  };

  // TypeScript and ESLint will now be satisfied without 'as any'
  addToCart(cartItem, size);
};

  return (
    <main className="bg-white dark:bg-black min-h-screen py-20 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Gallery Section */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => setModalIndex(images.indexOf(displayImage))}
            className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 relative rounded-3xl overflow-hidden shadow-sm cursor-zoom-in"
          >
            <Image src={displayImage} alt={product.name} fill className="object-cover" priority />
          </button>
          
          <div className="grid grid-cols-4 gap-4">
            {images.map((img: string, idx: number) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(img)} 
                className="aspect-square bg-gray-100 relative rounded-xl overflow-hidden border-2 border-transparent hover:border-black dark:hover:border-white transition"
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{product.name}</h1>
          <p className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">₦{product.price.toLocaleString()}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-500">Select size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button 
                  key={size} 
                  onClick={() => setSelectedSize(size)} 
                  className={`px-8 py-3 border rounded-full transition-all dark:text-white ${selectedSize === size ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black" : "border-gray-200 dark:border-gray-700"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          {"colors" in product && product.colors && (
            <div className="mb-10">
              <p className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-500">Select color</p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button 
                    key={color} 
                    onClick={() => setSelectedColor(color)} 
                    className={`px-8 py-3 border rounded-full transition-all dark:text-white ${selectedColor === color ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black" : "border-gray-200 dark:border-gray-700"}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button onClick={handleAddToCart} className="w-full md:w-auto bg-black dark:bg-white text-white dark:text-black py-4 px-12 rounded-full font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Modal Slider */}
      {modalIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button onClick={() => setModalIndex(null)} className="absolute top-6 right-6 text-white"><X size={32} /></button>
          <button onClick={() => setModalIndex(modalIndex > 0 ? modalIndex - 1 : images.length - 1)} className="absolute left-4 text-white"><ChevronLeft size={40} /></button>
          <div className="relative w-full max-w-2xl aspect-[4/5]">
            <Image src={images[modalIndex]} alt="Full view" fill className="object-contain" />
          </div>
          <button onClick={() => setModalIndex(modalIndex < images.length - 1 ? modalIndex + 1 : 0)} className="absolute right-4 text-white"><ChevronRight size={40} /></button>
        </div>
      )}
    </main>
  );
}