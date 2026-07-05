"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ 
    fullName: "", 
    email: "", 
    phoneNumber: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords do not match", isError: true });
      return;
    }
    setMessage(null);

    const { error } = await signUp(formData.email, formData.password);
    
    if (error) {
      setMessage({ text: error.message, isError: true });
    } else {
      setMessage({ text: "Account created! Redirecting...", isError: false });
      setTimeout(() => router.push("/"), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="w-full max-w-sm bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-12 mx-auto mb-4">
             <Image src="/logo-1.png" alt="Brand Logo" fill className="object-contain" priority />
          </div>
          <h2 className="text-xl font-medium text-black">Create Account</h2>
          <p className="text-gray-500 text-sm mt-2">Sign up to get started</p>
        </div>

        {/* Feedback Message */}
        {message && (
          <p className={`mb-4 text-xs font-medium ${message.isError ? "text-red-500" : "text-green-500"}`}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-black uppercase">Full Name *</label>
            <input type="text" placeholder="Enter your full name" onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-black uppercase">Email Address *</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-black uppercase">Phone Number</label>
            <input type="tel" placeholder="+234 xxx xxx xxxx" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-black uppercase">Password *</label>
            <input type="password" placeholder="Create a password" onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-black uppercase">Confirm Password *</label>
            <input type="password" placeholder="Confirm your password" onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors" />
          </div>
            
          <button type="submit" className="w-full bg-black text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-800 transition-colors mt-4">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-black hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}