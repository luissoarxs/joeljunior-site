# CRM de Leads (Google Sheets) — Guia de configuração

Este CRM usa uma Planilha Google como banco de dados de leads, com status colorido,
dropdown, dashboard de KPIs e notificação por e-mail — sem custo nenhum.

O formulário do site (`components/ContactForm.tsx`) envia os dados diretamente
para essa planilha através de um "Web App" do Google Apps Script.

---

## Passo 1 — Criar a planilha

1. Acesse [sheets.google.com](https://sheets.google.com) e crie uma planilha em branco.
2. Renomeie para algo como **"CRM - Leads Joel Júnior"**.

## Passo 2 — Colar o script

1. Na planilha, vá em **Extensões → Apps Script**.
2. Apague todo o código padrão (`function myFunction() {}`).
3. Abra o arquivo `Code.gs` (nesta mesma pasta) e copie todo o conteúdo.
4. Cole no editor do Apps Script.
5. No topo do arquivo, ajuste o bloco `CONFIG`:
   - `NOTIFICATION_EMAIL`: e-mail que vai receber aviso de cada novo lead.
   - `WHATSAPP_NUMBER`: número de WhatsApp do Joel (apenas para referência interna).
6. Clique no ícone de salvar (💾).

## Passo 3 — Rodar a configuração inicial

1. No topo do editor, no menu de funções, selecione **setupCRM**.
2. Clique em **Executar (▶)**.
3. Na primeira vez, o Google vai pedir autorização:
   - Clique em **Revisar permissões**.
   - Escolha sua conta Google.
   - Clique em **Avançado → Acessar [nome do projeto] (não seguro)** — isso é normal,
     é o seu próprio script, feito por você.
   - Clique em **Permitir**.
4. Volte para a planilha: agora ela terá duas abas: **Leads** (com cabeçalhos,
   cores e dropdown de status) e **Dashboard** (com os KPIs).

## Passo 4 — Publicar como Web App

1. No editor do Apps Script, clique em **Implantar → Nova implantação**.
2. Clique no ícone de engrenagem ⚙️ ao lado de "Selecionar tipo" e escolha **App da Web**.
3. Configure:
   - **Executar como:** Eu (seu e-mail)
   - **Quem pode acessar:** Qualquer pessoa
4. Clique em **Implantar**.
5. Copie a **URL do app da Web** gerada (algo como
   `https://script.google.com/macros/s/AKfycb.../exec`).

> ⚠️ Sempre que você editar o `Code.gs` depois, é preciso ir em
> **Implantar → Gerenciar implantações → ✏️ Editar → Nova versão → Implantar**
> para que as mudanças entrem em vigor na URL publicada.

## Passo 5 — Conectar com o site

1. Abra `lib/constants.ts` no projeto do site.
2. Cole a URL copiada no campo `leadsWebhookUrl`:

```ts
export const SITE = {
  // ...
  leadsWebhookUrl: "https://script.google.com/macros/s/SEU_ID_AQUI/exec",
};
```

3. Salve, rode `npm run dev` e teste o formulário do site.
4. Em poucos segundos, o lead deve aparecer na aba **Leads** da planilha,
   e um e-mail de notificação deve chegar (se configurado).

## Passo 6 — Usar o CRM no dia a dia

- Cada novo lead chega com status **"Novo"**.
- Clique na célula de status do lead e escolha o próximo estágio no dropdown:
  Em contato → Qualificado → Visita agendada → Proposta enviada → Fechado / Perdido.
- A linha inteira muda de cor automaticamente conforme o status.
- A aba **Dashboard** mostra, em tempo real: total de leads, leads do mês,
  leads fechados, taxa de conversão e a contagem por status.
- A coluna **Notas internas** é livre para anotar follow-ups, ligações, etc.
- A coluna **WhatsApp** já traz o link pronto para abrir a conversa com o lead.

## Limitação técnica importante

Por restrição de CORS do Google Apps Script, o envio do formulário usa o modo
`no-cors` no `fetch`. Isso significa que o navegador **não consegue ler a resposta**
do Google (não dá pra saber com 100% de certeza se deu erro do lado do Google).
Na prática isso funciona bem — o lead chega certinho na planilha — mas se quiser
confirmação 100% confiável de entrega no futuro, o caminho é migrar para uma API
própria (rota `app/api/leads/route.ts` no Next.js) que then re-envia para o Sheets
pelo lado do servidor. Posso montar isso depois, se fizer sentido pra você.
