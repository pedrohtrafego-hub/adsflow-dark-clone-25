import { Star, Trophy } from "lucide-react";
import StarsEffect from "./StarsEffect";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Paulo H. Silva",
      company: "Loja de Móveis",
      rating: 5,
      text: "A parceria com a Ads Flow transformou totalmente nossa presença digital. As campanhas de tráfego pago e os conteúdos estratégicos nas redes sociais trouxeram um aumento significativo no fluxo de clientes na loja. Hoje, temos um site profissional e uma marca muito mais forte na região."
    },
    {
      id: 2,
      name: "Ricardo Mota",
      company: "Clínica Odontológica",
      rating: 5,
      text: "Trabalhar com a Ads Flow foi um divisor de águas. Eles não apenas gerenciam nossas campanhas, mas nos educam sobre o processo. Nosso custo por aquisição diminuiu 40% em 2 meses."
    },
    {
      id: 3,
      name: "Mariana Bernardes",
      company: "Loja de Materiais de Construção",
      rating: 5,
      text: "Profissionais de altíssimo nível! A Ads Flow conseguiu escalar nossa operação de forma sustentável. Passamos de 50 para 500 alunos por mês mantendo a qualidade do lead."
    }
  ];

  return (
    <section id="depoimentos" className="py-8 lg:py-12 bg-background relative overflow-hidden scroll-mt-16">
      <StarsEffect />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Resultados reais de empresas que confiaram na nossa expertise 
            para transformar seus investimentos em marketing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-text-secondary">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4 border border-primary/20">
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">
              🏆 +20 empresas transformadas 🏆
            </span>
            <Trophy className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;