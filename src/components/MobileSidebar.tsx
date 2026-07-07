"use client";
import Link from 'next/link';
import Image from 'next/image';
import { X, Home, Grid, List, BookOpen, Star, ShoppingCart, User, Heart, Moon } from 'lucide-react';
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { ThemeToggle } from './ThemeToggle';

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
      
      {/* Sidebar Panel - Added dark:bg-black and dark:text-white */}
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white dark:bg-black text-black dark:text-white z-[101] transform transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b dark:border-gray-800 shrink-0">
          <Image src="/logo-.png" alt="Silent King Logo" width={80} height={40} className="object-contain dark:invert" />
          <button onClick={onClose}><X size={24} /></button>
        </div>
        
        {/* Content Area */}
        <div className="py-4">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Link 
                href={item.href} 
                onClick={onClose} 
                className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 uppercase tracking-widest text-sm font-medium transition-colors"
              >
                <item.icon size={20} />
                {item.name}
              </Link>
              
              {/* Theme Toggle placed specifically after the Profile link */}
              {item.name === 'Profile' && (
                <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 uppercase tracking-widest text-sm font-medium transition-colors mt-2">
                  <div className="flex items-center gap-4">
                    <Moon size={20} />
                    Dark Mode
                  </div>
                  <ThemeToggle />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 space-y-6">
          <div className="space-y-2">
            <Image src="/logo-.png" alt="Silent King Logo" width={60} height={30} className="object-contain opacity-70 dark:invert" />
            <p className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-relaxed">
              Defining modern luxury through meticulous craftsmanship and editorial design.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400">
             <FiInstagram size={18} />
             <FiTwitter size={18} />
             <FiFacebook size={18} />
          </div>

          <div className="text-[9px] text-gray-400 uppercase tracking-widest text-center">
            &copy; {new Date().getFullYear()} Silent King Luxury
          </div>
        </div>
      </div>
    </>
  );
}