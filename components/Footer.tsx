import Image from "next/image";
import { Mail, MapPin, Instagram } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Joel Júnior — Corretor de Imóveis"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <span className="font-display text-lg text-white">Joel Júnior</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{SITE.creci}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-4">
            Navegação
          </p>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-4">
            Contato
          </p>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={15} />
              {SITE.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} />
              {SITE.city}
            </li>
            <li className="flex items-center gap-2">
  <Instagram size={15} />
  <a
    href="https://www.instagram.com/joeljrto"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    @joeljrto
  </a>
</li>
<li className="flex items-center gap-2">
  <FaTiktok size={15} />
  <a
    href="https://www.tiktok.com/@joeljr.to"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    @joeljr.to
  </a>
</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} Joel Júnior — Corretor de Imóveis. Todos os direitos reservados. | Desenvolvido por{"Luís Soares"}. " 
        </p>
      </div>
    </footer>
  );
}
