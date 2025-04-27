import FadeIn from "./animation/FadeIn";

interface RuleCardProps {
  index: number;
  title: string;
  description: string;
  delay?: number;
}

const RuleCard = ({ index, title, description, delay = 0 }: RuleCardProps) => {
  return (
    <FadeIn delay={delay}>
      <div className="bg-[#121212]/60 rounded-lg p-6 mb-6 border-l-4 border-primary">
        <div className="flex items-start">
          <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-primary-light font-cinzel font-bold">{index}</span>
          </div>
          <div className="ml-5">
            <h3 className="text-xl font-cinzel font-semibold mb-2 text-light">{title}</h3>
            <p className="opacity-90">
              {description}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default RuleCard;
