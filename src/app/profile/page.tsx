"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.push("/login"); return; }
      setUser(session.user);

      const { data } = await supabase
        .from("orders")
        .select("id, status, total_amount, created_at")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (data) setOrders(data);
    };
    fetchUserData();
  }, [router]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-500">Manage your account information and order history.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Account</h3>
              <p className="text-xs text-gray-500">Email Address</p>
              <p className="text-sm font-medium text-gray-800 break-words">{user.email}</p>
            </div>
            <button 
              onClick={async () => { await supabase.auth.signOut(); router.push("/"); }}
              className="w-full text-left text-sm text-red-600 hover:text-red-700 px-6"
            >
              Sign Out
            </button>
          </div>

          {/* Orders Table */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Order History</h3>
            {orders.length > 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {orders.map((order) => (
                  <div key={order.id} className="p-6 border-b border-gray-100 last:border-0 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Order #{order.id.slice(0, 8)}</p>
                      <p className="text-xs text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-[10px] uppercase font-bold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <p className="text-sm font-bold text-gray-900 mt-1">₦{order.total_amount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-xl border border-dashed border-gray-300">
                <p className="text-sm text-gray-400">No orders placed yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}