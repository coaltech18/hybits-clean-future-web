import { useState, useEffect, useRef } from "react";

interface CounterConfig {
  target: number;
  duration?: number;
  startDelay?: number;
}

// Optimized counter animation hook using requestAnimationFrame
export const useCounterAnimation = (configs: Record<string, CounterConfig>) => {
  const [counters, setCounters] = useState<Record<string, number>>(() => 
    Object.keys(configs).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
  );
  
  const animationRefs = useRef<Record<string, number>>({});
  const startTimesRef = useRef<Record<string, number>>({});

  useEffect(() => {
    Object.entries(configs).forEach(([key, config]) => {
      const { target, duration = 2000, startDelay = 0 } = config;
      
      const startAnimation = () => {
        startTimesRef.current[key] = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTimesRef.current[key];
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
          const easedProgress = easeOutCubic(progress);
          
          const currentValue = Math.floor(target * easedProgress);
          
          setCounters(prev => ({ ...prev, [key]: currentValue }));
          
          if (progress < 1) {
            animationRefs.current[key] = requestAnimationFrame(animate);
          }
        };
        
        animationRefs.current[key] = requestAnimationFrame(animate);
      };
      
      const timeoutId = setTimeout(startAnimation, startDelay);
      
      return () => {
        clearTimeout(timeoutId);
        if (animationRefs.current[key]) {
          cancelAnimationFrame(animationRefs.current[key]);
        }
      };
    });

    return () => {
      Object.values(animationRefs.current).forEach(id => {
        if (id) cancelAnimationFrame(id);
      });
    };
  }, []);

  return counters;
}; 