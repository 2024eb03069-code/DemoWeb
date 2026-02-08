import { MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi, I'm interested in joining the gym"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center shadow-lg hover:bg-primary hover:border-primary transition-all animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-foreground" />
        </button>
      )}

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
        <div className="flex gap-3">
          <a
            href="tel:+919876543210"
            className="flex-1 py-3 text-center rounded-lg bg-secondary text-foreground font-semibold text-sm"
          >
            📞 Call
          </a>
          <a
            href="#pricing"
            className="flex-1 py-3 text-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
          >
            Join Now
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
