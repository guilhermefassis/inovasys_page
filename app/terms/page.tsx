import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | InovaSys Consultoria",
  description:
    "Termos de uso dos serviços da InovaSys Consultoria. Conheça as condições para utilização de nossos serviços.",
  robots: "index, follow",
};

export default function TermsPage() {
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
            Termos de Uso
          </h1>
          <p className="text-gray-600">
            Última atualização: 7 de setembro de 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-gray max-w-none">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar os serviços da InovaSys Consultoria, você concorda
            em cumprir e estar vinculado a estes Termos de Uso. Se você não
            concordar com qualquer parte destes termos, não deve usar nossos
            serviços.
          </p>

          <h2>2. Descrição dos Serviços</h2>
          <p>A InovaSys Consultoria oferece os seguintes serviços:</p>
          <ul>
            <li>Consultoria em transformação digital</li>
            <li>Desenvolvimento de soluções web</li>
            <li>Automação empresarial</li>
            <li>Implementação de inteligência artificial</li>
            <li>Soluções em cloud computing</li>
            <li>Integração de sistemas</li>
            <li>Suporte técnico especializado</li>
          </ul>

          <h2>3. Uso Aceitável</h2>
          <p>Você concorda em usar nossos serviços apenas para:</p>
          <ul>
            <li>Fins legais e legítimos</li>
            <li>Conformidade com todas as leis aplicáveis</li>
            <li>Não interferir com o funcionamento de nossos sistemas</li>
            <li>Não tentar acessar áreas restritas sem autorização</li>
          </ul>

          <h2>4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, incluindo mas não limitado a textos, gráficos,
            logos, ícones, imagens, clipes de áudio, downloads digitais e
            software, é propriedade da InovaSys Consultoria ou de seus
            fornecedores de conteúdo.
          </p>

          <h2>5. Contratos de Serviço</h2>
          <p>
            Os serviços específicos serão regidos por contratos separados que
            detalharão:
          </p>
          <ul>
            <li>Escopo do trabalho</li>
            <li>Prazos de entrega</li>
            <li>Valores e condições de pagamento</li>
            <li>Responsabilidades de cada parte</li>
            <li>Garantias e limitações</li>
          </ul>

          <h2>6. Pagamentos e Reembolsos</h2>
          <h3>6.1 Pagamentos:</h3>
          <ul>
            <li>
              Os pagamentos devem ser feitos conforme acordado no contrato
            </li>
            <li>Atrasos podem resultar em suspensão dos serviços</li>
            <li>
              Taxas adicionais podem ser aplicadas para alterações no escopo
            </li>
          </ul>

          <h3>6.2 Reembolsos:</h3>
          <ul>
            <li>Reembolsos serão avaliados caso a caso</li>
            <li>Trabalhos já realizados não são elegíveis para reembolso</li>
            <li>Cancelamentos devem ser comunicados por escrito</li>
          </ul>

          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            A InovaSys Consultoria não será responsável por danos indiretos,
            incidentais, especiais ou consequenciais decorrentes do uso de
            nossos serviços.
          </p>

          <h2>8. Confidencialidade</h2>
          <p>
            Comprometemo-nos a manter a confidencialidade de todas as
            informações comerciais e técnicas compartilhadas durante a prestação
            de nossos serviços.
          </p>
          <h2>9. Prazo e Rescisão</h2>
          <p>
            Estes termos permanecem em vigor enquanto você usar nossos serviços.
            Qualquer uma das partes pode rescindir o relacionamento mediante
            aviso prévio.
          </p>

          <h2>10. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. As alterações serão comunicadas através de nosso site.
          </p>

          <h2>11. Lei Aplicável</h2>
          <p>
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa
            será resolvida nos tribunais competentes do Brasil.
          </p>

          <h2>12. Contato</h2>
          <p>
            Para questões sobre estes termos de uso, entre em contato conosco:
          </p>
          <ul>
            <li>E-mail: contato@inovasys.tech</li>
            <li>Telefone: (98) 98435-9379</li>
            <li>Endereço: São Luís, Maranhão, Brasil</li>
          </ul>

          <h2>13. Disposições Gerais</h2>
          <p>
            Se qualquer disposição destes termos for considerada inválida, as
            demais disposições permanecerão em pleno vigor e efeito.
          </p>
        </div>
      </div>
    </div>
  );
}
