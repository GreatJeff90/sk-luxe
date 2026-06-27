"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/model1.jpeg",
    title: "Defined by Detail.",
    desc: "Timeless craft, modern soul.",
  },
  {
    image: "/model2.jpeg",
    title: "Artisan Excellence.",
    desc: "Handcrafted quality designed for life.",
  },
  {
    image: "/model3.jpeg",
    title: "Timeless Elegance.",
    desc: "Elevating your wardrobe staples.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-green">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[index].image}
            alt="Luxury background"
            fill
            priority
            className="object-cover opacity-60"
          />
          
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-transparent" />

          {/* Text Content - Aligned Left like image_9d18e1.jpg */}
          <div className="relative z-10 h-full flex items-end md:items-center px-8 md:px-24 pb-24 md:pb-0 text-brand-cream">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 mb-6 border border-brand-cream/30 text-xs uppercase tracking-[0.2em]"
              >
                New Collection 2026
              </motion.span>
              
              <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter">
                {slides[index].title}
              </h1>
              
              <p className="text-lg md:text-2xl mb-10 font-light opacity-90 max-w-md">
                {slides[index].desc}
              </p>
              
              <button className="bg-brand-cream text-brand-green px-10 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors duration-300">
                Explore Collection
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}