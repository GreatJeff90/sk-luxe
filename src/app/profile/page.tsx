"use client";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileSidebar from "@/components/ProfileSidebar";
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

  const loadOrders = useCallback(async (userId: string) => {
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
      loadOrders(session.user.id);
    };
    checkAuth();
  }, [router, loadOrders]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (!user) return <div className="bg-brand-cream min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-serif text-brand-green mb-12">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Using the component here */}
          <ProfileSidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            onLogout={handleSignOut} 
          />

          {/* Content Area */}
          <section className="md:col-span-3 bg-white p-8 shadow-sm min-h-[400px]">
            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest">{activeTab}</h2>
            
            {activeTab === "My Orders" && (
              orders.length === 0 ? (
                <p className="text-brand-green/60 italic">No orders found.</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border-b border-brand-green/10 py-4 flex justify-between items-center">
                      <p>Order #{order.id.slice(0, 8)}</p>
                      <p className="font-bold">₦{order.total_amount?.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              )
            )}
            
            {activeTab !== "My Orders" && (
              <p className="text-brand-green/40">Section under construction.</p>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}