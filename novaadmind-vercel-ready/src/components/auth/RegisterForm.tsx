import React, { useState } from 'react';
import Link from 'next/link';

interface RegisterFormProps {
  onSubmit: (name: string, email: string, password: string, privacyConsent: boolean, marketingConsent: boolean) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    
    if (!privacyConsent) {
      setError('Você precisa aceitar os Termos de Uso e Política de Privacidade');
      return;
    }
    
    onSubmit(name, email, password, privacyConsent, marketingConsent);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          Nova<span className="text-purple-600">AdMind</span>
        </h1>
        <h2 className="text-xl mt-2 text-gray-700">Crie sua conta</h2>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Nome completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Senha <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="text-xs text-gray-500 mt-1">Mínimo de 8 caracteres, incluindo letras e números</p>
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirmar senha <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* LGPD Compliance - Privacy Consent */}
        <div className="mb-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacy-consent"
                name="privacy-consent"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={privacyConsent}
                onChange={(e) => setPrivacyConsent(e.target.checked)}
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="privacy-consent" className="text-gray-700">
                <span className="text-red-500">*</span> Li e aceito os{' '}
                <Link href="/terms" className="text-blue-500 hover:text-blue-700 transition-colors">
                  Termos de Uso
                </Link>{' '}
                e a{' '}
                <Link href="/privacy" className="text-blue-500 hover:text-blue-700 transition-colors">
                  Política de Privacidade
                </Link>
              </label>
            </div>
          </div>
        </div>

        {/* LGPD Compliance - Marketing Consent */}
        <div className="mb-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="marketing-consent"
                name="marketing-consent"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="marketing-consent" className="text-gray-700">
                Desejo receber novidades, dicas e ofertas especiais do NovaAdMind por e-mail
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
          >
            Cadastrar
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-blue-500 hover:text-blue-700 transition-colors">
              Faça login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
