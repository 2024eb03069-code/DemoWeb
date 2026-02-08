import { Star, Quote, Shield, Award, Users } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Best gym in Nagpur, trainers are very supportive and environment is motivating. Lost 8kg in 3 months!",
    result: "Lost 8kg",
  },
  {
    name: "Priya Deshmukh",
    rating: 5,
    text: "Clean gym, good equipment, and flexible timings. As a working woman, I appreciate the safe environment.",
    result: "Toned body",
  },
  {
    name: "Amit Patil",
    rating: 5,
    text: "I lost 6kg in 2 months with their guidance. Suraj sir is an amazing trainer. Highly recommended!",
    result: "Lost 6kg",
  },
];

const trustBadges = [
  { icon: Shield, label: "Clean & Hygienic" },
  { icon: Award, label: "Certified Trainers" },
  { icon: Users, label: "1300+ Reviews" },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 section-dark">
      <div className="container px-4">
        {/* Google Rating Style */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-secondary rounded-full px-6 py-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gym-gold fill-current" />
              ))}
            </div>
            <span className="font-display text-2xl text-foreground">4.7</span>
            <span className="text-muted-foreground">on Google</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Trusted by <span className="text-gradient">1300+ Happy Members</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the community that's transforming their lives every day
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="trust-badge hover:border-primary/50 transition-colors"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gym-card relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gym-gold fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.result}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Placeholder */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Real transformations from our members</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg bg-secondary flex items-center justify-center border border-border">
                <span className="text-xs text-muted-foreground">Transformation {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
