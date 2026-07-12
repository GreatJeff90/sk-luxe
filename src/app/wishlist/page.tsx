"use client";
import { useState, useEffect } from "react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products"; 
import { CartItem } from "@/types/index";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <div className="min-h-screen flex items-center justify-center text-black">Loading...</div>;
  }

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const handleMoveToCart = (item: any) => {
  // 2. Explicitly construct the object to satisfy all 'Product' requirements
  const productWithAllFields: Product = {
    ...item,
    description: item.description || "No description available", // Ensure this exists
    sizes: item.sizes || [],
    category: item.category || "Uncategorized"
  };

  const cartItem: CartItem = {
    ...productWithAllFields,
    selectedSize: productWithAllFields.sizes[0] || "XL",
    selectedColor: productWithAllFields.colors?.[0] || "Default",
  };

  addToCart(cartItem, cartItem.selectedSize);
};

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl uppercase tracking-widest font-light mb-12 text-black">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 border border-gray-100 rounded-2xl">
            <p className="text-gray-500 mb-6">Your wishlist is empty</p>
            <Link href="/" className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {wishlist.map((product) => (
              <div key={product.id} className="flex items-center gap-6 p-4 border border-gray-100 rounded-2xl hover:border-black transition-colors duration-300">
                <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-gray-50">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-black uppercase text-sm tracking-wide">{product.name}</h3>
                  <p className="text-sm font-bold text-black mt-1">₦{product.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleMoveToCart(product)}
                    className="p-3 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-colors"
                    title="Add to Cart"
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-3 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors"
                    title="Remove"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}