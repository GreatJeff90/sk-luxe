"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

const categories = ["All", "Tracksuits", "Tees", "Trousers", "Jackets", "Sleeveless"];

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
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Categories Nav */}
        <div className="flex gap-3 overflow-x-auto pb-8 scrollbar-hide justify-start md:justify-center mb-8 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-black dark:bg-white text-white dark:text-black" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {filteredProducts.map((product) => {
            const inWishlist = isWishlisted(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-gray-900 p-2 md:p-4 group border border-gray-50 dark:border-gray-800 flex flex-col"
              >
                <Link href={`/shop/${product.id}`} className="block">
                  <div className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 mb-4 overflow-hidden relative">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-0.5 mb-4">
                    <h3 className="text-[10px] md:text-sm uppercase tracking-widest font-medium text-black dark:text-white truncate">{product.name}</h3>
                    <p className="text-[10px] md:text-sm font-bold text-black dark:text-white">₦{product.price.toLocaleString()}</p>
                  </div>
                </Link>
                
                {/* Action Buttons */}
                <div className="flex gap-1 mt-auto">
                    <button 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        inWishlist ? removeFromWishlist(product.id) : addToWishlist(product); 
                      }}
                      className={`p-2 flex-1 border rounded-lg transition ${
                        inWishlist 
                          ? "border-red-500 text-red-500" 
                          : "border-gray-200 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <Heart size={16} fill={inWishlist ? "currentColor" : "none"} className="mx-auto" />
                    </button>
                    
                    <button
  onClick={(e) => {
    e.preventDefault();
    // Construct a full CartItem object
    addToCart({
      ...product,
      selectedSize: product.sizes[0] || "XL",
      selectedColor: product.colors?.[0] || "Default",
    }, product.sizes[0] || "XL"); // Ensure this matches your context signature
  }}
  className="p-2 flex-[2] bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition"
>
  Add
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