"use client";
import { useCart } from "@/context/CartContext";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="bg-brand-cream min-h-screen">
      {/* <Navbar /> */}

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl text-brand-green uppercase tracking-widest font-light mb-12">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Shipping Form */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest">Shipping Details</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 bg-transparent border border-brand-green/20 focus:border-brand-green outline-none" />
              <input type="text" placeholder="Delivery Address" className="w-full p-3 bg-transparent border border-brand-green/20 focus:border-brand-green outline-none" />
              <input type="text" placeholder="Phone Number" className="w-full p-3 bg-transparent border border-brand-green/20 focus:border-brand-green outline-none" />
            </div>
          </section>

          {/* Order Summary */}
          <section className="bg-brand-green/5 p-8">
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm text-brand-green/80">
                  <span>{item.name} (x1)</span>
                  <span>₦{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-brand-green/20 pt-4 flex justify-between font-bold text-brand-green">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            
            <button className="w-full mt-8 py-4 bg-brand-green text-brand-cream uppercase tracking-widest font-bold hover:opacity-90 transition">
              Complete Order
            </button>
          </section>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
}