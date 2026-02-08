import { Star, MapPin, MessageCircle, Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 pb-12">
        <div className="max-w-3xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="trust-badge">
              <Star className="w-4 h-4 text-gym-gold fill-current" />
              <span className="text-foreground">4.7</span>
              <span className="text-muted-foreground">(1300+ reviews)</span>
            </div>
            <div className="trust-badge">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Kamal Chowk, Nagpur</span>
            </div>
          </div>

          {/* Headline */}
          <h1 
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-none mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Transform Your Body at{" "}
            <span className="text-gradient">Nagpur's Most Trusted Gym</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Fat Loss • Muscle Gain • Personal Training • Beginner Friendly
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#pricing" className="btn-primary group">
              Join Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#lead-form" className="btn-secondary">
              Book Free Trial
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi, I want to know more about the gym membership"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Stats */}
          <div 
            className="grid grid-cols-3 gap-4 max-w-md animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-primary">1300+</p>
              <p className="text-sm text-muted-foreground">Happy Members</p>
            </div>
            <div className="text-center border-x border-border">
              <p className="font-display text-3xl sm:text-4xl text-primary">8+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
