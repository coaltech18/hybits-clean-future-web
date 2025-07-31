import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImagejpg from "@/assets/hero-dishes.jpg";
import SmartStats from "@/components/SmartStats";
import DishJourney from "@/components/DishJourney";
import ZeroWasteMeter from "@/components/ZeroWasteMeter";
import UnboxingAnimation from "@/components/UnboxingAnimation";
import LifecycleSlider from "@/components/LifecycleSlider";
import HybitsDNA from "@/components/HybitsDNA";

const Home = () => {
  const [counters, setCounters] = useState({
    plastic: 0,
    dishes: 0,
  });
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const navigate = useNavigate();

  // Animate counters on load
  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    const timer = setTimeout(() => {
      animateCounter(10000, 'plastic');
      animateCounter(250000, 'dishes');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      title: "Event Manager, Green Events Co.",
      quote: "Hybits transformed our sustainability goals. Zero plastic waste at our last conference!"
    },
    {
      name: "Rajesh Kumar",
      title: "Food Court Owner",
      quote: "The sterilization quality is outstanding. Our customers love the eco-friendly approach."
    },
    {
      name: "Dr. Anjali Patel",
      title: "Hospital Administrator",
      quote: "Perfect for our cafeteria. Hygienic, sustainable, and hassle-free operations."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-3 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(88, 182, 146, 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Smart Stats Banner */}
      <SmartStats />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight overflow-visible">
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">It's not just clean.</span>{" "}
                  <span className="text-primary inline-block hover:scale-105 transition-transform duration-300 cursor-default relative -top-0.5 pb-2">
                    It's <span className="relative top-0.5">Hybits</span> clean.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                  India's first reusable dishware, premium glassware & centralized dishwashing solution
                </p>
              </div>

              {/* Value Propositions */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center p-6 bg-card/70 border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:bg-card transition-all duration-300 group cursor-pointer">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🧼</div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">100% Sterilized Dishes</h3>
                </Card>
                <Card className="text-center p-6 bg-card/70 border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:bg-card transition-all duration-300 group cursor-pointer">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🍸</div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">Premium Glassware Included</h3>
                </Card>
                <Card className="text-center p-6 bg-card/70 border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:bg-card transition-all duration-300 group cursor-pointer">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">♻️</div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">90% Less Plastic Waste</h3>
                </Card>
                <Card className="text-center p-6 bg-card/70 border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:bg-card transition-all duration-300 group cursor-pointer">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🚚</div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">Zero Hassle Pickup & Delivery</h3>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  onClick={() => navigate("/contact")}
                >
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative group animate-float">
              <img
                src={heroImagejpg}
                srcSet={`${heroImagejpg} 584w`}
                sizes="(max-width: 600px) 320px, 584px"
                alt="UV-sterilized dishes"
                className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                fetchPriority="high"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 to-primary/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="text-center p-8 bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {counters.plastic.toLocaleString()}+ kg
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Plastic Waste Saved</p>
            </Card>
            <Card className="text-center p-8 bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {counters.dishes.toLocaleString()}
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Dishes Washed</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Zero Waste Meter Section */}
      <section className="py-12 bg-background relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZeroWasteMeter />
        </div>
      </section>

      {/* Unboxing Animation */}
      <UnboxingAnimation />

      {/* Lifecycle Loop Slider */}
      <LifecycleSlider />

      {/* Hybits DNA Section */}
      <HybitsDNA />

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(88, 182, 146, 0.4) 1px, transparent 0)`,
              backgroundSize: '80px 80px'
            }} />
          </div>

          <div className="text-center mb-16 relative">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Our</span>{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 cursor-default">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300 leading-relaxed">
              Every dish served creates a ripple effect of positive change. See how we're transforming India's dining landscape.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                🌱
              </div>
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                10,000+ kg
              </div>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                Plastic Waste Prevented
              </p>
            </Card>

            <Card className="p-6 bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                🍽️
              </div>
              <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                5 Million+
              </div>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                Meals Served Sustainably
              </p>
            </Card>

            <Card className="p-6 bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                🏢
              </div>
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                Partner Businesses
              </p>
            </Card>

            <Card className="p-6 bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>
              <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                15 Cities
              </div>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                Across India
              </p>
            </Card>
          </div>

          {/* Impact Highlights */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300 cursor-default">
                Environmental Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300 group">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">90% Waste Reduction</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">Compared to disposable alternatives</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors duration-300 group">
                  <div className="w-3 h-3 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-secondary transition-colors duration-300">Carbon Neutral Delivery</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">Eco-friendly logistics network</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300 group">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">Water Conservation</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">50% less water usage per wash cycle</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 hover:text-secondary transition-colors duration-300 cursor-default">
                Social Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors duration-300 group">
                  <div className="w-3 h-3 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-secondary transition-colors duration-300">Local Employment</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">Created 200+ sustainable jobs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300 group">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">Community Awareness</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">Educational programs on sustainability</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors duration-300 group">
                  <div className="w-3 h-3 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-secondary transition-colors duration-300">Business Savings</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">₹50L+ saved by partner businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA to Impact Landing Page */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-background border border-primary/20 hover:shadow-xl transition-all duration-300 group max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                See Our Complete Impact Story
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Dive deeper into how we're creating lasting change for businesses, communities, and the environment across India.
              </p>
              <Button 
                size="lg"
                variant="cta"
                onClick={() => navigate('/impact')}
              >
                <span className="relative z-10">Explore Full Impact Report</span>
              </Button>
            </Card>
          </div>

          {/* Floating elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 hover:text-primary transition-colors duration-300 cursor-default">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
              Trusted by events, food courts, and institutions across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card/70 border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-primary/20 pt-4">
                    <p className="font-semibold group-hover:text-primary transition-colors duration-300">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{testimonial.title}</p>
                  </div>
                  <div className="absolute top-2 right-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    "
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;