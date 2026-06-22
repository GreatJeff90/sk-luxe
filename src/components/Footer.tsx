  // src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-brand-green text-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-bold mb-4">SK LUXE</h3>
          <p className="text-sm opacity-80">Defining elegance for the modern era.</p>
        </div>
        <div>
          <h4 className="font-medium mb-4 uppercase text-xs tracking-widest">Shop</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4 uppercase text-xs tracking-widest">Support</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Shipping Policy</li>
            <li>Returns</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4 uppercase text-xs tracking-widest">Newsletter</h4>
          <input 
            type="email" 
            placeholder="Email address" 
            className="bg-transparent border-b border-brand-cream/30 w-full py-2 outline-none"
          />
        </div>
      </div>
    </footer>
  );
}