import { MapPin, Phone, Clock, MessageCircle, Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">CONTACT US</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Visit Our <span className="text-gradient">Gym Today</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Come see our facilities, meet our trainers, and start your transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="gym-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground mb-3">
                  Kamal Chowk, Nagpur, Maharashtra, India
                </p>
                <a
                  href="https://maps.google.com/?q=Kamal+Chowk+Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="gym-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* Timing Card */}
            <div className="gym-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Gym Timings</h3>
                <p className="text-muted-foreground">
                  Open Daily: 6:00 AM – 11:00 PM
                </p>
                <p className="text-sm text-primary mt-1">Currently Open</p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="btn-primary flex-1 min-w-[140px] justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi, I want to visit the gym"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1 min-w-[140px] justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-xl overflow-hidden border border-border h-[400px] lg:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3023776424!2d79.0701!3d21.1441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzM5LjAiTiA3OcKwMDQnMTIuNCJF!5e0!3m2!1sen!2sin!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location Map"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
