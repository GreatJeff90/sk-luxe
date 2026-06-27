"use client";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

interface Order {
  id: string;
  total_amount: number;
  created_at: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState("My Orders");
  const router = useRouter();

  // Memoize the data loading function to prevent unnecessary re-renders
  const loadData = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId);
    
    if (data) setOrders(data as Order[]);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      setUser(session.user);
      loadData(session.user.id);
    };
    checkAuth();
  }, [router, loadData]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const tabs = ["Personal Information", "My Orders", "Manage Address", "Payment Method", "Password Manager", "Logout"];

  if (!user) return <div className="bg-brand-cream min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-serif text-brand-green mb-12">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => tab === "Logout" ? handleSignOut() : setActiveTab(tab)}
                className={`block w-full text-left py-4 px-4 text-sm uppercase tracking-widest transition-colors ${
                  activeTab === tab 
                  ? "bg-brand-green text-brand-cream font-bold" 
                  : "text-brand-green hover:bg-brand-green/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </aside>

          {/* Main Content Area */}
          <section className="md:col-span-3 bg-white p-8 shadow-sm min-h-[400px]">
            {activeTab === "My Orders" && (
              <div>
                <h2 className="text-xl font-bold mb-6 uppercase tracking-widest">Order History</h2>
                {orders.length === 0 ? (
                  <p className="text-brand-green/60 italic">No orders found.</p>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border-b border-brand-green/10 py-4 flex justify-between items-center">
                        <div>
                          <p className="font-semibold">Order #{order.id.slice(0, 8)}</p>
                          <p className="text-xs text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
                        </div>
                        <p className="font-bold text-brand-green">₦{order.total_amount?.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {activeTab !== "My Orders" && (
              <div className="flex items-center justify-center h-full">
                <p className="text-brand-green/40 uppercase tracking-widest text-sm">
                  {activeTab} section is under construction.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}