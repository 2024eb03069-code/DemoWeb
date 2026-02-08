import { 
  Dumbbell, 
  Flame, 
  Target, 
  Zap, 
  Heart, 
  Users, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers for personalized workout plans.",
  },
  {
    icon: Flame,
    title: "Weight Loss Program",
    description: "Structured programs combining cardio, strength training, and diet guidance.",
  },
  {
    icon: Target,
    title: "Muscle Building",
    description: "Progressive training to build lean muscle mass and strength.",
  },
  {
    icon: Zap,
    title: "Strength Training",
    description: "Powerlifting and functional strength workouts for real-world fitness.",
  },
  {
    icon: Heart,
    title: "Cardio & Fat Burn",
    description: "High-intensity workouts to maximize calorie burn and cardiovascular health.",
  },
  {
    icon: Users,
    title: "Beginner Fitness Plan",
    description: "Guided programs for fitness beginners with step-by-step progression.",
  },
  {
    icon: Sparkles,
    title: "Women Fitness Training",
    description: "Specialized programs designed for women's fitness goals and safety.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">OUR SERVICES</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Achieve Your Goals</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From beginners to advanced athletes, we have programs tailored for everyone
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="gym-card group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
