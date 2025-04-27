import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  credits: number;
  popular?: boolean;
}

interface PlanSelectionProps {
  onSelectPlan: (planId: string) => void;
  currentPlanId?: string;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({ 
  onSelectPlan,
  currentPlanId = 'free'
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState(currentPlanId);

  const plans: Plan[] = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      description: 'Ideal para experimentar as funcionalidades básicas',
      features: [
        'Acesso a ferramentas básicas de IA',
        '100 créditos mensais',
        'Geração de até 10 anúncios por mês',
        'Copywriting básico',
        'Suporte por email'
      ],
      credits: 100
    },
    {
      id: 'starter-pro',
      name: 'Starter Pro',
      price: 49.90,
      description: 'Perfeito para profissionais iniciantes',
      features: [
        'Todas as funcionalidades do plano Free',
        '500 créditos mensais',
        'Geração ilimitada de anúncios',
        'Copywriting avançado',
        'Simulador de campanhas',
        'Suporte prioritário'
      ],
      credits: 500,
      popular: true
    },
    {
      id: 'power-premium',
      name: 'Power Premium',
      price: 99.90,
      description: 'Para profissionais e pequenas agências',
      features: [
        'Todas as funcionalidades do plano Starter Pro',
        '1.000 créditos mensais',
        'Benchmarking e insights avançados',
        'Relatórios personalizados',
        'Integração com Meta Ads',
        'Suporte prioritário 24/7'
      ],
      credits: 1000
    },
    {
      id: 'master-diamond',
      name: 'Master Diamond',
      price: 199.90,
      description: 'Solução completa para agências e empresas',
      features: [
        'Todas as funcionalidades do plano Power Premium',
        '3.000 créditos mensais',
        'Integrações com todas as plataformas',
        'API para automação',
        'Gerenciador de equipes',
        'Suporte VIP com gerente dedicado'
      ],
      credits: 3000
    }
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    onSelectPlan(planId);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Todos os planos incluem acesso à IA inteligente do NovaAdMind
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-4">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`border rounded-lg shadow-sm divide-y divide-gray-200 ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-purple-500 text-white text-center py-1 text-sm font-medium">
                  Mais popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-3xl font-extrabold text-gray-900">R$ {plan.price.toFixed(2)}</span>
                  <span className="text-base font-medium text-gray-500">/mês</span>
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {plan.credits.toLocaleString()} créditos mensais
                </p>
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium ${
                    selectedPlanId === plan.id
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-white text-purple-600 border-purple-600 hover:bg-purple-50'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                >
                  {selectedPlanId === plan.id ? 'Plano Selecionado' : (currentPlanId === plan.id ? 'Seu Plano Atual' : 'Selecionar Plano')}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900">Inclui:</h4>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-gray-500">
            Precisa de mais créditos? <a href="#" className="text-purple-600 hover:text-purple-500">Compre créditos adicionais</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
