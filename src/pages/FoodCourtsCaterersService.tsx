import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FoodCourtsCaterersService = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState<number>(0);

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

  const packages = [
    {
      name: "Starter",
      volume: "500-1000 daily",
      price: "₹3.50/plate",
      features: [
        "Commercial-grade dishes",
        "Standard delivery schedule", 
        "Basic inventory tracking",
        "Email support",
        "Monthly billing"
      ],
      popular: false
    },
    {
      name: "Business",
      volume: "1000-3000 daily",
      price: "₹2.80/plate",
      features: [
        "All Starter features",
        "Same-day pickup available",
        "Priority delivery slots",
        "Dedicated account manager",
        "Real-time inventory dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      volume: "3000+ daily",
      price: "Custom pricing",
      features: [
        "All Business features",
        "Multiple location support",
        "Custom delivery schedules",
        "24/7 emergency support",
        "Advanced analytics & reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Spice Route Food Court",
      business: "12 vendors, 2000+ meals/day",
      quote: "Hybits transformed our operations. No more disposable headaches, customers love the quality dishes!",
      image: "🍜"
    },
    {
      name: "Delhi Catering Co.",
      business: "Corporate catering specialist",
      quote: "Professional service that scales with our business. The cost savings are incredible compared to disposables.",
      image: "🍽️"
    },
    {
      name: "Mall Food Plaza",
      business: "15 food stalls, peak 3000 daily",
      quote: "Reliable partner for 2 years now. Never missed a delivery, always maintains quality standards.",
      image: "🏬"
    }
  ];

  const features = [
    {
      icon: "💪",
      title: "Commercial Durability",
      description: "Heavy-duty dishes designed for high-volume daily use. Built to withstand commercial dishwashing cycles."
    },
    {
      icon: "⚡",
      title: "Same-Day Turnaround",
      description: "Fastest service in the industry. Morning pickup, evening delivery for uninterrupted operations."
    },
    {
      icon: "📊",
      title: "Inventory Management",
      description: "Real-time tracking dashboard. Never run out of dishes with predictive inventory analytics."
    },
    {
      icon: "💰",
      title: "Volume Pricing",
      description: "Significant cost savings compared to disposables. Transparent pricing with no hidden fees."
    },
    {
      icon: "🔄",
      title: "Flexible Scheduling",
      description: "Customizable pickup and delivery schedules to match your business hours and peak times."
    },
    {
      icon: "🎯",
      title: "Account Management",
      description: "Dedicated account manager for enterprise clients. Regular reviews and optimization consultations."
    }
  ];

  const businessBenefits = [
    {
      icon: "💵",
      title: "Cost Reduction",
      stats: "Save up to 60% compared to disposables",
      description: "Reduce your monthly dish expenses while improving quality and customer satisfaction."
    },
    {
      icon: "🌱", 
      title: "Sustainability",
      stats: "90% less waste generation",
      description: "Attract eco-conscious customers and improve your brand image with sustainable practices."
    },
    {
      icon: "⚡",
      title: "Efficiency",
      stats: "Zero procurement hassle",
      description: "No more running out of plates. Automated supply chain handles everything for you."
    },
    {
      icon: "👥",
      title: "Customer Satisfaction",
      stats: "Premium dining experience",
      description: "Quality dishes enhance food presentation and customer perception of your business."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Background pattern */}
      <div className="fixed inset-0 opacity-3 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.1) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-primary mb-4"
                onClick={() => navigate('/services')}
              >
                ← Back to Services
              </Button>
            </div>
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-xl">
              🍜
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Food Courts & Food Streets
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Streamline your food court or food street operations with efficient, eco-friendly dishware solutions. Built for high-volume, fast-paced service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => navigate('/contact')}
              >
                Get Business Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transform Your Food Court or Food Street</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the immediate impact on your bottom line and operational efficiency for food courts and food streets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-card/70 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <div className="text-2xl font-bold text-primary mb-2">
                  {benefit.stats}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for High-Volume Operations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade features designed specifically for food courts and food street vendors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-card/70 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Business Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right package based on your daily volume and operational needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`p-8 relative transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? 'border-primary shadow-lg scale-105 bg-gradient-to-br from-primary/10 to-secondary/10' 
                  : 'border-primary/20 hover:border-primary/40'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.volume}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-primary hover:bg-primary/80 text-white' 
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20'
                  }`}
                  onClick={() => navigate('/contact')}
                >
                  Choose {pkg.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how food courts and food street vendors have transformed their operations with Hybits
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/70 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    {testimonial.image}
                  </div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.business}</p>
                </div>
                <blockquote className="text-muted-foreground italic text-center leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Food Court or Food Street?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a customized quote based on your business volume and requirements. Start saving costs and improving efficiency today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => navigate('/contact')}
            >
              Get Business Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => navigate('/services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodCourtsCaterersService; 