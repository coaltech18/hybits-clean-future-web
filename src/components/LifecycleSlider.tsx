import { useState } from "react";

const LifecycleSlider = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const lifecycleSteps = [
    {
      title: "Plate Used at Event",
      icon: "🎉",
      description: "Premium dishware enhances your event experience",
      color: "bg-primary"
    },
    {
      title: "Collected & Transported",
      icon: "🚛",
      description: "Hassle-free pickup from your venue",
      color: "bg-secondary"
    },
    {
      title: "Industrial Washing",
      icon: "🧼",
      description: "Deep cleaning with eco-friendly detergents",
      color: "bg-accent"
    },
    {
      title: "UV Sterilization",
      icon: "🔬",
      description: "Hospital-grade sterilization for safety",
      color: "bg-primary"
    },
    {
      title: "Quality Check & Packing",
      icon: "📦",
      description: "Inspected and packed for next use",
      color: "bg-secondary"
    },
    {
      title: "Ready for Reuse",
      icon: "♻️",
      description: "Sustainable cycle continues, waste prevented",
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The Lifecycle Loop
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore how every dish creates a sustainable impact through our circular system
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Current Step Display */}
          <div className="text-center mb-12">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl ${lifecycleSteps[currentStep].color}/20 border-2 border-${lifecycleSteps[currentStep].color.split('-')[1]} transition-all duration-500`}>
              {lifecycleSteps[currentStep].icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{lifecycleSteps[currentStep].title}</h3>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              {lifecycleSteps[currentStep].description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-8">
            <div className="h-2 bg-muted rounded-full">
              <div 
                className="h-2 bg-primary rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / lifecycleSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {lifecycleSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`p-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 ${
                  currentStep === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background border border-border hover:border-primary"
                }`}
              >
                <div className="text-2xl mb-2">{step.icon}</div>
                <div className="text-sm font-medium">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentStep((prev) => prev === 0 ? lifecycleSteps.length - 1 : prev - 1)}
              className="p-3 rounded-full bg-background border border-border hover:border-primary transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentStep((prev) => (prev + 1) % lifecycleSteps.length)}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifecycleSlider;