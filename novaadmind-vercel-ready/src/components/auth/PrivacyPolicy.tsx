import React from 'react';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          Nova<span className="text-purple-600">AdMind</span>
        </h1>
        <h2 className="text-2xl mt-2 text-gray-700">Política de Privacidade</h2>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Introdução</h3>
        <p className="text-gray-700">
          A NovaAdMind ("nós", "nosso" ou "nossa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nosso site e serviços.
        </p>
        <p className="text-gray-700">
          Ao utilizar o NovaAdMind, você concorda com a coleta e uso de informações de acordo com esta política. Processamos seus dados pessoais apenas para os fins descritos nesta Política de Privacidade e em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras leis de privacidade aplicáveis.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Informações que Coletamos</h3>
        <p className="text-gray-700">
          <strong>Informações que você nos fornece:</strong> Coletamos informações que você nos fornece diretamente, incluindo:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Informações de registro (nome, e-mail, senha)</li>
          <li>Informações de perfil</li>
          <li>Conteúdo que você cria usando nossos serviços</li>
          <li>Comunicações com nossa equipe de suporte</li>
        </ul>
        
        <p className="text-gray-700 mt-4">
          <strong>Informações coletadas automaticamente:</strong> Quando você utiliza nossos serviços, podemos coletar automaticamente:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Dados de uso e interação com a plataforma</li>
          <li>Informações do dispositivo e navegador</li>
          <li>Endereço IP e localização aproximada</li>
          <li>Cookies e tecnologias similares</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Como Usamos Suas Informações</h3>
        <p className="text-gray-700">
          Utilizamos suas informações para:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Fornecer, manter e melhorar nossos serviços</li>
          <li>Processar suas transações</li>
          <li>Enviar comunicações relacionadas ao serviço</li>
          <li>Enviar comunicações de marketing (com seu consentimento)</li>
          <li>Personalizar sua experiência</li>
          <li>Detectar e prevenir fraudes e abusos</li>
          <li>Cumprir obrigações legais</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">4. Compartilhamento de Informações</h3>
        <p className="text-gray-700">
          Podemos compartilhar suas informações com:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Prestadores de serviços que nos ajudam a operar nossa plataforma</li>
          <li>Parceiros de negócios (apenas com seu consentimento explícito)</li>
          <li>Autoridades legais quando exigido por lei</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Não vendemos suas informações pessoais a terceiros.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">5. Seus Direitos e Escolhas</h3>
        <p className="text-gray-700">
          De acordo com a LGPD, você tem os seguintes direitos:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Acesso aos seus dados pessoais</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
          <li>Portabilidade dos dados</li>
          <li>Eliminação dos dados tratados com seu consentimento</li>
          <li>Informação sobre entidades públicas e privadas com as quais compartilhamos seus dados</li>
          <li>Revogação do consentimento</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Para exercer esses direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@novaadmind.com" className="text-blue-500 hover:text-blue-700">contato@novaadmind.com</a>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">6. Segurança de Dados</h3>
        <p className="text-gray-700">
          Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, perda acidental ou alteração. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">7. Retenção de Dados</h3>
        <p className="text-gray-700">
          Mantemos suas informações pessoais pelo tempo necessário para fornecer os serviços solicitados, cumprir nossas obrigações legais, resolver disputas e fazer cumprir nossos acordos. Quando não precisarmos mais de suas informações pessoais, as excluiremos ou anonimizaremos.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">8. Alterações nesta Política</h3>
        <p className="text-gray-700">
          Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "última atualização". Recomendamos que você revise esta Política de Privacidade periodicamente.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">9. Contato</h3>
        <p className="text-gray-700">
          Se você tiver dúvidas sobre esta Política de Privacidade ou nossas práticas de privacidade, entre em contato conosco:
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

export default PrivacyPolicy;
