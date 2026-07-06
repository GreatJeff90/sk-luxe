import Link from 'next/link';
import Image from 'next/image';
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image src="/logo-1.png" alt="SK LUXE" width={100} height={40} className="brightness-0 invert" />
          </Link>
          <div className="flex space-x-6 pt-4">
            <FiInstagram className="cursor-pointer hover:text-gray-400 transition-colors" size={20} />
            <FiTwitter className="cursor-pointer hover:text-gray-400 transition-colors" size={20} />
            <FiFacebook className="cursor-pointer hover:text-gray-400 transition-colors" size={20} />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-medium mb-4 uppercase text-xs tracking-widest text-gray-400">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-gray-400 transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-gray-400 transition-colors">Shop</Link></li>
            <li><Link href="/wishlist" className="hover:text-gray-400 transition-colors">Wishlist</Link></li>
            <li><Link href="/profile" className="hover:text-gray-400 transition-colors">Profile</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-medium mb-4 uppercase text-xs tracking-widest text-gray-400">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>Email: support@skluxe.com</li>
            <li>Phone: +234 800 000 0000</li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center md:text-left">
        <p className="text-xs text-gray-500">
          © {currentYear} SK LUXE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}