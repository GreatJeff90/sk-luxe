import type { Metadata } from "next";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "SK LUXE",
  description: "Luxury fashion and apparel",
  icons: {
    icon: "/emblem.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CartProvider>
            <WishlistProvider>
              <Suspense fallback={null}>
                <Navbar />
              </Suspense>
              
              <main>{children}</main>
              
              <footer className="border-t border-gray-100 dark:border-gray-800 pb-20">
                <Footer />
              </footer>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}