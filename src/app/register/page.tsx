"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineGoogle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const { signUp, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const { error } = await signUp(formData.email, formData.password);
    
    if (error) {
      setMessage({ text: error.message, isError: true });
    } else {
      setMessage({ text: "Registration successful! Redirecting...", isError: false });
      // Redirect after success
      setTimeout(() => router.push("/"), 2000);
    }
  };

  return (
    <div className="min-h-screen flex bg-brand-cream">
      {/* Left side: Editorial Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image src="/model1.jpeg" alt="Luxury registration" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-green/20" />
      </div>

      {/* Right side: Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-sm">
          <div className="text-left mb-12">
            <h1 className="text-4xl text-brand-green font-serif mb-2">Create Account</h1>
            <p className="text-brand-green/60 text-xs uppercase tracking-[0.2em]">Join the inner circle</p>
          </div>

          {/* Feedback Message */}
          {message && (
            <p className={`mb-6 text-xs font-bold ${message.isError ? "text-red-600" : "text-green-700"}`}>
              {message.text}
            </p>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <input type="text" placeholder="Full name" onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b border-brand-green/20 py-3 text-brand-green outline-none focus:border-brand-green transition-colors" />
            <input type="email" placeholder="Email address" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b border-brand-green/20 py-3 text-brand-green outline-none focus:border-brand-green transition-colors" />
            <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full bg-transparent border-b border-brand-green/20 py-3 text-brand-green outline-none focus:border-brand-green transition-colors" />
            
            <button type="submit" className="w-full bg-brand-green text-brand-cream py-4 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-opacity">
              Create Account
            </button>
          </form>

          <div className="my-8 flex items-center gap-4 text-xs text-brand-green/40 uppercase tracking-widest">
            <div className="flex-1 h-px bg-brand-green/20" /> Or register with <div className="flex-1 h-px bg-brand-green/20" />
          </div>

          <button 
            type="button"
            onClick={() => signInWithGoogle()} 
            className="w-full flex items-center justify-center gap-3 border border-brand-green/20 py-4 text-brand-green uppercase tracking-widest text-xs font-bold hover:bg-brand-green/5 transition-colors"
          >
            <AiOutlineGoogle size={18} /> Google
          </button>

          <p className="mt-8 text-center text-xs text-brand-green/60">
            Already have an account?{" "}
            <Link href="/login" className="border-b border-brand-green">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}