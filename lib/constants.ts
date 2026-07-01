// ============================================================================
// CONTEÚDO DO SITE — edite os textos aqui sem precisar mexer nos componentes
// ============================================================================

export const SITE = {
  name: "Joel Júnior",
  role: "Corretor de Imóveis",
  creci: "CRECI-MG 46.381 ",
  // TODO: troque pelo número real no formato internacional, sem espaços
  whatsappNumber: "5533988738949",
  whatsappDefaultMessage:
    "Olá, Joel! Vim pelo site e gostaria de falar sobre um imóvel.",
  email: "joeljrto@gmail.com",
  city: "Teófilo Otoni – Minas Gerais",
  url: "https://www.joeljuniorcorretor.com.br",
  // URL do Web App do Google Apps Script (CRM em Google Sheets).
  // Veja o passo a passo em /google-apps-script/SETUP.md
  leadsWebhookUrl: "https://script.google.com/macros/s/AKfycbzWb_eh_vg3UNAPc3Qsg9wDF3c3M-LkxkMcFAjR98L2DuzCThVYgtyogwZXMBWnpnOs/exec",
};

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const HERO = {
  headline: "Seu próximo investimento começa com a escolha do corretor certo.",
  subtext:
    "Atendimento personalizado para compra, venda e investimento em imóveis urbanos e rurais.",
};

export const ABOUT = {
  title: "Sobre Joel Júnior teste",
  // Texto institucional — edite livremente, nenhuma informação foi inventada
  paragraphs: [
    "Joel Júnior é corretor de imóveis devidamente registrado no CRECI-MG 46.381, atuando com foco em atendimento próximo, ético e consultivo.",
    "Seu trabalho é conduzido com atenção aos detalhes de cada negociação, da primeira conversa até a entrega das chaves, sempre priorizando a segurança jurídica e a transparência com clientes compradores, vendedores e investidores.",
    "Atua tanto no mercado urbano quanto rural, auxiliando famílias e investidores a tomarem decisões bem informadas sobre seus imóveis.",
  ],
};

export const SERVICES = [
  { label: "Casas" },
  { label: "Apartamentos" },
  { label: "Fazendas" },
  { label: "Chácaras" },
  { label: "Sítios" },
  { label: "Terrenos" },
  { label: "Imóveis Comerciais" },
  { label: "Áreas Industriais" },
];

export const DIFFERENTIALS = [
  {
    title: "Atendimento Personalizado",
    desc: "Cada cliente é ouvido com atenção para entender exatamente o que precisa.",
  },
  {
    title: "Segurança Jurídica",
    desc: "Documentação e processos conduzidos com cuidado em cada etapa.",
  },
  {
    title: "Consultoria Especializada",
    desc: "Orientação técnica para decisões de compra, venda e investimento.",
  },
  {
    title: "Marketing Imobiliário",
    desc: "Divulgação profissional com fotos, vídeos e estratégias digitais para conectar imóveis aos compradores certos.",
  },
  {
    title: "Transparência",
    desc: "Informações claras em todas as fases da negociação.",
  },
  {
    title: "Negociação Inteligente",
    desc: "Estratégias para o melhor resultado entre as partes.",
  },
  {
    title: "Atendimento Humanizado",
    desc: "Relacionamento próximo, com escuta ativa e respeito.",
  },
  {
    title: "Suporte Completo",
    desc: "Acompanhamento do início ao pós-venda.",
  },
];

export const PROCESS_STEPS = [
  { number: "1", title: "Contato", desc: "Você fala com Joel Júnior pelo canal de sua preferência." },
  { number: "2", title: "Entendimento da necessidade", desc: "Levantamento detalhado do que você busca." },
  { number: "3", title: "Seleção dos imóveis", desc: "Curadoria de opções alinhadas ao seu perfil." },
  { number: "4", title: "Negociação", desc: "Condução estratégica até o melhor acordo." },
  { number: "5", title: "Pós-venda", desc: "Suporte mesmo depois do negócio fechado." },
];

export const TESTIMONIALS = [
  {
    name: "Carlos Alberto Ribeiro.",
    text: "Atendimento atencioso do início ao fim. Me senti seguro em cada etapa da negociação.",
  },
  {
    name: "Ana Paula Simões.",
    text: "Profissionalismo e clareza nas informações. Recomendo para quem busca um corretor de confiança.",
  },
  {
    name: "Roberto Silva.",
    text: "Processo tranquilo, bem conduzido e com ótimo suporte após a venda.",
  },
];

export const PROPERTY_TYPES = [
  "Casa",
  "Apartamento",
  "Fazenda",
  "Chácara",
  "Sítio",
  "Terreno",
  "Imóvel Comercial",
  "Área Industrial",
  "Outro",
];
