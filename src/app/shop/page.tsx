"use client";
import Categories from "@/components/Categories"; // Ensure these paths are correct
import NewArrivals from "@/components/NewArrivals";

export default function ShopPage() {
  return (
    <main className="bg-white min-h-screen">


      <div className="">
        {/* Categories Section */}
        <section className="">
          <Categories />
        </section>

        {/* New Arrivals / All Products Section */}
        <section>
          <NewArrivals />
        </section>
      </div>

    </main>
  );
}