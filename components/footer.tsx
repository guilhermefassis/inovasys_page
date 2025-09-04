"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="relative w-48 h-8 mb-6 bg-white/10 rounded">
              <Image
                src="https://cdn.abacus.ai/images/f173bfe6-e645-4fe0-89a1-77e6b13de067.png"
                alt="InovaSys Consultoria"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Especialistas em transformação digital para pequenas e médias
              empresas. Ajudamos seu negócio a crescer através da automação, IA,
              cloud e desenvolvimento web.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                São Luís, Maranhão, Brasil
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                (98) 99999-9999
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                contato@InovaSysConsultoria.com.br
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-3 text-blue-400" />
                Segunda a Sexta: 8h às 18h
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nossos Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("results")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resultados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Automação Empresarial
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Inteligência Artificial
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Soluções em Cloud
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Desenvolvimento Web
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Integração de Sistemas
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Suporte Técnico 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 InovaSys Consultoria. Todos os direitos reservados.
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
