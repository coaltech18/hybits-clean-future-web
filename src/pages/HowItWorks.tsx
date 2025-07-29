import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { ClipboardList, Sparkles, Truck, Recycle, Droplet, PartyPopper, UtensilsCrossed, Rocket, Globe, Soup, Users, Waves, Sprout, Package, Microscope } from 'lucide-react';

const stepDetails = [
  {
    icon: <span className="text-3xl">📦</span>,
    title: "Book Your Package",
    description: "Choose your dishware package based on event size and requirements",
    funFact: "Did you know? Booking online saves you 10% on your first order!"
  },
  {
    icon: <span className="text-3xl">🧼</span>,
    title: "Receive Sanitized Dishes",
    description: "Get UV-sterilized, premium quality dishware delivered to your location",
    funFact: "Our dishes are sanitized using hospital-grade UV-C technology."
  },
  {
    icon: <span className="text-3xl">🍽️</span>,
    title: "Serve with Style",
    description: "Impress your guests with elegant, eco-friendly dining presentation",
    funFact: "Eco-friendly dining can reduce event waste by up to 90%."
  },
  {
    icon: <span className="text-3xl">🚚</span>,
    title: "Return – We Pick Up the Rest",
    description: "Relax while we collect, wash, and sanitize everything for you",
    funFact: "We handle all logistics, so you can focus on your event!"
  }
];


// Timeline animation hook
function useInViewAnimation(count: number): [React.MutableRefObject<any[]>, boolean[]] {
  const refs = useRef<any[]>([]);
  const [visible, setVisible] = useState(Array(count).fill(false));
  useEffect(() => {
    const observers = refs.current.map((ref, idx) => {
      if (!ref) return null;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((v) => {
              const copy = [...v];
              copy[idx] = true;
              return copy;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, [count]);
  return [refs, visible];
}

const testimonials = [
  {
    icon: "🌟",
    quote: "Hybits made our event truly sustainable and hassle-free. The dishes were spotless, and the pickup was seamless. Our guests loved the experience!",
    name: "Priya Sharma",
    title: "Event Manager, Green Events Co."
  },
  {
    icon: "💡",
    quote: "Switching to Hybits for our food court was the best decision. The process is seamless, and our waste has dropped dramatically!",
    name: "Rajesh Kumar",
    title: "Food Court Owner"
  },
  {
    icon: "✨",
    quote: "The quality and service exceeded our expectations. We’ll definitely use Hybits again for future events!",
    name: "Aisha Patel",
    title: "Wedding Planner"
  }
];

const processDetails = [
  {
    title: "UV-C Sterilization",
    color: "bg-primary",
    description: "Advanced UV-C technology eliminates 99.9% of bacteria and viruses. Our process ensures every dish is safe and hygienic for reuse.",
  },
  {
    title: "Multi-Stage Washing",
    color: "bg-secondary",
    description: "Hot water, eco-friendly detergents, and thorough rinsing cycles remove all food residues and contaminants, leaving dishes spotless.",
  },
  {
    title: "Quality Assurance",
    color: "bg-primary",
    description: "Every piece is inspected before packaging and delivery. Our team ensures only the highest quality dishware reaches your event.",
  },
];

const faqs = [
  {
    q: "How are the dishes sanitized?",
    a: "We use a combination of industrial washing and UV-C sterilization to ensure every dish is hygienic and safe for reuse."
  },
  {
    q: "What areas do you serve?",
    a: "We currently serve major metro areas and are expanding rapidly. Contact us to check availability in your city."
  },
  {
    q: "Is there a minimum order size?",
    a: "We cater to all event sizes, from small gatherings to large festivals. Minimums may apply for certain packages."
  },
  {
    q: "How do I book or get a quote?",
    a: "You can book online or contact our team for a custom quote tailored to your needs."
  }
];

const stats = [
  { label: "Dishes Reused", value: 120000 },
  { label: "Events Served", value: 850 },
  { label: "Waste Diverted (kg)", value: 32000 },
  { label: "Customer Satisfaction", value: 99, suffix: "%" }
];

const HowItWorks = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
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

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" && activeStep < stepDetails.length - 1) {
      setActiveStep((prev) => prev + 1);
      stepRefs.current[activeStep + 1]?.focus();
    } else if (e.key === "ArrowLeft" && activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      stepRefs.current[activeStep - 1]?.focus();
    }
  };

  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const handlePrevTestimonial = () => setTestimonialIdx((idx) => (idx === 0 ? testimonials.length - 1 : idx - 1));
  const handleNextTestimonial = () => setTestimonialIdx((idx) => (idx === testimonials.length - 1 ? 0 : idx + 1));

  const [openAccordion, setOpenAccordion] = useState(0);
  const [faqOpen, setFaqOpen] = useState(-1);
  const [counter, setCounter] = useState(stats.map(() => 0));
  useEffect(() => {
    // Animate counters on mount
    const intervals = stats.map((stat, i) => {
      const increment = Math.ceil(stat.value / 60);
      return setInterval(() => {
        setCounter((prev) => {
          const next = [...prev];
          if (next[i] < stat.value) {
            next[i] = Math.min(next[i] + increment, stat.value);
          }
          return next;
        });
      }, 20);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-background/80 to-secondary/30">
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
            How <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hybits</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple, sustainable solution that transforms your dining experience from start to finish
          </p>
        </div>

        {/* Steps (Interactive) */}
        <div className="mb-20">
          {/* Progress Bar */}
          <div className="relative flex justify-center mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-primary/10 rounded-full w-full" style={{ transform: 'translateY(-50%)' }}></div>
            <div
              className="absolute top-1/2 left-0 h-2 bg-primary rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / stepDetails.length) * 100}%`, transform: 'translateY(-50%)' }}
            ></div>
            <div className="flex w-full justify-between relative z-10">
              {stepDetails.map((step, idx) => (
                <button
                  key={step.title}
                  ref={el => stepRefs.current[idx] = el}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 text-2xl focus:outline-none focus:ring-2 focus:ring-primary/60
                    ${activeStep === idx ? 'bg-primary text-primary-foreground border-primary scale-110 shadow-lg' : 'bg-background border-primary/40 text-primary'}
                  `}
                  tabIndex={0}
                  aria-label={step.title}
                  aria-pressed={activeStep === idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  onFocus={() => setActiveStep(idx)}
                  onKeyDown={handleKeyDown}
                >
                  {step.icon}
                </button>
              ))}
            </div>
          </div>
          {/* Step Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepDetails.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < stepDetails.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-4 z-0"></div>
                )}
                {/* Step Card */}
                <div
                  className="step-card relative z-10 text-center bg-card border border-primary/40 opacity-80 shadow-md min-h-[320px] h-[320px] flex flex-col justify-center items-center box-border cursor-pointer"
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  tabIndex={0}
                  aria-label={step.title}
                  aria-pressed={activeStep === index}
                  onKeyDown={handleKeyDown}
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${activeStep === index ? 'text-primary' : ''}`}>{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">{step.description}</p>
                  {/* Show fun fact if active */}
                  {activeStep === index && (
                    <div className="text-xs text-primary font-semibold animate-fade-in-up mt-2">{step.funFact}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Timeline Section */}
        <div className="my-20">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-up">The Hybits Journey Timeline</h2>
          {(() => {
            const timeline = [
              { icon: <Truck className="w-16 h-16" />, label: "Pickup", desc: "We collect used dishes from your event." },
              { icon: <Truck className="w-16 h-16" />, label: "Transport", desc: "Secure, eco-friendly transport to our facility." },
              { icon: <Sparkles className="w-16 h-16" />, label: "Industrial Wash", desc: "Deep cleaning with eco detergents." },
              { icon: <Sparkles className="w-16 h-16" />, label: "UV Sterilization", desc: "Hospital-grade sterilization for safety." },
              { icon: <ClipboardList className="w-16 h-16" />, label: "Quality Check", desc: "Every dish is inspected and packed." },
              { icon: <Recycle className="w-16 h-16" />, label: "Ready for Reuse", desc: "Dishes are ready for the next event!" },
            ];
            const [timelineRefs, timelineVisible] = useInViewAnimation(timeline.length);
            return (
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {timeline.map((item, idx) => (
                  <div
                    key={item.label}
                    ref={el => timelineRefs.current[idx] = el}
                    className={`flex flex-col items-center transition-all duration-700 bg-transparent z-10
                      ${timelineVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                    style={{ animationDelay: `${idx * 100 + 300}ms` }}
                  >
                    <div className="relative group">
                      <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-2xl mb-2 border-2 border-primary shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">
                        {item.icon}
                      </div>
                    </div>
                    <div className="font-semibold text-primary mb-1 mt-1 text-center">{item.label}</div>
                    <div className="text-xs text-muted-foreground text-center max-w-[120px]">{item.desc}</div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
        {/* Sustainability Stats (moved here) */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="bg-card border border-primary/20 rounded-2xl p-6 flex flex-col items-center shadow-md animate-fade-in-up">
                <div className="text-3xl font-bold text-primary mb-2">
                  {counter[idx].toLocaleString()}{stat.suffix || ''}
                </div>
                <div className="text-sm text-muted-foreground text-center font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Process (Accordion) */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                The Science Behind Our Sterilization
              </h2>
              <div className="space-y-4">
                {processDetails.map((item, idx) => (
                  <div key={item.title}>
                    <button
                      className={`flex items-center w-full text-left p-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 mb-2
                        ${openAccordion === idx ? 'border-primary bg-primary/10' : 'border-primary/20 bg-background hover:bg-primary/5'}`}
                      onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                      aria-expanded={openAccordion === idx}
                      aria-controls={`accordion-panel-${idx}`}
                    >
                      <span className={`w-6 h-6 mr-4 rounded-full flex-shrink-0 ${item.color}`}></span>
                      <span className="font-semibold flex-1">{item.title}</span>
                      <span className={`ml-2 transition-transform duration-300 ${openAccordion === idx ? 'rotate-90' : ''}`}>▶</span>
                    </button>
                    <div
                      id={`accordion-panel-${idx}`}
                      className={`overflow-hidden transition-all duration-500 text-muted-foreground text-sm pl-10 pr-2
                        ${openAccordion === idx ? 'max-h-40 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                      aria-hidden={openAccordion !== idx}
                    >
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl animate-pulse-glow">🧬</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={item.q}>
                <button
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 mb-2 flex items-center justify-between
                    ${faqOpen === idx ? 'border-primary bg-primary/10' : 'border-primary/20 bg-background hover:bg-primary/5'}`}
                  onClick={() => setFaqOpen(faqOpen === idx ? -1 : idx)}
                  aria-expanded={faqOpen === idx}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-semibold">{item.q}</span>
                  <span className={`ml-2 transition-transform duration-300 ${faqOpen === idx ? 'rotate-90' : ''}`}>▶</span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
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
        {/* CTA Section (Animated) */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have made the switch to sustainable dining
          </p>
          <Button
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-semibold text-lg px-10 py-5 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow mt-4"
            onClick={() => navigate("/contact")}
          >
            Get Started !
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;