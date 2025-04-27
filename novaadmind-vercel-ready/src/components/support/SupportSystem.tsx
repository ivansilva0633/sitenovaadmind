import React, { useState } from 'react';
import { SearchIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface SupportSystemProps {
  onContactSupport: () => void;
}

const SupportSystem: React.FC<SupportSystemProps> = ({ onContactSupport }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(null);

  // Lista extensa de perguntas e respostas para o sistema de suporte
  const faqs: FAQ[] = [
    // Perguntas sobre Conta e Acesso
    {
      id: 1,
      question: 'Como faço para criar uma conta no NovaAdMind?',
      answer: 'Para criar uma conta no NovaAdMind, clique no botão "Cadastre-se" na página inicial. Preencha o formulário com seu nome, e-mail e senha. Aceite os Termos de Uso e Política de Privacidade e clique em "Cadastrar". Você receberá um e-mail de confirmação para ativar sua conta.',
      category: 'conta'
    },
    {
      id: 2,
      question: 'Esqueci minha senha. Como posso recuperá-la?',
      answer: 'Na página de login, clique em "Esqueceu sua senha?". Digite o e-mail associado à sua conta e clique em "Enviar". Você receberá um e-mail com instruções para redefinir sua senha. Se não receber o e-mail em alguns minutos, verifique sua pasta de spam.',
      category: 'conta'
    },
    {
      id: 3,
      question: 'Como altero meu endereço de e-mail?',
      answer: 'Para alterar seu endereço de e-mail, acesse seu perfil clicando no seu nome no canto superior direito. Vá para "Configurações" > "Informações da Conta". Clique em "Alterar E-mail", insira o novo endereço e confirme com sua senha atual. Você receberá um e-mail de verificação no novo endereço.',
      category: 'conta'
    },
    {
      id: 4,
      question: 'Como posso excluir minha conta?',
      answer: 'Para excluir sua conta, acesse "Configurações" > "Informações da Conta" > "Excluir Conta". Leia as informações sobre o que acontecerá com seus dados e confirme a exclusão digitando sua senha. Observe que esta ação é irreversível e todos os seus dados serão permanentemente removidos após 30 dias.',
      category: 'conta'
    },
    {
      id: 5,
      question: 'Posso ter múltiplos usuários na minha conta?',
      answer: 'Sim, nos planos Power Premium e Master Diamond, você pode adicionar múltiplos usuários à sua conta. Acesse "Configurações" > "Gerenciar Equipe" e clique em "Adicionar Membro". Insira o e-mail da pessoa e defina o nível de permissão. O usuário receberá um convite por e-mail para se juntar à sua equipe.',
      category: 'conta'
    },
    
    // Perguntas sobre Planos e Pagamentos
    {
      id: 6,
      question: 'Quais planos o NovaAdMind oferece?',
      answer: 'O NovaAdMind oferece quatro planos: Free (gratuito com funcionalidades básicas e 100 créditos mensais), Starter Pro (R$49,90/mês com 500 créditos), Power Premium (R$99,90/mês com 1.000 créditos) e Master Diamond (R$199,90/mês com 3.000 créditos). Cada plano inclui diferentes níveis de acesso às funcionalidades da plataforma.',
      category: 'planos'
    },
    {
      id: 7,
      question: 'Como funciona o sistema de créditos?',
      answer: 'Os créditos são a "moeda" do NovaAdMind, utilizados para acessar as funcionalidades de IA. Cada ação consome uma quantidade específica de créditos: geração de anúncios (5 créditos), copywriting básico (1-3 créditos), geração de imagens (5 créditos), benchmarking (8 créditos) e relatórios (10 créditos). Os créditos são renovados mensalmente de acordo com seu plano.',
      category: 'planos'
    },
    {
      id: 8,
      question: 'Posso comprar créditos adicionais?',
      answer: 'Sim, você pode comprar créditos adicionais a qualquer momento. Acesse "Minha Conta" > "Créditos" > "Comprar Créditos". Os pacotes disponíveis são: 100 créditos (R$19,90), 500 créditos (R$79,90) e 1.000 créditos (R$149,90). Os créditos adicionais não expiram e são utilizados apenas quando os créditos mensais do seu plano acabarem.',
      category: 'planos'
    },
    {
      id: 9,
      question: 'Como faço para mudar de plano?',
      answer: 'Para mudar de plano, acesse "Minha Conta" > "Plano Atual" > "Mudar Plano". Selecione o novo plano desejado e siga as instruções para confirmar a mudança. Se estiver fazendo upgrade, a mudança será imediata. Se estiver fazendo downgrade, a mudança ocorrerá no próximo ciclo de faturamento.',
      category: 'planos'
    },
    {
      id: 10,
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'O NovaAdMind aceita pagamentos por cartão de crédito (Visa, Mastercard, American Express, Elo), PIX e boleto bancário. Para pagamentos recorrentes (assinaturas), recomendamos o uso de cartão de crédito para evitar interrupções no serviço.',
      category: 'planos'
    },
    {
      id: 11,
      question: 'Como cancelo minha assinatura?',
      answer: 'Para cancelar sua assinatura, acesse "Minha Conta" > "Plano Atual" > "Cancelar Assinatura". Selecione o motivo do cancelamento e confirme. Você continuará tendo acesso às funcionalidades do seu plano até o final do período já pago. Após esse período, sua conta será convertida para o plano Free.',
      category: 'planos'
    },
    {
      id: 12,
      question: 'Vocês oferecem reembolso?',
      answer: 'Sim, oferecemos garantia de reembolso de 7 dias para novos assinantes. Se você não estiver satisfeito com o serviço nos primeiros 7 dias após a assinatura, entre em contato com nosso suporte para solicitar o reembolso. Após esse período, não oferecemos reembolsos para períodos parciais de assinatura.',
      category: 'planos'
    },
    
    // Perguntas sobre Funcionalidades
    {
      id: 13,
      question: 'Como funciona a geração de anúncios com IA?',
      answer: 'A geração de anúncios com IA permite criar textos publicitários otimizados para diferentes plataformas. Acesse "Criar Anúncio", selecione a plataforma (Facebook, Instagram, Google, etc.), informe o produto/serviço, público-alvo e objetivos. A IA gerará múltiplas versões de anúncios que você pode editar, salvar ou exportar diretamente para as plataformas integradas.',
      category: 'funcionalidades'
    },
    {
      id: 14,
      question: 'O que é o Copywriting Automático?',
      answer: 'O Copywriting Automático utiliza IA para criar textos persuasivos para diferentes finalidades: headlines, descrições de produtos, e-mails marketing, posts para redes sociais, etc. Acesse "Copywriting", selecione o tipo de texto, informe as características do produto/serviço e o tom de voz desejado. A IA gerará múltiplas versões que você pode personalizar.',
      category: 'funcionalidades'
    },
    {
      id: 15,
      question: 'Como usar o Simulador de Campanhas?',
      answer: 'O Simulador de Campanhas permite prever resultados de campanhas antes de investir. Acesse "Simulador", informe o orçamento, plataforma, público-alvo e objetivos. O sistema utilizará dados históricos e IA para simular métricas como alcance, cliques, conversões e ROI estimado. Você pode ajustar parâmetros e comparar diferentes cenários.',
      category: 'funcionalidades'
    },
    {
      id: 16,
      question: 'Como funciona o Benchmarking e Insights?',
      answer: 'O Benchmarking analisa campanhas de concorrentes e tendências do mercado. Acesse "Benchmarking", selecione seu setor e concorrentes específicos (ou deixe a IA identificá-los). O sistema coletará dados públicos e gerará relatórios comparativos, identificando oportunidades, ameaças e recomendações para melhorar suas campanhas.',
      category: 'funcionalidades'
    },
    {
      id: 17,
      question: 'Como exporto os anúncios criados para as plataformas?',
      answer: 'Para exportar anúncios, primeiro crie-os usando a ferramenta "Criar Anúncio". Após finalizar e salvar, vá para "Meus Anúncios", selecione os que deseja exportar e clique em "Exportar". Escolha a plataforma (Facebook Ads, Google Ads, etc.) e autorize a integração se for a primeira vez. Os anúncios serão enviados como rascunhos para a plataforma selecionada.',
      category: 'funcionalidades'
    },
    {
      id: 18,
      question: 'É possível agendar publicações?',
      answer: 'Sim, nos planos Starter Pro, Power Premium e Master Diamond. Após criar seu conteúdo, clique em "Agendar" em vez de "Publicar". Selecione a data e horário desejados e confirme. Você pode visualizar e gerenciar todo o conteúdo agendado na seção "Calendário de Conteúdo" e receber notificações quando as publicações forem realizadas.',
      category: 'funcionalidades'
    },
    {
      id: 19,
      question: 'Como personalizo o tom de voz da IA?',
      answer: 'Para personalizar o tom de voz, acesse qualquer ferramenta de geração de conteúdo e procure a opção "Tom de Voz". Você pode escolher entre opções predefinidas (profissional, casual, entusiasmado, etc.) ou criar um personalizado descrevendo características específicas. Você também pode salvar tons de voz personalizados para uso futuro em "Configurações" > "Tons de Voz".',
      category: 'funcionalidades'
    },
    {
      id: 20,
      question: 'Como integro minhas contas de redes sociais?',
      answer: 'Para integrar suas redes sociais, acesse "Configurações" > "Integrações". Selecione a plataforma desejada (Facebook, Instagram, LinkedIn, etc.) e clique em "Conectar". Você será redirecionado para a página de autorização da plataforma. Faça login e conceda as permissões necessárias. Após a autorização, você poderá publicar e analisar conteúdo diretamente pelo NovaAdMind.',
      category: 'funcionalidades'
    },
    
    // Perguntas sobre Integrações
    {
      id: 21,
      question: 'Quais plataformas de anúncios o NovaAdMind integra?',
      answer: 'O NovaAdMind integra-se com as principais plataformas de anúncios: Facebook Ads, Instagram Ads, Google Ads, Microsoft Ads, TikTok Ads, LinkedIn Ads e Twitter Ads. As integrações permitem importar dados de campanhas existentes, exportar anúncios criados e, em alguns casos, gerenciar campanhas diretamente pela plataforma.',
      category: 'integrações'
    },
    {
      id: 22,
      question: 'Como integro minha conta do Google Ads?',
      answer: 'Para integrar o Google Ads, acesse "Configurações" > "Integrações" > "Google Ads" e clique em "Conectar". Faça login na sua conta Google e autorize o acesso. Para contas MCC (agências), selecione quais contas de clientes deseja conectar. Após a integração, você poderá importar dados de campanhas e exportar anúncios criados no NovaAdMind.',
      category: 'integrações'
    },
    {
      id: 23,
      question: 'É possível integrar com o WordPress?',
      answer: 'Sim, o NovaAdMind oferece integração com WordPress. Acesse "Configurações" > "Integrações" > "WordPress" e clique em "Conectar". Você precisará instalar o plugin NovaAdMind no seu WordPress e gerar uma chave API. Após a integração, você poderá publicar conteúdo gerado diretamente no seu blog WordPress.',
      category: 'integrações'
    },
    {
      id: 24,
      question: 'Como integro com ferramentas de e-mail marketing?',
      answer: 'O NovaAdMind integra-se com várias ferramentas de e-mail marketing como Mailchimp, RD Station, ActiveCampaign e SendinBlue. Acesse "Configurações" > "Integrações", selecione sua ferramenta e clique em "Conectar". Siga as instruções para autorizar o acesso. Após a integração, você poderá exportar textos e campanhas diretamente para essas plataformas.',
      category: 'integrações'
    },
    {
      id: 25,
      question: 'O NovaAdMind tem API para desenvolvedores?',
      answer: 'Sim, o NovaAdMind oferece uma API RESTful para desenvolvedores nos planos Power Premium e Master Diamond. A API permite acessar programaticamente as funcionalidades de geração de conteúdo, análise de dados e gerenciamento de campanhas. A documentação completa está disponível em "Configurações" > "API" ou em developers.novaadmind.com.',
      category: 'integrações'
    },
    
    // Perguntas sobre Privacidade e Segurança
    {
      id: 26,
      question: 'Como o NovaAdMind protege meus dados?',
      answer: 'O NovaAdMind implementa múltiplas camadas de segurança: criptografia de dados em trânsito (SSL/TLS) e em repouso (AES-256), autenticação de dois fatores, monitoramento contínuo contra ameaças, backups regulares e conformidade com regulamentações de privacidade como LGPD. Nossos servidores estão em data centers certificados com ISO 27001 e SOC 2.',
      category: 'privacidade'
    },
    {
      id: 27,
      question: 'O NovaAdMind está em conformidade com a LGPD?',
      answer: 'Sim, o NovaAdMind está em total conformidade com a Lei Geral de Proteção de Dados (LGPD). Implementamos controles técnicos e organizacionais para proteger dados pessoais, oferecemos ferramentas para que os usuários exerçam seus direitos (acesso, correção, exclusão), e temos políticas claras sobre coleta e uso de dados. Nosso DPO pode ser contatado em dpo@novaadmind.com.',
      category: 'privacidade'
    },
    {
      id: 28,
      question: 'Como ativar a autenticação de dois fatores?',
      answer: 'Para ativar a autenticação de dois fatores, acesse "Configurações" > "Segurança" > "Autenticação de Dois Fatores" e clique em "Ativar". Você pode escolher entre receber códigos por SMS ou usar um aplicativo autenticador (como Google Authenticator ou Authy). Siga as instruções na tela para completar a configuração e salve os códigos de backup em um local seguro.',
      category: 'privacidade'
    },
    {
      id: 29,
      question: 'O NovaAdMind vende meus dados para terceiros?',
      answer: 'Não, o NovaAdMind não vende dados de usuários para terceiros. Utilizamos seus dados apenas para fornecer e melhorar nossos serviços, conforme descrito em nossa Política de Privacidade. Compartilhamos dados com terceiros apenas quando necessário para a prestação do serviço (como processadores de pagamento) ou quando exigido por lei.',
      category: 'privacidade'
    },
    {
      id: 30,
      question: 'Como posso solicitar a exclusão dos meus dados?',
      answer: 'Para solicitar a exclusão de seus dados, você pode: 1) Excluir sua conta em "Configurações" > "Informações da Conta" > "Excluir Conta"; 2) Enviar um e-mail para privacidade@novaadmind.com com o assunto "Solicitação de Exclusão de Dados"; ou 3) Contatar nosso DPO em dpo@novaadmind.com. Processaremos sua solicitação em até 15 dias, conforme a LGPD.',
      category: 'privacidade'
    },
    
    // Perguntas sobre Suporte Técnico
    {
      id: 31,
      question: 'Quais são os horários de atendimento do suporte?',
      answer: 'Nosso suporte por e-mail (contato@novaadmind.com) está disponível 24/7, com tempo de resposta médio de 24 horas. O suporte por chat ao vivo funciona de segunda a sexta, das 8h às 20h (horário de Brasília). Para clientes dos planos Power Premium e Master Diamond, oferecemos suporte telefônico no mesmo horário do chat.',
      category: 'suporte'
    },
    {
      id: 32,
      question: 'Como reporto um bug ou problema técnico?',
      answer: 'Para reportar um bug, acesse "Ajuda" > "Reportar Problema". Descreva o problema em detalhes, incluindo os passos para reproduzi-lo, e anexe capturas de tela se possível. Alternativamente, envie um e-mail para suporte@novaadmind.com com o assunto "Bug Report". Nossa equipe técnica analisará e responderá em até 48 horas.',
      category: 'suporte'
    },
    {
      id: 33,
      question: 'Onde encontro tutoriais e guias de uso?',
      answer: 'Tutoriais e guias estão disponíveis em nossa Central de Ajuda, acessível pelo botão "Ajuda" no menu principal. Lá você encontrará artigos, vídeos tutoriais e webinars organizados por categoria. Também oferecemos onboarding guiado para novos usuários e webinars semanais gratuitos sobre funcionalidades específicas (inscrições em novaadmind.com/webinars).',
      category: 'suporte'
    },
    {
      id: 34,
      question: 'O NovaAdMind oferece treinamentos personalizados?',
      answer: 'Sim, oferecemos treinamentos personalizados para clientes dos planos Power Premium e Master Diamond. Entre em contato com seu gerente de conta ou envie um e-mail para treinamento@novaadmind.com para agendar. Para o plano Master Diamond, incluímos 3 horas de treinamento personalizado gratuito por mês. Treinamentos adicionais podem ser contratados por R$250/hora.',
      category: 'suporte'
    },
    {
      id: 35,
      question: 'Como sugiro novas funcionalidades?',
      answer: 'Valorizamos seu feedback! Para sugerir novas funcionalidades, acesse "Ajuda" > "Sugestões" ou envie um e-mail para sugestoes@novaadmind.com. Todas as sugestões são revisadas por nossa equipe de produto. Você também pode votar em sugestões de outros usuários em nossa comunidade online (comunidade.novaadmind.com) para ajudar a priorizar o desenvolvimento.',
      category: 'suporte'
    },
    
    // Perguntas sobre IA e Tecnologia
    {
      id: 36,
      question: 'Qual tecnologia de IA o NovaAdMind utiliza?',
      answer: 'O NovaAdMind utiliza uma combinação de tecnologias de IA avançadas, incluindo modelos de linguagem natural (NLP) baseados em arquiteturas transformer, algoritmos de aprendizado de máquina para análise preditiva, e redes neurais para processamento de imagens. Nossa IA é constantemente treinada com dados de marketing digital para oferecer resultados específicos para este domínio.',
      category: 'tecnologia'
    },
    {
      id: 37,
      question: 'A IA do NovaAdMind é realmente ilimitada?',
      answer: 'Sim, a IA do NovaAdMind é ilimitada no sentido de que não há restrições técnicas ao número de vezes que você pode utilizá-la. O único limite é o número de créditos disponíveis em seu plano. Cada ação consome uma quantidade específica de créditos, que são renovados mensalmente de acordo com seu plano ou podem ser adquiridos adicionalmente.',
      category: 'tecnologia'
    },
    {
      id: 38,
      question: 'Como a IA aprende com meus dados?',
      answer: 'A IA do NovaAdMind aprende com seus dados de duas formas: 1) Adaptação contextual - utiliza seu histórico de uso, preferências e resultados anteriores para personalizar as recomendações; 2) Feedback loop - aprende com suas edições e seleções para melhorar resultados futuros. Seus dados são processados de forma segura e nunca compartilhados com outros usuários.',
      category: 'tecnologia'
    },
    {
      id: 39,
      question: 'Posso treinar a IA com meu próprio conteúdo?',
      answer: 'Sim, nos planos Power Premium e Master Diamond, você pode treinar a IA com seu próprio conteúdo. Acesse "Configurações" > "IA Personalizada" > "Treinar Modelo". Faça upload de exemplos de conteúdo (anúncios anteriores, textos de marca, etc.) e defina diretrizes de tom e estilo. A IA incorporará essas características em futuras gerações de conteúdo para sua conta.',
      category: 'tecnologia'
    },
    {
      id: 40,
      question: 'A IA pode gerar conteúdo em outros idiomas?',
      answer: 'Sim, a IA do NovaAdMind pode gerar conteúdo em múltiplos idiomas. Atualmente, suportamos português (Brasil e Portugal), inglês, espanhol, francês, italiano, alemão e japonês. Para selecionar o idioma, use o menu suspenso "Idioma" ao criar qualquer tipo de conteúdo. A qualidade é otimizada para português e inglês, com suporte crescente para os demais idiomas.',
      category: 'tecnologia'
    },
    
    // Perguntas sobre Resultados e Métricas
    {
      id: 41,
      question: 'Como meço o ROI usando o NovaAdMind?',
      answer: 'Para medir o ROI, utilize o módulo "Analytics" > "ROI Calculator". Conecte suas contas de anúncios e/ou insira manualmente seus investimentos e resultados. O sistema calculará métricas como ROI, ROAS, CPA e CLV. Para análises avançadas, use a função "Attribution Modeling" para entender como diferentes canais contribuem para conversões e ajustar seus investimentos.',
      category: 'resultados'
    },
    {
      id: 42,
      question: 'Como exporto relatórios de desempenho?',
      answer: 'Para exportar relatórios, acesse "Analytics" > "Relatórios" e selecione o tipo de relatório desejado (campanhas, anúncios, canais, etc.). Defina o período e as métricas a serem incluídas. Clique em "Gerar Relatório" e depois em "Exportar". Você pode escolher entre formatos PDF, Excel, CSV ou Google Sheets, e também agendar envios automáticos por e-mail.',
      category: 'resultados'
    },
    {
      id: 43,
      question: 'Quais métricas o NovaAdMind acompanha?',
      answer: 'O NovaAdMind acompanha métricas completas de marketing digital: impressões, alcance, cliques, CTR, conversões, CPA, ROI, ROAS, engajamento, tempo de permanência, taxa de rejeição, valor médio de pedido, CLV, entre outras. Para redes sociais, monitoramos também curtidas, compartilhamentos, comentários, salvamentos e crescimento de seguidores.',
      category: 'resultados'
    },
    {
      id: 44,
      question: 'Como comparo o desempenho de diferentes anúncios?',
      answer: 'Para comparar anúncios, acesse "Analytics" > "Comparação A/B". Selecione os anúncios que deseja comparar (até 5 simultaneamente) e as métricas relevantes. O sistema gerará gráficos comparativos e destacará diferenças estatisticamente significativas. Você também pode usar a função "Insights" para receber recomendações baseadas nessa análise.',
      category: 'resultados'
    },
    {
      id: 45,
      question: 'É possível integrar com o Google Analytics?',
      answer: 'Sim, o NovaAdMind integra-se com Google Analytics (Universal Analytics e GA4). Acesse "Configurações" > "Integrações" > "Google Analytics" e siga as instruções para conectar sua propriedade. Após a integração, você poderá visualizar dados do GA diretamente no dashboard do NovaAdMind e correlacionar com dados de outras fontes.',
      category: 'resultados'
    },
    
    // Perguntas sobre Uso Geral
    {
      id: 46,
      question: 'Posso acessar o NovaAdMind pelo celular?',
      answer: 'Sim, o NovaAdMind é totalmente responsivo e funciona em dispositivos móveis. Você pode acessar pelo navegador do seu smartphone ou tablet. Também oferecemos aplicativos nativos para iOS e Android, disponíveis na App Store e Google Play Store, que permitem acesso a todas as funcionalidades, incluindo notificações push para atualizações importantes.',
      category: 'uso'
    },
    {
      id: 47,
      question: 'Como organizo meus projetos e campanhas?',
      answer: 'Para organizar seu trabalho, use a função "Projetos" no menu principal. Crie projetos para diferentes clientes, produtos ou campanhas. Dentro de cada projeto, você pode criar pastas para organizar anúncios, textos e outros conteúdos. Use tags para categorização adicional e filtros para encontrar rapidamente o que precisa.',
      category: 'uso'
    },
    {
      id: 48,
      question: 'Posso compartilhar conteúdo com clientes ou colegas?',
      answer: 'Sim, você pode compartilhar conteúdo de várias formas: 1) Convide usuários para sua equipe com diferentes níveis de permissão; 2) Gere links de compartilhamento para visualização externa (com ou sem senha); 3) Exporte para PDF ou imagem; 4) Envie diretamente por e-mail; ou 5) Crie relatórios de apresentação personalizados com sua marca.',
      category: 'uso'
    },
    {
      id: 49,
      question: 'O NovaAdMind funciona offline?',
      answer: 'O NovaAdMind é uma plataforma baseada em nuvem que requer conexão com internet para a maioria das funcionalidades. No entanto, nos aplicativos móveis, você pode salvar conteúdo para acesso offline e sincronizar quando voltar a ter conexão. Algumas funcionalidades que dependem de processamento em tempo real, como geração de IA, não estão disponíveis offline.',
      category: 'uso'
    },
    {
      id: 50,
      question: 'Como personalizo o dashboard?',
      answer: 'Para personalizar seu dashboard, clique no ícone de engrenagem no canto superior direito da tela inicial. Você pode arrastar e soltar widgets, redimensioná-los, adicionar novos (métricas, gráficos, listas de tarefas, etc.) e remover os que não usa. Também é possível criar múltiplos dashboards para diferentes finalidades e alternar entre eles.',
      category: 'uso'
    }
  ];

  // Filtrar FAQs com base na pesquisa e categoria
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Categorias disponíveis
  const categories = [
    { id: 'all', name: 'Todas as categorias' },
    { id: 'conta', name: 'Conta e Acesso' },
    { id: 'planos', name: 'Planos e Pagamentos' },
    { id: 'funcionalidades', name: 'Funcionalidades' },
    { id: 'integrações', name: 'Integrações' },
    { id: 'privacidade', name: 'Privacidade e Segurança' },
    { id: 'suporte', name: 'Suporte Técnico' },
    { id: 'tecnologia', name: 'IA e Tecnologia' },
    { id: 'resultados', name: 'Resultados e Métricas' },
    { id: 'uso', name: 'Uso Geral' }
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Central de Suporte NovaAdMind</h2>
        <p className="text-white/80">Encontre respostas para suas dúvidas ou entre em contato com nossa equipe</p>
        
        <div className="mt-6 relative">
          <input
            type="text"
            placeholder="Pesquisar perguntas e respostas..."
            className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-3 top-3 text-gray-400">
            <SearchIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className={`transform transition-transform ${expandedFaqId === faq.id ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                {expandedFaqId === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <QuestionMarkCircleIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-500 mb-6">Tente ajustar sua pesquisa ou categoria para encontrar o que procura.</p>
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Não encontrou o que procurava?</h3>
            <p className="text-gray-500 mb-6">Nossa equipe de suporte está pronta para ajudar você.</p>
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={onContactSupport}
            >
              Contatar Suporte
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Ou envie um e-mail para{' '}
              <a href="mailto:contato@novaadmind.com" className="text-blue-600 hover:text-blue-500">
                contato@novaadmind.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSystem;
