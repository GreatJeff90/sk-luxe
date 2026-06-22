import Link from 'next/link';
import { ShoppingBag, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-green/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-green tracking-tighter">SK LUXE</Link>
        
        <div className="hidden md:flex gap-8 text-brand-green uppercase tracking-widest text-xs font-medium">
          <Link href="/shop" className="hover:text-brand-green/60 transition">Shop</Link>
          <Link href="/blog" className="hover:text-brand-green/60 transition">Blog</Link>
          <Link href="/collections" className="hover:text-brand-green/60 transition">Collections</Link>
        </div>

        <div className="flex items-center gap-6 text-brand-green">
          <Link href="/login" className="text-xs uppercase tracking-widest hidden md:block">Login</Link>
          <Search size={20} className="cursor-pointer" />
          <ShoppingBag size={20} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}