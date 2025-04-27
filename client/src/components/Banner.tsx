import FadeIn from "./ui/animation/FadeIn";
import { useConfig } from "@/lib/config-context";
import { Link } from "wouter";

const Banner = () => {
  const { config } = useConfig();
  const mainQuote = config?.mainQuote || "Магистика - открой свой собственный магический мир!";

  return (
    <section className="banner-gradient min-h-[70vh] flex items-center justify-center px-4">
      <div className="container mx-auto text-center py-20">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-light leading-tight mb-6">
              {mainQuote}
            </h1>
            <p className="text-xl text-light-gray opacity-90 mb-10 max-w-2xl mx-auto">
              Погрузись в удивительную вселенную магии, тайн и приключений
            </p>
            <Link href="#about">
              <a className="btn-magic text-light font-semibold py-3 px-8 rounded-md shadow-lg inline-block">
                Начать путешествие
              </a>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Banner;
