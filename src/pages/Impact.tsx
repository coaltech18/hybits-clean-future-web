import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, Droplet, PartyPopper, UtensilsCrossed, Rocket, Globe, Soup, Users, Waves, Sprout, ClipboardList, Truck, Sparkles } from 'lucide-react';

const eventTypes = [
  { label: "Small Gathering (50 guests)", guests: 50 },
  { label: "Medium Event (200 guests)", guests: 200 },
  { label: "Large Event (1000 guests)", guests: 1000 },
];
const IMPACT_PER_GUEST = {
  waste: 0.05, // kg plastic waste per guest (disposables)
  water: 12,   // liters water saved per guest
};

const timelineMilestones = [
  {
    year: 2022,
    title: "Hybits Launch",
    desc: "First event served, introducing reusable dishware to the market.",
    icon: "🚀"
  },
  {
    year: 2023,
    title: "100th Event Milestone",
    desc: "Celebrated our 100th event, saving over 10,000 kg of plastic waste.",
    icon: "🎉"
  },
  {
    year: 2023,
    title: "Water Efficiency Upgrade",
    desc: "Implemented new washing tech, reducing water use by 30%.",
    icon: "💧"
  },
  {
    year: 2024,
    title: "Expanded to 3 Cities",
    desc: "Now serving events in Delhi, Mumbai, and Bangalore.",
    icon: "🌏"
  },
  {
    year: 2024,
    title: "400,000 Dishes Processed",
    desc: "Major milestone in sustainable dining for India.",
    icon: "🍽️"
  },
  {
    year: 2024,
    title: "Premium Glassware Launch",
    desc: "Introduced premium glassware to all packages, further reducing plastic cup waste.",
    icon: "🍸"
  },
];

const methodology = [
  {
    icon: "♻️",
    title: "Plastic Waste Prevented",
    formula: "Guests × 0.05 kg",
    desc: "We estimate that each guest using disposables generates about 50g of plastic waste. By switching to reusables, this waste is avoided."
  },
  {
    icon: "💧",
    title: "Water Saved",
    formula: "Guests × 12 L",
    desc: "Our centralized washing system uses 12 liters less water per guest compared to traditional hand washing or disposables."
  },
  {
    icon: "🍸",
    title: "Glassware Impact",
    formula: "Premium glassware included",
    desc: "Premium glassware eliminates plastic cup waste while providing elegant beverage service for all events."
  }
];

const impactFaqs = [
  {
    q: "How do you calculate plastic waste prevented?",
    a: "We estimate 50g of plastic waste per guest is avoided by using reusables instead of disposables."
  },
  {
    q: "How is water saving measured?",
    a: "Our centralized washing system uses 12 liters less water per guest compared to traditional methods."
  },
  {
    q: "What are your future sustainability goals?",
    a: "By 2025, we aim to prevent 50,000 kg of plastic waste, serve 1,000+ events, and expand to 10 cities."
  },
  {
    q: "Can I get a custom impact report for my event?",
    a: "Yes! Contact us and we'll provide a detailed report based on your event's size and type."
  },
  {
    q: "Is premium glassware really included in all packages?",
    a: "Yes! Premium glassware is now included in all our packages at no extra cost, helping reduce plastic cup waste."
  }
];

const Impact = () => {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({
    plastic: 0,
    water: 0,
    events: 0,
    dishes: 0,
  });
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

  // Interactive Impact Calculator state
  const [selectedEvent, setSelectedEvent] = useState(eventTypes[1]);
  const [calcWaste, setCalcWaste] = useState(0);
  const [calcWater, setCalcWater] = useState(0);
  useEffect(() => {
    // Animate calculator counters
    let waste = 0, water = 0;
    const targetWaste = Math.round(selectedEvent.guests * IMPACT_PER_GUEST.waste);
    const targetWater = Math.round(selectedEvent.guests * IMPACT_PER_GUEST.water);
    setCalcWaste(0); setCalcWater(0);
    const wasteInterval = setInterval(() => {
      waste += Math.ceil(targetWaste / 40);
      if (waste >= targetWaste) { waste = targetWaste; clearInterval(wasteInterval); }
      setCalcWaste(waste);
    }, 20);
    const waterInterval = setInterval(() => {
      water += Math.ceil(targetWater / 40);
      if (water >= targetWater) { water = targetWater; clearInterval(waterInterval); }
      setCalcWater(water);
    }, 20);
    return () => { clearInterval(wasteInterval); clearInterval(waterInterval); };
  }, [selectedEvent]);

  // Animate counters on load
  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration = 2000) => {
      let current = 0;
      const increment = target / (duration / 50);
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
      animateCounter(15000, 'plastic');
      animateCounter(50000, 'water');
      animateCounter(850, 'events');
      animateCounter(400000, 'dishes');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const caseStudies = [
    {
      title: "Tech Conference 2024",
      type: "Corporate Event",
      stats: "2,500 attendees, 3 days",
      impact: "Saved 750kg plastic waste compared to disposables",
      quote: "Seamless execution and exceptional hygiene standards made our event truly sustainable.",
      client: "TechCorp India"
    },
    {
      title: "Green Campus Initiative",
      type: "Educational Institution",
      stats: "5,000 students daily",
      impact: "Reduced cafeteria waste by 85% in first semester",
      quote: "Students love the quality and sustainability. It's changed our entire campus culture.",
      client: "Delhi University"
    },
    {
      title: "Royal Wedding Celebration",
      type: "Wedding Event",
      stats: "1,200 guests, 5 events",
      impact: "Zero plastic waste while maintaining premium presentation",
      quote: "Our guests couldn't stop praising the elegant dishware and eco-friendly approach.",
      client: "Sharma Family"
    }
  ];

  const [activeMilestone, setActiveMilestone] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(-1);
  const [methodOpen, setMethodOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(-1);

  const stats = [
    { label: "Plastic Waste Prevented", key: "plastic" },
    { label: "Water Saved Through Efficiency", key: "water" },
    { label: "Successfully Served", key: "events" },
    { label: "Processed & Sterilized", key: "dishes" },
  ];

  const statFunFacts = [
    "That's equivalent to 1.5 million plastic bottles!",
    "Enough water saved to fill 20 swimming pools!",
    "That's more events than most venues host in a year!",
    "Enough dishes to serve a small city!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary/10 to-background/80">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Making a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Real Difference</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every dish washed, every event served, every choice made contributes to a more sustainable future
          </p>
        </div>
        {/* Interactive Impact Calculator */}
        <div className="max-w-4xl mx-auto mb-16 bg-card border border-primary/20 rounded-2xl p-12 shadow-xl flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-8">Calculate Your Event's Impact</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 w-full">
            {eventTypes.map((type) => (
              <button
                key={type.label}
                className={`flex-1 min-w-[180px] px-6 py-4 rounded-2xl border font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40
                  ${selectedEvent.label === type.label ? 'bg-primary text-primary-foreground border-primary scale-105 shadow-lg' : 'bg-background border-primary/30 text-primary hover:bg-primary/10'}`}
                onClick={() => setSelectedEvent(type)}
                aria-pressed={selectedEvent.label === type.label}
              >
                {type.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="flex flex-col items-center">
              <Recycle className="text-primary mb-3" size={48} />
              <div className="text-3xl font-bold text-primary mb-2">{calcWaste.toLocaleString()} kg</div>
              <div className="text-base text-muted-foreground">Plastic Waste Prevented</div>
            </div>
            <div className="flex flex-col items-center">
              <Droplet className="text-secondary mb-3" size={48} />
              <div className="text-3xl font-bold text-secondary mb-2">{calcWater.toLocaleString()} L</div>
              <div className="text-base text-muted-foreground">Water Saved</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-8 text-center w-full">*Compared to single-use disposables for the same event size</p>
        </div>

        {/* Impact Counters (Enhanced) */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <Card
              key={stat.label}
              className="p-8 text-center bg-card border border-primary shadow-md transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredStat(idx)}
              onMouseLeave={() => setHoveredStat(-1)}
            >
              <div className="text-3xl mb-4">{idx === 0 ? '♻️' : idx === 1 ? '💧' : idx === 2 ? '🎉' : '🍽️'}</div>
              <div className="counter text-2xl mb-2">{counters[stat.key].toLocaleString()}+</div>
              <div className={`text-sm font-medium ${idx % 2 === 0 ? 'text-primary' : 'text-secondary'} mb-1`}>{stat.label.split(' ')[0]}</div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              {/* Fun Fact Tooltip */}
              <div className={`transition-all duration-300 text-xs mt-3 ${hoveredStat === idx ? 'opacity-100' : 'opacity-0 h-0'} text-primary font-semibold`}>{hoveredStat === idx && statFunFacts[idx]}</div>
            </Card>
          ))}
        </div>
        {/* Interactive Sustainability Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Sustainability Timeline</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {timelineMilestones.map((milestone, idx) => (
              <button
                key={milestone.title}
                className={`flex flex-col items-center px-8 py-6 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 text-lg shadow-md
                  ${activeMilestone === idx ? 'bg-primary text-primary-foreground border-primary scale-110 shadow-xl' : 'bg-background border-primary/20 text-primary hover:bg-primary/10'}`}
                onClick={() => setActiveMilestone(idx)}
                aria-pressed={activeMilestone === idx}
              >
                <div className="text-3xl mb-2">{milestone.icon}</div>
                <div className="font-bold text-lg">{milestone.year}</div>
              </button>
            ))}
          </div>
          <div className="bg-card border border-primary/20 rounded-3xl p-12 shadow-xl text-center transition-all duration-500 animate-fade-in-up max-w-4xl mx-auto">
            <div className="text-5xl mb-4">{timelineMilestones[activeMilestone].icon}</div>
            <div className="text-2xl font-bold mb-2">{timelineMilestones[activeMilestone].title}</div>
            <div className="text-lg text-muted-foreground mb-2">{timelineMilestones[activeMilestone].year}</div>
            <div className="text-xl text-primary font-medium">{timelineMilestones[activeMilestone].desc}</div>
          </div>
        </div>
        {/* How We Calculate Impact (Accordion) */}
        <div className="max-w-4xl mx-auto mb-16">
          <button
            className={`w-full text-left p-7 rounded-3xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 font-bold text-2xl flex items-center mb-4
              ${methodOpen ? 'border-primary bg-primary/10' : 'border-primary/20 bg-background hover:bg-primary/5'}`}
            onClick={() => setMethodOpen((open) => !open)}
            aria-expanded={methodOpen}
            aria-controls="methodology-panel"
          >
            <span className="mr-4 text-3xl">🧮</span> How We Calculate Impact
            <span className={`ml-auto transition-transform duration-300 text-3xl ${methodOpen ? 'rotate-90' : ''}`}>▼</span>
          </button>
          <div
            id="methodology-panel"
            className={`overflow-hidden transition-all duration-500 text-muted-foreground text-lg
              ${methodOpen ? 'max-h-[600px] py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
            aria-hidden={!methodOpen}
          >
            <div className="grid md:grid-cols-2 gap-12">
              {methodology.map((item) => (
                <div key={item.title} className="flex items-start gap-6">
                  <div className="text-5xl mt-1">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-primary mb-2 text-xl">{item.title}</div>
                    <div className="text-sm font-mono bg-primary/10 px-3 py-2 rounded mb-2 inline-block">{item.formula}</div>
                    <div className="text-base text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Our Environmental Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every Hybits service directly contributes to reducing India's plastic waste crisis. 
                Our centralized washing system uses 60% less water than traditional methods while 
                achieving hospital-grade cleanliness standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">85%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Waste Reduction</h4>
                    <p className="text-muted-foreground text-sm">Compared to single-use alternatives</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold">60%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Water Efficiency</h4>
                    <p className="text-muted-foreground text-sm">Through optimized washing cycles</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">100%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Eco-Friendly Detergents</h4>
                    <p className="text-muted-foreground text-sm">Biodegradable cleaning solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Sprout className="text-primary/50" size={128} />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        {/* Success Stories section removed as requested */}

        {/* Future Goals */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our 2025 Goals</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">50,000 kg</div>
              <p className="text-muted-foreground">Plastic waste prevented</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">1,000+</div>
              <p className="text-muted-foreground">Events served sustainably</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">10 Cities</div>
              <p className="text-muted-foreground">Expanded operations</p>
            </div>
          </div>
          
          <Button 
            size="lg"
            variant="cta"
            onClick={() => navigate("/contact")}
          >
            Join the Sustainable Dining Movement
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {impactFaqs.map((item, idx) => (
              <div key={item.q}>
                <button
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 mb-2 flex items-center justify-between
                    ${faqOpen === idx ? 'border-primary bg-primary/10' : 'border-primary/20 bg-background hover:bg-primary/5'}`}
                  onClick={() => setFaqOpen(faqOpen === idx ? -1 : idx)}
                  aria-expanded={faqOpen === idx}
                  aria-controls={`impact-faq-panel-${idx}`}
                >
                  <span className="font-semibold">{item.q}</span>
                  <span className={`ml-2 transition-transform duration-300 ${faqOpen === idx ? 'rotate-90' : ''}`}>▶</span>
                </button>
                <div
                  id={`impact-faq-panel-${idx}`}
                  className={`overflow-hidden transition-all duration-500 text-muted-foreground text-sm pl-4 pr-2
                    ${faqOpen === idx ? 'max-h-32 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  aria-hidden={faqOpen !== idx}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;