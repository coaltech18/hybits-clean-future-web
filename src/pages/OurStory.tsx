import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  TypeScript interfaces                                             */
/* ------------------------------------------------------------------ */
interface TimelineCard {
  year: string;
  title: string;
  story: string;
}

interface QuoteSlide {
  quote: string;
  context: string;
  author?: string;
}

/* ------------------------------------------------------------------ */
/*  Components                                                        */
/* ------------------------------------------------------------------ */

// Subtle scroll indicator
const ScrollCue: React.FC = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
);

// Flip box timeline card with smooth transitions
const TimelineCard: React.FC<{ card: TimelineCard; isVisible: boolean }> = ({ card, isVisible }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="flex-none w-80 h-96 relative group cursor-pointer snap-center perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Flip container */}
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-xl p-8 shadow-lg backface-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 text-6xl font-bold text-primary">
              {card.year.slice(-2)}
            </div>
          </div>
          
          {/* Year badge */}
          <div className="inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6 bg-primary/10 text-primary">
            {card.year}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-heading font-bold mb-4 leading-tight text-foreground">
            {card.title}
          </h3>
          
          {/* Preview text */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {card.story.split('.')[0]}...
          </p>
          
          {/* Bottom elements */}
          <div className="absolute bottom-8 left-8 right-8">
            {/* Progress dots */}
            <div className="flex justify-center space-x-2 mb-4">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="w-2 h-2 rounded-full bg-gray-300" />
              ))}
            </div>
            
            {/* Hover hint */}
            <div className="text-center text-xs text-muted-foreground">
              Hover to read full story
            </div>
          </div>
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
        </div>
        
        {/* Back side */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-primary/90 text-white rounded-xl p-8 shadow-xl backface-hidden rotate-y-180">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 text-6xl font-bold">
              {card.year.slice(-2)}
            </div>
            <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border-2 border-white/30" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full border border-white/20" />
          </div>
          
          {/* Year badge */}
          <div className="inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6 bg-white/20 text-white">
            {card.year}
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-heading font-bold mb-6 leading-tight">
            {card.title}
          </h3>
          
          {/* Full story */}
          <div className="space-y-4">
            <p className="text-white/95 leading-relaxed text-sm">
              {card.story}
            </p>
            
            {/* Milestone indicators */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" />
                <span className="text-xs text-white/80">Key Milestone</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-xs text-white/80">Growth Phase</span>
              </div>
            </div>
          </div>
          
          {/* Decorative icon */}
          <div className="absolute bottom-6 right-6 opacity-30">
            <div className="text-3xl">🚀</div>
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/30 rounded-xl blur-xl transition-opacity duration-500 -z-10 ${
        isFlipped ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};

// Dynamic quote slider with color transitions
const QuoteSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0);
  
  const quotes: QuoteSlide[] = [
    {
      quote: "Every problem begins with awareness, but solutions require action.",
      context: "The Beginning",
      author: "Chethan Shetty"
    },
    {
      quote: "NPSE wasn't just about plastic—it was about changing mindsets.",
      context: "The Movement",
      author: "Chethan Shetty"
    },
    {
      quote: "Research taught us that convenience beats consciousness every time.",
      context: "The Discovery",
      author: "Chethan Shetty"
    },
    {
      quote: "We realized India needed infrastructure, not just good intentions.",
      context: "The Insight",
      author: "Chethan Shetty"
    },
    {
      quote: "Hybits was born from the understanding that sustainability must be seamless.",
      context: "The Solution",
      author: "Chethan Shetty"
    }
  ];
  
  // Color themes for each stage using website brand colors
  const colorThemes = [
    {
      bg: "from-gray-50 to-gray-100",
      border: "border-gray-200",
      accent: "text-muted-foreground",
      glow: "shadow-gray-200/50"
    },
    {
      bg: "from-gray-100 to-primary/5",
      border: "border-gray-300",
      accent: "text-foreground",
      glow: "shadow-gray-300/50"
    },
    {
      bg: "from-primary/5 to-primary/10",
      border: "border-primary/20",
      accent: "text-primary/80",
      glow: "shadow-primary/20"
    },
    {
      bg: "from-primary/10 to-primary/20",
      border: "border-primary/30",
      accent: "text-primary",
      glow: "shadow-primary/30"
    },
    {
      bg: "from-primary/20 to-primary/30",
      border: "border-primary/40",
      accent: "text-primary",
      glow: "shadow-primary/40"
    }
  ];
  
  // Calculate which quote to show based on slider value
  const quoteIndex = Math.floor((sliderValue / 100) * (quotes.length - 1));
  const currentQuote = quotes[quoteIndex];
  const currentTheme = colorThemes[quoteIndex];
  
  // Calculate smooth color interpolation for in-between values
  const getInterpolatedStyle = () => {
    const exactPosition = (sliderValue / 100) * (quotes.length - 1);
    const progress = exactPosition - Math.floor(exactPosition);
    
    return {
      transform: `translateX(${progress * 10}px)`,
      transition: 'all 0.3s ease-out'
    };
  };
  
  return (
    <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-lg">
      <h3 className="text-2xl font-heading font-bold text-center mb-8 transition-colors duration-500">
        The Journey in Words
      </h3>
      
      {/* Main quote display area with dynamic background */}
      <div className={`relative h-64 bg-gradient-to-br ${currentTheme.bg} rounded-lg overflow-hidden flex items-center justify-center p-8 border-2 ${currentTheme.border} transition-all duration-700 shadow-xl ${currentTheme.glow}`}>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-4 right-4 text-6xl font-bold transition-all duration-700 ${currentTheme.accent}`}>
            {String(quoteIndex + 1).padStart(2, '0')}
          </div>
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-current opacity-20 animate-pulse" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-current opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Quote content with smooth transitions */}
        <div className="text-center max-w-md relative z-10" style={getInterpolatedStyle()}>
          <blockquote className="text-xl font-medium text-foreground italic mb-4 leading-relaxed transition-all duration-500">
            "{currentQuote.quote}"
          </blockquote>
          <div className={`text-sm font-bold mb-1 transition-all duration-500 ${currentTheme.accent}`}>
            {currentQuote.context}
          </div>
          {currentQuote.author && (
            <div className="text-xs text-muted-foreground transition-all duration-500">
              — {currentQuote.author}
            </div>
          )}
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {quotes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === quoteIndex 
                  ? `bg-current ${currentTheme.accent} scale-125` 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced slider with gradient track */}
      <div className="relative mt-6">
        <div className="absolute inset-0 h-2 bg-gradient-to-r from-gray-200 via-gray-300 via-primary/20 via-primary/30 to-primary/40 rounded-lg" />
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer slider z-10"
        />
      </div>
      
      {/* Stage labels with color coding */}
      <div className="flex justify-between mt-4 text-xs font-medium">
        <span className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground">The Beginning</span>
        <span className="text-foreground transition-all duration-300 hover:scale-110 hover:text-primary">The Movement</span>
        <span className="text-primary/80 transition-all duration-300 hover:scale-110 hover:text-primary">The Discovery</span>
        <span className="text-primary transition-all duration-300 hover:scale-110">The Insight</span>
        <span className="text-primary transition-all duration-300 hover:scale-110 font-bold">The Solution</span>
      </div>
      
      {/* Current stage indicator */}
      <div className="text-center mt-4">
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
          currentTheme.bg.replace('from-', 'bg-').replace(' to-primary/10', '').replace(' to-green-50', '').replace(' to-blue-50', '').replace(' to-yellow-50', '').replace(' to-orange-50', '')
        } ${currentTheme.border} ${currentTheme.accent}`}>
          Stage {quoteIndex + 1} of {quotes.length}: {currentQuote.context}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */
const OurStory: React.FC = () => {
  const navigate = useNavigate();
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const timelineData: TimelineCard[] = [
    {
      year: "2019",
      title: "NPSE - No Plastic Save Earth",
      story: "Chethan launched a grassroots movement in Bangalore. Community meetings, business partnerships, and awareness campaigns. The mission: eliminate single-use plastics from daily life."
    },
    {
      year: "2020", 
      title: "The Research Phase",
      story: "18 months of deep research across 12 Indian states. Studying dishwashing setups, interviewing vendors, understanding the real challenges faced by food service businesses."
    },
    {
      year: "2021",
      title: "System Development",
      story: "Moving beyond awareness to action. Developing centralized dishwashing systems and realizing that India needed complete infrastructure, not just clean plates."
    },
    {
      year: "2022",
      title: "Hybits Launch",
      story: "NPSE evolved into Hybits—India's first organized dishware rental and sterilization service. From movement to business, from awareness to infrastructure."
    },
    {
      year: "2024",
      title: "Scaling Impact",
      story: "From one city to nationwide presence. Hybits now serves businesses across India, proving that sustainable solutions can be both practical and profitable."
    },
    {
      year: "2024",
      title: "Premium Glassware Launch",
      story: "Introducing premium glassware to all packages, elevating the dining experience while maintaining our commitment to sustainability and hygiene."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* -------------------- HERO -------------------- */}
      <section className="min-h-screen bg-white flex flex-col justify-center items-center relative px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8 leading-tight">
            Not our past.<br />
            <span className="text-primary">Our now.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            From a single moment of realization to India's sustainable dining revolution.
          </p>
        </div>
        
        <ScrollCue />
      </section>

      {/* -------------------- FOUNDER'S STORY -------------------- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                Meet Chethan Shetty
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  A seasoned hospitality professional with deep roots in India's food service industry. 
                  Chethan understood the operational pressures businesses faced—the need for speed, 
                  efficiency, and uncompromising hygiene standards.
                </p>
                
                <p>
                  In 2019, at a bustling wedding hall in Bangalore, he witnessed something that would 
                  change everything: hundreds of plastic plates being dumped into garbage bags, 
                  destined for landfills. That night, he couldn't sleep.
                </p>
                
                <p>
                  As someone embedded in the industry, Chethan knew this wasn't an isolated incident. 
                  This scene was repeating across thousands of venues daily—street vendors, corporate 
                  canteens, festivals, even temples. The scale was staggering.
                </p>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <blockquote className="text-xl font-medium text-foreground italic">
                    "The industry wasn't choosing plastic out of negligence. They were choosing it 
                    because sustainable alternatives were unreliable, expensive, or inconvenient."
                  </blockquote>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <p className="font-medium text-lg">Chethan Shetty</p>
                  <p className="text-sm opacity-70">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- NPSE ORIGINS -------------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              NPSE: Where It All Began
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No Plastic Save Earth wasn't just a movement—it was the foundation that would 
              eventually become India's sustainable dining infrastructure.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">The Grassroots Movement</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NPSE began with community meetings in Bangalore neighborhoods. Chethan organized 
                awareness sessions, partnered with local businesses, and advocated for sustainable 
                alternatives. The goal was simple: eliminate single-use plastics from daily life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                But awareness alone wasn't enough. People understood the problem but lacked practical 
                alternatives. This gap between consciousness and convenience would become the driving 
                force behind Hybits.
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">The Transition</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As NPSE grew, Chethan realized that sustainable change required more than advocacy—it 
                needed infrastructure. Businesses wanted to be environmentally responsible, but they 
                needed solutions that worked within their operational realities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This insight transformed NPSE from an awareness movement into the foundation for what 
                would become India's first organized dishware rental and sterilization service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- HORIZONTAL TIMELINE -------------------- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-foreground">
            The Evolution Journey
          </h2>
          
          <div 
            ref={timelineRef}
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {timelineData.map((card, index) => (
              <TimelineCard key={index} card={card} isVisible={true} />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- COMPANY PHILOSOPHY -------------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Building Beyond Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hybits represents more than a service—it's the infrastructure that makes 
              sustainable choices the obvious choices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">The Problem We Solve</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every day, millions of plastic plates serve a 15-minute purpose before becoming 
                  500-year problems. We saw this cycle and asked: what if convenience and 
                  sustainability weren't opposing forces?
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just provide clean plates—we provide complete infrastructure. 
                  Hospital-grade sterilization, seamless logistics, and reliability that makes 
                  choosing sustainability easier than choosing disposables.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">The Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  An India where sustainable dining isn't a premium choice—it's the natural choice. 
                  Where businesses thrive while the environment prospers. Where convenience and 
                  consciousness work hand in hand.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">The Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To eliminate disposable culture from India's food service industry by building 
                  infrastructure that makes sustainable practices more convenient, reliable, and 
                  cost-effective than traditional alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- QUOTE SLIDER -------------------- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <QuoteSlider />
        </div>
      </section>

      {/* -------------------- OUTRO -------------------- */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
            Our work remains.<br />
            Our story continues.
          </h2>
          
          <Button 
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3 text-lg font-medium"
            onClick={() => navigate("/contact")}
          >
            Join the Movement
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OurStory;