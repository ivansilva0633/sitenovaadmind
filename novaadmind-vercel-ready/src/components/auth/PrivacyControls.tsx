import React, { useState } from 'react';

interface PrivacyControlsProps {
  onSave: (settings: PrivacySettings) => void;
  initialSettings?: PrivacySettings;
}

interface PrivacySettings {
  marketingEmails: boolean;
  dataSharing: boolean;
  analyticsTracking: boolean;
  dataRetention: 'standard' | 'minimum' | 'extended';
}

const PrivacyControls: React.FC<PrivacyControlsProps> = ({ 
  onSave, 
  initialSettings = {
    marketingEmails: false,
    dataSharing: false,
    analyticsTracking: true,
    dataRetention: 'standard'
  }
}) => {
  const [settings, setSettings] = useState<PrivacySettings>(initialSettings);
  const [saved, setSaved] = useState(false);

  const handleChange = (field: keyof PrivacySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
    setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Controles de Privacidade</h2>
        <p className="text-gray-600 mt-2">
          Gerencie como seus dados são utilizados no NovaAdMind
        </p>
      </div>

      {saved && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">Suas preferências de privacidade foram salvas com sucesso.</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Comunicações</h3>
            
            <div className="flex items-start mb-4">
              <div className="flex items-center h-5">
                <input
                  id="marketing-emails"
                  name="marketing-emails"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.marketingEmails}
                  onChange={(e) => handleChange('marketingEmails', e.target.checked)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="marketing-emails" className="font-medium text-gray-700">Emails de marketing</label>
                <p className="text-gray-500">Receba novidades, dicas e ofertas especiais do NovaAdMind</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Uso de Dados</h3>
            
            <div className="flex items-start mb-4">
              <div className="flex items-center h-5">
                <input
                  id="data-sharing"
                  name="data-sharing"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.dataSharing}
                  onChange={(e) => handleChange('dataSharing', e.target.checked)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="data-sharing" className="font-medium text-gray-700">Compartilhamento de dados</label>
                <p className="text-gray-500">Permitir que dados anônimos sejam compartilhados para melhorar os serviços</p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <div className="flex items-center h-5">
                <input
                  id="analytics-tracking"
                  name="analytics-tracking"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.analyticsTracking}
                  onChange={(e) => handleChange('analyticsTracking', e.target.checked)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="analytics-tracking" className="font-medium text-gray-700">Rastreamento analítico</label>
                <p className="text-gray-500">Permitir análise de uso para melhorar a experiência do usuário</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Retenção de Dados</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="retention-standard"
                  name="data-retention"
                  type="radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={settings.dataRetention === 'standard'}
                  onChange={() => handleChange('dataRetention', 'standard')}
                />
                <label htmlFor="retention-standard" className="ml-3 block text-sm font-medium text-gray-700">
                  Padrão (24 meses)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  id="retention-minimum"
                  name="data-retention"
                  type="radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={settings.dataRetention === 'minimum'}
                  onChange={() => handleChange('dataRetention', 'minimum')}
                />
                <label htmlFor="retention-minimum" className="ml-3 block text-sm font-medium text-gray-700">
                  Mínimo (6 meses)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  id="retention-extended"
                  name="data-retention"
                  type="radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={settings.dataRetention === 'extended'}
                  onChange={() => handleChange('dataRetention', 'extended')}
                />
                <label htmlFor="retention-extended" className="ml-3 block text-sm font-medium text-gray-700">
                  Estendido (36 meses)
                </label>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-2">
              Esta configuração determina por quanto tempo mantemos seus dados históricos. Dados essenciais para a conta são mantidos enquanto sua conta estiver ativa.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Seus Direitos de Privacidade</h3>
            
            <p className="text-sm text-gray-600 mb-4">
              De acordo com a LGPD, você tem direito a:
            </p>
            
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Solicitar uma cópia de todos os seus dados pessoais</li>
              <li>Solicitar a correção de dados incorretos</li>
              <li>Solicitar a exclusão de seus dados (direito ao esquecimento)</li>
              <li>Revogar consentimentos previamente fornecidos</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
            
            <div className="mt-4 flex space-x-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Exportar Meus Dados
              </button>
              
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Solicitar Exclusão de Conta
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
          >
            Salvar Preferências
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          Para mais informações, consulte nossa{' '}
          <a href="/privacy" className="text-blue-500 hover:text-blue-700">
            Política de Privacidade
          </a>
          .
        </p>
        <p className="mt-2">
          Dúvidas sobre privacidade? Entre em contato:{' '}
          <a href="mailto:contato@novaadmind.com" className="text-blue-500 hover:text-blue-700">
            contato@novaadmind.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyControls;
