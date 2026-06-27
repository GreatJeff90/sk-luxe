import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-green/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo and Text */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="SK LUXE Logo" 
            width={48}   // Increased from 32
            height={48}  // Increased from 32
            className="w-12 h-12 object-contain" // Increased from w-8 h-8
          />
          <span className="text-2xl font-bold text-brand-green tracking-tighter">SK LUXE</span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-brand-green uppercase tracking-widest text-xs font-medium">
          <Link href="/shop" className="hover:text-brand-green/60 transition">Shop</Link>
          <Link href="/blog" className="hover:text-brand-green/60 transition">Journal</Link>
          <Link href="/collections" className="hover:text-brand-green/60 transition">Collections</Link>
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-5 text-brand-green">
          <Link href="/login" className="text-xs uppercase tracking-widest">Login</Link>
          <Search size={20} className="cursor-pointer hover:opacity-60 transition" />
          <ShoppingBag size={20} className="cursor-pointer hover:opacity-60 transition" />
        </div>
      </div>
    </nav>
  );
}