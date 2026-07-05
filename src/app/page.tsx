import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import Trending from "@/components/Trending";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      {/* <Hero /> */}
      
      <Categories />
      
      <NewArrivals />
      
      {/* <Trending /> */}
      
      {/* <Journal /> */}

      {/* <Testimonials /> */}
      
      <CtaSection />
      
      <Footer />
    </main>
  );
}