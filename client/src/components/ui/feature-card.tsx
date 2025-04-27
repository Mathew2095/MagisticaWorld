import FadeIn from "./animation/FadeIn";
import { getIconComponent } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <FadeIn delay={delay}>
      <div className="bg-[#1E1E1E] rounded-lg p-6 shadow-lg card-hover">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl text-primary-light">
          {getIconComponent(icon)}
        </div>
        <h3 className="text-xl font-cinzel font-semibold mb-4 text-center text-light">{title}</h3>
        <p className="text-center text-light-gray opacity-80">
          {description}
        </p>
      </div>
    </FadeIn>
  );
};

export default FeatureCard;
