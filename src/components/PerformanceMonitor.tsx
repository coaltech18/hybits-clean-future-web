import React, { useState, useEffect } from 'react';

// Performance monitoring component for development
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: { used: 0, total: 0 },
    renderTime: 0,
    isVisible: false
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        const memory = (performance as any).memory ? {
          used: Math.round((performance as any).memory.usedJSHeapSize / 1048576),
          total: Math.round((performance as any).memory.totalJSHeapSize / 1048576)
        } : { used: 0, total: 0 };

        setMetrics(prev => ({
          ...prev,
          fps,
          memory,
          renderTime: Math.round((currentTime - lastTime) / frameCount * 100) / 100
        }));

        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyP') {
        setMetrics(prev => ({ ...prev, isVisible: !prev.isVisible }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    animationId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !metrics.isVisible) {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-[9999] backdrop-blur-sm">
      <div className="mb-2 font-bold text-green-400">Performance Monitor</div>
      <div>FPS: <span className={metrics.fps < 30 ? 'text-red-400' : metrics.fps < 50 ? 'text-yellow-400' : 'text-green-400'}>{metrics.fps}</span></div>
      <div>Memory: {metrics.memory.used}MB / {metrics.memory.total}MB</div>
      <div>Avg Render: {metrics.renderTime}ms</div>
      <div className="mt-2 text-gray-400 text-[10px]">Ctrl+Shift+P to toggle</div>
    </div>
  );
}; 