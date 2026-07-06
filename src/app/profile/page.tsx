"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

// Define the Order type based on your Supabase table schema
interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  
  // Use the Order type here instead of 'any[]'
  const [orders, setOrders] = useState<Order[]>([]); 
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      
      setUser(session.user);

      // Fetch Orders
      const { data: fetchedOrders } = await supabase
        .from("orders")
        .select("id, status, total_amount, created_at") // Explicitly select fields
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (fetchedOrders) setOrders(fetchedOrders);
    };
    init();
  }, [router]);

  if (!user) return <div className="py-20 text-center">Loading...</div>;

  return (
    <main className="bg-white min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl text-black uppercase tracking-widest font-light mb-12">My Account</h1>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Account Info Section */}
          <section className="md:col-span-1 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest">Account Details</h2>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="font-medium text-black">{user.email}</p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest">Shipping Address</h2>
              {isEditing ? (
                <div className="space-y-2">
                  <textarea 
                    className="w-full p-4 border rounded-xl focus:border-black outline-none"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter full delivery address"
                  />
                  <button onClick={() => setIsEditing(false)} className="bg-black text-white px-6 py-2 rounded-lg text-sm">Save</button>
                </div>
              ) : (
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-sm text-gray-700">{address || "No address saved."}</p>
                  <button onClick={() => setIsEditing(true)} className="text-black underline text-xs mt-4">Edit Address</button>
                </div>
              )}
            </div>
          </section>

          {/* Orders Section */}
          <section className="md:col-span-2 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest">Your Orders</h2>
            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-100 p-6 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="font-bold text-sm">Order ID: {order.id.slice(0, 8)}...</p>
                      <p className="text-xs text-gray-500">Status: {order.status || "Pending"}</p>
                    </div>
                    <p className="font-bold text-sm">₦{order.total_amount.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">No orders found.</p>
            )}
          </section>
        </div>
        
        <button 
          onClick={async () => { await supabase.auth.signOut(); router.push("/"); }}
          className="mt-16 text-xs text-gray-400 hover:text-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}