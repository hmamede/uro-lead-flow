
import { Award, Calendar, Clock, Stethoscope, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutDoctor = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] relative z-10">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                  alt="Dr. Roberto Oliveira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-medical-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-medical-200 rounded-full z-0"></div>
            
            <div className="absolute bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl z-20 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-medical-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experiência</p>
                  <p className="font-semibold">+15 anos</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 animate-slide-up">
            <div className="inline-block mb-2 px-3 py-1 bg-medical-50 text-medical-700 rounded-full text-sm font-medium">
              Sobre o Médico
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Dr. Roberto Oliveira
              <span className="block text-xl font-medium text-gray-500 mt-1">
                Especialista em Urologia
              </span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              Formado pela Faculdade de Medicina da Universidade de São Paulo (FMUSP) com residência em 
              Urologia pelo Hospital das Clínicas, o Dr. Roberto Oliveira possui mais de 15 anos de experiência 
              no diagnóstico e tratamento de doenças urológicas.
            </p>
            
            <p className="text-gray-600 mb-8">
              Com especializações em Uro-oncologia e Urologia Minimamente Invasiva, oferece tratamentos
              avançados para condições como câncer de próstata, disfunções sexuais, 
              problemas de fertilidade masculina e doenças renais.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Atendimento Personalizado</h4>
                  <p className="text-gray-600 text-sm">Cuidado individualizado para cada paciente.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Tecnologia Avançada</h4>
                  <p className="text-gray-600 text-sm">Equipamentos e técnicas de última geração.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pontualidade</h4>
                  <p className="text-gray-600 text-sm">Respeito ao seu tempo e horário agendado.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Agendamento Flexível</h4>
                  <p className="text-gray-600 text-sm">Consultas presenciais e telemedicina.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-medical-600 hover:bg-medical-700 text-white rounded-full">
              Conhecer todos os serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
