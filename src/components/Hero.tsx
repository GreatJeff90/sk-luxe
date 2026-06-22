"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/hero.jpg",
    title: "Defined by Detail.",
    desc: "Timeless craft, modern soul. Experience the new collection.",
  },
  {
    image: "/hero-2.jpg",
    title: "Artisan Excellence.",
    desc: "Handcrafted quality designed for the modern lifestyle.",
  },
  {
    image: "/hero-3.jpg",
    title: "Timeless Elegance.",
    desc: "Elevating your wardrobe with essential luxury staples.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Slides change every 6 seconds
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-green/50" />

          {/* Text Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6 text-brand-cream">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-8xl font-serif mb-6 tracking-tight drop-shadow-md">
                {slides[index].title}
              </h1>
              <p className="text-lg md:text-xl mb-10 font-light tracking-wide opacity-90">
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