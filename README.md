# Site — Joel Júnior | Corretor de Imóveis

Site institucional one page, construído com Next.js 15, React, TypeScript, Tailwind CSS e Framer Motion.

## 📁 Estrutura do projeto

```
app/
  layout.tsx        → SEO, fontes, Schema.org, scripts de integração (GA4/GTM/Pixel)
  page.tsx           → monta as seções da página na ordem
  sitemap.ts          → gera /sitemap.xml automaticamente
  globals.css         → estilos globais e utilitários (glass, eyebrow, etc.)
components/
  Header.tsx           → cabeçalho fixo com efeito de blur ao rolar
  Hero.tsx              → seção inicial em tela cheia
  About.tsx             → seção "Sobre"
  Services.tsx          → cards de tipos de imóveis
  Differentials.tsx      → cards de diferenciais
  Process.tsx             → timeline "Como funciona"
  Testimonials.tsx         → depoimentos
  CTA.tsx                   → chamada para ação em fundo azul
  ContactForm.tsx            → formulário (com comentários de integração futura)
  Footer.tsx                  → rodapé
  WhatsAppFloatButton.tsx      → botão flutuante do WhatsApp
  Reveal.tsx                    → wrapper de animação de entrada ao rolar
lib/
  constants.ts        → TODOS os textos editáveis, links e dados de contato
public/
  images/logo.jpeg     → logo enviada
  robots.txt
```

## ✏️ O que editar primeiro

Abra `lib/constants.ts` e ajuste:

- `SITE.whatsappNumber` → coloque o número real, formato internacional sem espaços (ex: `5533999999999`)
- `SITE.email`, `SITE.url`, `SITE.city`
- Textos de `ABOUT`, `TESTIMONIALS` (depoimentos reais), etc.

Para trocar a foto de perfil em `About.tsx`, substitua o placeholder por uma tag `<Image>` apontando para a foto real em `public/images/`.

## 🗂️ CRM de leads (Google Sheets)

O formulário de contato já está conectado a um CRM gratuito em Google Sheets,
com status colorido, dropdown e painel de KPIs. O backend está em
`google-apps-script/Code.gs` e o passo a passo completo de configuração está
em **`google-apps-script/SETUP.md`** — comece por ali.

Resumo rápido:
1. Crie uma planilha Google e cole o conteúdo de `Code.gs` no Apps Script.
2. Rode `setupCRM` uma vez para criar as abas e formatação.
3. Publique como Web App e copie a URL gerada.
4. Cole a URL em `lib/constants.ts` → `SITE.leadsWebhookUrl`.

## 🔌 Integrações futuras (já preparadas)

- **Formulário** (`components/ContactForm.tsx`): já envia os leads para o CRM em Google Sheets (veja a seção acima). Há blocos comentados prontos para migrar futuramente para HubSpot Forms API ou uma API REST/CRM própria.
- **Analytics / Tags** (`app/layout.tsx`): blocos comentados para Google Analytics (GA4), Google Tag Manager e Meta Pixel — descomente e insira os IDs quando estiver pronto.
- **Sistema de imóveis / painel admin / blog**: a estrutura de pastas (`app/`, `components/`, `lib/`) já está organizada para receber novas rotas (ex: `app/imoveis/`, `app/admin/`, `app/blog/`) sem precisar reconstruir o projeto.

## ▶️ Como rodar localmente

1. Instale o [Node.js](https://nodejs.org) (versão 18.18 ou superior).
2. Abra um terminal na pasta do projeto e instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse **http://localhost:3000** no navegador. As alterações nos arquivos são refletidas automaticamente.

## 📦 Gerar versão de produção

```bash
npm run build
npm run start
```

Isso cria uma versão otimizada e a serve localmente em `http://localhost:3000`.

## 🚀 Publicar gratuitamente na Vercel

**Opção A — pelo site (mais simples):**

1. Crie uma conta gratuita em [vercel.com](https://vercel.com) (pode entrar com GitHub).
2. Suba este projeto para um repositório no GitHub (crie um repositório novo e faça `git push`).
3. Na Vercel, clique em **"Add New Project"**, selecione o repositório e clique em **Deploy**.
4. Em poucos minutos o site estará no ar com uma URL gratuita (ex: `joel-junior.vercel.app`).
5. Depois, em **Settings → Domains**, você pode conectar um domínio próprio (ex: `joeljuniorcorretor.com.br`).

**Opção B — pelo terminal (CLI):**

```bash
npm install -g vercel
vercel login
vercel
```

Siga as instruções no terminal. Para publicar uma nova versão em produção depois de alterações:

```bash
vercel --prod
```

## ✅ Checklist antes de publicar

- [ ] Número de WhatsApp real em `lib/constants.ts`
- [ ] URL do CRM (Apps Script) configurada em `SITE.leadsWebhookUrl`
- [ ] Foto profissional de Joel Júnior em `About.tsx`
- [ ] Depoimentos reais em `lib/constants.ts`
- [ ] Domínio próprio configurado na Vercel
- [ ] Integração do formulário ativada (Sheets/HubSpot/CRM)
- [ ] IDs de Analytics/Tag Manager/Pixel inseridos, se for usar
