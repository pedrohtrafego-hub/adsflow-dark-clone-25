import { Clock, Globe, BarChart3, Search, Share2, TrendingUp, Target, Users, MessageSquare, Megaphone, Smartphone, Mail, Bot } from "lucide-react";
import StarsEffect from "./StarsEffect";
const ServicesSection = () => {
  const services = [{
    icon: Search,
    title: "Google Ads",
    description: "Campanhas inteligentes em todas as redes do Google."
  }, {
    icon: Share2,
    title: "Meta Ads",
    description: "Estratégias no Facebook e Instagram para engajamento e vendas."
  }, {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Metodologias de crescimento acelerado baseadas em dados."
  }, {
    icon: Globe,
    title: "Criação de Sites",
    description: "Páginas responsivas, rápidas e otimizadas para máxima conversão."
  }, {
    icon: Target,
    title: "SEO & SEM",
    description: "Otimização orgânica e paga para dominar os resultados de busca."
  }, {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Métricas e insights em tempo real para decisões assertivas."
  }, {
    icon: Megaphone,
    title: "Criação de Conteúdo",
    description: "Materiais criativos que convertem, do copy aos vídeos publicitários."
  }, {
    icon: Mail,
    title: "E-mail Marketing",
    description: "Automação e campanhas para engajar, nutrir e converter leads."
  }, {
    icon: Bot,
    title: "Automação com IA",
    description: "Soluções inteligentes para otimizar tarefas e melhorar resultados."
  }];
  return <section id="servicos" className="py-6 lg:py-8 bg-background relative overflow-hidden scroll-mt-16">
      <StarsEffect />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-xl font-medium text-red-100">
            Oferecemos uma gama completa de serviços de marketing digital 
            para acelerar o crescimento do seu negócio.
          </p>
        </div>

        {/* Services Grid - 3x3 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="group p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 rounded-lg px-[15px] py-[19px] mx-[6px] my-px">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 transition-colors text-teal-300">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-zinc-50 font-semibold">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

      </div>
    </section>;
};
export default ServicesSection;