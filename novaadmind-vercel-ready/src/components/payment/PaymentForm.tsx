import React, { useState } from 'react';
import { CreditCardIcon, LockClosedIcon } from '@heroicons/react/outline';

interface PaymentFormProps {
  planName: string;
  planPrice: number;
  onPaymentComplete: (success: boolean, transactionId?: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ 
  planName, 
  planPrice, 
  onPaymentComplete 
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card'); // 'credit-card', 'pix', 'boleto'

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Add space after every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.slice(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
    return digits;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(formatExpiryDate(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (paymentMethod === 'credit-card') {
      if (!cardNumber || !cardName || !expiryDate || !cvv) {
        setError('Por favor, preencha todos os campos do cartão');
        return;
      }
      
      if (cardNumber.replace(/\s/g, '').length !== 16) {
        setError('Número de cartão inválido');
        return;
      }
      
      if (expiryDate.length !== 5) {
        setError('Data de validade inválida');
        return;
      }
      
      if (cvv.length < 3) {
        setError('CVV inválido');
        return;
      }
    }
    
    // Simulate payment processing
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      // Simulate successful payment
      const transactionId = 'txn_' + Math.random().toString(36).substr(2, 9);
      onPaymentComplete(true, transactionId);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Finalizar Assinatura</h2>
        <p className="text-gray-600 mt-1">Plano {planName} - R$ {planPrice.toFixed(2)}/mês</p>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium text-sm ${paymentMethod === 'credit-card' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setPaymentMethod('credit-card')}
          >
            Cartão de Crédito
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${paymentMethod === 'pix' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setPaymentMethod('pix')}
          >
            PIX
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${paymentMethod === 'boleto' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setPaymentMethod('boleto')}
          >
            Boleto
          </button>
        </div>
      </div>
      
      {paymentMethod === 'credit-card' && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
              Número do Cartão
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-number"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <CreditCardIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome no Cartão
            </label>
            <input
              type="text"
              id="card-name"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Nome como está no cartão"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700 mb-1">
                Validade
              </label>
              <input
                type="text"
                id="expiry-date"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="MM/AA"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                maxLength={5}
              />
            </div>
            
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="cvv"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  maxLength={4}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <LockClosedIcon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processando...' : `Pagar R$ ${planPrice.toFixed(2)}`}
            </button>
          </div>
        </form>
      )}
      
      {paymentMethod === 'pix' && (
        <div className="text-center py-6">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/QR_code_example.svg" 
              alt="QR Code PIX" 
              className="w-48 h-48 mx-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mb-2">Escaneie o QR Code acima com o aplicativo do seu banco</p>
          <p className="text-sm text-gray-600">Ou copie a chave PIX:</p>
          <div className="flex items-center justify-center mt-2">
            <input
              type="text"
              className="block w-64 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              value="00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028-f142082d7b230217NovaAdMind Plano"
              readOnly
            />
            <button
              className="px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md hover:bg-gray-100"
              onClick={() => {
                navigator.clipboard.writeText("00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028-f142082d7b230217NovaAdMind Plano");
                alert("Chave PIX copiada!");
              }}
            >
              Copiar
            </button>
          </div>
          <button
            className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            onClick={() => onPaymentComplete(true, 'pix_' + Math.random().toString(36).substr(2, 9))}
          >
            Já realizei o pagamento
          </button>
        </div>
      )}
      
      {paymentMethod === 'boleto' && (
        <div className="text-center py-6">
          <div className="border border-gray-300 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-left">
                <p className="text-sm font-medium">NovaAdMind</p>
                <p className="text-xs text-gray-500">CNPJ: 12.345.678/0001-90</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Valor: R$ {planPrice.toFixed(2)}</p>
                <p className="text-xs text-gray-500">Vencimento: {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}</p>
              </div>
            </div>
            <div className="border-t border-dashed border-gray-300 pt-4">
              <p className="text-xs text-gray-700 mb-2">Código de barras:</p>
              <p className="font-mono text-sm break-all">34191.79001 01043.510047 91020.150008 9 87770026000</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              onClick={() => {
                alert("Boleto gerado e enviado para seu email!");
              }}
            >
              Enviar por email
            </button>
            <button
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              onClick={() => {
                alert("Função de impressão iniciada!");
              }}
            >
              Imprimir
            </button>
          </div>
          <button
            className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            onClick={() => onPaymentComplete(true, 'boleto_' + Math.random().toString(36).substr(2, 9))}
          >
            Já realizei o pagamento
          </button>
        </div>
      )}
      
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-center">
          <LockClosedIcon className="h-4 w-4 text-gray-400 mr-1" />
          <p className="text-xs text-gray-500">Pagamento seguro processado com criptografia</p>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          Ao assinar, você concorda com nossos <a href="/terms" className="text-purple-600 hover:text-purple-500">Termos de Serviço</a> e <a href="/privacy" className="text-purple-600 hover:text-purple-500">Política de Privacidade</a>
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
