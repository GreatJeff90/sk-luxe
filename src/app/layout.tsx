import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext"; // 1. Import the provider
import "./globals.css"; // Ensure your globals are imported

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
          {children}
        </CartProvider>
      </body>
    </html>
  );
}