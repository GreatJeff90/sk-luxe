"use client";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <>
      {/* <Navbar /> */}
      
      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>

          {wishlist.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
              <p className="text-gray-500 mb-6">Your wishlist is empty</p>
              <Link href="/" className="bg-black text-white px-8 py-3 rounded-xl text-sm font-medium">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map((product) => (
                <div key={product.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-20 h-24 relative rounded-xl overflow-hidden bg-gray-100">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{product.name}</h3>
                    <p className="text-sm font-bold mt-1">₦{product.price.toLocaleString()}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => addToCart({ ...product, id: Number(product.id) }, "Default")}
                      className="p-2 text-black hover:bg-gray-100 rounded-lg transition"
                    >
                      <ShoppingCart size={18} />
                    </button>
                    <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer: Hidden on mobile (default), visible on large screens (lg:block) */}
      <div className="hidden lg:block">
        {/* <Footer /> */}
      </div>
    </>
  );
}