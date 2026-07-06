"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js"; // Import the specific type

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter()

  // Mock data for "Live Orders" - In a real app, fetch this from Supabase
  const liveOrders = [
    { id: "SK-9921", status: "In Transit", total: "₦50,000" },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) router.push("/login");
      else setUser(session.user);
    };
    fetchUser();
  }, [router]);

  if (!user) return <div className="py-20 text-center">Loading...</div>;

  return (
    <main className="bg-white min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl text-black uppercase tracking-widest font-light mb-12">My Account</h1>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Account Info */}
          <section className="md:col-span-1 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest">Account Details</h2>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="font-medium text-black">{user.email}</p>
            </div>
            
            {/* Address Management */}
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

          {/* Live Orders */}
          <section className="md:col-span-2 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest">Live Orders</h2>
            {liveOrders.length > 0 ? (
              <div className="space-y-4">
                {liveOrders.map((order) => (
                  <div key={order.id} className="border border-gray-100 p-6 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="font-bold">Order {order.id}</p>
                      <p className="text-xs text-gray-500">Status: {order.status}</p>
                    </div>
                    <p className="font-bold">{order.total}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">No active orders at the moment.</p>
            )}
          </section>
        </div>
        
        {/* Logout */}
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