import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingCart, User, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-cultural text-xl font-bold text-primary">
              CraftStory
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Discover
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Artisans
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Stories
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              AI Assistant
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button className="btn-cultural text-sm">
                <User className="h-4 w-4 mr-2" />
                Become Artisan
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Discover
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Artisans
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Stories
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                AI Assistant
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button className="btn-cultural text-sm">
                  <User className="h-4 w-4 mr-2" />
                  Become Artisan
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;