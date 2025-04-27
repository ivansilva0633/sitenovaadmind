import React from 'react';
import Link from 'next/link';

const TermsOfService: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          Nova<span className="text-purple-600">AdMind</span>
        </h1>
        <h2 className="text-2xl mt-2 text-gray-700">Termos de Uso</h2>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Aceitação dos Termos</h3>
        <p className="text-gray-700">
          Ao acessar ou usar o NovaAdMind ("Serviço"), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar nosso Serviço.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Descrição do Serviço</h3>
        <p className="text-gray-700">
          O NovaAdMind é uma plataforma de marketing digital com IA que oferece ferramentas para criação de anúncios, copywriting automático, simulação de campanhas, benchmarking e insights para otimização de marketing digital.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Contas de Usuário</h3>
        <p className="text-gray-700">
          Para utilizar determinadas funcionalidades do Serviço, você precisará criar uma conta. Você é responsável por:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Manter a confidencialidade de sua senha</li>
          <li>Restringir o acesso ao seu computador ou dispositivo</li>
          <li>Assumir responsabilidade por todas as atividades realizadas em sua conta</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Você deve ter pelo menos 18 anos ou a maioridade legal em sua jurisdição para criar uma conta.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">4. Planos e Pagamentos</h3>
        <p className="text-gray-700">
          O NovaAdMind oferece diferentes planos de assinatura, incluindo um plano gratuito com funcionalidades limitadas e planos pagos com recursos adicionais.
        </p>
        <p className="text-gray-700 mt-4">
          Para planos pagos:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Os pagamentos são processados por gateways de pagamento seguros</li>
          <li>As assinaturas são renovadas automaticamente até que sejam canceladas</li>
          <li>Você pode cancelar sua assinatura a qualquer momento através da sua conta</li>
          <li>Não oferecemos reembolsos para períodos parciais de assinatura</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">5. Sistema de Créditos</h3>
        <p className="text-gray-700">
          Alguns recursos do NovaAdMind funcionam com base em um sistema de créditos:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Cada plano inclui uma quantidade específica de créditos mensais</li>
          <li>Os créditos são consumidos ao utilizar determinadas funcionalidades</li>
          <li>Créditos não utilizados não são acumulados para o mês seguinte</li>
          <li>Créditos adicionais podem ser adquiridos separadamente</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">6. Propriedade Intelectual</h3>
        <p className="text-gray-700">
          O Serviço e seu conteúdo original, recursos e funcionalidades são de propriedade do NovaAdMind e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
        </p>
        <p className="text-gray-700 mt-4">
          O conteúdo gerado pela IA através do NovaAdMind pode ser utilizado por você para fins comerciais, desde que:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Você tenha uma conta ativa</li>
          <li>O uso esteja em conformidade com estes Termos</li>
          <li>O conteúdo não seja utilizado para fins ilegais ou antiéticos</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">7. Uso Aceitável</h3>
        <p className="text-gray-700">
          Você concorda em não usar o Serviço para:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Violar leis ou regulamentos aplicáveis</li>
          <li>Infringir direitos de propriedade intelectual</li>
          <li>Transmitir material ofensivo, difamatório ou prejudicial</li>
          <li>Distribuir malware ou outros códigos maliciosos</li>
          <li>Interferir ou interromper a integridade ou o desempenho do Serviço</li>
          <li>Coletar ou rastrear informações pessoais de outros usuários</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">8. Limitação de Responsabilidade</h3>
        <p className="text-gray-700">
          Em nenhuma circunstância o NovaAdMind será responsável por danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso, resultantes do seu acesso ou uso do Serviço.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">9. Modificações do Serviço</h3>
        <p className="text-gray-700">
          Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, o Serviço ou qualquer parte dele com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros por qualquer modificação, suspensão ou descontinuação do Serviço.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">10. Alterações nos Termos</h3>
        <p className="text-gray-700">
          Podemos revisar estes Termos de Uso a qualquer momento, atualizando esta página. Ao continuar a usar o Serviço após tais alterações, você concorda em estar vinculado aos termos revisados.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">11. Lei Aplicável</h3>
        <p className="text-gray-700">
          Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar seus princípios de conflito de leis.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">12. Contato</h3>
        <p className="text-gray-700">
          Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
        </p>
        <p className="text-gray-700">
          E-mail: <a href="mailto:contato@novaadmind.com" className="text-blue-500 hover:text-blue-700">contato@novaadmind.com</a>
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link href="/login" className="text-blue-500 hover:text-blue-700 transition-colors">
          Voltar para o login
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;
