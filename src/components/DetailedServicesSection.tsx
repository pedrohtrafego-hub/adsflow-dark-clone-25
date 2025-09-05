import { CheckCircle, Search, Share2, TrendingUp } from "lucide-react";
import googleAdsDashboard from "@/assets/google-ads-dashboard-new.jpg";
import metaAdsDashboard from "@/assets/meta-ads-dashboard-new.jpg";
import growthMarketing from "@/assets/growth-marketing-new.jpg";
import StarsEffect from "./StarsEffect";
const DetailedServicesSection = () => {
  const services = [{
    id: "google-ads",
    icon: Search,
    title: "Google Ads & Google Analytics",
    description: "Alcance clientes no momento certo com campanhas inteligentes no Google Ads e acompanhe cada resultado em tempo real com Google Analytics. Nossa equipe garante otimização contínua para aumentar conversões e maximizar o ROI.",
    benefits: ["Campanhas segmentadas para máxima performance.", "Monitoramento avançado com Google Analytics.", "Ajustes estratégicos baseados em dados reais.", "Relatórios completos para decisões assertivas.", "Resultados mensuráveis e sustentáveis."],
    cta: "Começar com Google Ads"
  }, {
    id: "meta-ads",
    icon: Share2,
    title: "Meta Ads & Instagram Ads",
    description: "Alcance seu público ideal no Facebook e Instagram com criativos impactantes e segmentações precisas. Transforme engajamento em vendas com nossas estratégias avançadas.",
    benefits: ["Segmentação avançada por comportamento e interesses.", "Criativos otimizados para cada formato.", "Campanhas de remarketing e lookalike.", "Testes A/B contínuos de anúncios.", "Integração com Pixel e Conversions API."],
    cta: "Começar com Meta Ads"
  }, {
    id: "growth",
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Acelere o crescimento do seu negócio com metodologias data-driven. Identificamos gargalos, otimizamos funis e implementamos estratégias de crescimento sustentável.",
    benefits: ["Automações de marketing avançadas.", "Análise completa do funil de vendas.", "Descoberta acelerada do que realmente funciona.", "Crescimento previsível e escalável.", "Menos desperdício e mais resultados.", "Maior vantagem competitiva no mercado."],
    cta: "Acelerar Crescimento"
  }];
  return <section className="py-1 lg:py-2 bg-background relative overflow-hidden">
      <StarsEffect />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {services.map((service, index) => <div key={service.id} className={`${index > 0 ? 'mt-8' : ''}`}>
            <div className="w-full">
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-teal-300">
                    {service.title}
                  </h2>
                </div>

                <p className="text-lg leading-relaxed font-medium lg:text-lg text-zinc-50">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => <div key={benefitIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base lg:text-lg font-medium text-cyan-50">{benefit}</span>
                    </div>)}
                </div>

                {/* CTA */}
                 <div className="pt-4">
                   <a href={service.id === "google-ads" ? "https://wa.me/5534999000559?text=Ol%C3%A1!%20%F0%9F%98%80%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20tr%C3%A1fego%20pago%20no%20Google%20Ads..." : service.id === "meta-ads" ? "https://wa.me/5534999000559?text=Ol%C3%A1!%20%F0%9F%98%84%0AGostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20tr%C3%A1fego%20pago%20no%20Meta%20Ads..." : "https://wa.me/5534999000559?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..."} target="_blank" rel="noopener noreferrer" className="btn-primary px-[10px] py-[9px]">
                      {service.cta}
                    </a>
                 </div>
              </div>
            </div>
          </div>)}
      </div>
    </section>;
};
export default DetailedServicesSection;