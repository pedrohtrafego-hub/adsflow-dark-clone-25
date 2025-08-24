import { CheckCircle, Award } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-8 lg:py-12 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">
                Sobre a <span className="gradient-text">Ads Flow</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Na Ads Flow, acreditamos que marketing é muito mais do que simplesmente "aparecer" — é criar conexões reais com as pessoas certas e transformar cada interação em resultados concretos. Desde 2023, atuamos como parceira estratégica de empresas que buscam crescimento sustentável e previsível, com foco total em performance e retorno sobre investimento.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Com uma equipe de especialistas certificados nas principais plataformas e ferramentas do mercado, desenvolvemos estratégias personalizadas que unem tráfego pago, criação de sites de alta conversão, gestão de redes sociais, funis de vendas completos, captação e produção de vídeos profissionais e análise avançada de dados. Nosso objetivo é acompanhar cada etapa da jornada do seu cliente, desde o primeiro contato até a fidelização, garantindo que cada ação tenha um impacto mensurável.
              </p>
            </div>

            {/* Certification Badge */}
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Equipe Certificada</h3>
                <p className="text-text-secondary">
                  Certificados pelo Google e Meta para garantir as melhores práticas
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="check-item">
                <CheckCircle className="check-icon" />
                <span>Mais de 20 empresas transformadas</span>
              </div>
              <div className="check-item">
                <CheckCircle className="check-icon" />
                <span>ROI médio de 300% em campanhas</span>
              </div>
              <div className="check-item">
                <CheckCircle className="check-icon" />
                <span>Metodologia própria de otimização</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={teamMeeting}
                alt="Equipe Ads Flow em reunião estratégica"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;