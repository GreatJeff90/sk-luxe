"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products"; // Adjust path if necessary

export default function NewArrivals() {
  // We take the first 3 products to display as "New Arrivals"
  const newArrivals = products.slice(0, 3);

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-brand-green uppercase tracking-widest font-light mb-16 text-center">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {newArrivals.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-brand-green/5 mb-6 overflow-hidden relative">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg text-brand-green font-medium">{product.name}</h3>
                  <span className="text-sm text-brand-green/60 uppercase tracking-wider text-[10px]">New Collection</span>
                </div>
                <span className="text-lg text-brand-green font-medium">₦{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}