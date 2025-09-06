import { Star, Trophy } from "lucide-react";
import StarsEffect from "./StarsEffect";
const TestimonialsSection = () => {
  const testimonials = [{
    id: 1,
    name: "Paulo H. Silva",
    company: "Loja de Móveis",
    rating: 5,
    text: "A Ads Flow transformou nossa presença digital. Com tráfego pago, redes sociais e um site profissional, aumentamos clientes e fortalecemos nossa marca em Patos de Minas e região."
  }, {
    id: 2,
    name: "Ricardo Mota",
    company: "Clínica Odontológica",
    rating: 5,
    text: "Trabalhar com a Ads Flow foi um divisor de águas. Em apenas 2 meses, nosso custo por aquisição caiu 40% e ganhamos clareza no processo de campanhas em Patos de Minas."
  }, {
    id: 3,
    name: "Rômulo Nunes",
    company: "Loja de Automóveis (Boston, EUA)",
    rating: 5,
    text: "A Ads Flow foi essencial para expandirmos nossas vendas em Boston, com campanhas precisas e suporte próximo, mesmo à distância."
  }];
  return <section id="depoimentos" className="py-4 lg:py-6 bg-background relative overflow-hidden scroll-mt-16">
      <StarsEffect />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-medium text-rose-50">
            Resultados reais de empresas que confiaram na nossa expertise 
            para transformar seus investimentos em marketing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 h-[320px] flex flex-col justify-between mx-[2px] px-[20px] my-0 py-[20px]">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
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