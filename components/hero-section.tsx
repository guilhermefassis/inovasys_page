"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 inline mr-1" />
                Transformação Digital
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Impulsione sua empresa com
              <span className="text-blue-600 block">
                tecnologia inteligente
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Especialistas em automação, IA e cloud computing para pequenas e
              médias empresas. Reduza custos, aumente a produtividade e escale
              seus negócios com nossas soluções personalizadas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
              >
                Ver Soluções
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center space-x-8 text-sm text-gray-600"
            >
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                <span>
                  <strong>40%+</strong> redução de custos
                </span>
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-600" />
                <span>
                  <strong>60%+</strong> aumento produtividade
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>

              {/* Dashboard mockup */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    Dashboard InovaSys
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                    <div className="text-2xl font-bold">R$ 8.000+</div>
                    <div className="text-blue-100">Economia mensal média</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900">
                        98%
                      </div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900">
                        24/7
                      </div>
                      <div className="text-xs text-gray-600">Suporte</div>
                    </div>
                  </div>

                  <div className="h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 p-4 text-white">
                      <div className="text-sm">Automações Ativas</div>
                      <div className="text-xl font-bold">17 Processos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Serviços de Automação, IA, Cloud e Desenvolvimento Web | InovaSys",
  description:
    "Conheça os serviços da InovaSys: automação empresarial, inteligência artificial, soluções em cloud, desenvolvimento web, integração de sistemas e suporte 24/7 em São Luís - MA.",
};
