import ShopDisplay from "@/components/ShopDisplay";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 
        ShopDisplay contains both the Categories navigation 
        and the filtered product grid.
      */}
      <ShopDisplay />
    </main>
  );
}