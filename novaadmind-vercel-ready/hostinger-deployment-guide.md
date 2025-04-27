# Guia de Implantação do NovaAdMind na Hostinger

Este guia fornece instruções detalhadas para implantar o aplicativo NovaAdMind na Hostinger.

## Requisitos

- Conta na Hostinger com plano de hospedagem ativa
- Domínio novaadmind.com configurado na Hostinger
- Node.js versão 14.x ou superior
- Acesso FTP ou ao Gerenciador de Arquivos da Hostinger

## Passo 1: Preparar o Aplicativo para Produção

1. Navegue até a pasta do projeto:
   ```
   cd /home/ubuntu/novaadmind/novaadmind-app
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Construa a versão de produção:
   ```
   npm run build
   ```

4. Verifique se a pasta `.next` foi criada com os arquivos de build.

## Passo 2: Configurar o Ambiente na Hostinger

1. Acesse o painel de controle da Hostinger (hPanel)
2. Vá para a seção "Websites" e selecione novaadmind.com
3. Clique em "Gerenciador de Arquivos"
4. Navegue até a pasta `public_html`
5. Remova qualquer arquivo existente (faça backup se necessário)

## Passo 3: Configurar o Node.js na Hostinger

1. No hPanel, vá para a seção "Avançado" > "Node.js"
2. Ative o Node.js para seu domínio
3. Defina a versão do Node.js para 14.x ou superior
4. Configure o ponto de entrada como `server.js` (criaremos este arquivo)
5. Defina o diretório de aplicativo como `/public_html`
6. Salve as configurações

## Passo 4: Criar o Arquivo Server.js

Crie um arquivo `server.js` na raiz do projeto com o seguinte conteúdo:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
```

## Passo 5: Preparar o Pacote para Upload

1. Crie um arquivo `.htaccess` na raiz do projeto com o seguinte conteúdo:
   ```
   DirectoryIndex disabled
   RewriteEngine On
   RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
   ```

2. Crie um arquivo `package.json` na raiz do projeto (se ainda não existir) com o seguinte conteúdo:
   ```json
   {
     "name": "novaadmind",
     "version": "1.0.0",
     "private": true,
     "scripts": {
       "start": "NODE_ENV=production node server.js"
     },
     "dependencies": {
       "next": "14.0.0",
       "react": "^18",
       "react-dom": "^18"
     }
   }
   ```

3. Crie um arquivo ZIP contendo todos os arquivos do projeto:
   - Pasta `.next`
   - Pasta `public`
   - Pasta `node_modules`
   - Arquivo `server.js`
   - Arquivo `.htaccess`
   - Arquivo `package.json`
   - Arquivo `next.config.js`

## Passo 6: Fazer Upload do Pacote

1. No Gerenciador de Arquivos da Hostinger, navegue até a pasta `public_html`
2. Clique em "Upload" e selecione o arquivo ZIP criado
3. Após o upload, extraia o arquivo ZIP
4. Verifique se todos os arquivos foram extraídos corretamente

## Passo 7: Iniciar o Aplicativo

1. No hPanel, vá para a seção "Avançado" > "Node.js"
2. Clique em "Reiniciar" para iniciar o aplicativo
3. Verifique os logs para garantir que o aplicativo iniciou corretamente

## Passo 8: Verificar a Implantação

1. Acesse https://www.novaadmind.com no navegador
2. Verifique se o site está funcionando corretamente
3. Teste as principais funcionalidades:
   - Página inicial
   - Registro de usuário
   - Login
   - Dashboard administrativo

## Solução de Problemas

Se encontrar o erro 403 Forbidden:
1. Verifique as permissões dos arquivos (644 para arquivos, 755 para diretórios)
2. Confirme que o arquivo `.htaccess` está configurado corretamente
3. Verifique se o Node.js está ativado e configurado corretamente
4. Consulte os logs de erro no hPanel

## Credenciais de Administrador

Após a implantação bem-sucedida, use as seguintes credenciais para acessar o painel administrativo:

- URL: https://www.novaadmind.com/admin
- Email: admin@novaadmind.com
- Senha: NovaAdmin2025

Lembre-se de alterar a senha após o primeiro login por motivos de segurança.

## Suporte

Em caso de dúvidas ou problemas, entre em contato pelo email: contato@novaadmind.com
