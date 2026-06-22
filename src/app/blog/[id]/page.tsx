import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

// This would normally come from your database or CMS
const blogPosts = [
  { id: 1, title: "The Art of Silk", date: "June 15, 2026", category: "Craftsmanship", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000", content: "True luxury is not just seen; it is felt..." },
  { id: 2, title: "Summer Minimalism", date: "June 02, 2026", category: "Style", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2000", content: "A guide to curating a timeless capsule wardrobe..." },
  { id: 3, title: "Modern Horology", date: "May 28, 2026", category: "Accessories", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2000", content: "Why the classic watch remains the ultimate luxury staple..." },
];

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-brand-cream">
      <Navbar />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green/50 mb-4 block">
              {post.category} • {post.date}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-green mb-8">
              {post.title}
            </h1>
            <div className="w-20 h-px bg-brand-green mx-auto" />
          </header>

          <div className="relative aspect-[16/9] mb-16 overflow-hidden bg-brand-green/5">
            <Image 
              src={post.img} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>

          <div className="max-w-2xl mx-auto text-brand-green/80 leading-relaxed">
            <p className="text-xl mb-6">{post.content}</p>
            {/* Add more content paragraphs here */}
          </div>
        </div>
      </article>

      <CtaSection />
      <Footer />
    </main>
  );
}