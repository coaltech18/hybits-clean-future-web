import { useState, useEffect } from "react";

const SmartStats = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: "🧼", text: "100% Sterilized with UV Tech" },
    { icon: "♻️", text: "Over 10,000 kg Plastic Saved" },
    { icon: "🚚", text: "Pickup & Delivery in 24 Hours" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="bg-primary/10 border-b border-primary/20 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl animate-pulse">{stats[currentStat].icon}</span>
          <p className="text-sm font-medium text-foreground transition-all duration-500">
            {stats[currentStat].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartStats;