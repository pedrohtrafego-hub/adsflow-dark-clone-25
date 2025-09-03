import { CheckCircle, Target, TrendingUp, Zap } from "lucide-react";
const FinalCtaSection = () => {
  return <section id="final-cta" className="py-0.5 lg:py-1 section-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Preparado para crescer de <span className="text-primary">verdade?</span>
          </h2>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Reunião de alinhamento estratégico</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Implementação em até 48 horas</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Relatórios semanais de performance</h3>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mb-2">
          <a href="https://wa.me/5534999000559?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..." target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105">
            Quero Vender Mais Agora
          </a>
        </div>

      </div>
    </section>;
};
export default FinalCtaSection;