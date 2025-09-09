"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Schema.org Structured Data para LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InovaSys Consultoria",
            description:
              "Especialistas em transformação digital para pequenas e médias empresas. Automação, IA, cloud e desenvolvimento web.",
            url: "https://inovasys.tech",
            telephone: "+55-98-98435-9379",
            email: "contato@inovasys.tech",
            address: {
              "@type": "PostalAddress",
              addressLocality: "São Luís",
              addressRegion: "MA",
              addressCountry: "BR",
            },
            openingHours: "Mo-Fr 08:00-18:00",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: -2.5387,
                longitude: -44.2825,
              },
              geoRadius: "100000",
            },
            services: [
              "Automação Empresarial",
              "Inteligência Artificial",
              "Soluções em Cloud",
              "Desenvolvimento Web",
              "Integração de Sistemas",
            ],
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <a href="/" aria-label="InovaSys Consultoria - Página Inicial">
              <div className="relative w-48 h-8 mb-6 bg-white/10 rounded">
                <Image
                  src="/inovasys-white.png"
                  alt="Logo InovaSys Consultoria - Transformação Digital"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Especialistas em transformação digital para pequenas e médias
              empresas. Ajudamos seu negócio a crescer através da automação, IA,
              cloud e desenvolvimento web.
            </p>

            <address className="space-y-3 text-sm not-italic">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span itemProp="address">São Luís, Maranhão, Brasil</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <a
                  href="tel:+5598984359379"
                  className="hover:text-white transition-colors"
                  itemProp="telephone"
                >
                  (98) 98435-9379
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a
                  href="mailto:contato@inovasys.tech"
                  className="hover:text-white transition-colors"
                  itemProp="email"
                >
                  contato@inovasys.tech
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-3 text-blue-400" />
                <span itemProp="openingHours" content="Mo-Fr 08:00-18:00">
                  Segunda a Sexta: 8h às 18h
                </span>
              </div>
            </address>
          </div>
          <nav aria-label="Links de Navegação do Footer">
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mapa do Site
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Serviços Oferecidos">
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Automação Empresarial
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Inteligência Artificial
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Soluções em Cloud
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Integração de Sistemas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Suporte Técnico 24/7
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 InovaSys Consultoria. Todos os direitos reservados.
              <span className="mx-2">|</span>
              <a href="/privacy" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <span className="mx-2">|</span>
              <a href="/terms" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group"
              aria-label="Voltar ao topo da página"
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

export const metadata = {
  title: "Serviços de Automação, IA, Cloud e Desenvolvimento Web | InovaSys",
  description:
    "Conheça os serviços da InovaSys: automação empresarial, inteligência artificial, soluções em cloud, desenvolvimento web, integração de sistemas e suporte 24/7 em São Luís - MA.",
};
