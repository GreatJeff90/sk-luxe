"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient"; // Import missing supabase
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define a type for your cart items
interface CartItem {
  id: number;
  name: string;
  price: number;
}

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({ name: "", address: "", phone: "", email: "" });

  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email || "customer@example.com",
    amount: total * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY || 'pk_test_your_key_here',
  };

  const initializePayment = usePaystackPayment(config);

  const saveOrderToDatabase = async (cartItems: CartItem[], totalAmount: number, userId: string) => {
    const { error } = await supabase
      .from("orders")
      .insert([
        { 
          user_id: userId, 
          total_amount: totalAmount, 
          items: cartItems 
        }
      ]);

    if (error) {
      console.error("Error saving order:", error.message);
    } else {
      console.log("Order saved successfully!");
    }
  };

  const handleCheckout = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill in all shipping details.");
      return;
    }

    if (paymentMethod === "card") {
      initializePayment({
        onSuccess: async () => {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            await saveOrderToDatabase(cart as CartItem[], total, user.id);
          }
          router.push("/order-success");
        },
        onClose: () => console.log("Payment cancelled."),
      });
    } else {
      alert("Order placed! Please transfer ₦" + total.toLocaleString() + " to SK LUXE, Zenith Bank, 1234567890.");
      router.push("/order-success");
    }
  };

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl text-brand-green uppercase tracking-widest font-light mb-12">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-16">
          <section className="space-y-6">
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest">Shipping Details</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 bg-transparent border border-brand-green/20 outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email" className="w-full p-3 bg-transparent border border-brand-green/20 outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input type="text" placeholder="Delivery Address" className="w-full p-3 bg-transparent border border-brand-green/20 outline-none" onChange={(e) => setFormData({...formData, address: e.target.value})} />
              <input type="text" placeholder="Phone Number" className="w-full p-3 bg-transparent border border-brand-green/20 outline-none" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
          </section>

          <section className="bg-brand-green/5 p-8 h-fit">
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-6">Payment Method</h2>
            <div className="space-y-3 mb-8">
              <label className="flex items-center gap-3 p-4 border border-brand-green/20 cursor-pointer">
                <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                <span className="text-sm text-brand-green">Pay with Card</span>
              </label>
              <label className="flex items-center gap-3 p-4 border border-brand-green/20 cursor-pointer">
                <input type="radio" name="payment" value="transfer" checked={paymentMethod === 'transfer'} onChange={(e) => setPaymentMethod(e.target.value)} />
                <span className="text-sm text-brand-green">Bank Transfer</span>
              </label>
            </div>
            
            <button onClick={handleCheckout} className="w-full py-4 bg-brand-green text-brand-cream uppercase tracking-widest font-bold hover:opacity-90 transition">
              {paymentMethod === 'card' ? 'Pay Now' : 'Place Order'}
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}