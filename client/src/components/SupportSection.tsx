import { useConfig } from "@/lib/config-context";
import FadeIn from "./ui/animation/FadeIn";
import SiteButton from "./ui/site-button";
import FAQItem from "./ui/faq-item";

const SupportSection = () => {
  const { config } = useConfig();
  const contactLinks = config?.contactLinks || {
    discord: "https://discord.magistica.fun",
    telegram: "https://tg.magistica.fun"
  };
  const faqs = config?.faqs || [];

  return (
    <section id="support" className="py-20 px-4">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 text-primary-light">Поддержка</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-dark to-primary-light mx-auto"></div>
            <p className="mt-6 max-w-2xl mx-auto opacity-90">
              У вас возникли вопросы или вам нужна помощь? Наша команда поддержки всегда готова помочь вам!
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto bg-[#1E1E1E] rounded-xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Discord Support */}
              <div className="text-center p-6 rounded-lg bg-[#121212]/50 hover:bg-[#121212]/70 transition duration-300 card-hover">
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fab fa-discord text-3xl text-primary-light"></i>
                </div>
                <h3 className="text-xl font-cinzel font-semibold mb-4 text-light">Discord</h3>
                <p className="mb-6 opacity-80">
                  Присоединяйтесь к нашему серверу Discord для быстрой поддержки, общения с сообществом и участия в специальных событиях.
                </p>
                <SiteButton 
                  href={contactLinks.discord} 
                  external={true}
                  icon={<i className="fab fa-discord"></i>}
                >
                  Присоединиться
                </SiteButton>
              </div>
              
              {/* Telegram Support */}
              <div className="text-center p-6 rounded-lg bg-[#121212]/50 hover:bg-[#121212]/70 transition duration-300 card-hover">
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fab fa-telegram-plane text-3xl text-primary-light"></i>
                </div>
                <h3 className="text-xl font-cinzel font-semibold mb-4 text-light">Telegram</h3>
                <p className="mb-6 opacity-80">
                  Используйте наш Telegram канал для оперативной связи с командой поддержки и получения важных новостей и обновлений.
                </p>
                <SiteButton 
                  href={contactLinks.telegram} 
                  external={true}
                  icon={<i className="fab fa-telegram-plane"></i>}
                >
                  Написать
                </SiteButton>
              </div>
            </div>
            
            <FadeIn delay={0.2}>
              <div className="mt-12 p-6 rounded-lg bg-primary/10 border border-primary/30">
                <h3 className="text-xl font-cinzel font-semibold mb-4 text-light text-center">Часто задаваемые вопросы</h3>
                
                <div className="space-y-4 mt-6">
                  {faqs.map((faq) => (
                    <FAQItem
                      key={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SupportSection;
