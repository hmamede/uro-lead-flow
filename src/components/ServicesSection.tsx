
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Activity, UserCheck, Target, HelpCircle, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-medical-600" />,
      title: "Saúde Prostática",
      description: "Prevenção e tratamento de doenças da próstata, incluindo câncer, hiperplasia e prostatite."
    },
    {
      icon: <Activity className="w-10 h-10 text-medical-600" />,
      title: "Saúde Sexual",
      description: "Tratamento para disfunção erétil, ejaculação precoce e outras questões relacionadas à saúde sexual masculina."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-medical-600" />,
      title: "Fertilidade",
      description: "Avaliação e tratamento de infertilidade masculina, incluindo varicocele e azoospermia."
    },
    {
      icon: <Target className="w-10 h-10 text-medical-600" />,
      title: "Cirurgia Urológica",
      description: "Procedimentos cirúrgicos minimamente invasivos para tratar diversas condições urológicas."
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-medical-600" />,
      title: "Urologia Geral",
      description: "Diagnóstico e tratamento de infecções do trato urinário, cálculos renais e outras condições urológicas."
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-medical-600" />,
      title: "Check-up Urológico",
      description: "Avaliação preventiva completa para detectar problemas urológicos em estágio inicial."
    }
  ];

  const faqs = [
    {
      question: "Com que frequência devo fazer um check-up urológico?",
      answer: "Recomendamos que homens acima de 45 anos façam um check-up urológico anual. Caso haja histórico familiar de doenças urológicas, como câncer de próstata, é aconselhável iniciar os exames a partir dos 40 anos."
    },
    {
      question: "O que é hiperplasia prostática benigna (HPB)?",
      answer: "A HPB é o aumento benigno da próstata, muito comum em homens acima de 50 anos. Pode causar sintomas como dificuldade para urinar, necessidade frequente de urinar e sensação de não esvaziar completamente a bexiga."
    },
    {
      question: "Os problemas de ereção sempre são físicos?",
      answer: "Não. A disfunção erétil pode ter causas físicas (como problemas cardiovasculares, diabetes ou baixa testosterona), psicológicas (estresse, ansiedade) ou uma combinação de ambas. Por isso, é importante uma avaliação completa para determinar o tratamento adequado."
    },
    {
      question: "Quais são os primeiros sinais de problemas prostáticos?",
      answer: "Os sinais incluem dificuldade para iniciar a micção, jato urinário fraco, necessidade de urinar várias vezes durante a noite, sensação de não esvaziar completamente a bexiga e, em alguns casos, presença de sangue na urina."
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block mb-2 px-3 py-1 bg-medical-100 text-medical-700 rounded-full text-sm font-medium">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Soluções urológicas completas para sua saúde
          </h2>
          <p className="text-gray-600">
            Oferecemos diagnósticos precisos e tratamentos personalizados utilizando as mais avançadas tecnologias da medicina urológica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="link" className="text-medical-600 p-0 hover:text-medical-700">
                  Saiba mais &rarr;
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-block mb-2 px-3 py-1 bg-medical-100 text-medical-700 rounded-full text-sm font-medium">
              Perguntas Frequentes
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Dúvidas comuns sobre saúde urológica
            </h2>
          </div>

          <Accordion type="single" collapsible className="animate-slide-up">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-medical-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-8">
            <Button className="bg-medical-600 hover:bg-medical-700 text-white rounded-full">
              Ver todas as perguntas frequentes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
