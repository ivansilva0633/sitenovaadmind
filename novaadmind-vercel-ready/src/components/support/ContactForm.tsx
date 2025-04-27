import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ContactForm: React.FC = () => {
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio de formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    // Redirecionar para a página inicial após envio
    router.push('/');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Entre em Contato</h2>
        <p className="text-white/80">Nossa equipe está pronta para ajudar você</p>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Seu nome"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="seu@email.com"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Assunto
            </label>
            <select
              id="subject"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Selecione um assunto</option>
              <option value="suporte">Suporte técnico</option>
              <option value="vendas">Informações sobre planos</option>
              <option value="faturamento">Faturamento e pagamentos</option>
              <option value="parceria">Parcerias</option>
              <option value="outro">Outro assunto</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Descreva sua mensagem em detalhes..."
              required
            ></textarea>
          </div>
          
          <div className="mb-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy-consent"
                  name="privacy-consent"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy-consent" className="text-gray-700">
                  Concordo com o processamento dos meus dados conforme descrito na{' '}
                  <Link href="/privacy" className="text-purple-600 hover:text-purple-500">
                    Política de Privacidade
                  </Link>
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Enviar mensagem
            </button>
          </div>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">E-mail de contato</h3>
              <p className="mt-1">
                <a href="mailto:contato@novaadmind.com" className="text-purple-600 hover:text-purple-500">
                  contato@novaadmind.com
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900">Horário de atendimento</h3>
              <p className="mt-1 text-sm text-gray-500">Segunda a sexta, das 8h às 20h (horário de Brasília)</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900">Suporte prioritário</h3>
              <p className="mt-1 text-sm text-gray-500">
                Clientes dos planos Power Premium e Master Diamond têm acesso ao suporte prioritário
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
