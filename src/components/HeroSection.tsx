import { ChevronDown } from "lucide-react";
import CometEffect from "./CometEffect";

const HeroSection = () => {
  return (
    <section className="hero-particles min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <CometEffect />
      <div className="container mx-auto px-4 lg:px-8 z-10">
        <div className="w-full">
          {/* Content - Aligned exactly with header logo "A" */}
          <div className="text-left mb-20 px-4 lg:px-8">
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Agência Ads Flow
            </h1>
            
            {/* Subtitle with gradient */}
            <h2 className="gradient-text text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Marketing & Performance
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
              Transformamos cliques em clientes e conectamos marcas ao público certo.
            </p>
          </div>

          {/* CTA Buttons - Moved down, centered */}
          <div className="flex justify-center mb-12 mt-48">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://web.whatsapp.com/send?phone=5534999000559&text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2"
              >
                Fale com um especialista
              </a>
              <a
                href="#servicos"
                className="btn-outline text-sm px-4 py-2"
              >
                Nossos Serviços
              </a>
            </div>
          </div>

          {/* Scroll Indicator - Moved down */}
          <div className="flex justify-center mb-8 mt-8">
            <div className="animate-bounce">
              <ChevronDown size={28} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;