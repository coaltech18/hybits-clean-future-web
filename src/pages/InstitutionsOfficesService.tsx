import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const InstitutionsOfficesService = () => {
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
      name: "Standard",
      capacity: "200-500 daily",
      price: "₹4/plate",
      features: [
        "Health-compliant sterilization",
        "Weekly delivery schedule",
        "Basic usage reporting", 
        "Standard customer support",
        "Quarterly billing"
      ],
      popular: false
    },
    {
      name: "Professional",
      capacity: "500-1500 daily",
      price: "₹3.20/plate",
      features: [
        "All Standard features",
        "Bi-weekly delivery options",
        "Detailed usage analytics",
        "Priority customer support",
        "Monthly billing & reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      capacity: "1500+ daily",
      price: "Custom pricing",
      features: [
        "All Professional features",
        "Multi-location support",
        "Custom delivery schedules",
        "Dedicated account manager",
        "Compliance documentation"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "City General Hospital",
      type: "Healthcare Institution - 1200+ daily meals",
      quote: "Perfect solution for our cafeteria. Meets all health standards and reduces our environmental impact significantly.",
      image: "🏥"
    },
    {
      name: "Tech Corp India",
      type: "Corporate Office - 800 employees",
      quote: "Our employees love the quality dishes. Cost-effective solution that aligns with our sustainability goals.",
      image: "💼"
    },
    {
      name: "Bangalore University",
      type: "Educational Institution - 2000+ students",
      quote: "Reliable service for 3 years now. Helps us maintain hygiene standards while staying within budget.",
      image: "🎓"
    }
  ];

  const features = [
    {
      icon: "🔬",
      title: "Health Compliance",
      description: "Full compliance with FSSAI and institutional hygiene standards. Complete sterilization documentation provided."
    },
    {
      icon: "📋",
      title: "Usage Analytics",
      description: "Detailed reporting on dish usage, cost savings, and environmental impact. Perfect for institutional audits."
    },
    {
      icon: "⏰",
      title: "Scheduled Deliveries",
      description: "Flexible delivery schedules designed around institutional operations. Never disrupts your meal service."
    },
    {
      icon: "💰",
      title: "Budget Friendly",
      description: "Cost-effective pricing with transparent billing. Significant savings compared to disposable alternatives."
    },
    {
      icon: "👥",
      title: "Account Management",
      description: "Dedicated support team familiar with institutional requirements and compliance needs."
    },
    {
      icon: "📊",
      title: "Sustainability Reports",
      description: "Quarterly sustainability impact reports for CSR documentation and environmental compliance."
    }
  ];

  const institutionTypes = [
    {
      icon: "🏥",
      name: "Hospitals",
      description: "Health-compliant solutions for patient and staff cafeterias",
      benefits: ["FSSAI compliant", "Patient-safe sterilization", "Flexible meal schedules"]
    },
    {
      icon: "🏢",
      name: "Corporate Offices",
      description: "Professional dining solutions for employee cafeterias", 
      benefits: ["Cost-effective dining", "Employee satisfaction", "CSR compliance"]
    },
    {
      icon: "🎓",
      name: "Educational Institutions",
      description: "Reliable service for student and staff dining facilities",
      benefits: ["Budget-friendly pricing", "High-volume capacity", "Educational partnerships"]
    },
    {
      icon: "🏛️",
      name: "Government Organizations",
      description: "Compliant solutions for public sector dining requirements",
      benefits: ["Tender-ready pricing", "Government compliance", "Transparent billing"]
    }
  ];

  const complianceCertifications = [
    { name: "FSSAI Certified", icon: "✅", description: "Food safety compliance" },
    { name: "ISO 9001", icon: "🏆", description: "Quality management" },
    { name: "HACCP", icon: "🔍", description: "Hazard analysis" },
    { name: "Green Certified", icon: "🌱", description: "Environmental standards" }
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
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
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
              🏥
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Institutions & Offices
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Reliable, compliant dishware solutions for institutional dining. 
              Built for hospitals, offices, schools, and government facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="cta"
                onClick={() => navigate('/contact')}
              >
                Get Institutional Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Institution Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Serving Every Institution Type</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customized solutions designed for the unique needs of different institutional environments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {institutionTypes.map((type, index) => (
              <Card key={index} className="p-6 bg-card/70 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {type.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet all regulatory requirements with our certified processes and documentation
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {complianceCertifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-card/70 border border-primary/20 hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Institutional-Grade Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built features that meet the demanding requirements of institutional dining
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Institutional Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing plans designed for institutional budgets and requirements
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
                      Recommended
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.capacity}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Leading Institutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how institutions across sectors have improved their dining operations with Hybits
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
                  <p className="text-sm text-primary font-medium">{testimonial.type}</p>
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
            Ready to Upgrade Your Institution's Dining?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a customized proposal for your institution. We'll work with your budget and 
            compliance requirements to deliver the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="cta"
              onClick={() => navigate('/contact')}
            >
              Get Institutional Quote
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

export default InstitutionsOfficesService; 