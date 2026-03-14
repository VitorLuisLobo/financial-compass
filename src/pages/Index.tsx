import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import LibrarySection from "@/components/home/LibrarySection";
import LearningPathsSection from "@/components/home/LearningPathsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div>
      <SEOHead title="Home" description="Investment advisor sharing insights on finance, investing and financial education. Build knowledge that lasts." />
      <HeroSection />
      <StatsStrip />
      <FeaturedArticles />
      <LibrarySection />
      <LearningPathsSection />
      <ProjectsSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
