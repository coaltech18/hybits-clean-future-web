import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  TypeScript interfaces                                             */
/* ------------------------------------------------------------------ */
interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

/* ------------------------------------------------------------------ */
/*  Components                                                        */
/* ------------------------------------------------------------------ */
const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ${className}`}
  >
    {children}
  </section>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isActive, onClick }) => (
  <div 
    className={`cursor-pointer transition-all duration-300 p-6 rounded-xl border-2 ${
      isActive 
        ? 'border-primary bg-primary/5 shadow-lg transform -translate-y-1' 
        : 'border-gray-200 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5'
    }`}
    onClick={onClick}
  >
    <div className="flex items-center mb-3">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
        isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
      }`}>
        {year.slice(-2)}
      </div>
      <h3 className={`ml-4 font-bold text-lg transition-colors duration-300 ${
        isActive ? 'text-primary' : 'text-foreground'
      }`}>
        {title}
      </h3>
    </div>
    <div className={`overflow-hidden transition-all duration-500 ${
      isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const InteractiveQuote: React.FC<{ children: React.ReactNode; author?: string }> = ({ children, author }) => (
  <div className="group relative my-8 p-6 border-l-4 border-primary/30 bg-primary/5 rounded-r-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 cursor-pointer">
    <blockquote className="text-xl font-medium text-primary italic group-hover:text-primary/90 transition-colors duration-300">
      {children}
    </blockquote>
    {author && (
      <cite className="block mt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        — {author}
      </cite>
    )}
    <div className="absolute top-2 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
      "
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */
const OurStory: React.FC = () => {
  const navigate = useNavigate();
  const [activeTimelineItem, setActiveTimelineItem] = useState<number>(0);
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

  const timelineData = [
    {
      year: "2019",
      title: "NPSE - No Plastic Save Earth",
      description: "Chethan launched a grassroots awareness movement to combat single-use plastics. He organized community meetings, engaged with local businesses, and advocated for sustainable alternatives."
    },
    {
      year: "2020",
      title: "Deep Research Phase",
      description: "Extensive research journey across multiple states studying dishwashing setups, interviewing vendors, speaking with event organizers, and analyzing food court operations."
    },
    {
      year: "2021",
      title: "System Prototyping",
      description: "Development of centralized, automated dishwashing system prototypes. The gap became clear: India needed a complete ecosystem for dishware management."
    },
    {
      year: "2022",
      title: "Hybits Launch",
      description: "NPSE evolved into Hybits, India's first organized dishware rental and sterilization service, offering a comprehensive infrastructure solution."
    }
  ];

  const handleJoinMission = (): void => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(88, 182, 146, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* ---------------- HERO ---------------- */}
      <Section id="hero" className="text-center">
        <div className="relative">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Our</span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              Story
            </span>
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
              The journey from a single moment of realization to India's first
              organized dishware revolution. How one hospitality professional
              transformed his vision into a sustainable reality that's changing
              how India dines.
            </p>
          </div>

          {/* Subtle floating elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </Section>

      {/* ---------------- BEGINNING ---------------- */}
      <Section id="beginning">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors duration-300 cursor-default">
            The Moment Everything Changed
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-lg leading-relaxed space-y-8">
            <div className="group p-6 rounded-xl hover:bg-card/50 transition-all duration-300">
              <p className="group-hover:text-foreground transition-colors duration-300 text-muted-foreground">
                In 2019, <strong className="text-foreground bg-primary/10 px-1 rounded group-hover:bg-primary/20 transition-colors duration-300">Chethan Shetty</strong>, a seasoned hotelier with
                deep roots in the hospitality industry, found himself at a busy
                wedding hall in Bangalore. What he witnessed that evening would
                become the catalyst for a revolution that would transform how
                India approaches sustainable dining.
              </p>
            </div>
            
            <div className="group p-6 rounded-xl hover:bg-card/50 transition-all duration-300">
              <p className="group-hover:text-foreground transition-colors duration-300 text-muted-foreground">
                Hundreds of plastic plates were being dumped into black bags—dirty,
                broken, and bound for landfills. But this wasn't an isolated incident.
                As someone deeply embedded in the industry, Chethan knew this scene
                was replaying itself across street vendors, bars, festivals, corporate
                canteens, and even temples throughout the country, every single day.
              </p>
            </div>
            
            <InteractiveQuote>
              What bothered him most wasn't just the waste—it was the complete
              absence of viable alternatives.
            </InteractiveQuote>
            
            <div className="group p-6 rounded-xl hover:bg-card/50 transition-all duration-300">
              <p className="group-hover:text-foreground transition-colors duration-300 text-muted-foreground">
                The question that haunted him was simple yet profound: Why were we
                still choosing disposable over reusable? The answer, he realized,
                lay not in preference but in systemic gaps—convenience, inconsistent
                hygiene practices, and most critically, the lack of reliable
                infrastructure.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------- FOUNDER ---------------- */}
      <Section id="founder">
        <Card className="p-8 bg-card border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                Meet the Founder
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p className="hover:text-foreground transition-colors duration-300 p-3 rounded hover:bg-primary/5">
                  <strong className="text-foreground">Chethan Shetty</strong>{" "}
                  didn't set out to become an entrepreneur. As a hospitality
                  industry veteran, he understood the operational pressures
                  that businesses faced: the need for fast service, cost
                  efficiency, and uncompromising hygiene standards.
                </p>
                <p className="hover:text-foreground transition-colors duration-300 p-3 rounded hover:bg-primary/5">
                  He knew that restaurants, caterers, and event organizers
                  weren't using plastic by choice—they used it because
                  traditional dishwashing methods were unreliable,
                  time-consuming, and often unhygienic.
                </p>
                <p className="hover:text-foreground transition-colors duration-300 p-3 rounded hover:bg-primary/5">
                  This deep industry knowledge would prove invaluable as he
                  embarked on a mission that would challenge the status quo
                  and create an entirely new category of service in India.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative group/photo">
                <div className="w-80 h-96 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 cursor-pointer group-hover/photo:scale-105">
                  <div className="text-center text-gray-500 group-hover/photo:text-primary transition-colors duration-300">
                    <div className="text-6xl mb-4 group-hover/photo:scale-110 transition-transform duration-300">👨‍💼</div>
                    <p className="font-medium text-lg">Founder Photo</p>
                    <p className="text-sm opacity-70">Chethan Shetty</p>
                    <p className="text-xs mt-2 opacity-50">Click to add photo</p>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* ---------------- INTERACTIVE TIMELINE ---------------- */}
      <Section id="timeline">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors duration-300 cursor-default">
            From Awareness to Action
          </h2>
          <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            Click on each milestone to explore the journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              isActive={activeTimelineItem === index}
              onClick={() => setActiveTimelineItem(index)}
            />
          ))}
        </div>
      </Section>

      {/* ---------------- THE SOLUTION ---------------- */}
      <Section id="solution">
        <Card className="p-10 bg-gradient-to-br from-card to-primary/5 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
          <h2 className="text-3xl font-bold mb-8 text-center group-hover:text-primary transition-colors duration-300">
            The System That Changed Everything
          </h2>

          <div className="max-w-4xl mx-auto">
            <InteractiveQuote author="Chethan Shetty">
              India needed a system—not just clean dishes.
            </InteractiveQuote>

            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <div className="p-4 rounded-lg hover:bg-white/50 hover:text-foreground transition-all duration-300 cursor-default">
                <p>
                  Hybits wasn't built as just another cleaning service. It was designed as a comprehensive infrastructure 
                  solution that addresses every pain point in the dishware lifecycle. From procurement and sterilization 
                  to delivery and collection, every step was reimagined for maximum efficiency and sustainability.
                </p>
              </div>
              
              <div className="p-4 rounded-lg hover:bg-white/50 hover:text-foreground transition-all duration-300 cursor-default">
                <p>
                  The system operates on three fundamental principles: hospital-grade sterilization ensuring maximum hygiene, 
                  complete logistics management removing all operational hassles, and environmental responsibility that reduces 
                  waste by up to 90% without any compromise on quality or service standards.
                </p>
              </div>
              
              <div className="p-4 rounded-lg hover:bg-white/50 hover:text-foreground transition-all duration-300 cursor-default">
                <p>
                  What makes Hybits unique isn't just the technology—it's the understanding that sustainable solutions must 
                  be more convenient and reliable than the alternatives they're replacing. Every process was designed with 
                  the end user in mind, ensuring that choosing sustainability also meant choosing superior service.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* ---------------- TODAY & CTA ---------------- */}
      <Section id="today">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold hover:text-primary transition-colors duration-300 cursor-default">
            Where We Stand Today
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="p-6 rounded-xl hover:bg-card/50 transition-all duration-300 group">
              <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                What began with one unit, a few crates of plates, and a team of believers has grown into a 
                movement that's transforming how India approaches sustainable dining. Hybits now serves food outlets, 
                hospitals, malls, corporate facilities, events, and even individual households across the country.
              </p>
            </div>
            
            <div className="p-6 rounded-xl hover:bg-card/50 transition-all duration-300 group">
              <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                We've processed hundreds of thousands of dishes, saved tons of plastic from reaching landfills, 
                and proven that sustainability and operational excellence can coexist. But more importantly, 
                we've changed mindsets—showing that environmental responsibility doesn't require compromise.
              </p>
            </div>
            
            <Card className="p-6 bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/90">India's First</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Organized dishware rental and sterilization service, proudly serving sustainability with every plate.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
              The Mission Continues
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                For Chethan, Hybits represents more than a business—it's a revolution to eliminate disposables 
                and restore accountability to how India eats and serves food.
              </p>
              
              <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Every plate cleaned, every event served, and every partnership formed brings us closer to a future 
                where sustainable dining is not just an option, but the natural choice for businesses and consumers alike.
              </p>
              
              <InteractiveQuote>
                This is just the beginning of India's sustainable dining revolution.
              </InteractiveQuote>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group/btn"
                onClick={handleJoinMission}
              >
                <span className="relative z-10">Join Our Mission</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* ---------------- FOOTER QUOTE ---------------- */}
      <Section id="footer" className="pb-24">
        <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/30 text-center hover:shadow-xl transition-all duration-300 group">
          <blockquote className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            "A revolution to wipe out disposables and restore accountability to how India eats and serves."
          </blockquote>
          <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            — Chethan Shetty, Founder & CEO, Hybits
          </p>
        </Card>
      </Section>
    </div>
  );
};

export default OurStory;
