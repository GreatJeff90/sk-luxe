// src/components/CtaSection.tsx
"use client";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-24 px-6 bg-brand-green">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-brand-cream font-light mb-6 tracking-wide">
            Join the Inner Circle
          </h2>
          <p className="text-brand-cream/70 mb-10 text-lg">
            Receive early access to new collections, private event invitations, and curated style guides.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border border-brand-cream/30 text-brand-cream px-6 py-3 outline-none focus:border-brand-cream transition-colors w-full md:w-80"
            />
            <button className="bg-brand-cream text-brand-green px-8 py-3 hover:bg-white transition-colors uppercase tracking-widest text-sm font-medium">
              Join Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}