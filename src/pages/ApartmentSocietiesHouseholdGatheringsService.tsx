import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ApartmentSocietiesHouseholdGatheringsService = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState<number>(0);

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
      name: "Mini Gathering",
      guests: "20-50",
      price: "₹10/plate",
      features: [
        "Premium plates & cutlery",
        "Doorstep delivery & pickup",
        "No cleaning required",
        "Flexible timings",
        "Support for last-minute needs"
      ],
      popular: false
    },
    {
      name: "Community Bash",
      guests: "50-200",
      price: "₹8/plate",
      features: [
        "All Mini Gathering features",
        "Custom packaging",
        "On-site support",
        "Eco-friendly disposables for extras",
        "Priority delivery slots"
      ],
      popular: true
    },
    {
      name: "Society Mega",
      guests: "200-500+",
      price: "Custom pricing",
      features: [
        "All Community Bash features",
        "Multiple delivery points",
        "Event coordinator assistance",
        "Backup inventory",
        "Special rates for repeat events"
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: "🏘️",
      title: "Community Convenience",
      description: "Perfect for society events, birthday parties, and home gatherings. No more dishwashing hassle!"
    },
    {
      icon: "♻️",
      title: "Eco-Friendly",
      description: "Reduce waste by 90% with reusable dishware. All items are sanitized and ready to use."
    },
    {
      icon: "🚚",
      title: "Doorstep Service",
      description: "We deliver and pick up at your convenience. Flexible slots for busy families and committees."
    },
    {
      icon: "🧼",
      title: "Hygiene First",
      description: "Hospital-grade sterilization for every plate, bowl, and spoon. Safe for kids and elders."
    },
    {
      icon: "💡",
      title: "Flexible Packages",
      description: "Choose a package that fits your gathering size and budget. Custom options available."
    },
    {
      icon: "🎉",
      title: "Event Support",
      description: "On-call support for last-minute changes and emergencies. We make your event stress-free."
    }
  ];

  const testimonials = [
    {
      name: "Green Valley Society",
      event: "Annual Day - 300 guests",
      quote: "Hybits made our society event so easy! No mess, no waste, and everyone loved the eco-friendly touch.",
      image: "🏡"
    },
    {
      name: "The Sharmas",
      event: "Birthday Party - 40 guests",
      quote: "Doorstep delivery and pickup was a lifesaver. Plates were spotless and the team was super helpful.",
      image: "🎂"
    },
    {
      name: "Sunshine Apartments",
      event: "Festival Gathering - 120 guests",
      quote: "No more disposable waste! Hybits is now our go-to for all society functions.",
      image: "🌞"
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
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,197,94,0.1) 1px, transparent 0)`,
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
              🏘️
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Apartment Societies & Household Gatherings
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Make your next gathering hassle-free and sustainable. Perfect for society events, family parties, and home celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="cta"
                onClick={() => navigate('/contact')}
              >
                Get Gathering Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hassle-free, eco-friendly, and affordable dishware for every home and community event.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-card/70 border border-primary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-300 group">
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
      {/* Packages Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right package for your gathering size and needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`p-8 relative transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? 'border-primary shadow-lg scale-105 bg-gradient-to-br from-primary/10 to-secondary/10' 
                  : 'border-primary/20 hover:border-secondary/40'
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
                  variant="cta"
                  className="w-full"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from families and societies who made the switch to Hybits
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
            Ready to Host a Hassle-Free Gathering?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a custom quote for your next event. Enjoy the convenience and sustainability of Hybits dishware for your home or society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="cta"
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

export default ApartmentSocietiesHouseholdGatheringsService; 