"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { CartItem } from "@/types/index";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  sizes: string[];
  selectedColor?: string;
  selectedSize: string;
}




interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem, size: string) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Initial Load: Check LocalStorage AND Supabase
  useEffect(() => {
    const init = async () => {
      // Load from LocalStorage first for instant UI
      const savedCart = localStorage.getItem("sk_luxe_cart");
      if (savedCart) setCart(JSON.parse(savedCart));

      // Then check User Session
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUserId(session.user.id);
        const { data } = await supabase
          .from("profiles")
          .select("cart")
          .eq("id", session.user.id)
          .single();
        
        if (data?.cart) {
          setCart(data.cart);
          localStorage.setItem("sk_luxe_cart", JSON.stringify(data.cart));
        }
      }
      setIsLoaded(true);
    };
    init();
  }, []);

  // 2. Sync to LocalStorage and DB whenever cart changes
  const updateCartState = async (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("sk_luxe_cart", JSON.stringify(newCart));
    
    if (userId) {
      await supabase
        .from("profiles")
        .update({ cart: newCart })
        .eq("id", userId);
    }
  };

  const addToCart = (product: CartItem, size: string) => {
   updateCartState([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    updateCartState(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};