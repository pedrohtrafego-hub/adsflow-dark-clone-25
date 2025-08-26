import { CheckCircle, Target, TrendingUp, Zap } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="py-12 lg:py-20 section-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
          Vamos escalar os seus resultados com marketing de verdade?
        </h2>
        
        {/* Key Features */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-3 text-white">
            <Target className="w-6 h-6 text-primary" />
            <span className="font-medium">Estratégia Personalizada</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="font-medium">Resultados Mensuráveis</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Zap className="w-6 h-6 text-primary" />
            <span className="font-medium">Crescimento Acelerado</span>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mb-8">
          <a
            href="https://wa.me/5534999000559?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Quero Vender Mais Agora
          </a>
        </div>

        {/* Social Proof */}
        <div className="text-gray-300">
          <p className="text-center">
            📞 Reunião de Alinhamento estratégico • ⚡ Implementação em até 48h • 📊 Relatórios semanais de performance
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;