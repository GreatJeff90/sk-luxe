"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the structure of your product
interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  sizes: string[];
}

// Define the structure of items in the cart
interface CartItem extends Product {
  selectedSize: string;
}

// Define the Context shape
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string) => {
    setCart((prev) => [...prev, { ...product, selectedSize: size }]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};