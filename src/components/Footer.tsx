import { Button } from "@/components/ui/button";
import { Sparkles, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-cultural text-xl font-bold text-primary-glow">
                CraftStory
              </span>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering Indian artisans through AI-powered storytelling and modern marketplace technology. 
              Connecting tradition with tomorrow, one craft at a time.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary-glow">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary-glow">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary-glow">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary-glow">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* For Buyers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-glow">For Buyers</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Browse Crafts
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Meet Artisans
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Cultural Stories
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Gift Collections
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Track Your Order
              </a>
            </div>
          </div>

          {/* For Artisans */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-glow">For Artisans</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Join Platform
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                AI Assistant
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Marketing Tools
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Success Stories
              </a>
              <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-colors">
                Support Center
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-glow">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="opacity-90">hello@craftstory.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="opacity-90">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary-glow mt-0.5" />
                <span className="opacity-90">
                  123 Heritage Street<br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-75">
              © 2024 CraftStory. All rights reserved. Made with ❤️ for Indian artisans.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                Fair Trade Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;