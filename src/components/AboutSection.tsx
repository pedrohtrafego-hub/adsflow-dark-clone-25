import { CheckCircle, Award } from "lucide-react";
const AboutSection = () => {
  return <section id="sobre" className="py-6 lg:py-8 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-center">
          Sobre a <span className="gradient-text">Ads Flow</span>
        </h2>
        
        {/* Main Content Layout */}
        <div className="space-y-6">
          {/* First paragraph */}
          <p className="text-lg text-text-secondary leading-relaxed max-w-5xl mx-auto text-left text-zinc-50">
            Na Ads Flow, acreditamos que marketing vai além de simplesmente "aparecer" — é criar conexões reais com o público certo e transformar cada interação em resultados concretos. Desde 2023, atuamos como parceiros estratégicos de empresas que buscam crescimento sustentável, com foco em performance e retorno sobre investimento (ROI).
          </p>

          {/* Second paragraph */}
          <p className="text-lg text-text-secondary leading-relaxed max-w-5xl mx-auto text-left text-zinc-50">
            À frente da agência está Pedro Corrêa, CEO e Analista de Marketing, graduado em Marketing Digital, com ampla experiência em tráfego pago e estratégias digitais. Certificado em Google Ads (6 certificações) e Google Analytics (GA4), já gerenciou mais de seis dígitos em investimentos em mídia paga, aplicando sempre as melhores práticas e tendências do marketing digital.
          </p>

          {/* Pedro's Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src="/lovable-uploads/517bad4b-a60f-479b-8dcc-0360c2ba9f38.png" alt="Pedro Corrêa, CEO da Ads Flow" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Certification Badge */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border max-w-md">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Equipe Certificada</h3>
                <p className="text-text-secondary">
                  Reconhecidos pelo Google e Meta, aplicamos as melhores práticas do mercado digital.
                </p>
              </div>
            </div>
          </div>

          {/* Key Points - Horizontal Layout */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 max-w-6xl mx-auto">
            <div className="check-item">
              <CheckCircle className="check-icon" />
              <span className="text-sm lg:text-base whitespace-nowrap">Mais de 20 empresas transformadas</span>
            </div>
            <div className="check-item">
              <CheckCircle className="check-icon" />
              <span className="text-sm lg:text-base whitespace-nowrap">ROI médio de 300% em campanhas</span>
            </div>
            <div className="check-item">
              <CheckCircle className="check-icon" />
              <span className="text-sm lg:text-base whitespace-nowrap">Metodologia própria de otimização</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;