"use client";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link"; // FIXED IMPORT

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl text-brand-green uppercase tracking-widest font-light mb-12">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-brand-green/60">Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {cart.map((item, index) => (
              <div key={index} className="flex gap-6 border-b border-brand-green/10 pb-8">
                <div className="w-24 h-32 bg-brand-green/5 relative overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-brand-green font-medium">{item.name}</h3>
                  <p className="text-sm text-brand-green/60">Size: {item.selectedSize}</p>
                  <p className="text-brand-green font-bold mt-2">₦{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-8">
              <span className="text-xl text-brand-green uppercase tracking-widest">Total</span>
              <span className="text-2xl text-brand-green font-bold">₦{total.toLocaleString()}</span>
            </div>

            <Link href="/checkout" className="block w-full mt-8 py-4 bg-brand-green text-brand-cream uppercase tracking-widest font-bold text-center hover:opacity-90 transition">
              Checkout
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}