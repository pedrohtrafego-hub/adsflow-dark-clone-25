import { Star, Trophy } from "lucide-react";
import StarsEffect from "./StarsEffect";
const TestimonialsSection = () => {
  const testimonials = [{
    id: 1,
    name: "Paulo A. Silva",
    company: "Loja de Móveis",
    rating: 5,
    text: "A Ads Flow transformou nossa presença digital. Com campanhas estratégicas e um site profissional, conquistamos mais clientes em Patos de Minas e região."
  }, {
    id: 2,
    name: "Ricardo Mota",
    company: "Clínica Odontológica",
    rating: 5,
    text: "Trabalhar com a Ads Flow foi um divisor de águas. Em apenas 2 meses, nosso custo por aquisição caiu 30% e ganhamos clareza no processo de campanhas em Patos de Minas."
  }, {
    id: 3,
    name: "Mariana Bernardes",
    company: "Clínica Estética",
    rating: 5,
    text: "Com a Ads Flow, nossa clínica de estética ganhou mais visibilidade e clientes. As campanhas bem direcionadas trouxeram crescimento real e consistente para o negócio."
  }];
  return <section id="depoimentos" className="py-4 lg:py-8 bg-background relative overflow-hidden scroll-mt-16">
      <StarsEffect />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Resultados reais de empresas que confiaram na nossa expertise 
            para transformar seus investimentos em marketing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-3">
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-text-secondary">{testimonial.company}</div>
              </div>
            </div>)}
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 border border-primary/20 py-[10px]">
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">
              🏆 +20 empresas transformadas 🏆
            </span>
            <Trophy className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;