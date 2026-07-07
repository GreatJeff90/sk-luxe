import type { Metadata } from "next";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes"; // Import this
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    // suppressHydrationWarning is necessary to prevent console errors 
    // when next-themes injects the initial theme class
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CartProvider>
            <WishlistProvider>
              <Suspense fallback={null}>
                <Navbar />
              </Suspense>
              
              <main>{children}</main>
              
              <div className="hidden lg:block">
                <Footer />
              </div>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}