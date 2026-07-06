"use client";
import { useSearchParams, useRouter } from "next/navigation";

const categories = ["All", "Tracksuits", "Apparel", "Trousers", "Jackets"];

export default function Categories() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get current category from URL, default to "All"
  const active = searchParams.get("category") || "All";

  const handleCategoryChange = (cat: string) => {
    // If "All", remove the search param, otherwise set it
    if (cat === "All") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${cat.toLowerCase()}`);
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`
                px-8 py-3 rounded-full text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-all duration-300
                ${active === cat 
                  ? "bg-black text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}