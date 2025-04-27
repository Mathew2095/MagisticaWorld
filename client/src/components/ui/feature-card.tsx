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
        <div className="icon-circle w-16 h-16 mx-auto mb-6 text-2xl">
          {getIconComponent(icon)}
        </div>
        <h3 className="text-xl font-cinzel font-semibold mb-4 text-center text-light">{title}</h3>
        <p className="text-center text-light-gray opacity-80 font-montserrat">
          {description}
        </p>
      </div>
    </FadeIn>
  );
};

export default FeatureCard;
