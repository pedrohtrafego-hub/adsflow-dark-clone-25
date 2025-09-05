import { CheckCircle, Target, TrendingUp, Users, BarChart3, Zap, Award, Clock, Shield, User } from "lucide-react";
const WhyChooseSection = () => {
  const benefits = [{
    icon: Target,
    title: "Resultados reais e consistentes",
    description: "Monitoramento em tempo real de todas as métricas."
  }, {
    icon: TrendingUp,
    title: "Estratégias digitais sob medida",
    description: "Cada campanha é criada especificamente para seu negócio."
  }, {
    icon: BarChart3,
    title: "Análise de dados avançada",
    description: "Insights profundos para otimizar continuamente."
  }, {
    icon: Award,
    title: "Agência Certificada",
    description: "Equipe certificada em Google e Meta Ads, Analytics (GA4) e Growth."
  }, {
    icon: TrendingUp,
    title: "Mais vendas, menos custos",
    description: "Gestão focada em resultados que fazem diferença no caixa."
  }, {
    icon: User,
    title: "Foco no cliente",
    description: "Estratégias alinhadas com seus objetivos e necessidades."
  }];
  return <section className="py-8 lg:py-12 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">Ads Flow</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Nossa abordagem única combina tecnologia, estratégia e experiência 
            para entregar resultados excepcionais para o seu negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="https://wa.me/5534999000559?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..." target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-[18px] py-[9px]">
            Quero Vender Mais Agora
          </a>
        </div>
      </div>
    </section>;
};
export default WhyChooseSection;