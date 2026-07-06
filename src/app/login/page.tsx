"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);
  
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const { error } = await signIn(email, password);
    if (error) {
      setMessage({ text: error.message, isError: true });
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="w-full max-w-sm bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-12 mx-auto mb-4">
             <Image 
                src="/logo-.png" 
                alt="Brand Logo" 
                fill 
                className="object-contain" 
                priority
             />
          </div>
          <h2 className="text-xl font-medium text-black">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-2">Sign in to continue shopping</p>
        </div>

        {/* Feedback Message */}
        {message && (
          <p className={`mb-4 text-xs ${message.isError ? "text-red-500" : "text-green-500"}`}>
            {message.text}
          </p>
        )}

        {/* Form Section */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-black uppercase">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-black uppercase">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="text-right">
            <Link href="/forgot-password" className="text-[11px] text-gray-500 hover:text-black">
              Forgot Password?
            </Link>
          </div>
          
          <button type="submit" className="w-full bg-black text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
            Sign In
          </button>
        </form>

        {/* Register Redirect */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-black hover:underline">
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}