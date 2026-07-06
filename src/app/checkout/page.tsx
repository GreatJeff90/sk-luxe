"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    landmark: "",
    phone: "",
  });

  const handleCompleteOrder = () => {
    // Basic validation
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill in your name, delivery address, and phone number.");
      return;
    }

    // Construct WhatsApp message
    const orderDetails = cart.map(item => `${item.name} (Size: ${item.selectedSize})`).join(", ");
    const message = `Hi! I'm placing an order from SK LUXE.

Order Items: ${orderDetails}
Total Amount: ₦${total.toLocaleString()}

Shipping Details:
Name: ${formData.name}
Address: ${formData.address}
Nearest Landmark: ${formData.landmark || "N/A"}
Phone: ${formData.phone}

Please provide waybill details.`;

    const whatsappUrl = `https://wa.link/kyd4p7?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl text-black uppercase tracking-widest font-light mb-12">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Shipping Form */}
          <section className="space-y-6">
            <h2 className="text-xs font-bold text-black uppercase tracking-widest">Shipping Details</h2>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-black outline-none transition" 
              />
              <input 
                type="text" 
                placeholder="Delivery Address" 
                required
                onChange={(e) => setFormData({...formData, address: e.target.value})} 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-black outline-none transition" 
              />
              <input 
                type="text" 
                placeholder="Nearest Landmark" 
                onChange={(e) => setFormData({...formData, landmark: e.target.value})} 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-black outline-none transition" 
              />
              <input 
                type="text" 
                placeholder="Phone Number (for Waybill)" 
                required
                onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-black outline-none transition" 
              />
            </div>
            <p className="text-[10px] text-gray-400 italic">
              * Note: Delivery fees are calculated manually based on your location and package weight. Our team will contact you on WhatsApp to finalize shipping.
            </p>
          </section>

          {/* Order Summary */}
          <section className="bg-black text-white p-8 rounded-3xl">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Order Summary</h2>
            <div className="space-y-4 mb-8">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>₦{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-6 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            
            <button 
              onClick={handleCompleteOrder}
              className="w-full mt-8 py-4 bg-white text-black uppercase tracking-widest font-bold rounded-xl hover:bg-gray-200 transition"
            >
              Complete Order via WhatsApp
            </button>
            <p className="text-[10px] text-center mt-4 text-gray-500">
              Clicking &quot;Complete Order&quot; will open WhatsApp to confirm your shipping details and receive waybill information.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}