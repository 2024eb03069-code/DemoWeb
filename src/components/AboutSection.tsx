import { 
  Award, 
  Sparkles, 
  Users, 
  Shield, 
  Clock, 
  Heart 
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Trainers",
    description: "Certified professionals with 8+ years of experience",
  },
  {
    icon: Sparkles,
    title: "Clean Equipment",
    description: "Well-maintained and sanitized machines daily",
  },
  {
    icon: Users,
    title: "Friendly Environment",
    description: "Supportive community that motivates each other",
  },
  {
    icon: Shield,
    title: "Beginner Friendly",
    description: "We guide you from your first day to fitness success",
  },
  {
    icon: Heart,
    title: "1300+ Trust Us",
    description: "Nagpur's most loved gym since 2016",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Open 6 AM to 11 PM for your convenience",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-2">ABOUT US</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Your Fitness Journey{" "}
              <span className="text-gradient">Starts Here</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Suraj Wanjari Personal Trainer & Unisex Gym, we believe fitness is for everyone. 
              Since 2016, we've helped over 1300+ members in Nagpur transform their bodies and lives. 
              Whether you're a beginner or an athlete, our experienced trainers and modern equipment 
              will help you achieve your goals.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Stats Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-8xl md:text-9xl text-primary mb-4">8+</div>
                <p className="text-2xl text-foreground font-display">Years of Excellence</p>
                <p className="text-muted-foreground mt-2">Serving Nagpur Since 2016</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
              <p className="font-display text-3xl text-primary">1300+</p>
              <p className="text-sm text-muted-foreground">Happy Members</p>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 shadow-lg border border-border">
              <p className="font-display text-3xl text-gym-gold">4.7★</p>
              <p className="text-sm text-muted-foreground">Google Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
