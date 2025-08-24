import { Clock, Globe, BarChart3, Search, Share2, TrendingUp, Target, Users, MessageSquare, Megaphone, Smartphone, Mail } from "lucide-react";
import StarsEffect from "./StarsEffect";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Google Ads",
      description: "Campanhas otimizadas para máximo ROI no Google Ads, Search e Display Network."
    },
    {
      icon: Share2,
      title: "Meta Ads",
      description: "Estratégias avançadas no Facebook e Instagram para engajamento e conversões."
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Metodologias de crescimento acelerado baseadas em dados e experimentação."
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Páginas de alta conversão otimizadas para campanhas de tráfego pago."
    },
    {
      icon: Target,
      title: "SEO & SEM",
      description: "Otimização orgânica e paga para dominar os resultados de busca."
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Dashboards e relatórios para acompanhar performance em tempo real."
    },
    {
      icon: Megaphone,
      title: "Criação de Conteúdo",
      description: "Materiais criativos que convertem, do copy aos vídeos publicitários."
    },
    {
      icon: Smartphone,
      title: "Marketing Mobile",
      description: "Campanhas específicas para dispositivos móveis e apps."
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Automações e campanhas de email para nutrição e conversão de leads."
    }
  ];

  return (
    <section id="servicos" className="py-8 lg:py-12 bg-background relative overflow-hidden">
      <StarsEffect />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de marketing digital 
            para acelerar o crescimento do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}.
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-card/50 rounded-2xl p-6 border border-border">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para acelerar os resultados da sua empresa?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos criar uma estratégia personalizada 
            para o seu negócio alcançar novos patamares de crescimento.
          </p>
          <div className="flex justify-center">
            <a
              href="https://web.whatsapp.com/send?phone=5534999000559&text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;