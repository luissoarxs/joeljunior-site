"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { ABOUT, SITE } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo placeholder — elegant, easy to replace */}
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy/5 via-gray-50 to-navy/10 border border-navy/10 shadow-soft flex items-center justify-center overflow-hidden">
              {/* TODO: substituir pelo retrato profissional de Joel Júnior */}
              <div className="flex flex-col items-center gap-3 text-navy/30">
                <Image
                  src="/images/joel.jpg"
                  alt="Joel Júnior"
                  width={500}
height={600}
className="rounded-2xl object-cover w-full h-full" 
                />
                <span className="font-display text-sm tracking-wide">
                   Joel Júnior
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:flex h-28 w-28 items-center justify-center rounded-2xl bg-navy text-white shadow-soft-lg">
              <div className="text-center">
                <p className="font-display text-2xl font-semibold">{SITE.creci.split(": ")[1]}</p>
                <p className="text-[10px] tracking-widest uppercase text-white/70">CRECI-MG 46.381</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.1}>
          <span className="eyebrow">Sobre</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium text-navy leading-tight">
            {ABOUT.title}
          </h2>
          <div className="mt-3 h-px w-16 bg-gold" />
          <div className="mt-7 space-y-5 text-gray text-[15px] leading-relaxed">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
