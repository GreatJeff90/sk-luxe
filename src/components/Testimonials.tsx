// src/components/Testimonials.tsx
"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The craftsmanship and attention to detail at SK Luxe are truly unmatched in today's market.",
    name: "Elena Richardson",
  },
  {
    quote: "A seamless experience from start to finish. My pieces arrived beautifully packaged and perfectly crafted.",
    name: "Marcus Thorne",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream border-t border-brand-green/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-brand-green/60 mb-12">
          From Our Clients
        </h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {testimonials.map((t, index) => (
            <div key={index} className="relative">
              <Quote className="mx-auto text-brand-green/20 mb-6" size={40} />
<p className="text-2xl md:text-3xl font-light text-brand-green italic mb-4">
  &ldquo;{t.quote}&rdquo;
</p>
              <cite className="text-sm uppercase tracking-widest text-brand-green/60 not-italic">
                — {t.name}
              </cite>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}