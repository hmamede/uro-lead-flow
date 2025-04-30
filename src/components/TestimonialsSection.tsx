
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      age: 58,
      text: "Após anos sofrendo com problemas urinários, finalmente encontrei no Dr. Roberto a solução. O tratamento foi eficaz e sua abordagem humana me deixou muito confortável durante todo o processo.",
      city: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 5
    },
    {
      name: "Paulo Rodrigues",
      age: 62,
      text: "O Dr. Roberto diagnosticou meu câncer de próstata em estágio inicial, o que foi crucial para o sucesso do tratamento. Sua dedicação e conhecimento técnico são incomparáveis.",
      city: "Rio de Janeiro, RJ",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 5
    },
    {
      name: "André Silva",
      age: 45,
      text: "Passei por várias consultas com outros especialistas sem sucesso. O Dr. Roberto identificou meu problema rapidamente e o tratamento foi muito menos invasivo do que eu esperava.",
      city: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 4
    },
    {
      name: "Fernando Costa",
      age: 52,
      text: "A clínica tem uma estrutura de primeira e o atendimento é sempre pontual. O Dr. Roberto é atencioso e explicou todas as opções de tratamento de forma clara e paciente.",
      city: "Curitiba, PR",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block mb-2 px-3 py-1 bg-medical-100 text-medical-700 rounded-full text-sm font-medium">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            O que nossos pacientes dizem
          </h2>
          <p className="text-gray-600">
            Confira os relatos de pacientes que passaram por tratamentos urológicos com o Dr. Roberto Oliveira.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view - 2 cards side by side */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            <Card className="border-none shadow-lg rounded-xl overflow-hidden h-full animate-slide-up">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-medical-500 opacity-50" />
                </div>
                <p className="text-gray-700 mb-6 flex-grow">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].age}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonials[currentTestimonial].city}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < testimonials[currentTestimonial].rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-xl overflow-hidden h-full animate-slide-up" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-medical-500 opacity-50" />
                </div>
                <p className="text-gray-700 mb-6 flex-grow">
                  {testimonials[(currentTestimonial + 1) % testimonials.length].text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[(currentTestimonial + 1) % testimonials.length].image} 
                      alt={testimonials[(currentTestimonial + 1) % testimonials.length].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonials[(currentTestimonial + 1) % testimonials.length].name}, {testimonials[(currentTestimonial + 1) % testimonials.length].age}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonials[(currentTestimonial + 1) % testimonials.length].city}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < testimonials[(currentTestimonial + 1) % testimonials.length].rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile view - single card */}
          <div className="md:hidden">
            <Card className="border-none shadow-lg rounded-xl overflow-hidden animate-fade-in">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-medical-500 opacity-50" />
                </div>
                <p className="text-gray-700 mb-6">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].age}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonials[currentTestimonial].city}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < testimonials[currentTestimonial].rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-300" 
              onClick={handlePrev}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            {testimonials.map((_, i) => (
              <button 
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentTestimonial ? 'bg-medical-600 scale-125' : 'bg-gray-300'}`}
                onClick={() => setCurrentTestimonial(i)}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-300" 
              onClick={handleNext}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-medical-50 to-medical-100 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Pronto para cuidar da sua saúde?
              </h3>
              <p className="text-gray-600">
                Agende uma consulta e comece seu tratamento hoje mesmo.
              </p>
            </div>
            <Button className="bg-medical-600 hover:bg-medical-700 text-white rounded-full whitespace-nowrap px-6 py-6 text-base">
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
