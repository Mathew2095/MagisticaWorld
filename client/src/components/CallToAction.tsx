import FadeIn from "./ui/animation/FadeIn";
import SiteButton from "./ui/site-button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518601297183-4734d65285c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Магический мир" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#121212] opacity-80"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 text-primary-light animate-pulse-slow">
              Готовы начать свое магическое путешествие?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Присоединяйтесь к тысячам магов и волшебниц, исследующих бескрайний мир Магистики. Ваше приключение ждет!
            </p>
            <SiteButton className="font-bold py-4 px-10 text-lg">
              Начать сейчас
            </SiteButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CallToAction;
