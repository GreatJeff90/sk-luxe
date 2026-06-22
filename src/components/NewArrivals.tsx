"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { id: 1, name: "Silk Evening Gown", price: "$1,200", tag: "New", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800" },
  { id: 2, name: "Leather Tote", price: "$850", tag: "Limited", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800" },
  { id: 3, name: "Gold Cuff", price: "$400", tag: "New", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce878?q=80&w=800" },
  { id: 4, name: "Cashmere Knit", price: "$600", tag: "New", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800" },
  { id: 5, name: "Suede Loafers", price: "$550", tag: "Classic", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800" },
  { id: 6, name: "Silk Scarf", price: "$290", tag: "New", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800" },
  { id: 7, name: "Wool Overcoat", price: "$1,500", tag: "Limited", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" },
  { id: 8, name: "Statement Ring", price: "$900", tag: "New", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" },
  { id: 9, name: "Leather Belt", price: "$350", tag: "Essential", img: "https://images.unsplash.com/photo-1624222244084-486955743d4d?q=80&w=800" },
];

export default function NewArrivals() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-brand-green uppercase tracking-widest font-light mb-16 text-center">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
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
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg text-brand-green font-medium">{product.name}</h3>
                  <span className="text-sm text-brand-green/60">{product.tag}</span>
                </div>
                <span className="text-lg text-brand-green font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}