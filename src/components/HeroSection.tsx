
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-r from-medical-800 to-medical-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-medical-800 to-medical-950 opacity-90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cuidados urológicos com <span className="text-medical-300">excelência</span> e <span className="text-medical-300">humanização</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Oferecemos tratamentos avançados e personalizados para sua saúde urológica, 
              combinando tecnologia de ponta com atendimento humanizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-medical-500 hover:bg-medical-400 text-white rounded-full flex items-center gap-2 text-base px-6 py-6">
                <Calendar size={20} />
                <span>Agendar Consulta</span>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10 text-white rounded-full flex items-center gap-2 text-base px-6 py-6">
                <Phone size={20} />
                <span>Ligue Agora</span>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-medical-400 flex items-center justify-center text-white border-2 border-white">
                  J
                </div>
                <div className="w-10 h-10 rounded-full bg-medical-500 flex items-center justify-center text-white border-2 border-white">
                  M
                </div>
                <div className="w-10 h-10 rounded-full bg-medical-600 flex items-center justify-center text-white border-2 border-white">
                  L
                </div>
                <div className="w-10 h-10 rounded-full bg-medical-700 flex items-center justify-center text-white border-2 border-white">
                  A
                </div>
              </div>
              <div>
                <p className="font-medium">4.9/5 <span className="text-yellow-400">★★★★★</span></p>
                <p className="text-sm text-gray-300">Mais de 1000 pacientes atendidos</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-medical-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-medical-600 rounded-full opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Agende sua consulta</h3>
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nome completo" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-mail" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Telefone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    />
                  </div>
                  <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white rounded-full py-6">
                    Solicitar agendamento
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Entraremos em contato para confirmar o horário
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
