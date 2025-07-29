import { useState, useEffect } from "react";

const ZeroWasteMeter = () => {
  const [stats, setStats] = useState({
    platesReplaced: 0,
    plasticSaved: 0,
    participants: 0
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        platesReplaced: prev.platesReplaced + Math.floor(Math.random() * 3),
        plasticSaved: prev.plasticSaved + Math.floor(Math.random() * 0.5 * 100) / 100,
        participants: prev.participants + Math.floor(Math.random() * 2)
      }));
    }, 3000);

    // Initial values
    setTimeout(() => {
      setStats({
        platesReplaced: 1247,
        plasticSaved: 156.8,
        participants: 89
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-accent/20 border border-accent rounded-2xl p-6 lg:p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Zero Waste Meter
        </h3>
        <p className="text-muted-foreground">Live impact tracker • Updated today</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-background/50 rounded-xl">
          <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-xl">🍽️</span>
          </div>
          <div className="counter text-2xl font-bold mb-1">
            {stats.platesReplaced.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground">Plastic Plates Replaced Today</p>
        </div>

        <div className="text-center p-4 bg-background/50 rounded-xl">
          <div className="w-12 h-12 mx-auto mb-3 bg-secondary/20 rounded-full flex items-center justify-center">
            <span className="text-xl">🌊</span>
          </div>
          <div className="counter text-2xl font-bold mb-1">
            {stats.plasticSaved.toFixed(1)} kg
          </div>
          <p className="text-sm text-muted-foreground">Plastic Prevented from Oceans</p>
        </div>

        <div className="text-center p-4 bg-background/50 rounded-xl">
          <div className="w-12 h-12 mx-auto mb-3 bg-accent/40 rounded-full flex items-center justify-center">
            <span className="text-xl">👥</span>
          </div>
          <div className="counter text-2xl font-bold mb-1">
            {stats.participants.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground">Community Members Joined</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>Live updates every few seconds</span>
        </div>
      </div>
    </div>
  );
};

export default ZeroWasteMeter;