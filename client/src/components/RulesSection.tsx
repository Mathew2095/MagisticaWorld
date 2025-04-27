import { useConfig } from "@/lib/config-context";
import FadeIn from "./ui/animation/FadeIn";
import RuleCard from "./ui/rule-card";
import SiteButton from "./ui/site-button";

interface RulesSectionProps {
  showFullButton?: boolean;
}

const RulesSection = ({ showFullButton = true }: RulesSectionProps) => {
  const { config } = useConfig();
  const rules = config?.rules || [];

  return (
    <section id="rules" className="py-20 px-4 bg-[#1E1E1E]">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 magical-text">Правила</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-dark to-primary-light mx-auto"></div>
            <p className="mt-6 max-w-2xl mx-auto opacity-90 font-montserrat leading-relaxed">
              Чтобы сохранить гармонию и безопасность в мире Магистики, мы просим всех участников соблюдать следующие правила:
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          {rules.map((rule, index) => (
            <RuleCard
              key={rule.id}
              index={index + 1}
              title={rule.title}
              description={rule.description}
              delay={index * 0.1}
            />
          ))}
          
          {showFullButton && (
            <FadeIn delay={0.3}>
              <div className="mt-12 text-center">
                <p className="mb-6 italic opacity-80 font-montserrat leading-relaxed">
                  Нарушение правил может привести к предупреждению или более серьезным последствиям в зависимости от характера нарушения. Администрация оставляет за собой право принимать решения по каждому случаю индивидуально.
                </p>
                <SiteButton href="/rules">
                  Полный свод правил
                </SiteButton>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
