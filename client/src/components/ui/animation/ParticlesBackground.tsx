import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const createParticles = () => {
      // Clear existing particles
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const particleCount = window.innerWidth < 768 ? 30 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Random position, size and animation duration
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const animationDuration = Math.random() * 50 + 30;
        
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.background = `rgba(${157 + Math.random() * 30}, ${78 + Math.random() * 30}, ${221 + Math.random() * 34}, ${Math.random() * 0.3 + 0.1})`;
        particle.style.borderRadius = '50%';
        particle.style.filter = 'blur(1px)';
        particle.style.animation = `float ${animationDuration}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
      }
    };

    createParticles();

    // Recreate particles on window resize
    const handleResize = () => {
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
