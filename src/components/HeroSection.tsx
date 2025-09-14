import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-artisan.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 pattern-heritage"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Connecting</span>
                <br />
                <span className="font-cultural text-primary">Tradition</span>
                <br />
                <span className="text-foreground">with</span>
                <br />
                <span className="font-cultural text-accent">Tomorrow</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Empowering Indian artisans to share their heritage crafts with the world 
                through AI-powered storytelling and modern marketplace technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-cultural group">
                Discover Artisans
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-heritage group">
                <Play className="mr-2 h-5 w-5" />
                Watch Stories
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Artisans</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Crafts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">States</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="card-cultural overflow-hidden">
              <img 
                src={heroImage} 
                alt="Indian artisan crafting traditional pottery with skilled hands"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating story card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-warm border border-border max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">AI</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Story Generated</div>
                  <div className="text-xs text-muted-foreground">2 minutes ago</div>
                </div>
              </div>
              <p className="text-sm text-heritage">
                "Priya's pottery tells the story of her grandmother's traditions, 
                passed down through five generations..."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;