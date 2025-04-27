import React, { useState } from 'react';
import { 
  UserIcon, 
  CreditCardIcon, 
  ChartBarIcon, 
  QuestionMarkCircleIcon,
  UsersIcon,
  CogIcon,
  BellIcon
} from '@heroicons/react/outline';

interface AdminDashboardProps {
  stats: {
    totalUsers: number;
    activeUsers: number;
    totalCredits: number;
    creditsUsed: number;
    revenue: number;
    supportTickets: number;
  };
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  stats = {
    totalUsers: 1250,
    activeUsers: 876,
    totalCredits: 125000,
    creditsUsed: 78450,
    revenue: 15780.50,
    supportTickets: 23
  } 
}) => {
  const [currentView, setCurrentView] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">
            Nova<span className="text-purple-500">AdMind</span>
          </h1>
          <p className="text-gray-400 text-sm">Painel Administrativo</p>
        </div>
        <nav className="mt-6">
          <div className="px-4 py-2">
            <p className="text-xs uppercase text-gray-500 font-semibold">Geral</p>
            <button 
              onClick={() => setCurrentView('overview')}
              className={`mt-2 flex items-center px-4 py-2 text-gray-300 w-full text-left rounded-lg ${currentView === 'overview' ? 'bg-gray-800 text-white' : 'hover:bg-gray-800'}`}
            >
              <ChartBarIcon className="h-5 w-5 mr-3" />
              <span>Visão Geral</span>
            </button>
            <button 
              onClick={() => setCurrentView('users')}
              className={`mt-2 flex items-center px-4 py-2 text-gray-300 w-full text-left rounded-lg ${currentView === 'users' ? 'bg-gray-800 text-white' : 'hover:bg-gray-800'}`}
            >
              <UsersIcon className="h-5 w-5 mr-3" />
              <span>Usuários</span>
            </button>
            <button 
              onClick={() => setCurrentView('credits')}
              className={`mt-2 flex items-center px-4 py-2 text-gray-300 w-full text-left rounded-lg ${currentView === 'credits' ? 'bg-gray-800 text-white' : 'hover:bg-gray-800'}`}
            >
              <CreditCardIcon className="h-5 w-5 mr-3" />
              <span>Créditos</span>
            </button>
          </div>
          <div className="px-4 py-2 mt-4">
            <p className="text-xs uppercase text-gray-500 font-semibold">Suporte</p>
            <button 
              onClick={() => setCurrentView('support')}
              className={`mt-2 flex items-center px-4 py-2 text-gray-300 w-full text-left rounded-lg ${currentView === 'support' ? 'bg-gray-800 text-white' : 'hover:bg-gray-800'}`}
            >
              <QuestionMarkCircleIcon className="h-5 w-5 mr-3" />
              <span>Tickets</span>
            </button>
          </div>
          <div className="px-4 py-2 mt-4">
            <p className="text-xs uppercase text-gray-500 font-semibold">Configurações</p>
            <button 
              onClick={() => setCurrentView('settings')}
              className={`mt-2 flex items-center px-4 py-2 text-gray-300 w-full text-left rounded-lg ${currentView === 'settings' ? 'bg-gray-800 text-white' : 'hover:bg-gray-800'}`}
            >
              <CogIcon className="h-5 w-5 mr-3" />
              <span>Configurações</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {currentView === 'overview' && 'Visão Geral'}
              {currentView === 'users' && 'Gerenciamento de Usuários'}
              {currentView === 'credits' && 'Sistema de Créditos'}
              {currentView === 'support' && 'Tickets de Suporte'}
              {currentView === 'settings' && 'Configurações do Sistema'}
            </h2>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <BellIcon className="h-6 w-6" />
              </button>
              <div className="ml-4 relative flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {currentView === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* Total Users Card */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                      <UserIcon className="h-8 w-8" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Total de Usuários</p>
                      <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Usuários ativos</p>
                      <p className="text-sm font-medium text-green-600">{stats.activeUsers}</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(stats.activeUsers / stats.totalUsers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Credits Card */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 text-green-500">
                      <CreditCardIcon className="h-8 w-8" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Total de Créditos</p>
                      <p className="text-2xl font-semibold text-gray-900">{stats.totalCredits.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Créditos utilizados</p>
                      <p className="text-sm font-medium text-green-600">{stats.creditsUsed.toLocaleString()}</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(stats.creditsUsed / stats.totalCredits) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-500">
                      <ChartBarIcon className="h-8 w-8" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Receita Mensal</p>
                      <p className="text-2xl font-semibold text-gray-900">R$ {stats.revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Tickets de suporte</p>
                      <p className="text-sm font-medium text-yellow-600">{stats.supportTickets}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-green-500 text-sm font-medium">+12.5%</span>
                      <span className="text-gray-500 text-sm ml-2">em relação ao mês anterior</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Atividade Recente</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                        <UserIcon className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Novo usuário registrado</p>
                        <p className="text-sm text-gray-500">João Silva se registrou no plano Free</p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-sm text-gray-500">5 minutos atrás</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                        <CreditCardIcon className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Upgrade de plano</p>
                        <p className="text-sm text-gray-500">Maria Oliveira atualizou para o plano Power Premium</p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-sm text-gray-500">1 hora atrás</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
                        <QuestionMarkCircleIcon className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Novo ticket de suporte</p>
                        <p className="text-sm text-gray-500">Carlos Mendes abriu um ticket sobre geração de anúncios</p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-sm text-gray-500">3 horas atrás</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'users' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Gerenciamento de Usuários</h3>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Adicionar Usuário
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nome
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plano
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Créditos
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            JS
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">João Silva</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">joao.silva@example.com</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Free
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        50 / 100
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ativo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Editar</a>
                        <a href="#" className="text-red-600 hover:text-red-900">Desativar</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            MO
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Maria Oliveira</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">maria.oliveira@example.com</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          Power Premium
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        750 / 1000
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ativo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Editar</a>
                        <a href="#" className="text-red-600 hover:text-red-900">Desativar</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            CM
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Carlos Mendes</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">carlos.mendes@example.com</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Starter Pro
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        200 / 500
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ativo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Editar</a>
                        <a href="#" className="text-red-600 hover:text-red-900">Desativar</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Mostrando <span className="font-medium">1</span> a <span className="font-medium">3</span> de <span className="font-medium">{stats.totalUsers}</span> usuários
                </div>
                <div className="flex-1 flex justify-end">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Anterior
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Próximo
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentView === 'credits' && (
            <div>
              <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Visão Geral de Créditos</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-500">Total de Créditos Distribuídos</p>
                      <p className="text-2xl font-semibold text-gray-900">{stats.totalCredits.toLocaleString()}</p>
                      <div className="mt-2 text-sm text-green-600">+5.2% em relação ao mês anterior</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-500">Créditos Utilizados</p>
                      <p className="text-2xl font-semibold text-gray-900">{stats.creditsUsed.toLocaleString()}</p>
                      <div className="mt-2 text-sm text-green-600">+12.3% em relação ao mês anterior</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-500">Taxa de Utilização</p>
                      <p className="text-2xl font-semibold text-gray-900">{Math.round((stats.creditsUsed / stats.totalCredits) * 100)}%</p>
                      <div className="mt-2 text-sm text-green-600">+3.5% em relação ao mês anterior</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Consumo de Créditos por Funcionalidade</h3>
                  <select className="border-gray-300 rounded-md text-sm">
                    <option>Últimos 7 dias</option>
                    <option>Últimos 30 dias</option>
                    <option>Últimos 90 dias</option>
                  </select>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-700">Geração de Anúncios</p>
                        <p className="text-sm font-medium text-gray-900">35,280 créditos (45%)</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-700">Copywriting Automático</p>
                        <p className="text-sm font-medium text-gray-900">23,520 créditos (30%)</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-700">Simulador de Campanhas</p>
                        <p className="text-sm font-medium text-gray-900">11,760 créditos (15%)</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-700">Benchmarking e Insights</p>
                        <p className="text-sm font-medium text-gray-900">7,840 créditos (10%)</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'support' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Tickets de Suporte</h3>
                <div className="flex space-x-2">
                  <select className="border-gray-300 rounded-md text-sm">
                    <option>Todos os status</option>
                    <option>Aberto</option>
                    <option>Em andamento</option>
                    <option>Resolvido</option>
                  </select>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    Novo Ticket
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Assunto
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usuário
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        #1001
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Problema na geração de anúncios</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Carlos Mendes</div>
                        <div className="text-sm text-gray-500">carlos.mendes@example.com</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Em andamento
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Hoje, 14:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900">Ver detalhes</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        #1000
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Dúvida sobre cobrança</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Maria Oliveira</div>
                        <div className="text-sm text-gray-500">maria.oliveira@example.com</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Aberto
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Hoje, 10:15
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900">Ver detalhes</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        #999
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Solicitação de recurso</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">João Silva</div>
                        <div className="text-sm text-gray-500">joao.silva@example.com</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Resolvido
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Ontem, 16:45
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900">Ver detalhes</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Mostrando <span className="font-medium">1</span> a <span className="font-medium">3</span> de <span className="font-medium">{stats.supportTickets}</span> tickets
                </div>
                <div className="flex-1 flex justify-end">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Anterior
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Próximo
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentView === 'settings' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Configurações do Sistema</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Configurações Gerais</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Modo de Manutenção</p>
                          <p className="text-xs text-gray-500">Ativa o modo de manutenção para todos os usuários</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="maintenance-mode" className="sr-only" />
                          <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Registro de Novos Usuários</p>
                          <p className="text-xs text-gray-500">Permite que novos usuários se registrem no sistema</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="user-registration" className="sr-only" checked />
                          <div className="block bg-blue-500 w-10 h-6 rounded-full"></div>
                          <div className="dot absolute left-5 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Configurações de Email</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email-from" className="block text-sm font-medium text-gray-700">Email de Origem</label>
                        <input type="email" id="email-from" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="contato@novaadmind.com" />
                      </div>
                      <div>
                        <label htmlFor="email-name" className="block text-sm font-medium text-gray-700">Nome de Exibição</label>
                        <input type="text" id="email-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="NovaAdMind" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Configurações de API</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="api-key" className="block text-sm font-medium text-gray-700">Chave da API</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input type="text" id="api-key" className="flex-1 min-w-0 block w-full border-gray-300 rounded-md rounded-r-none" value="sk_live_51HxTmKJHJqLMCrEzUFYKYtqKlDfhk9JkH6YlkUVZUxknV" readOnly />
                          <button className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md">
                            Copiar
                          </button>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="webhook-url" className="block text-sm font-medium text-gray-700">URL do Webhook</label>
                        <input type="url" id="webhook-url" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="https://novaadmind.com/api/webhook" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-gray-200">
                    <div className="flex justify-end">
                      <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Cancelar
                      </button>
                      <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Salvar Alterações
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Configurações de Conta de Administrador</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="admin-name" className="block text-sm font-medium text-gray-700">Nome</label>
                      <input type="text" id="admin-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="Administrador" />
                    </div>
                    <div>
                      <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" id="admin-email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="admin@novaadmind.com" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Alterar Senha</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Senha Atual</label>
                        <input type="password" id="current-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                      </div>
                      <div></div>
                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Nova Senha</label>
                        <input type="password" id="new-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirmar Nova Senha</label>
                        <input type="password" id="confirm-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-gray-200">
                    <div className="flex justify-end">
                      <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Cancelar
                      </button>
                      <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Atualizar Conta
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
