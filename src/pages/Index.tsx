import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedArtisans from "@/components/FeaturedArtisans";
import MarketplacePreview from "@/components/MarketplacePreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedArtisans />
        <MarketplacePreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
