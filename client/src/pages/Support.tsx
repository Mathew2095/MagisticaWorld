import FadeIn from "@/components/ui/animation/FadeIn";
import SupportSection from "@/components/SupportSection";
import { useConfig } from "@/lib/config-context";
import SiteButton from "@/components/ui/site-button";

const Support = () => {
  const { config } = useConfig();
  const contactLinks = config?.contactLinks || {
    email: "support@magistica.fun"
  };

  return (
    <>
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-primary-light mb-6">Поддержка Магистики</h1>
              <p className="text-xl opacity-80 mb-8">
                Мы всегда готовы помочь вам в решении любых вопросов, связанных с миром Магистики
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <SupportSection />
      
      <section className="py-16 px-4 bg-[#1E1E1E]">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="bg-[#121212]/60 rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-cinzel font-bold mb-6 text-primary-light text-center">Свяжитесь с нами напрямую</h2>
              
              <div className="text-center mb-8">
                <p className="opacity-90 mb-6">
                  Если вы предпочитаете обратиться к нам напрямую по электронной почте, используйте кнопку ниже:
                </p>
                
                <SiteButton 
                  href={`mailto:${contactLinks.email}`}
                  className="mx-auto"
                  icon={<i className="fas fa-envelope"></i>}
                >
                  Написать на почту
                </SiteButton>
              </div>
              
              <div className="mt-12 p-6 border border-primary/30 rounded-lg bg-primary/5">
                <h3 className="text-xl font-cinzel mb-4 text-light text-center">Время ответа</h3>
                <p className="opacity-80 text-center">
                  Мы стараемся отвечать на все обращения в течение 24 часов. В выходные и праздничные дни время ответа может быть увеличено.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Support;
