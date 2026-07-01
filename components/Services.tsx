"use client";

import {
  Home,
  Building2,
  Tractor,
  TreePine,
  Trees,
  LandPlot,
  Store,
  Factory,
  LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Casas: Home,
  Apartamentos: Building2,
  Fazendas: Tractor,
  Chácaras: TreePine,
  Sítios: Trees,
  Terrenos: LandPlot,
  "Imóveis Comerciais": Store,
  "Áreas Industriais": Factory,
};

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Serviços</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium text-navy">
            Imóveis para cada necessidade
          </h2>
          <div className="mt-3 mx-auto h-px w-16 bg-gold" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.label] ?? Home;
            return (
              <Reveal key={service.label} delay={i * 0.05}>
                <div className="group relative h-full rounded-2xl bg-white border border-navy/10 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-gold/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 font-display text-lg font-medium text-navy">
                    {service.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
