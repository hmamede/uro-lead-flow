
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      });
    }, 1500);
  };

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block mb-2 px-3 py-1 bg-medical-100 text-medical-700 rounded-full text-sm font-medium">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600">
            Estamos à disposição para esclarecer suas dúvidas e agendar sua consulta de forma rápida e conveniente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  placeholder="Digite seu nome"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                >
                  <option value="" disabled>Selecione um serviço</option>
                  <option value="checkup">Check-up Urológico</option>
                  <option value="prostate">Saúde Prostática</option>
                  <option value="sexual">Saúde Sexual</option>
                  <option value="fertility">Fertilidade</option>
                  <option value="surgery">Cirurgia Urológica</option>
                  <option value="general">Urologia Geral</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-medical-600 focus:ring-medical-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                  Concordo com a <a href="#" className="text-medical-600 hover:underline">Política de Privacidade</a>
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-medical-600 hover:bg-medical-700 text-white rounded-full py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up" style={{animationDelay: "0.1s"}}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <p className="text-gray-600 text-sm">(11) 3456-7890</p>
                    <p className="text-gray-600 text-sm">(11) 98765-4321 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-600 text-sm">contato@drrobertooliveira.com.br</p>
                    <p className="text-gray-600 text-sm">agendamento@drrobertooliveira.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600 text-sm">Av. Paulista, 1000 - Conjunto 1010</p>
                    <p className="text-gray-600 text-sm">Bela Vista, São Paulo - SP, 01310-100</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horário de Atendimento</h4>
                    <p className="text-gray-600 text-sm">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600 text-sm">Sábados: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 h-72 animate-slide-up" style={{animationDelay: "0.2s"}}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Localização</h3>
              <div className="h-full bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Mapa do Google</p>
                </div>
                {/* In a real implementation, you would add a Google Maps iframe here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
