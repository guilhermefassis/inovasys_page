"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Clock,
  Award,
  Headphones,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança Garantida",
    description:
      "Implementamos as melhores práticas de segurança e compliance, protegendo seus dados e operações com tecnologia de ponta.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Equipe Especializada",
    description:
      "Profissionais certificados com vasta experiência em cloud, automação, IA e desenvolvimento, focados no sucesso do seu negócio.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Suporte 24/7",
    description:
      "Monitoramento contínuo e suporte técnico disponível a qualquer momento para garantir que seus sistemas sempre funcionem.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Comprovada Experiência",
    description:
      "Mais de 30 projetos entregues com sucesso, gerando economias reais e aumentos significativos de produtividade.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único. Desenvolvemos soluções sob medida que atendem exatamente às necessidades específicas do seu negócio.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Implementação Rápida",
    description:
      "Metodologia ágil que permite implantação rápida das soluções, gerando resultados em semanas, não meses.",
  },
];

const benefits = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Foco em Resultados",
    description:
      "Não vendemos apenas tecnologia, vendemos resultados. Nosso sucesso está diretamente ligado ao crescimento do seu negócio.",
    stats: "ROI médio de 300% em 12 meses",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Crescimento Sustentável",
    description:
      "Soluções escaláveis que crescem junto com sua empresa, garantindo investimentos que se mantêm relevantes no futuro.",
    stats: "95% dos clientes expandem os contratos",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Parceria de Longo Prazo",
    description:
      "Não somos apenas fornecedores, somos parceiros estratégicos comprometidos com o seu sucesso a longo prazo.",
    stats: "Tempo médio de parceria: 3+ anos",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
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
            Por que escolher a <span className="text-blue-600">InovaSys</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos mais que uma Consultoria de TI. Somos parceiros estratégicos
            dedicados ao crescimento e transformação digital do seu negócio.
          </p>
        </motion.div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold">
                {benefit.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Diferenciais que <span className="text-blue-600">Garantem</span> seu
            Sucesso
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-blue-600 mb-3">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-gray-600 mb-6">
            Milhares de empresas já confiaram em nossa expertise. Não fique para
            trás na transformação digital.
          </p>

          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div>
              ✅ <strong>Sem contratos longos</strong>
            </div>
            <div>
              ✅ <strong>Consultoria gratuita</strong>
            </div>
            <div>
              ✅ <strong>Resultados garantidos</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
