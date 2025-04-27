# NovaAdMind - Pacote de Implantação Otimizado

Este é o pacote otimizado do NovaAdMind, uma plataforma de marketing digital potencializada por IA que permite criar anúncios, textos e campanhas de marketing com inteligência artificial.

## Conteúdo do Pacote

Este pacote contém os arquivos essenciais para implantação do NovaAdMind:

- Diretório `src/` - Código-fonte da aplicação
- Diretório `public/` - Arquivos estáticos
- Arquivos de configuração (next.config.ts, tailwind.config.ts, tsconfig.json)
- package.json - Dependências do projeto
- hostinger-deployment-guide.md - Guia detalhado de implantação

## Instruções de Implantação

### 1. Preparação para Upload

1. Descompacte este arquivo ZIP em seu computador
2. Você verá os arquivos e pastas listados acima

### 2. Upload para a Hostinger

1. Acesse o painel da Hostinger (hPanel)
2. Navegue até o Gerenciador de Arquivos
3. Acesse a pasta `public_html`
4. Clique no botão "Upload" no topo da página
5. Selecione todos os arquivos e pastas deste pacote
6. Aguarde o upload ser concluído

### 3. Instalação de Dependências

Após o upload, você precisará instalar as dependências do projeto:

1. Acesse o Terminal SSH da Hostinger (no hPanel)
2. Navegue até a pasta do projeto: `cd public_html`
3. Execute: `npm install`
4. Aguarde a instalação das dependências

### 4. Compilação do Projeto

Após a instalação das dependências:

1. Execute: `npm run build`
2. Aguarde a compilação ser concluída

### 5. Iniciar a Aplicação

1. Execute: `npm start`
2. A aplicação estará disponível em: https://www.novaadmind.com

## Credenciais de Administrador

Após a implantação, você poderá acessar o painel de administrador em:
https://www.novaadmind.com/admin

Use as seguintes credenciais:
- Email: admin@novaadmind.com
- Senha: NovaAdmin2025

**Importante**: Altere a senha após o primeiro login por motivos de segurança.

## Suporte

Para instruções mais detalhadas, consulte o arquivo `hostinger-deployment-guide.md` incluído neste pacote.

Em caso de dúvidas ou problemas, entre em contato pelo email:
contato@novaadmind.com
