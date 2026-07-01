"use client";

import {
  HeartHandshake,
  ShieldCheck,
  Briefcase,
  ClipboardCheck,
  Eye,
  Handshake,
  Users,
  LifeBuoy,
  LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { DIFFERENTIALS } from "@/lib/constants";

const ICONS: LucideIcon[] = [
  HeartHandshake,
  ShieldCheck,
  Briefcase,
  ClipboardCheck,
  Eye,
  Handshake,
  Users,
  LifeBuoy,
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium text-navy">
            Por que trabalhar com Joel Júnior
          </h2>
          <div className="mt-3 mx-auto h-px w-16 bg-gold" />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIFFERENTIALS.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-navy/10 p-6 transition-all duration-300 hover:shadow-soft hover:border-gold/30">
                  <Icon size={24} strokeWidth={1.6} className="text-gold" />
                  <p className="mt-4 font-display text-base font-semibold text-navy leading-snug">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {item.desc}
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
