import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const EventsWeddingsService = () => {
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
      name: "Intimate",
      guests: "50-150",
      price: "₹8/plate",
      features: [
        "Premium ceramic plates",
        "Elegant serving bowls",
        "Steel cutlery set",
        "Premium glassware included",
        "Next day delivery",
        "24/7 support"
      ],
      popular: false
    },
    {
      name: "Celebration",
      guests: "150-500",
      price: "₹6/plate", 
      features: [
        "All Intimate features",
        "Custom packaging",
        "Same day pickup",
        "Dedicated coordinator",
        "Backup inventory",
        "Premium glassware included"
      ],
      popular: true
    },
    {
      name: "Grand",
      guests: "500-2000+",
      price: "₹4/plate",
      features: [
        "All Celebration features",
        "Multiple delivery locations",
        "Event setup assistance",
        "Premium dishware options",
        "Priority customer service",
        "Premium glassware included"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priya & Rahul",
      event: "Wedding Reception - 800 guests",
      quote: "Hybits made our dream wedding sustainable! The dishes were beautiful, and we saved the environment too.",
      image: "👰‍♀️"
    },
    {
      name: "Corporate Events Co.",
      event: "Product Launch - 300 guests",
      quote: "Professional service, elegant presentation. Our clients were impressed with the eco-friendly approach.",
      image: "🏢"
    },
    {
      name: "Mumbai Wedding Planner",
      event: "Destination Wedding - 400 guests", 
      quote: "Reliable partner for all our events. Quality dishes, timely delivery, and excellent customer service.",
      image: "💐"
    }
  ];

  const features = [
    {
      icon: "✨",
      title: "Premium Quality",
      description: "Hospital-grade UV sterilization ensures every dish meets the highest hygiene standards for your special day."
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description: "24-48 hour service guarantee. Emergency bookings available for last-minute events."
    },
    {
      icon: "🎨",
      title: "Custom Packaging",
      description: "Branded packaging options available. Make your event memorable with personalized presentation."
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      description: "Personal event coordinator assigned to manage your requirements from booking to collection."
    },
    {
      icon: "🔄",
      title: "Backup Inventory",
      description: "Emergency backup dishes available on-site to handle unexpected guest count increases."
    },
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description: "Reduce event waste by 90%. Carbon-neutral deliveries available for environmentally conscious events."
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
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.1) 1px, transparent 0)`,
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
              🎉
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Caterers & Event Organizers
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Elevate your events and catering with premium, sustainable dishware solutions. Perfect for weddings, corporate events, parties, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => navigate('/contact')}
              >
                Get Event Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Catering & Event Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium quality, sustainable solutions designed for caterers, event planners, and organizers of all scales.
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
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Catering & Event Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your event size and requirements
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
                  <p className="text-muted-foreground">{pkg.guests} guests</p>
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
                      ? 'bg-primary hover:bg-primary/90 text-white' 
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Happy Clients</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients say about their successful events with Hybits
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
                  <p className="text-sm text-primary font-medium">{testimonial.event}</p>
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
            Ready to Make Your Event Stand Out?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your event. Our team will help you choose the perfect package and ensure your event is both beautiful and sustainable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => navigate('/contact')}
            >
              Get Custom Quote
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

export default EventsWeddingsService; 