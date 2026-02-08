import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "999",
    period: "month",
    features: [
      "Full Gym Access",
      "Cardio Equipment",
      "Locker Facility",
      "Basic Support",
    ],
    isPopular: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    price: "1,499",
    period: "month",
    features: [
      "Full Gym Access",
      "Basic Trainer Guidance",
      "Diet Tips & Nutrition",
      "Progress Tracking",
      "Workout Plans",
    ],
    isPopular: true,
    cta: "Join Now",
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "2,499",
    period: "month",
    features: [
      "Personal Trainer",
      "Custom Diet Plan",
      "Weekly Progress Tracking",
      "Priority Support",
      "Body Composition Analysis",
      "Supplement Guidance",
    ],
    isPopular: false,
    cta: "Go Premium",
  },
  {
    name: "3 Month Pack",
    price: "3,999",
    period: "one-time",
    originalPrice: "4,999",
    features: [
      "Full Gym Access",
      "Basic Trainer Guidance",
      "Diet Tips",
      "Save ₹1,000",
    ],
    isPopular: false,
    cta: "Grab Offer",
    badge: "Limited Offer",
    isOffer: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 section-dark">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">PRICING PLANS</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your goals. All plans include gym access during operating hours.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
            <Zap className="w-4 h-4" />
            Free 1-Day Trial Available
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all duration-300 ${
                plan.isPopular
                  ? "pricing-popular scale-105"
                  : "gym-card"
              } ${plan.isOffer ? "border-gym-gold border-2" : ""}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    plan.isOffer
                      ? "bg-gym-gold/20 text-gym-gold"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  <Star className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-display text-2xl text-foreground mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                {plan.originalPrice && (
                  <span className="text-muted-foreground line-through text-lg mr-2">
                    ₹{plan.originalPrice}
                  </span>
                )}
                <span className="font-display text-4xl text-primary">
                  ₹{plan.price}
                </span>
                <span className="text-muted-foreground text-sm">
                  {" "}/ {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#lead-form"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.isPopular
                    ? "btn-primary w-full"
                    : plan.isOffer
                    ? "bg-gym-gold hover:bg-gym-gold/90 text-background"
                    : "btn-secondary w-full"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All prices are inclusive of GST. Terms & conditions apply.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
