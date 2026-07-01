"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium text-navy">
            Uma jornada clara, do início ao fim
          </h2>
          <div className="mt-3 mx-auto h-px w-16 bg-gold" />
        </Reveal>

        <div className="mt-20 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-navy/10" />
          <motion.div
            className="hidden lg:block absolute top-6 left-0 h-px bg-gold origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ width: "100%" }}
          />

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative flex lg:flex-col gap-4 lg:gap-0">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy text-white font-display text-lg shadow-soft">
                    {step.number}
                  </div>
                  <div className="lg:mt-5">
                    <p className="font-display text-lg font-semibold text-navy">
                      {step.title}
                    </p>
                    <p className="mt-1.5 text-sm text-gray leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
