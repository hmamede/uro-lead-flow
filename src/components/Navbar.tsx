
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className={`font-bold text-2xl ${isScrolled ? 'text-medical-800' : 'text-white'}`}>
              Dr.<span className="text-medical-500">Uro</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className={`font-medium hover:text-medical-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Início</a>
            <a href="#sobre" className={`font-medium hover:text-medical-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Sobre</a>
            <a href="#servicos" className={`font-medium hover:text-medical-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Serviços</a>
            <a href="#depoimentos" className={`font-medium hover:text-medical-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Depoimentos</a>
            <a href="#contato" className={`font-medium hover:text-medical-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contato</a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-medical-600 hover:bg-medical-700 text-white rounded-full flex items-center gap-2">
              <Calendar size={18} />
              <span>Agendar Consulta</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={`${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu size={24} className={`${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="font-medium text-gray-700 hover:text-medical-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#sobre" 
                className="font-medium text-gray-700 hover:text-medical-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                className="font-medium text-gray-700 hover:text-medical-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#depoimentos" 
                className="font-medium text-gray-700 hover:text-medical-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className="font-medium text-gray-700 hover:text-medical-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </a>
              <Button className="bg-medical-600 hover:bg-medical-700 text-white rounded-full w-full flex items-center justify-center gap-2">
                <Calendar size={18} />
                <span>Agendar Consulta</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
