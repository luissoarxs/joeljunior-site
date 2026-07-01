"use client";

import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium text-navy">
            O que dizem os clientes
          </h2>
          <div className="mt-3 mx-auto h-px w-16 bg-gold" />
          {/* TODO: substituir pelos depoimentos reais dos clientes */}
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-gray-50 border border-navy/10 p-7 flex flex-col">
                <Quote className="text-gold" size={26} strokeWidth={1.5} />
                <p className="mt-4 text-[15px] text-gray leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-6 font-display font-semibold text-navy">
                  {t.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
