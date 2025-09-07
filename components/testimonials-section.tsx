"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos Mendes",
    position: "CEO",
    company: "Distribuidora Nordeste",
    content:
      "A InovaSys transformou completamente nossa operação. As automações implementadas reduziram nossos custos em 40% e aumentaram nossa produtividade significativamente. Equipe extremamente competente!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Ana Paula Silva",
    position: "Diretora Comercial",
    company: "Varejo Premium",
    content:
      "Excelente trabalho! A migração para a nuvem foi perfeita e o suporte é impecável. Nossa empresa nunca teve tanta estabilidade nos sistemas. Recomendo sem hesitar!",
    rating: 5,
    avatar:
      "https://i.pinimg.com/736x/25/bf/85/25bf85f438a2e7100dd73b9b12b79f03.jpg",
  },
  {
    name: "Roberto Costa",
    position: "Sócio-Proprietário",
    company: "Advocacia & Consultoria",
    content:
      "A implementação da IA para análise de documentos foi um divisor de águas. Conseguimos reduzir em 70% o tempo gasto em análises processuais. Investimento que se pagou rapidamente!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
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
            O que nossos <span className="text-blue-600">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de empresários que transformaram seus negócios com
            nossas soluções tecnológicas.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 bg-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Junte-se aos nossos clientes satisfeitos
          </h3>
          <p className="text-gray-600 mb-6">
            Mais de 10 empresas já confiaram em nossas soluções. Sua empresa
            pode ser a próxima success story!
          </p>

          <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span>
                <strong>4.9/5</strong> avaliação média
              </span>
            </div>
            <div>•</div>
            <div>
              <strong>97%</strong> taxa de satisfação
            </div>
            <div>•</div>
            <div>
              <strong>99.9%</strong> recomendação
            </div>
          </div>
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
