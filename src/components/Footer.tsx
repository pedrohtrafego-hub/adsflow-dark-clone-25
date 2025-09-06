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
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-8 lg:text-3xl">
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
              <p className="leading-relaxed text-lg font-medium text-blue-200">
                Entre em contato conosco e descubra como podemos transformar 
                seus investimentos em marketing em resultados reais e mensuráveis.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Solicite uma Análise Completa</h3>
            
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
        <div className="border-t border-white/20 mt-6 pt-3 text-center text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p>© 2025 Ads Flow - Agência de Marketing Digital. Todos os direitos reservados.</p>
              <p className="text-sm font-medium text-indigo-200">CNPJ: 57.350.345/0001-92</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Ag%C3%AAncia-Ads-Flow-61572377709165/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/adsflowmarketing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.747 3.72 13.599 3.72 12.346s.478-2.401 1.408-3.345c.873-.807 2.024-1.297 3.321-1.297s2.448.49 3.321 1.297c.93.944 1.408 2.098 1.408 3.345s-.478 2.401-1.408 3.345c-.873.807-2.024 1.297-3.321 1.297zm7.718-1.092c-.478.478-1.092.717-1.842.717-.75 0-1.364-.239-1.842-.717-.478-.478-.717-1.092-.717-1.842V8.926c0-.75.239-1.364.717-1.842.478-.478 1.092-.717 1.842-.717.75 0 1.364.239 1.842.717.478.478.717 1.092.717 1.842v5.128c0 .75-.239 1.364-.717 1.842z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/ads-flow/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;