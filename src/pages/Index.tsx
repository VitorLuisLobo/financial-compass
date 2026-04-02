import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import MarketTicker from "@/components/home/MarketTicker";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import LibrarySection from "@/components/home/LibrarySection";

const Index = () => {
  return (
    <div>
      <SEOHead title="Home" description="Investment advisor sharing insights on finance, investing and financial education. Build knowledge that lasts." />
      <HeroSection />
      <MarketTicker />
      <FeaturedArticles />
      <LibrarySection />
    </div>
  );
};

export default Index;
