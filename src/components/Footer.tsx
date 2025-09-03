import { Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    objective: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  return <footer id="contato" className="section-gradient">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Pronto para escalar seus <span className="gradient-text">resultados</span>?
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-gray-300">(34) 99900-0559</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-gray-300">adsflowagencia@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Horário de Atendimento</div>
                  <div className="text-gray-300">Segunda a Sexta, 8h às 18h.</div>
                  <div className="text-gray-300">Sábado, 8h às 12h.</div>
                </div>
              </div>
            </div>

            <div className="text-gray-300">
              <p className="text-lg leading-relaxed">
                Entre em contato conosco e descubra como podemos transformar 
                seus investimentos em marketing em resultados reais e mensuráveis.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Solicite uma Análise Gratuita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-primary focus:outline-none transition-colors" required />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-primary focus:outline-none transition-colors" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="tel" name="phone" placeholder="Seu telefone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-primary focus:outline-none transition-colors" required />
                </div>
                <div>
                  <input type="text" name="company" placeholder="Sua empresa" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-primary focus:outline-none transition-colors" required />
                </div>
              </div>

              <div>
                <textarea name="objective" placeholder="Qual o objetivo da sua campanha?" value={formData.objective} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-primary focus:outline-none transition-colors resize-none" required />
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Sub Footer */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div>
              <p>&copy; 2024 Ads Flow - Agência de Marketing Digital. Todos os direitos reservados.</p>
              <p className="text-sm">CNPJ: 57.350.345/0001-92</p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;