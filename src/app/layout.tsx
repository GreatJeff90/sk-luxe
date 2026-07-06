import type { Metadata } from "next";
import { Suspense } from "react";
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
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            {/* Suspense is required for components that use useSearchParams().
              The fallback can be set to null or a loading spinner.
            */}
            <Suspense fallback={null}>
              <Navbar />
            </Suspense>
            
            <main>{children}</main>
            
            {/* Footer: Hidden on mobile, visible on large screens (lg:block) */}
            <div className="hidden lg:block">
              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}