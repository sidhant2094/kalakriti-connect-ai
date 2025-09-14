import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles, Heart, TrendingUp } from "lucide-react";
import craftsImage from "@/assets/crafts-collection.jpg";

const MarketplacePreview = () => {
  const categories = [
    { name: "Textiles", count: "2,340", icon: "🧵" },
    { name: "Pottery", count: "1,890", icon: "🏺" },
    { name: "Jewelry", count: "3,120", icon: "💍" },
    { name: "Woodwork", count: "1,560", icon: "🪵" },
    { name: "Paintings", count: "980", icon: "🎨" },
    { name: "Metalwork", count: "720", icon: "⚒️" }
  ];

  const featuredCrafts = [
    {
      id: 1,
      name: "Handwoven Pashmina Shawl",
      price: "₹8,500",
      originalPrice: "₹12,000",
      artisan: "Kashmir Weavers Co-op",
      category: "Textiles",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1594736797933-d0ddba079ba1?w=300&h=300&fit=crop",
      aiStory: "Woven with care at 11,000 feet altitude using traditional Kashmiri techniques...",
      trending: true
    },
    {
      id: 2,
      name: "Blue Pottery Dinner Set",
      price: "₹3,200",
      originalPrice: "₹4,500",
      artisan: "Rajesh Kumar",
      category: "Pottery",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=300&h=300&fit=crop",
      aiStory: "Persian-inspired blue pottery crafted with natural dyes and traditional glazing...",
      trending: false
    },
    {
      id: 3,
      name: "Tanjore Painting - Ganesha",
      price: "₹6,800",
      originalPrice: "₹9,000",
      artisan: "Meera Devi",
      category: "Paintings",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=300&fit=crop",
      aiStory: "Sacred art form with 22k gold leaf work, depicting Lord Ganesha in classical style...",
      trending: true
    },
    {
      id: 4,
      name: "Silver Filigree Earrings",
      price: "₹2,400",
      originalPrice: "₹3,200",
      artisan: "Odisha Silver Works",
      category: "Jewelry",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
      aiStory: "Intricate silver filigree work from Cuttack, Odisha, showcasing 500-year-old techniques...",
      trending: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-heritage">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-cultural-heading text-4xl lg:text-5xl mb-4">
            Discover Authentic Crafts
          </h2>
          <p className="text-heritage text-xl max-w-3xl mx-auto">
            Browse thousands of handmade treasures, each with AI-powered cultural stories 
            that connect you to the artisan's heritage and craftsmanship.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="card-cultural text-center cursor-pointer group">
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-foreground">{category.name}</div>
                <div className="text-sm text-muted-foreground">{category.count} items</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured crafts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCrafts.map((craft) => (
            <Card key={craft.id} className="card-cultural overflow-hidden group">
              <div className="relative">
                <img 
                  src={craft.image} 
                  alt={craft.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {craft.trending && (
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
                    {craft.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">by {craft.artisan}</p>
                </div>

                {/* AI Story preview */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium text-accent">AI Story</span>
                  </div>
                  <p className="text-xs text-heritage line-clamp-2">
                    {craft.aiStory}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">{craft.price}</span>
                      <span className="text-xs text-muted-foreground line-through">
                        {craft.originalPrice}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ⭐ {craft.rating} rating
                    </div>
                  </div>
                  
                  <Button size="sm" className="btn-cultural text-xs">
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card p-8 rounded-xl border border-border shadow-cultural max-w-2xl mx-auto">
            <h3 className="font-cultural text-2xl text-primary mb-4">
              Experience the Full Marketplace
            </h3>
            <p className="text-heritage mb-6">
              Discover thousands more authentic crafts with AI-powered cultural insights, 
              artisan stories, and seamless shopping experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="btn-cultural">
                Browse All Crafts
              </Button>
              <Button variant="outline" className="btn-heritage">
                Learn About AI Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;