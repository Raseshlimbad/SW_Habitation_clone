import BlogSection from "@/components/home/BlogSection";
import HeroSection from "@/components/home/HeroSection";
import NewlyAddedBlogs from "@/components/home/NewlyAddedBlogs";


export default function Home() {
  return (
   <div className="min-h-screen space-y-4 mt-0 pt-0">
    <HeroSection />
    <BlogSection />
    <NewlyAddedBlogs />
   </div>
  );
}
