import React, { useState } from 'react';
import Link from 'next/link';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }
    
    onSubmit(email, password);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          Nova<span className="text-purple-600">AdMind</span>
        </h1>
        <h2 className="text-xl mt-2 text-gray-700">Acesse sua conta</h2>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            E-mail
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

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Senha
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
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Lembrar-me
            </label>
          </div>
          <div className="text-sm">
            <Link href="/forgot-password" className="text-blue-500 hover:text-blue-700 transition-colors">
              Esqueceu sua senha?
            </Link>
          </div>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
          >
            Entrar
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Ainda não tem uma conta?{' '}
            <Link href="/register" className="text-blue-500 hover:text-blue-700 transition-colors">
              Cadastre-se
            </Link>
          </p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors flex items-center"
          >
            <span>Ajuda</span>
          </button>
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors flex items-center"
          >
            <span>Suporte</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
