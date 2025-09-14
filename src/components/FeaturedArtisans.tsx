import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Heart } from "lucide-react";

const FeaturedArtisans = () => {
  const artisans = [
    {
      id: 1,
      name: "Meera Devi",
      craft: "Madhubani Painting",
      location: "Bihar",
      rating: 4.9,
      reviews: 156,
      story: "Preserving 800-year-old folk art traditions with vibrant natural colors and mythological storytelling.",
      image: "https://images.unsplash.com/photo-1594736797933-d0ddba079ba1?w=400&h=300&fit=crop&crop=face",
      featuredCraft: {
        name: "Goddess Lakshmi Painting",
        price: "₹2,400",
        originalPrice: "₹3,200"
      }
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      craft: "Blue Pottery",
      location: "Rajasthan",
      rating: 4.8,
      reviews: 203,
      story: "Third-generation potter creating stunning blue and white ceramics using traditional Persian techniques.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      featuredCraft: {
        name: "Decorative Vase Set",
        price: "₹1,800",
        originalPrice: "₹2,500"
      }
    },
    {
      id: 3,
      name: "Lakshmi Bai",
      craft: "Handloom Weaving",
      location: "Kerala",
      rating: 5.0,
      reviews: 89,
      story: "Master weaver creating exquisite silk sarees with golden zari work, continuing her family's 200-year legacy.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=face",
      featuredCraft: {
        name: "Kasavu Saree",
        price: "₹4,500",
        originalPrice: "₹6,000"
      }
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 pattern-cultural"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-cultural-heading text-4xl lg:text-5xl mb-4">
            Meet Our Master Artisans
          </h2>
          <p className="text-heritage text-xl max-w-2xl mx-auto">
            Each artisan brings centuries of tradition and passion to their craft, 
            creating unique pieces that tell the story of India's rich cultural heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <Card key={artisan.id} className="card-cultural overflow-hidden group">
              <div className="relative">
                <img 
                  src={artisan.image} 
                  alt={`${artisan.name}, ${artisan.craft} artisan`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-4 left-4 bg-white/90 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-cultural text-xl text-primary">{artisan.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{artisan.rating}</span>
                      <span className="text-xs text-muted-foreground">({artisan.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{artisan.location}</span>
                    <Badge variant="outline" className="text-xs">
                      {artisan.craft}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-heritage line-clamp-3">
                  {artisan.story}
                </p>

                {/* Featured craft */}
                <div className="border-t pt-4">
                  <div className="text-sm font-medium text-foreground mb-1">
                    Featured Craft
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">{artisan.featuredCraft.name}</div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{artisan.featuredCraft.price}</span>
                        <span className="text-xs text-muted-foreground line-through">
                          {artisan.featuredCraft.originalPrice}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-heritage">
            Explore All Artisans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisans;