"use client";
import { useState, useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabaseClient";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  const [formData, setFormData] = useState({ 
    name: "", address: "", landmark: "", phone: "", email: "", busStop: "", contactMethod: "WhatsApp" 
  });
  
  // State for copy feedback
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const saveOrderToSupabase = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!formData.name || !formData.phone || !formData.address) {
        alert("Please fill in the required shipping details.");
        return;
    }

    const { error } = await supabase.from("orders").insert([{
      user_id: session?.user.id || null, 
      total_amount: total, 
      items: cart, 
      full_name: formData.name, 
      email: formData.email, 
      address: formData.address, 
      landmark: formData.landmark, 
      bus_stop: formData.busStop, 
      phone: formData.phone, 
      contact_method: formData.contactMethod, 
      status: "pending_transfer"
    }]);

    if (error) {
        alert("Error saving order: " + error.message);
    } else {
        alert("Order placed! Please complete your transfer and send your receipt via WhatsApp.");
        window.open("https://wa.link/kyd4p7", "_blank");
    }
  };

  const inputStyle = "w-full p-4 bg-gray-100 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:border-black outline-none transition";

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl text-black uppercase tracking-widest font-light mb-12">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <section className="space-y-4">
            <input type="text" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} className={inputStyle} />
            <input type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputStyle} />
            <input type="text" placeholder="Phone Number" onChange={(e) => setFormData({...formData, phone: e.target.value})} className={inputStyle} />
            <input type="text" placeholder="Detailed Delivery Address" onChange={(e) => setFormData({...formData, address: e.target.value})} className={inputStyle} />
            <input type="text" placeholder="Nearest Bus Stop" onChange={(e) => setFormData({...formData, busStop: e.target.value})} className={inputStyle} />
            <div className="pt-2">
              <label className="text-xs text-gray-500 uppercase">Preferred Contact Method</label>
              <select onChange={(e) => setFormData({...formData, contactMethod: e.target.value})} className={`${inputStyle} mt-1`}>
                <option>WhatsApp</option>
                <option>Phone Call</option>
                <option>Email</option>
              </select>
            </div>
          </section>

          <section className="bg-black text-white p-8 rounded-3xl h-fit">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Order Summary</h2>
            <div className="space-y-4 mb-8">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>₦{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-800 p-4 rounded-xl mb-6 text-center">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Pay via Bank Transfer</p>
              <p className="font-bold text-lg">SK LUXE </p>
              
              <div className="flex items-center justify-center gap-2 mt-1">
                <p className="text-xl font-mono">6561871791</p>
                <button 
                  onClick={() => copyToClipboard("6561871791")}
                  className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              
              <p className="text-sm mt-2">Moniepoint MFB</p>
            </div>

            <button 
                onClick={saveOrderToSupabase}
                className="w-full py-4 bg-white text-black uppercase tracking-widest font-bold rounded-xl hover:bg-gray-200 transition"
            >
                Confirm Order & Send Receipt
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}