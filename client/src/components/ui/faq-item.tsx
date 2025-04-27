import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cursor-pointer mb-4">
      <div 
        className="flex justify-between items-center p-4 rounded-lg bg-[#121212]/70 hover:bg-[#121212]/90 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-semibold text-light font-montserrat">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10"
        >
          <i className="fas fa-chevron-down text-primary-light"></i>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-[#1E1E1E]/70 rounded-b-lg">
              <p className="opacity-90 font-montserrat leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
