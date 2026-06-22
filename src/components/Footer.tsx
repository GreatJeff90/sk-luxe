import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">SK LUXE</h3>
          <p className="text-sm opacity-80 max-w-xs">
            Defining elegance for the modern era. Curating timeless pieces for the conscious individual.
          </p>
          <div className="flex space-x-6">
            <FiInstagram className="cursor-pointer hover:text-white transition-colors" size={18} />
            <FiTwitter className="cursor-pointer hover:text-white transition-colors" size={18} />
            <FiFacebook className="cursor-pointer hover:text-white transition-colors" size={18} />
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-medium mb-4 uppercase text-xs tracking-widest">Shop</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="hover:text-white cursor-pointer transition-colors">New Arrivals</li>
            <li className="hover:text-white cursor-pointer transition-colors">Best Sellers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Collections</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-medium mb-4 uppercase text-xs tracking-widest">Support</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="hover:text-white cursor-pointer transition-colors">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-cream/10 text-center md:text-left">
        <p className="text-xs opacity-60">
          © {currentYear} SK LUXE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}