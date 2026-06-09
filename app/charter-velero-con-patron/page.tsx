import type { Metadata } from "next";
import CharterPage from "@/components/charter-velero/charter-page";
import { SITE_URL } from "../layout";

const jsonLdCharterService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Charter de Velero con Patrón en La Manga",
  "description": "Alquiler privado de velero con patrón profesional en La Manga del Mar Menor. Excursiones personalizadas de 2 a 8 horas para grupos de hasta 6 personas. Incluye snorkel, paddle surf, ducha de agua dulce.",
  "url": `${SITE_URL}/charter-velero-con-patron`,
  "provider": {
    "@type": "Organization",
    "name": "Charter Lobo de Mar",
    "url": SITE_URL,
    "telephone": "+34637715281",
    "email": "lobodemarcharter@gmail.com",
  },
  "areaServed": {
    "@type": "Place",
    "name": "La Manga del Mar Menor",
  },
  "serviceType": "Sailing Charter",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Charter Paquetes",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Charter 2 Horas (Puesta de Sol)",
        "description": "Excursión especial al atardecer con vistas panorámicas del Mar Menor.",
        "price": "200",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
      },
      {
        "@type": "Offer",
        "name": "Charter 4 Horas",
        "description": "Media jornada de navegación y snorkel en los mejores fondeos.",
        "price": "300",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
      },
      {
        "@type": "Offer",
        "name": "Charter 6 Horas",
        "description": "Jornada completa con paradas múltiples para snorkel y baños.",
        "price": "390",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
      },
      {
        "@type": "Offer",
        "name": "Charter 8 Horas",
        "description": "Experiencia completa del día: navegación, snorkel, comida a bordo.",
        "price": "480",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
      },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "11",
  },
};

export const metadata: Metadata = {
  title: "Charter Velero con Patrón La Manga | Alquiler Privado desde 200€",
  description: "Charter privado de velero con patrón profesional en La Manga del Mar Menor. Excursiones personalizadas de 2-8 horas para grupos de hasta 6 personas. Snorkel, fondeo, puesta de sol. Desde 200€.",
  keywords: [
    "charter velero La Manga",
    "alquiler velero con patrón",
    "charter privado Mar Menor",
    "excursión en barco La Manga",
    "patrón profesional velero",
    "charter grupos La Manga",
  ],
  alternates: {
    canonical: `${SITE_URL}/charter-velero-con-patron`,
  },
  openGraph: {
    title: "Charter Velero con Patrón La Manga | Alquiler Privado",
    description: "Alquila un velero privado con patrón profesional en La Manga. 2-8 horas de navegación, snorkel y fondeo. Grupos hasta 6 personas.",
    url: `${SITE_URL}/charter-velero-con-patron`,
    type: "website",
    images: [
      {
        url: "/home/hero-section/hero.png",
        width: 1200,
        height: 630,
        alt: "Charter Velero Lobo de Mar - Navegación en La Manga",
      },
    ],
  },
};

export default function CharterVeleroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCharterService) }}
      />
      <CharterPage />
    </>
  );
}
