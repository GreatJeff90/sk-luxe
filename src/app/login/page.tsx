"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineGoogle } from "react-icons/ai";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex bg-brand-cream">
      {/* Left side: Editorial Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image 
          src="/model2.jpeg"
          alt="Luxury background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-green/20" />
      </div>

      {/* Right side: Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-sm"
        >
          <div className="text-left mb-12">
            <h1 className="text-4xl text-brand-green font-serif mb-2">Sign In</h1>
            <p className="text-brand-green/60 text-xs uppercase tracking-[0.2em]">Enter your details below</p>
          </div>

          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-brand-green/20 py-3 text-brand-green outline-none focus:border-brand-green transition-colors"
            />
            
            <div className="space-y-1">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-brand-green/20 py-3 text-brand-green outline-none focus:border-brand-green transition-colors"
              />
              {/* Forgot Password Link */}
              <div className="text-right">
                <Link href="/forgot-password" className="text-[10px] uppercase tracking-widest text-brand-green/50 hover:text-brand-green transition-colors">
                  Forgot Password?
                </Link>
              </div>
            </div>
            
            <button type="submit" className="w-full bg-brand-green text-brand-cream py-4 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4 text-xs text-brand-green/40 uppercase tracking-widest">
            <div className="flex-1 h-px bg-brand-green/20" />
            Or continue with
            <div className="flex-1 h-px bg-brand-green/20" />
          </div>

          {/* Google Auth Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-brand-green/20 py-4 text-brand-green uppercase tracking-widest text-xs font-bold hover:bg-brand-green/5 transition-colors">
            <AiOutlineGoogle size={18} />
            Google
          </button>

          <p className="mt-8 text-center text-xs text-brand-green/60">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="border-b border-brand-green">Create one</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}