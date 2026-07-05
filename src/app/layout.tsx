import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "SK LUXE",
  description: "Luxury fashion and apparel",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider> {/* 2. Wrap your entire application */}
          <WishlistProvider> {/* Add this wrapper */}
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}