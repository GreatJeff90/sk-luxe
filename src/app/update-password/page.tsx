"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password: password });
    
    if (error) alert(error.message);
    else {
      alert("Password updated successfully!");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleUpdate} className="w-full max-w-sm space-y-4">
        <input 
          type="password" 
          placeholder="New Password" 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border rounded-xl"
        />
        <button type="submit" className="w-full bg-black text-white p-4 rounded-xl">Update Password</button>
      </form>
    </div>
  );
}