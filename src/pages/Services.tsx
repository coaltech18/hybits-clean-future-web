import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Services = () => {
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

  const services = [
    {
      id: "caterers-event-organizers",
      icon: "🍸", // Cocktail glass icon
      title: "Caterers & Event Organizers",
      description: "Premium, sustainable dishware and glassware for all types of events and catering needs.",
      highlights: ["50-10,000+ guests", "24-48 hour turnaround", "Custom event packaging", "Premium glassware included"],
      gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
      id: "food-courts-food-streets",
      icon: "🍸", // Cocktail glass icon
      title: "Food Courts & Food Streets",
      description: "Efficient, eco-friendly dishware and premium glassware for high-volume food courts and bustling food streets.",
      highlights: ["500-5,000+ daily", "Same-day pickup", "Bulk & volume pricing", "Premium glassware included"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "institutions-offices",
      icon: "🍸", // Cocktail glass icon
      title: "Institutions & Offices",
      description: "Reliable dishware and premium glassware solutions for regular use in offices, hospitals, and institutions.",
      highlights: ["200-2,000+ daily", "24 hour turnaround", "Health-compliant", "Premium glassware included"],
      gradient: "from-blue-500/20 to-green-500/20"
    },
    {
      id: "apartment-societies-household-gatherings",
      icon: "🍸", // Cocktail glass icon
      title: "Apartment Societies & Household Gatherings",
      description: "Convenient, eco-friendly dishware and premium glassware for home parties and society events.",
      highlights: ["20-500+ guests", "Flexible packages", "Doorstep delivery & pickup", "Premium glassware included"],
      gradient: "from-green-500/20 to-yellow-500/20"
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === "apartment-societies-household-gatherings") {
      navigate("/services/apartment-societies-household-gatherings");
    } else if (serviceId === "caterers-event-organizers") {
      navigate("/services/events-weddings"); // keep backward compatibility for now
    } else if (serviceId === "food-courts-food-streets") {
      navigate("/services/food-courts-caterers"); // keep backward compatibility for now
    } else {
      navigate(`/services/${serviceId}`);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Our</span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 cursor-default">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300 mb-4">
            Comprehensive dishware and premium glassware solutions tailored for every need. Choose the perfect service for your requirements.
          </p>
          <p className="text-primary font-medium">
            Click on any service below to learn more and get detailed information
          </p>
          
          {/* Floating elements */}
          <div className="absolute -top-5 -right-10 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-5 -left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/70 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Quick Highlights */}
              <div className="space-y-3 mb-8">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Button 
                  variant="ghost"
                  className="text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service.id);
                  }}
                >
                  Learn More →
                </Button>
                <div className="text-primary/60 group-hover:text-primary transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-20">
          <Card className="p-12 bg-primary/5 border border-primary/20 hover:shadow-xl transition-all duration-300 group">
            <h2 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  📦
                </div>
                <h4 className="font-semibold mb-2">Order</h4>
                <p className="text-sm text-muted-foreground">Place your order online or via phone</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  🧼
                </div>
                <h4 className="font-semibold mb-2">Sterilize</h4>
                <p className="text-sm text-muted-foreground">Dishes are professionally cleaned and sterilized</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  🚚
                </div>
                <h4 className="font-semibold mb-2">Deliver</h4>
                <p className="text-sm text-muted-foreground">We deliver to your venue, on time, every time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  ♻️
                </div>
                <h4 className="font-semibold mb-2">Collect & Reuse</h4>
                <p className="text-sm text-muted-foreground">We collect, wash, and reuse for the next event</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Premium Glassware Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Premium Glassware</span>{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 cursor-default">Included in Every Package</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
              Elevate your events with our crystal-clear, elegant premium glassware - now included in all our packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🍸</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Crystal-Clear Quality</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Premium glassware that enhances the visual appeal of any beverage, from cocktails to soft drinks
              </p>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">♻️</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Eco-Friendly & Reusable</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Sustainable alternative to plastic cups, reducing waste while maintaining elegance
              </p>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧼</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Professional Cleaning</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                UV-sterilized and professionally cleaned to ensure the highest hygiene standards
              </p>
            </Card>
          </div>
        </div>

        {/* Why Choose Hybits Comparison Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Why Choose Hybits</span>{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 cursor-default">Over Traditional Options?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
              See how Hybits compares against disposable plates and traditional washing methods
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border border-primary/20 hover:shadow-xl transition-all duration-300 overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-4 px-6 font-bold text-lg text-muted-foreground">Feature</th>
                    <th className="text-center py-4 px-6 font-bold text-lg text-primary">Hybits</th>
                    <th className="text-center py-4 px-6 font-bold text-lg text-muted-foreground">Disposable Plates</th>
                    <th className="text-center py-4 px-6 font-bold text-lg text-muted-foreground">Own Washing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors duration-300 group">
                    <td className="py-6 px-6 font-medium text-foreground">Environmental Impact</td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold group-hover:scale-105 transition-transform duration-300">
                        90% Less Waste
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium">
                        High Waste
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
                        Moderate
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors duration-300 group">
                    <td className="py-6 px-6 font-medium text-foreground">Hygiene Standards</td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold group-hover:scale-105 transition-transform duration-300">
                        UV Sterilized
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-medium">
                        Basic
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
                        Variable
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors duration-300 group">
                    <td className="py-6 px-6 font-medium text-foreground">Setup Time</td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold group-hover:scale-105 transition-transform duration-300">
                        Zero
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-medium">
                        Minimal
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium">
                        High
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors duration-300 group">
                    <td className="py-6 px-6 font-medium text-foreground">Cost Efficiency</td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold group-hover:scale-105 transition-transform duration-300">
                        Optimized
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
                        Moderate
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium">
                        High Labor
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Summary section */}
            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <h3 className="text-xl font-bold text-center mb-4 text-primary">The Hybits Advantage</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Zero Setup Hassle</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Hospital-Grade Clean</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">90% Less Waste</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Cost Optimized</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-xl transition-all duration-300 group">
            <h2 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 group-hover:text-foreground transition-colors duration-300">
              Join hundreds of satisfied customers who've made the switch to sustainable dishware solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta"
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10">Get Custom Quote</span>
              </Button>
              <Button 
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => navigate('/how-it-works')}
              >
                Learn How It Works
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;