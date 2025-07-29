import { useEffect, useRef, useState } from "react";

const HybitsDNA = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const dnaNodes = [
    { id: 0, label: "Reusability", icon: "♻️", x: 50, y: 30, connections: [1, 3] },
    { id: 1, label: "Affordability", icon: "💰", x: 80, y: 20, connections: [0, 2, 4] },
    { id: 2, label: "Durability", icon: "💪", x: 90, y: 50, connections: [1, 5] },
    { id: 3, label: "Local Production", icon: "🏭", x: 20, y: 60, connections: [0, 4] },
    { id: 4, label: "Women-Led Teams", icon: "👩", x: 60, y: 70, connections: [1, 3, 5] },
    { id: 5, label: "Innovation", icon: "💡", x: 85, y: 80, connections: [2, 4] }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getConnectionPath = (from: typeof dnaNodes[0], to: typeof dnaNodes[0]) => {
    const x1 = from.x;
    const y1 = from.y;
    const x2 = to.x;
    const y2 = to.y;
    
    return `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 10} ${x2} ${y2}`;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hybits DNA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our core values form an interconnected ecosystem of sustainability and innovation
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-96">
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {animationStarted && dnaNodes.map((node) =>
              node.connections.map((connectionId) => {
                const connectedNode = dnaNodes.find(n => n.id === connectionId);
                if (!connectedNode) return null;
                
                return (
                  <path
                    key={`${node.id}-${connectionId}`}
                    d={getConnectionPath(node, connectedNode)}
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.2"
                    fill="none"
                    opacity={activeNode === null || activeNode === node.id || activeNode === connectionId ? "0.6" : "0.2"}
                    className="transition-all duration-500"
                    style={{
                      strokeDasharray: "2 1",
                      animation: animationStarted ? "dash 3s linear infinite" : "none"
                    }}
                  />
                );
              })
            )}
          </svg>

          {/* DNA Nodes */}
          {dnaNodes.map((node, index) => (
            <div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                animationStarted ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transitionDelay: `${index * 200}ms`
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className={`relative group cursor-pointer`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                  activeNode === node.id 
                    ? "bg-primary text-primary-foreground scale-125 shadow-lg" 
                    : "bg-background border-2 border-primary text-primary hover:scale-110"
                }`}>
                  {node.icon}
                </div>
                
                {/* Ripple Effect */}
                <div className={`absolute inset-0 rounded-full border-2 border-primary transition-all duration-1000 ${
                  activeNode === node.id ? "scale-150 opacity-0" : "scale-100 opacity-0"
                }`}></div>
                
                {/* Label */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-foreground text-background text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
                  activeNode === node.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}>
                  {node.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">Hover over each node to explore our values</p>
        </div>
      </div>

    </section>
  );
};

export default HybitsDNA;