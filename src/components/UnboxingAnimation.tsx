import { useEffect, useRef, useState } from "react";

const UnboxingAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const dishwareItems = [
    { 
      name: "Dinner Plates", 
      icon: "🍽️", 
      benefit: "UV sterilized, reusable 500+ times",
      position: { x: "20%", y: "30%" }
    },
    { 
      name: "Bowls", 
      icon: "🥣", 
      benefit: "Perfect for soups and curries",
      position: { x: "40%", y: "20%" }
    },
    { 
      name: "Cups", 
      icon: "☕", 
      benefit: "Heat resistant, eco-friendly material",
      position: { x: "60%", y: "35%" }
    },
    { 
      name: "Cutlery Set", 
      icon: "🍴", 
      benefit: "Stainless steel, dishwasher safe",
      position: { x: "80%", y: "25%" }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOpen(true);
            setTimeout(() => {
              dishwareItems.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleItems(prev => new Set([...prev, index]));
                }, index * 300);
              });
            }, 800);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Unbox Sustainability
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every Hybits package contains premium, reusable dishware ready for your event
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Box Container */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Box Base */}
            <div className={`w-64 h-48 bg-primary/10 border-2 border-primary rounded-lg transition-all duration-1000 transform ${
              isOpen ? "scale-110" : "scale-100"
            }`}>
              {/* Box Lid */}
              <div className={`absolute -top-6 left-0 right-0 h-12 bg-primary/20 border-2 border-primary rounded-lg transition-all duration-1000 transform-gpu ${
                isOpen ? "rotate-12 -translate-y-8 translate-x-4" : "rotate-0 translate-y-0"
              }`}>
                <div className="flex items-center justify-center h-full">
                  <span className="font-bold text-primary">HYBITS</span>
                </div>
              </div>

              {/* Box Content Label */}
              <div className="flex items-center justify-center h-full">
                <span className="text-4xl">📦</span>
              </div>
            </div>

            {/* Floating Items */}
            {dishwareItems.map((item, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 transform ${
                  visibleItems.has(index) 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-16 scale-50"
                }`}
                style={{
                  left: item.position.x,
                  top: item.position.y,
                  transitionDelay: `${index * 300}ms`
                }}
              >
                <div className="group relative">
                  <div className="w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center text-2xl shadow-lg animate-float">
                    {item.icon}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-3 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="font-semibold mb-1">{item.name}</div>
                    <div className="text-xs">{item.benefit}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">Hover over items to see their eco-benefits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnboxingAnimation;