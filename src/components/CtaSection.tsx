"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="py-24 px-6 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text & Input */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl text-brand-green font-serif mb-6 leading-tight">
            Join the Inner Circle
          </h2>
          <p className="text-brand-green/70 mb-10 text-lg max-w-md">
            Receive early access to new collections, private event invitations, and curated style guides.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border border-brand-green/30 text-brand-green px-6 py-4 outline-none focus:border-brand-green transition-colors w-full sm:w-80"
            />
            <button className="bg-brand-green text-brand-cream px-8 py-4 hover:bg-brand-green/90 transition-colors uppercase tracking-widest text-sm font-medium">
              Join Now
            </button>
          </div>
        </motion.div>

        {/* Right: Collage Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] hidden lg:block"
        >
          <div className="absolute top-0 right-0 w-48 h-64 bg-brand-green/10 overflow-hidden shadow-lg">
             <Image src="/model2.jpeg" alt="Style" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-20 w-40 h-40 bg-brand-green/20 overflow-hidden shadow-lg">
             <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600" alt="Details" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}