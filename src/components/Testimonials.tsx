"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Removed 'Quote' as it was unused

const testimonials = [
  {
    quote: "The craftsmanship and attention to detail at SK Luxe are truly unmatched in today's market.",
    name: "Elena Richardson",
    role: "Creative Director"
  },
  {
    quote: "A seamless experience from start to finish. My pieces arrived beautifully packaged and perfectly crafted.",
    name: "Marcus Thorne",
    role: "Architect",
    featured: true,
  },
  {
    quote: "Luxury is in the details, and SK Luxe has mastered the art of elegant minimalism.",
    name: "Sofia Laurent",
    role: "Collector"
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-brand-green/60 uppercase tracking-[0.3em] text-xs mb-4">The Anthology</h3>
        <h2 className="text-4xl md:text-5xl text-brand-green font-serif mb-16">Real lives, beautifully rewritten.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl flex flex-col items-center text-center shadow-sm border ${
                t.featured 
                ? "bg-brand-green text-brand-cream border-brand-green" 
                : "bg-white text-brand-green border-brand-green/10"
              }`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => <Star key={index} size={14} fill="currentColor" className="text-brand-green/40" />)}
              </div>
              
              {/* Escaped quotes using &ldquo; and &rdquo; */}
              <p className="text-lg font-light italic mb-8 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.featured ? "bg-brand-cream/20" : "bg-brand-green/10"}`} />
                <div className="text-left">
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className={`text-[10px] uppercase tracking-widest ${t.featured ? "text-brand-cream/60" : "text-brand-green/50"}`}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}