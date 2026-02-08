import { useState } from "react";
import { Send, User, Phone, CheckCircle } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) return;
    
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Open WhatsApp with the lead info
      const message = encodeURIComponent(
        `Hi, I'm ${formData.name}. I'm interested in joining the gym. My phone number is ${formData.phone}. Please contact me with details.`
      );
      window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">
              Thank You!
            </h3>
            <p className="text-muted-foreground mb-6">
              We've received your request. Our team will contact you shortly to schedule your free trial.
            </p>
            <a
              href="tel:+919876543210"
              className="btn-primary inline-flex"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 md:py-24 section-dark">
      <div className="container px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
              🎁 Limited Time Offer
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Book Your <span className="text-gradient">Free Trial</span>
            </h2>
            <p className="text-muted-foreground">
              Get a free 1-day gym pass. No commitment required.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="gym-card">
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                    maxLength={100}
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  We'll contact you on WhatsApp
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Get Free Trial
                  </span>
                )}
              </button>
            </div>

            {/* Trust Text */}
            <p className="text-xs text-center text-muted-foreground mt-4">
              🔒 Your information is secure. We don't spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
