"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, User, Home, Heart, List, Menu } from 'lucide-react';
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
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* TOP NAV */}
      <nav className="sticky top-0 z-50 bg-black text-white p-4">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => setIsSidebarOpen(true)} className="md:hidden"><Menu size={24} /></button>
          
          <Link href="/" className="flex items-center">
            <Image src="/logo-.png" alt="Silent King Logo" width={80} height={40} className="object-contain brightness-0 invert" />
          </Link>

          <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-400">
            <Link href="/shop" className="hover:text-white">Collections</Link>
            <Link href="/wishlist" className="hover:text-white">Wishlist</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href={isLoggedIn ? "/profile" : "/login"}><User size={20} /></Link>
            <Link href="/cart" className="relative">
              <ShoppingBag size={20} />
              {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{cart.length}</span>}
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white border border-gray-200 rounded-full shadow-lg px-6 py-3 flex items-center justify-between text-gray-600">
        <Link href="/" className="flex flex-col items-center text-[10px]"><Home size={18} /> Home</Link>
        <Link href="/shop" className="flex flex-col items-center text-[10px]"><List size={18} /> Shop</Link>
        <Link href="/cart" className="bg-black text-white p-3 rounded-full -mt-8 shadow-xl"><ShoppingBag size={20} /></Link>
        <Link href="/wishlist" className="flex flex-col items-center text-[10px]"><Heart size={18} /> Wishlist</Link>
        <Link href={isLoggedIn ? "/profile" : "/login"} className="flex flex-col items-center text-[10px]"><User size={18} /> Profile</Link>
      </div>
    </>
  );
}