"use client";
import { useCart } from "@/context/CartContext";
import { useMemo } from "react"; // Added this import
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  
  // Calculate total price accurately
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl text-black uppercase tracking-widest font-light mb-12">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">Your cart is empty.</p>
            <Link href="/shop" className="text-black underline mt-4 inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 border-b border-gray-100 pb-8 relative">
                <div className="w-24 h-32 bg-gray-100 relative overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-black font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                  <p className="text-black font-bold mt-2">₦{item.price.toLocaleString()}</p>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="absolute top-0 right-0 p-2 text-gray-400 hover:text-black transition"
                  title="Remove item"
                >
                  <X size={20} />
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center pt-8 border-t border-black">
              <span className="text-xl text-black uppercase tracking-widest">Total</span>
              <span className="text-2xl text-black font-bold">₦{total.toLocaleString()}</span>
            </div>

            <Link 
              href="/checkout" 
              className="block w-full mt-8 py-4 bg-black text-white uppercase border rounded-full tracking-widest font-bold text-center hover:bg-gray-800 transition"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}