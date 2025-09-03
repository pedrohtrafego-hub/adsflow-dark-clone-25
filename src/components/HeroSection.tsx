import { ChevronDown } from "lucide-react";
import CometEffect from "./CometEffect";
const HeroSection = () => {
  return <section className="hero-particles min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <CometEffect />
      <div className="container mx-auto px-4 lg:px-8 z-10">
        <div className="w-full">
          {/* Content - Text positioned further down, buttons moved up */}
          <div className="text-left mb-16 px-4 lg:px-8 pt-8" style={{
          marginLeft: '-2rem'
        }}>
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Agência Ads Flow
            </h1>
            
            {/* Subtitle with gradient - Fixed overflow issue */}
            <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6 overflow-visible leading-[1.2] pb-2">
              Marketing & Performance
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mb-8 mx-0 my-0 text-gray-50 text-left py-0 px-0 lg:text-xl font-extrabold">
              Transformamos cliques em clientes e conectamos marcas ao público certo.
            </p>
          </div>

          {/* CTA Buttons - Moved down a bit more */}
          <div className="flex justify-center mb-6 mt-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5534999000559?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..." target="_blank" rel="noopener noreferrer" className="btn-primary text-sm my-0 mx-0 px-[16px] py-[9px]">
                Fale com um especialista
              </a>
              <a href="#sobre" className="btn-outline text-sm px-4 py-2">
                Nossos Serviços
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mb-8 mt-12">
            <a href="#sobre" className="animate-bounce cursor-pointer hover:scale-110 transition-transform">
              <ChevronDown size={28} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;