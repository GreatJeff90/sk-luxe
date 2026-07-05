"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Search, User, Home, Heart, List, Menu } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from 'react';
import { supabase } from "../lib/supabaseClient";
import MobileSidebar from './MobileSidebar';

export default function Navbar() {
  const { cart } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };
    checkUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setIsLoggedIn(!!session));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <MobileSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* TOP NAV */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 p-4">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => setIsSidebarOpen(true)} className="md:hidden"><Menu size={24} /></button>
          
          <Link href="/" className="flex items-center">
            <Image src="/logo-1.png" alt="Silent King Logo" width={60} height={40} className="object-contain" />
          </Link>

          <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/shop" className="hover:text-black">Shop</Link>
            <Link href="/collections" className="hover:text-black">Collections</Link>
            <Link href="/wishlist" className="hover:text-black">Wishlist</Link>
            <Link href="/profile" className="hover:text-black">Profile</Link>
          </div>

          <div className="flex items-center gap-4">
            <Search size={20} className="cursor-pointer" />
            <Link href="/cart" className="relative">
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white border border-gray-200 rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center text-xs"><Home size={20} /> Home</Link>
        <Link href="/categories" className="flex flex-col items-center text-xs"><List size={20} /> Categories</Link>
        <Link href="/cart" className="bg-black text-white p-4 rounded-full -mt-10 shadow-xl border-4 border-white">
          <ShoppingBag size={24} />
        </Link>
        <Link href="/wishlist" className="flex flex-col items-center text-xs"><Heart size={20} /> Wishlist</Link>
        <Link href={isLoggedIn ? "/profile" : "/login"} className="flex flex-col items-center text-xs"><User size={20} /> Profile</Link>
      </div>
    </>
  );
}