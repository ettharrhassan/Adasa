import Hero from "../components/Home/Hero";
import FeaturedArticles from "../components/Home/FeaturedArticles";
import Categories from "../components/Home/Categories";
import LatestArticles from "../components/Home/LatestArticles";
import NewsletterCTA from "../components/Home/NewsletterCTA";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen font-cairo divide-y divide-white/5">
      <Hero />
      <FeaturedArticles />
      <Categories />
      <LatestArticles />
      <NewsletterCTA />
    </div>
  );
}
