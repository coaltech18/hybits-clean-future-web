import { useEffect, useRef, useState } from "react";

const DishJourney = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const journeySteps = [
    { icon: "📦", title: "Dish Pickup", description: "Collect used dishes from your event" },
    { icon: "🚛", title: "Transport", description: "Secure transport to our facility" },
    { icon: "🔬", title: "UV Sterilization", description: "Hospital-grade UV sterilization process" },
    { icon: "📋", title: "Packed", description: "Carefully packed for next use" },
    { icon: "🚚", title: "Delivered", description: "Fresh delivery to your location" },
    { icon: "♻️", title: "Reused", description: "Ready for your next sustainable event" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute("data-step") || "0");
            setVisibleSteps(prev => new Set([...prev, stepIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-step]");
    stepElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How a Dish Travels
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow the sustainable journey of every dish through our system
          </p>
        </div>

        <div className="relative">
          {/* Journey Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2 hidden lg:block"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-primary transform -translate-y-1/2 transition-all duration-2000 ease-out hidden lg:block"
               style={{ width: `${(visibleSteps.size / journeySteps.length) * 100}%` }}></div>

          <div className="grid lg:grid-cols-6 gap-8 lg:gap-4">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                data-step={index}
                className={`text-center relative transition-all duration-700 transform ${
                  visibleSteps.has(index) 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                  visibleSteps.has(index) 
                    ? "bg-primary text-primary-foreground scale-110" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishJourney;