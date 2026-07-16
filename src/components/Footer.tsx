"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const images = ['/model3.jpeg', '/product16.jpeg', '/new-products/tracksuit7.jpg'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-black text-white pt-20 border-t border-zinc-900">
      {/* Fade-in Slider - Increased height for small screens */}
      <div className="relative w-full h-[400px] md:h-[500px] mb-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image 
              src={images[index]} 
              alt="Slider Image" 
              fill 
              className="object-cover opacity-60" 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 pb-20">
        
        {/* Brand Section - Centralized on small screens */}
        <div className="md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left space-y-6">
          <Link href="/" className="inline-block">
            <Image src="/logo-.png" alt="SK LUXE" width={100} height={40} className="brightness-0 invert" />
          </Link>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
            Silent Krown is a luxury streetwear brand built on quiet confidence. We create timeless pieces for people who believe success is earned through discipline, consistency, and purpose—not noise. Every collection reflects our philosophy: move with intention, stay true to yourself, and let your work speak.
            <br /><br />
            Move Silent. Wear the Krown.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/06.skluxe" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all">
              <FiInstagram size={18} />
            </a>
            <a href="https://tiktok.com/@skluxe06" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="md:col-span-7 grid grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              {['Home', 'Shop', 'Wishlist', 'Profile'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-white text-zinc-400 transition-colors underline-offset-4 hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>support@sk-luxe.com</li>
              <li>+234 812 372 0849</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-zinc-600">© {currentYear} SK LUXE. All rights reserved.</p>
      </div>
    </footer>
  );
}