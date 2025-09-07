import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | InovaSys Consultoria",
  description:
    "Política de privacidade da InovaSys Consultoria. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-gray-600">
            Última atualização: 7 de setembro de 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-gray max-w-none">
          <h2>1. Informações Gerais</h2>
          <p>
            A InovaSys Consultoria ("nós", "nosso" ou "empresa") está
            comprometida em proteger e respeitar sua privacidade. Esta política
            explica como coletamos, usamos e protegemos suas informações
            pessoais.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <h3>2.1 Informações fornecidas por você:</h3>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Nome da empresa</li>
            <li>Informações sobre seu projeto ou necessidades</li>
          </ul>

          <h3>2.2 Informações coletadas automaticamente:</h3>
          <ul>
            <li>Endereço IP</li>
            <li>Tipo de navegador e dispositivo</li>
            <li>Páginas visitadas em nosso site</li>
            <li>Tempo de permanência no site</li>
            <li>Cookies e tecnologias similares</li>
          </ul>

          <h2>3. Como Usamos suas Informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li>Responder às suas consultas e solicitações</li>
            <li>Fornecer nossos serviços de consultoria</li>
            <li>
              Enviar informações sobre nossos serviços (com seu consentimento)
            </li>
            <li>Melhorar nosso site e serviços</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais
            com terceiros, exceto nas seguintes situações:
          </p>
          <ul>
            <li>Com seu consentimento explícito</li>
            <li>Para cumprir obrigações legais</li>
            <li>Para proteger nossos direitos e propriedade</li>
            <li>
              Com prestadores de serviços que nos auxiliam (sob acordos de
              confidencialidade)
            </li>
          </ul>

          <h2>5. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência em nosso site. Você
            pode configurar seu navegador para recusar cookies, mas isso pode
            afetar a funcionalidade do site.
          </p>

          <h2>6. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais
            apropriadas para proteger suas informações pessoais contra acesso
            não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2>7. Seus Direitos</h2>
          <p>De acordo com a LGPD, você tem o direito de:</p>
          <ul>
            <li>Acessar suas informações pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Revogar seu consentimento</li>
            <li>Solicitar a portabilidade de seus dados</li>
          </ul>

          <h2>8. Retenção de Dados</h2>
          <p>
            Mantemos suas informações pessoais apenas pelo tempo necessário para
            cumprir os propósitos descritos nesta política ou conforme exigido
            por lei.
          </p>

          <h2>9. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta política periodicamente. Notificaremos sobre
            mudanças significativas através de nosso site ou por e-mail.
          </p>

          <h2>10. Contato</h2>
          <p>
            Para questões sobre esta política de privacidade ou para exercer
            seus direitos, entre em contato conosco:
          </p>
          <ul>
            <li>E-mail: contato@inovasys.tech</li>
            <li>Telefone: (98) 98435-9379</li>
            <li>Endereço: São Luís, Maranhão, Brasil</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
