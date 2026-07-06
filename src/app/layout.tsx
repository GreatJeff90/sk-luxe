import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/Navbar"; // Assuming you have this
import Footer from "@/components/Footer"; // Import your Footer
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
            {/* Navbar is usually present on all pages */}
            <Navbar />
            
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