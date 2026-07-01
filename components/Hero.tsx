"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { HERO, SITE } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";
export default function Hero() {
  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappDefaultMessage
  )}`;

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[680px] w-full overflow-hidden bg-navy-gradient flex items-center"
    >
      {/* Subtle moving architectural grid — relates to blueprints / property lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      {/* Signature element: large line-drawing echoing the logo's architectural "J" */}
      <svg
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[120%] w-auto opacity-[0.12]"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <motion.path
          d="M120 60 L120 380 Q120 420 160 420 L220 420 Q260 420 260 380 L260 140"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d="M260 60 L260 420"
          stroke="#C9A96E"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-gold"
          >
            Joel Júnior — CRECI 46.381-MG
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] text-white"
          >
            {HERO.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl"
          >
            {HERO.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-[1.03] active:scale-95"
            >
              <FaWhatsapp size={20} className="shrink-0" />
              Falar no WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Solicitar Atendimento
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
