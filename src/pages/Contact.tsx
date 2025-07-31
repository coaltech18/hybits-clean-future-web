'use client';
import React, { useState, useEffect } from "react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    organization: "",
    useCase: "",
    dishCount: "",
    message: ""
  });

  const [result, setResult] = useState("");
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = new FormData();
    form.append("access_key", "44e02069-0335-499c-bcf8-e7c53db8c976");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone number",formData.phoneNumber);
    // Note: The key "phone number" is used here to match the expected field in
    form.append("organization", formData.organization);
    form.append("useCase", formData.useCase);
    form.append("dishCount", formData.dishCount);
    form.append("message", formData.message);

    // Debug logs
    for (const [key, value] of form.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "", // Reset phone number field
          organization: "",
          useCase: "",
          dishCount: "",
          message: ""
        });
      } else {
        console.error("Web3Forms Error:", data);
        setResult("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("❌ Something went wrong. Please check your connection.");
    }
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      value: "+91-9945624643",
      description: "Mon-Sat, 9 AM - 8 PM"
    },
    {
      icon: "📧",
      title: "Email",
      value: "info@hybits.in",
      description: "24/7 email support"
    },
    {
      icon: "🌐",
      title: "Website",
      value: "www.hybits.in",
      description: "Online resources"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "WhatsApp", icon: "💬", url: "#" }
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Let's Talk</span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 cursor-default">Sustainability</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
            Ready to make your next event or operation completely sustainable with premium glassware included? 
            Get in touch for a customized solution.
          </p>
          
          {/* Floating elements */}
          <div className="absolute -top-5 -right-10 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-5 -left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 shadow-xl bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 group">
            <h2 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">Get Your Custom Quote</h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-sm font-medium">Organization *</Label>
                  <Input
                    id="organization"
                    placeholder="Company or organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number *</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="useCase" className="text-sm font-medium">Use Case Type *</Label>
                <Select value={formData.useCase} onValueChange={(value) => handleInputChange("useCase", value)} required>
                  <SelectTrigger className="transition-all duration-300 hover:border-primary/50">
                    <SelectValue placeholder="Select your use case" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="event">Event & Wedding</SelectItem>
                    <SelectItem value="foodcourt">Food Court & Catering</SelectItem>
                    <SelectItem value="office">Office & Institution</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dishCount" className="text-sm font-medium">Estimated Dish Count</Label>
                <Input
                  id="dishCount"
                  placeholder="e.g., 500 dishes, 200 guests, daily operations"
                  value={formData.dishCount}
                  onChange={(e) => handleInputChange("dishCount", e.target.value)}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your specific requirements, event details, or any questions you have..."
                  className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50 resize-none"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="cta"
                className="w-full"
              >
                <span className="relative z-10">Send Message</span>
              </Button>
              
              {result && (
                <div className={`text-center p-3 rounded-lg transition-all duration-300 ${
                  result.includes('✅') ? 'bg-green-50 text-green-700 border border-green-200' : 
                  result.includes('❌') ? 'bg-red-50 text-red-700 border border-red-200' : 
                  'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  {result}
                </div>
              )}
            </form>
          </Card>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold hover:text-primary transition-colors duration-300 cursor-default">Get in Touch</h2>
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-card/70 border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">{info.title}</h3>
                      <p className="text-primary font-medium group-hover:text-primary/80 transition-colors duration-300">{info.value}</p>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-card/70 border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors duration-300">Current Service Areas</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center group-hover:text-foreground transition-colors duration-300">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  Bangalore Urban District
                </p>
                <p className="text-muted-foreground text-xs mt-4 group-hover:text-foreground transition-colors duration-300">
                  Don't see your area? Contact us for expansion plans.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/70 border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors duration-300">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between hover:bg-primary/5 p-2 rounded transition-all duration-300">
                  <span className="group-hover:text-foreground transition-colors duration-300">Monday - Friday</span>
                  <span className="font-medium group-hover:text-primary transition-colors duration-300">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between hover:bg-primary/5 p-2 rounded transition-all duration-300">
                  <span className="group-hover:text-foreground transition-colors duration-300">Saturday</span>
                  <span className="font-medium group-hover:text-primary transition-colors duration-300">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between hover:bg-primary/5 p-2 rounded transition-all duration-300">
                  <span className="group-hover:text-foreground transition-colors duration-300">Sunday</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Closed</span>
                </div>
                <p className="text-muted-foreground text-xs mt-4 group-hover:text-foreground transition-colors duration-300">
                  Emergency pickups available 24/7 for events
                </p>
              </div>
            </Card>

            <div>
              <h3 className="text-lg font-bold mb-4 hover:text-primary transition-colors duration-300 cursor-default">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-card/70 border border-primary/20 rounded-full flex items-center justify-center text-xl hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-lg transition-all duration-300 group">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Have Questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto group-hover:text-foreground transition-colors duration-300">
              Check out our frequently asked questions or schedule a demo call to see our process firsthand.
            </p>
            <Button 
              variant="outline" 
              className="transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary transform hover:scale-105 border-primary/40 text-primary"
            >
              View FAQ
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
