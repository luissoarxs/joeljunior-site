"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function WhatsAppFloatButton() {
  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappDefaultMessage
  )}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      />
      {/* Main button with subtle breathing + glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_18px_rgba(37,211,102,0.55),0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-white"
          aria-hidden="true"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.386.7 4.61 1.91 6.484L4 29l7.703-1.873A11.94 11.94 0 0 0 16 27c6.628 0 12-5.373 12-12.001C28 8.373 22.629 3 16.001 3zm0 21.818a9.78 9.78 0 0 1-4.997-1.367l-.358-.213-4.573 1.112 1.137-4.46-.234-.366a9.77 9.77 0 0 1-1.5-5.222c0-5.41 4.408-9.818 9.825-9.818 5.41 0 9.818 4.407 9.818 9.818 0 5.412-4.408 9.516-9.118 9.516zm5.395-7.36c-.296-.148-1.752-.864-2.024-.963-.272-.099-.47-.148-.668.148-.198.296-.766.963-.94 1.161-.173.198-.346.223-.642.075-.296-.148-1.25-.46-2.382-1.47-.881-.785-1.476-1.754-1.649-2.05-.173-.296-.018-.456.13-.604.134-.133.297-.346.445-.52.149-.173.198-.296.297-.494.099-.198.05-.371-.025-.52-.074-.148-.668-1.612-.916-2.207-.241-.58-.486-.5-.668-.51-.173-.008-.371-.01-.569-.01s-.52.075-.792.371c-.272.297-1.04 1.017-1.04 2.48s1.065 2.876 1.213 3.075c.149.198 2.096 3.2 5.078 4.49.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.752-.716 2-1.408.248-.692.248-1.285.173-1.408-.074-.124-.272-.198-.569-.346z" />
        </svg>
      </motion.div>
    </a>
  );
}
