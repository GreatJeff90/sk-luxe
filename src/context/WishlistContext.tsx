"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string | number) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  // 1. Initialize: Load from localStorage first, then sync with Supabase
  useEffect(() => {
    const init = async () => {
      // Get saved items from browser storage immediately
      const saved = localStorage.getItem("sk_luxe_wishlist");
      if (saved) setWishlist(JSON.parse(saved));

      // Get user session
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUserId(session.user.id);
        const { data } = await supabase
          .from("profiles")
          .select("wishlist")
          .eq("id", session.user.id)
          .single();
        
        // If DB has data, overwrite local data and update storage
        if (data?.wishlist) {
            setWishlist(data.wishlist);
            localStorage.setItem("sk_luxe_wishlist", JSON.stringify(data.wishlist));
        }
      }
    };
    init();
  }, []);

  // 2. Sync function: Updates both LocalStorage and Supabase
  const syncWishlist = (newWishlist: Product[]) => {
    setWishlist(newWishlist);
    localStorage.setItem("sk_luxe_wishlist", JSON.stringify(newWishlist));
    
    if (userId) {
      supabase
        .from("profiles")
        .update({ wishlist: newWishlist })
        .eq("id", userId)
        .then(); // Fire and forget
    }
  };

  const addToWishlist = (product: Product) => {
    if (wishlist.find((item) => item.id === product.id)) return;
    syncWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (id: string | number) => {
    syncWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
};