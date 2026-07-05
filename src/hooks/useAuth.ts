"use client";
import { supabase } from "@/lib/supabaseClient";

export const useAuth = () => {
  // Email/Password Signup
  const signUp = async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password });
  };

  // Email/Password Login
  const signIn = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password });
  };

  // Google Login
  const signInWithGoogle = async () => {
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    });
  };

  const signOut = async () => await supabase.auth.signOut();

  return { signUp, signIn, signInWithGoogle, signOut };
};