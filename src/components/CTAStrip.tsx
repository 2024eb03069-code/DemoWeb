import { Phone, MessageCircle, Calendar } from "lucide-react";

const CTAStrip = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary-hover" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Don't wait for Monday. Your fitness journey begins now. 
            Take the first step towards a healthier, stronger you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-background text-foreground hover:bg-foreground hover:text-background"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi, I'm interested in joining the gym. Please share details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-[#25D366] text-white hover:bg-[#128C7E]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Calendar className="w-5 h-5" />
              Get Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
