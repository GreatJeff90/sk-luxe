"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex bg-brand-cream">
      {/* Left side: Editorial Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image 
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200"
          alt="Password recovery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-green/20" />
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-sm"
        >
          <div className="text-left mb-12">
            <h1 className="text-4xl text-brand-green font-serif mb-2">Reset Password</h1>
            <p className="text-brand-green/60 text-xs uppercase tracking-[0.2em]">
              Enter your email to receive instructions
            </p>
          </div>

          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-brand-green/20 py-3 text-brand-green outline-none focus:border-brand-green transition-colors"
            />
            
            <button type="submit" className="w-full bg-brand-green text-brand-cream py-4 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-opacity">
              Send Reset Link
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-brand-green/60">
            Remembered your password?{" "}
            <Link href="/login" className="border-b border-brand-green">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}