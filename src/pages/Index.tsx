import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <DetailedServicesSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default Index;
