"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Globe,
  Cog,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Automação Empresarial",
    description:
      "Elimine tarefas repetitivas e aumente a eficiência operacional com automações inteligentes personalizadas para seu negócio.",
    features: [
      "Processos automatizados",
      "Integração de sistemas",
      "Workflows personalizados",
    ],
    price: "A partir de R$ 1.500/mês",
    highlight: false,
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Desenvolvimento Web",
    description:
      "Landing pages e e-commerces otimizados para conversão, responsivos e com alta performance.",
    features: ["Sites responsivos", "E-commerce completo", "SEO otimizado"],
    price: "A partir de R$ 2.000",
    highlight: true,
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Inteligência Artificial",
    description:
      "Implemente IA para otimizar decisões, analisar dados e criar experiências personalizadas para seus clientes.",
    features: [
      "Análise preditiva",
      "Chatbots inteligentes",
      "Machine Learning",
    ],
    price: "A partir de R$ 2.500/mês",
    highlight: false,
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Soluções em Cloud",
    description:
      "Migre para a nuvem com segurança e reduza custos de infraestrutura enquanto ganha escalabilidade.",
    features: ["Migração segura", "Backup automático", "Monitoramento 24/7"],
    price: "A partir de R$ 800/mês",
    highlight: false,
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Integração de Sistemas",
    description:
      "Conecte todos os seus sistemas e ferramentas para uma operação unificada e mais eficiente.",
    features: [
      "APIs personalizadas",
      "Sincronização de dados",
      "Relatórios unificados",
    ],
    price: "A partir de R$ 1.000/mês",
    highlight: false,
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Business Intelligence",
    description:
      "Transforme seus dados em insights estratégicos com dashboards inteligentes e análises avançadas para decisões mais assertivas.",
    features: [
      "Dashboards interativos",
      "Relatórios automatizados",
      "Análise preditiva",
    ],
    price: "A partir de R$ 1200/mês",
    highlight: false,
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas em{" "}
            <span className="text-blue-600">Tecnologia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços para modernizar e
            otimizar sua empresa, desde automações simples até implementações
            complexas de IA e cloud.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                service.highlight
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white transform hover:scale-105"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <div
                className={`${
                  service.highlight ? "text-white" : "text-blue-600"
                } mb-4`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              <p
                className={`mb-6 ${
                  service.highlight ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle
                      className={`w-4 h-4 mr-2 ${
                        service.highlight ? "text-white" : "text-green-600"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                className={`text-lg font-bold mb-4 ${
                  service.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {service.price}
              </div>

              <Button
                onClick={scrollToContact}
                className={`w-full group ${
                  service.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Não encontrou o que precisa?
          </h3>
          <p className="text-gray-600 mb-6">
            Desenvolvemos soluções personalizadas para atender as necessidades
            específicas do seu negócio.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Consultar Especialista
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Serviços de Automação, IA, Cloud e Desenvolvimento Web | InovaSys",
  description:
    "Conheça os serviços da InovaSys: automação empresarial, inteligência artificial, soluções em cloud, desenvolvimento web, integração de sistemas e suporte 24/7 em São Luís - MA.",
};
