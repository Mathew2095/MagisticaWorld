import FadeIn from "./ui/animation/FadeIn";
import SiteButton from "./ui/site-button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1E1E1E] to-[#121212]">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM3YjJjYmYiIHN0cm9rZS13aWR0aD0iMC41Ij48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIxMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAiIHI9IjIiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzAiIHI9IjIiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIyIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSI1MCIgcj0iMiIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiLz48L2c+PC9zdmc+')]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[5%] w-40 h-40 rounded-full bg-gradient-to-r from-primary-dark to-primary-light opacity-10 blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[5%] w-60 h-60 rounded-full bg-gradient-to-r from-primary to-primary-light opacity-10 blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="icon-circle mx-auto mb-8 text-2xl">
              <i className="fas fa-wand-magic-sparkles"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 magical-text animate-pulse-slow">
              Готовы начать свое магическое путешествие?
            </h2>
            <p className="text-xl mb-10 opacity-90 font-montserrat">
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
