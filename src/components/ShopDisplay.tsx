"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { Heart, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

const categories = ["All", "Tracksuits", "Apparel", "Trousers", "Jackets"];

export default function ShopDisplay() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isWishlisted = (id: string | number) => wishlist.some((item) => item.id === id);

  const filteredProducts = useMemo(() => {
    return activeCategory === "All" 
      ? products 
      : products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Categories Nav: Scrollable on small screens */}
        <div className="flex gap-3 overflow-x-auto pb-8 scrollbar-hide justify-start md:justify-center mb-8 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const inWishlist = isWishlisted(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-4 group border border-gray-50 flex flex-col"
              >
                {/* Wrapped in Link for dynamic product pages */}
                <Link href={`/shop/${product.id}`} className="block">
                  <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden relative">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1 mb-4">
                    <h3 className="text-sm uppercase tracking-widest font-medium text-black">{product.name}</h3>
                    <p className="text-sm font-bold text-black">₦{product.price.toLocaleString()}</p>
                  </div>
                </Link>
                
                {/* Actions outside of Link to prevent navigation when clicking buttons */}
                <div className="flex gap-2 mt-auto">
                    <button 
                      onClick={(e) => { e.preventDefault(); inWishlist ? removeFromWishlist(product.id) : addToWishlist(product); }}
                      className={`p-2 flex-1 border rounded-lg transition ${inWishlist ? "border-red-500 text-red-500" : "border-gray-200 text-black hover:bg-gray-50"}`}
                    >
                      <Heart size={18} fill={inWishlist ? "currentColor" : "none"} className="mx-auto" />
                    </button>
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart({ ...product, id: Number(product.id) }, "Default"); }}
                      className="p-2 flex-[2] bg-black text-white rounded-lg hover:bg-gray-800 transition text-xs uppercase"
                    >
                      Add to Cart
                    </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}