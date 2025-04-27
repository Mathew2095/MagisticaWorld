import { useConfig } from "@/lib/config-context";
import FadeIn from "./ui/animation/FadeIn";
import FeatureCard from "./ui/feature-card";

const AboutSection = () => {
  const { config } = useConfig();
  
  const aboutContent = config?.aboutContent || {
    title: "О нас",
    history: [],
    imageUrl: "",
    imageCaption: ""
  };
  
  const features = config?.features || [];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 magical-text">{aboutContent.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-dark to-primary-light mx-auto"></div>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* About Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-6 magical-text">Наша история</h3>
              {aboutContent.history.map((paragraph, index) => (
                <p key={index} className="mb-4 opacity-90 font-montserrat leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
              <img 
                src={aboutContent.imageUrl} 
                alt="Магический мир" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-light font-quicksand font-bold text-xl">{aboutContent.imageCaption}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
