/**
 * ============================================================================
 * CRM DE LEADS — Joel Júnior Corretor de Imóveis
 * ============================================================================
 * Este script transforma uma Planilha Google em um CRM simples:
 *  - Recebe leads enviados pelo formulário do site (via Web App / webhook)
 *  - Organiza os leads em uma aba "Leads" com status colorido e dropdown
 *  - Mantém uma aba "Dashboard" com KPIs atualizados automaticamente
 *  - Envia um e-mail de notificação a cada novo lead (opcional)
 *
 * COMO USAR — veja o passo a passo completo em SETUP.md
 * 1. Ajuste as constantes em CONFIG abaixo.
 * 2. Rode a função "setupCRM" uma vez (cria as abas, cabeçalhos, formatação).
 * 3. Publique como Web App (Deploy > New deployment > Web app).
 * 4. Cole a URL gerada em lib/constants.ts no projeto do site.
 * ============================================================================
 */

const CONFIG = {
  // E-mail que recebe a notificação de novo lead. Deixe "" para desativar.
  NOTIFICATION_EMAIL: "contato@joeljuniorcorretor.com.br",

  // Número de WhatsApp de Joel Júnior (formato internacional, sem espaços ou símbolos)
  WHATSAPP_NUMBER: "5500000000000",

  LEADS_SHEET_NAME: "Leads",
  DASHBOARD_SHEET_NAME: "Dashboard",

  STATUS_OPTIONS: [
    "Novo",
    "Em contato",
    "Qualificado",
    "Visita agendada",
    "Proposta enviada",
    "Fechado",
    "Perdido",
  ],

  // Cor de fundo de cada status (usada na formatação condicional)
  STATUS_COLORS: {
    "Novo": "#D6E4FF",
    "Em contato": "#FFF3CD",
    "Qualificado": "#FFE0B2",
    "Visita agendada": "#E1D5F5",
    "Proposta enviada": "#D4F4DD",
    "Fechado": "#B7E4C7",
    "Perdido": "#F5C6C6",
  },
};

const HEADERS = [
  "Data/Hora",
  "Nome",
  "Telefone",
  "Cidade",
  "Email",
  "Tipo de Imóvel",
  "Valor Aproximado",
  "Mensagem",
  "Status",
  "Origem",
  "Notas internas",
  "WhatsApp",
];

// ============================================================================
// SETUP — rode esta função UMA VEZ para preparar a planilha inteira
// ============================================================================
function setupCRM() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  setupLeadsSheet(ss);
  setupDashboardSheet(ss);
  ss.setActiveSheet(ss.getSheetByName(CONFIG.DASHBOARD_SHEET_NAME));
  SpreadsheetApp.getUi().alert(
    "CRM configurado com sucesso! Agora publique este script como Web App (Deploy > New deployment)."
  );
}

function setupLeadsSheet(ss) {
  let sheet = ss.getSheetByName(CONFIG.LEADS_SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(CONFIG.LEADS_SHEET_NAME);
  sheet.clear();

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange
    .setFontWeight("bold")
    .setFontColor("#FFFFFF")
    .setBackground("#2F3F74")
    .setHorizontalAlignment("center");

  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, 1, 140); // Data/Hora
  sheet.setColumnWidths(2, 1, 160); // Nome
  sheet.setColumnWidths(3, 1, 130); // Telefone
  sheet.setColumnWidths(4, 1, 120); // Cidade
  sheet.setColumnWidths(5, 1, 190); // Email
  sheet.setColumnWidths(6, 1, 140); // Tipo de imóvel
  sheet.setColumnWidths(7, 1, 130); // Valor aproximado
  sheet.setColumnWidths(8, 1, 260); // Mensagem
  sheet.setColumnWidths(9, 1, 140); // Status
  sheet.setColumnWidths(10, 1, 100); // Origem
  sheet.setColumnWidths(11, 1, 220); // Notas internas
  sheet.setColumnWidths(12, 1, 140); // WhatsApp

  // Dropdown de Status (linhas 2 a 1000)
  const statusRange = sheet.getRange(2, 9, 999, 1);
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(CONFIG.STATUS_OPTIONS, true)
    .setAllowInvalid(false)
    .build();
  statusRange.setDataValidation(rule);

  // Formatação condicional por status (linha colorida inteira)
  const fullRange = sheet.getRange(2, 1, 999, HEADERS.length);
  const rules = CONFIG.STATUS_OPTIONS.map((status) =>
    SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied(`=$I2="${status}"`)
      .setBackground(CONFIG.STATUS_COLORS[status])
      .setRanges([fullRange])
      .build()
  );
  sheet.setConditionalFormatRules(rules);
}

function setupDashboardSheet(ss) {
  let sheet = ss.getSheetByName(CONFIG.DASHBOARD_SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(CONFIG.DASHBOARD_SHEET_NAME);
  sheet.clear();

  sheet.getRange("A1").setValue("CRM — Painel de Leads").setFontSize(18).setFontWeight("bold").setFontColor("#2F3F74");
  sheet.getRange("A2").setValue("Atualizado automaticamente a partir da aba Leads").setFontColor("#5E5E5E").setFontStyle("italic");

  const kpis = [
    ["Total de leads", `=COUNTA(${CONFIG.LEADS_SHEET_NAME}!B2:B)`],
    ["Leads este mês", `=SUMPRODUCT((MONTH(${CONFIG.LEADS_SHEET_NAME}!A2:A1000)=MONTH(TODAY()))*(YEAR(${CONFIG.LEADS_SHEET_NAME}!A2:A1000)=YEAR(TODAY()))*(${CONFIG.LEADS_SHEET_NAME}!A2:A1000<>""))`],
    ["Leads fechados", `=COUNTIF(${CONFIG.LEADS_SHEET_NAME}!I2:I,"Fechado")`],
    ["Taxa de conversão", `=IFERROR(COUNTIF(${CONFIG.LEADS_SHEET_NAME}!I2:I,"Fechado")/COUNTA(${CONFIG.LEADS_SHEET_NAME}!B2:B),0)`],
  ];

  sheet.getRange(4, 1, kpis.length, 2).setValues(kpis);
  sheet.getRange(4, 1, kpis.length, 1).setFontWeight("bold").setFontColor("#5E5E5E");
  sheet.getRange(4, 2, kpis.length, 1).setFontSize(16).setFontWeight("bold").setFontColor("#C9A96E");
  sheet.getRange(7, 2).setNumberFormat("0.0%"); // Taxa de conversão

  sheet.getRange("A9").setValue("Leads por status").setFontWeight("bold").setFontColor("#2F3F74");
  const statusRows = CONFIG.STATUS_OPTIONS.map((status, i) => [
    status,
    `=COUNTIF(${CONFIG.LEADS_SHEET_NAME}!I2:I,"${status}")`,
  ]);
  sheet.getRange(10, 1, statusRows.length, 2).setValues(statusRows);

  sheet.autoResizeColumns(1, 2);
}

// ============================================================================
// WEBHOOK — recebe os leads enviados pelo formulário do site
// ============================================================================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(CONFIG.LEADS_SHEET_NAME);

    const phone = (data.phone || "").replace(/\D/g, "");
    const whatsappLink = phone ? `https://wa.me/55${phone}` : "";

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      data.city || "",
      data.email || "",
      data.propertyType || "",
      data.budget || "",
      data.message || "",
      "Novo",
      "Site",
      "",
      whatsappLink,
    ]);

    if (CONFIG.NOTIFICATION_EMAIL) {
      notifyNewLead(data);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    "CRM de Leads — Joel Júnior. Endpoint ativo."
  );
}

function notifyNewLead(data) {
  const subject = `Novo lead: ${data.name || "Sem nome"}`;
  const body = `Você recebeu um novo lead pelo site:

Nome: ${data.name || "-"}
Telefone: ${data.phone || "-"}
Cidade: ${data.city || "-"}
Email: ${data.email || "-"}
Tipo de imóvel: ${data.propertyType || "-"}
Valor aproximado: ${data.budget || "-"}
Mensagem: ${data.message || "-"}

Acesse a planilha do CRM para atualizar o status deste lead.`;

  MailApp.sendEmail(CONFIG.NOTIFICATION_EMAIL, subject, body);
}
