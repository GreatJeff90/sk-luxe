"use client";
import ShopDisplay from "@/components/ShopDisplay";

export default function ShopPage() {
  return (
    <main className="bg-white min-h-screen">

      <div className="">
        {/* Unified Shop Component with filtering and display logic */}
        <ShopDisplay />
      </div>
    </main>
  );
}