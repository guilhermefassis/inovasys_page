"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="InovaSys - Consultoria de TI">
              <div className="relative w-80 h-20">
                <Image
                  src="/inovaSys.png"
                  alt="Logo da InovaSys - Consultoria de TI"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main Navigation"
          >
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#results"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Resultados
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              <a
                href="#contact"
                aria-label="Solicitar Consultoria de Desenvolvimento Web"
              >
                <Phone className="w-4 h-4 mr-2" />
                Solicitar Consultoria
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Abrir ou fechar menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            className="md:hidden bg-white border-t"
            aria-label="Mobile Navigation"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1">
              <li>
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Contato
                </a>
              </li>
              <li className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a
                    href="#contact"
                    aria-label="Solicitar Consultoria pelo menu mobile"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar Consultoria
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export const metadata = {
  title: "Serviços de Automação, IA, Cloud e Desenvolvimento Web | InovaSys",
  description:
    "Conheça os serviços da InovaSys: automação empresarial, inteligência artificial, soluções em cloud, desenvolvimento web, integração de sistemas e suporte 24/7 em São Luís - MA.",
};
