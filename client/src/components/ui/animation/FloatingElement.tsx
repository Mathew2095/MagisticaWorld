import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  amplitude?: number;
}

const FloatingElement = ({ 
  children, 
  duration = 6,
  delay = 0,
  amplitude = 10,
  className = ""
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
