"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products"; // Importing your central data source

export default function NewArrivals() {
  // Taking the first 3 products from your central data file
  const displayProducts = products.slice(0, 9);

  return (
    <section className="relative py-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/model3.jpeg" 
          alt="Background" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl text-white uppercase tracking-[0.2em] font-light">
            Our Store
          </h2>
          <button className="text-white border-b border-white uppercase tracking-widest text-xs pb-1 hover:opacity-70 transition">
            See More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-4 group"
            >
              <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden relative">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-sm uppercase tracking-widest font-medium text-black">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Silent King Luxury
                </p>
                <p className="text-sm font-bold text-black pt-2">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}