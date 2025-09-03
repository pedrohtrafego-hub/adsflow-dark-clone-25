import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 left-6 z-40 bg-blue-400/90 hover:bg-blue-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 text-sm font-medium flex items-center gap-2"
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={16} />
      Voltar ao Topo
    </button>
  );
};

export default BackToTop;