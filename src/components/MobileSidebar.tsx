"use client";
import Link from 'next/link';
import Image from 'next/image';
import { X, Home, Grid, List, BookOpen, Star, ShoppingCart, User, Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle'; // Import the toggle

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Products', icon: Grid, href: '/products' },
    { name: 'Categories', icon: List, href: '/categories' },
    { name: 'Shop', icon: BookOpen, href: '/shop' },
    { name: 'Featured', icon: Star, href: '/featured' },
    { name: 'Wishlist', icon: Heart, href: '/wishlist' },
    { name: 'My Cart', icon: ShoppingCart, href: '/cart' },
    { name: 'Profile', icon: User, href: '/profile' },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-[100]" onClick={onClose} />}
      
      {/* Sidebar Panel */}
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-[101] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b">
          <Image src="/logo-.png" alt="Silent King Logo" width={80} height={40} className="object-contain" />
          <button onClick={onClose}><X size={24} /></button>
        </div>
        
        {/* Menu Items */}
        <div className="flex-1 py-4 overflow-y-auto">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={onClose} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 uppercase tracking-widest text-sm font-medium">
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Footer with Dark Mode Toggle */}
        <div className="mt-auto border-t">
          <div className="px-6 py-4 flex items-center justify-between uppercase tracking-widest text-sm font-bold">
            Dark Mode
            <ThemeToggle />
          </div>
          <div className="p-6 border-t text-center text-xs text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Silent King Luxury
          </div>
        </div>
      </div>
    </>
  );
}