"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { PROPERTY_TYPES, SITE } from "@/lib/constants";

type FormState = {
  name: string;
  phone: string;
  city: string;
  email: string;
  propertyType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  city: "",
  email: "",
  propertyType: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      // ======================================================================
      // CRM ATIVO — Google Sheets via Google Apps Script Web App
      // Configure a URL em lib/constants.ts (SITE.leadsWebhookUrl).
      // Veja o passo a passo em /google-apps-script/SETUP.md
      // ======================================================================
      if (
        !SITE.leadsWebhookUrl ||
        SITE.leadsWebhookUrl.includes("COLE_AQUI")
      ) {
        throw new Error(
          "Configure SITE.leadsWebhookUrl em lib/constants.ts com a URL do Apps Script."
        );
      }

      // Apps Script não retorna cabeçalhos de CORS, então usamos "no-cors":
      // o navegador não consegue ler a resposta, mas o envio funciona
      // normalmente e o lead chega na planilha. Detalhes no SETUP.md.
      await fetch(SITE.leadsWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });

      // ======================================================================
      // OUTRAS INTEGRAÇÕES — alternativas para o futuro, caso queira migrar
      // ======================================================================

      // OPÇÃO 2 — HubSpot Forms API
      // const portalId = "SEU_PORTAL_ID";
      // const formId = "SEU_FORM_ID";
      // const res = await fetch(
      //   `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       fields: Object.entries(form).map(([name, value]) => ({ name, value })),
      //     }),
      //   }
      // );
      // if (!res.ok) throw new Error("Falha ao enviar para o HubSpot");

      // OPÇÃO 3 — API REST própria / CRM
      // const res = await fetch("/api/leads", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Falha ao enviar o lead");

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="eyebrow">Contato</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium text-navy">
            Solicite atendimento
          </h2>
          <p className="mt-3 text-gray text-[15px]">
            Preencha o formulário e Joel Júnior entrará em contato em breve.
          </p>
          <div className="mt-3 mx-auto h-px w-16 bg-gold" />
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-2xl bg-white border border-navy/10 shadow-soft p-7 sm:p-10 grid sm:grid-cols-2 gap-5"
          >
            <Field label="Nome" htmlFor="name">
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="input"
                placeholder="Seu nome completo"
              />
            </Field>

            <Field label="Telefone" htmlFor="phone">
              <input
                id="phone"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="input"
                placeholder="(00) 00000-0000"
              />
            </Field>

            <Field label="Cidade" htmlFor="city">
              <input
                id="city"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                className="input"
                placeholder="Sua cidade"
              />
            </Field>

            <Field label="E-mail" htmlFor="email">
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="input"
                placeholder="seu@email.com"
              />
            </Field>

            <Field label="Tipo de imóvel" htmlFor="propertyType">
              <select
                id="propertyType"
                value={form.propertyType}
                onChange={(e) => update("propertyType", e.target.value)}
                className="input"
              >
                <option value="">Selecione</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Valor aproximado" htmlFor="budget">
              <input
                id="budget"
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                className="input"
                placeholder="Ex: R$ 300.000"
              />
            </Field>

            <Field label="Mensagem" htmlFor="message" full>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="input resize-none"
                placeholder="Conte um pouco mais sobre o que você procura"
              />
            </Field>

            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-dark disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar solicitação
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-emerald-600"
                >
                  <CheckCircle2 size={16} />
                  Solicitação enviada com sucesso! Em breve entraremos em contato.
                </motion.p>
              )}
              {status === "error" && (
                <p className="mt-4 text-center text-sm text-red-500">
                  Não foi possível enviar agora. Tente novamente em instantes.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(47, 63, 116, 0.15);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          background-color: #fff;
          color: #2b2b2b;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #c9a96e;
          box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  full = false,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label
        htmlFor={htmlFor}
        className="block text-xs font-semibold uppercase tracking-wide text-navy/70 mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
