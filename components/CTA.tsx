"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";
export default function CTA() {
  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative py-24 lg:py-28 bg-navy-gradient overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight"
        >
          Pronto para encontrar o imóvel certo?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-white/75 text-lg"
        >
          Fale agora mesmo com Joel Júnior pelo WhatsApp.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-9"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-10 py-5 text-base font-semibold text-white shadow-gold transition-transform hover:scale-[1.04] active:scale-95"
          >
            <FaWhatsapp size={22} />
            Falar no WhatsApp agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
