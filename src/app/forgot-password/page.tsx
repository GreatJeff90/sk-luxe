"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient"; // Import your Supabase client

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Supabase trigger to send the reset email
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`, // This page needs to be created
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Check your email for the reset link!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
      >
        <h1 className="text-2xl text-black font-bold mb-6 uppercase tracking-widest text-center">Reset Password</h1>
        
        <form onSubmit={handleReset} className="space-y-6">
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black outline-none transition"
          />
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white py-4 uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-xs text-black">{message}</p>}

        <p className="mt-8 text-center text-xs text-gray-500">
          Remembered your password?{" "}
          <Link href="/login" className="text-black font-bold underline underline-offset-4">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}