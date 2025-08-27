import { CheckCircle, Search, Share2, TrendingUp } from "lucide-react";
import googleAdsDashboard from "@/assets/google-ads-dashboard.jpg";
import metaAdsDashboard from "@/assets/meta-ads-dashboard.jpg";
import growthMarketing from "@/assets/growth-marketing.jpg";
import StarsEffect from "./StarsEffect";

const DetailedServicesSection = () => {
  const services = [
    {
      id: "google-ads",
      icon: Search,
      title: "Tráfego Pago com Google Ads",
      description: "Domine os resultados de busca e aumente suas vendas com campanhas estratégicas no Google Ads. Nossa expertise garante o melhor custo por aquisição e ROI para seu negócio.",
      image: googleAdsDashboard,
      imageAlt: "Dashboard Google Ads com métricas de performance",
      benefits: [
        "Campanhas de Search otimizadas para conversão.",
        "Display Network para remarketing avançado.",
        "Shopping Ads para e-commerce.",
        "Otimização contínua de palavras-chave.",
        "Relatórios detalhados de performance."
      ],
      cta: "Começar com Google Ads"
    },
    {
      id: "meta-ads",
      icon: Share2,
      title: "Tráfego Pago com Meta Ads",
      description: "Alcance seu público ideal no Facebook e Instagram com criativos impactantes e segmentações precisas. Transforme engajamento em vendas com nossas estratégias avançadas.",
      image: metaAdsDashboard,
      imageAlt: "Dashboard Meta Ads com campanhas do Facebook e Instagram",
      benefits: [
        "Segmentação avançada por comportamento e interesses.",
        "Criativos otimizados para cada formato.",
        "Campanhas de remarketing e lookalike.",
        "Testes A/B contínuos de anúncios.",
        "Integração com Pixel e Conversions API."
      ],
      cta: "Começar com Meta Ads"
    },
    {
      id: "growth",
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Acelere o crescimento do seu negócio com metodologias data-driven. Identificamos gargalos, otimizamos funis e implementamos estratégias de crescimento sustentável.",
      image: growthMarketing,
      imageAlt: "Dashboard de growth marketing com métricas de crescimento",
      benefits: [
        "Automações de marketing avançadas.",
        "Análise completa do funil de vendas.",
        "Otimização de taxa de conversão (CRO).",
        "Descoberta acelerada do que realmente funciona.",
        "Crescimento previsível e escalável.",
        "Ações criativas baseadas em dados reais.",
        "Menos desperdício e mais resultados.",
        "Maior vantagem competitiva no mercado."
      ],
      cta: "Acelerar Crescimento"
    }
  ];

  return (
    <section className="py-8 lg:py-12 bg-background relative overflow-hidden">
      <StarsEffect />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {services.map((service, index) => (
          <div key={service.id} className={`${index > 0 ? 'mt-20' : ''}`}>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className={`lg:col-span-8 space-y-6 ${
                service.id === 'meta-ads' 
                  ? 'lg:order-2' 
                  : 'lg:order-1'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>

                <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href={
                      service.id === "google-ads" 
                        ? "https://wa.me/5534999000559?text=Ol%C3%A1!%20%F0%9F%98%80%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20tr%C3%A1fego%20pago%20no%20Google%20Ads..."
                        : service.id === "meta-ads"
                        ? "https://wa.me/5534999000559?text=Ol%C3%A1!%20%F0%9F%98%84%0AGostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20tr%C3%A1fego%20pago%20no%20Meta%20Ads..."
                        : "https://wa.me/5534999000559?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..."
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>

              {/* Image - Left for Google and Growth, Right for Meta */}
              {service.image && (
                <div className={`lg:col-span-4 ${
                  service.id === 'meta-ads' 
                    ? 'lg:order-1' 
                    : 'lg:order-2'
                } flex justify-center`}>
                  <div className="rounded-xl overflow-hidden border border-white/10 w-full max-w-xs h-48">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedServicesSection;