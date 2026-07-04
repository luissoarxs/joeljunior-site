import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Joel Júnior | Corretor de Imóveis",
  description:
    "Atendimento personalizado para compra, venda e investimento em imóveis urbanos e rurais. Casas, apartamentos, fazendas, sítios e terrenos com segurança jurídica e consultoria especializada.",
  keywords: [
    "corretor de imóveis",
    "Joel Júnior",
    "imóveis Minas Gerais",
    "fazendas à venda",
    "sítios à venda",
    "comprar imóvel rural",
    "CRECI 46.381",
  ],
  authors: [{ name: "Joel Júnior" }],
  openGraph: {
    title: "Joel Júnior | Corretor de Imóveis",
    description:
      "Atendimento personalizado para compra, venda e investimento em imóveis urbanos e rurais.",
    url: SITE.url,
    siteName: "Joel Júnior Corretor de Imóveis",
    images: [{ url: "/images/logo.jpeg", width: 1080, height: 1080 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Júnior | Corretor de Imóveis",
    description:
      "Atendimento personalizado para compra, venda e investimento em imóveis urbanos e rurais.",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for a Real Estate Agent
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.name,
    description:
      "Corretor de imóveis com atuação em imóveis urbanos e rurais, oferecendo atendimento personalizado, segurança jurídica e consultoria especializada.",
    url: SITE.url,
    image: `${SITE.url}/images/logo.jpeg`,
    areaServed: "Minas Gerais, Brasil",
    address: {
      "@type": "PostalAddress",
      addressRegion: "MG",
      addressCountry: "BR",
    },
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}

        {/* ====================================================================
            INTEGRAÇÕES FUTURAS — descomente e configure quando necessário
            ==================================================================== */}
        {/* Google Analytics (GA4)
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
        */}

        {/* Google Tag Manager
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        */}

        {/* Meta Pixel
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){...}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </Script>
        */}
      </body>
    </html>
  );
}
