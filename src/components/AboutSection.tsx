import { CheckCircle, Award } from "lucide-react";
const AboutSection = () => {
  return <section id="sobre" className="py-4 bg-background scroll-mt-16 lg:py-[22px]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-center">
          Sobre a <span className="gradient-text">Ads Flow</span>
        </h2>
        
        {/* Main Content Layout */}
        <div className="space-y-4">
          {/* First paragraph */}
          <p className="text-lg text-text-secondary leading-relaxed max-w-5xl mx-auto text-left text-zinc-50">
            Na Ads Flow, acreditamos que marketing vai além de simplesmente "aparecer" — é criar conexões reais com o público certo e transformar cada interação em resultados concretos. Desde 2023, atuamos como parceiros estratégicos de empresas que buscam crescimento sustentável, com foco em performance e retorno sobre investimento (ROI).
          </p>

          {/* Second paragraph */}
          <p className="text-lg text-text-secondary leading-relaxed max-w-5xl mx-auto text-left text-zinc-50">À frente da agência está Pedro Corrêa, CEO e Analista de Marketing, graduado em Marketing Digital, com ampla experiência em tráfego pago e estratégias digitais. Certificado em Google Ads (6 certificações) e Google Analytics (GA4), já gerenciou mais de seis dígitos em investimentos em mídia paga, atendendo empresas no Brasil e no exterior, sempre aplicando as melhores práticas e tendências globais do marketing digital.</p>

          {/* Third paragraph - New */}
          <p className="text-lg text-text-secondary leading-relaxed max-w-5xl mx-auto text-left text-zinc-50">
            Nossa equipe desenvolve estratégias personalizadas em tráfego pago, sites de alta conversão, redes sociais, funis de vendas, produção de vídeos e análise de dados — tudo para gerar impacto real no faturamento da sua empresa.
          </p>

          {/* Pedro's Image */}
          <div className="flex justify-center py-px">
            <div className="w-80 h-80">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src="/lovable-uploads/517bad4b-a60f-479b-8dcc-0360c2ba9f38.png" alt="Pedro Corrêa, CEO da Ads Flow" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Key Points - Below Photo */}
          
        </div>
      </div>
    </section>;
};
export default AboutSection;