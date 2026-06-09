import type { Metadata } from "next";
import PreciosPage from "@/components/precios-charter/precios-page";
import { SITE_URL } from "../layout";

const jsonLdPricing = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  "priceCurrency": "EUR",
  "offers": [
    {
      "@type": "Offer",
      "name": "Charter 2 Horas - Puesta de Sol",
      "description": "Excursión especial al atardecer. Horario: 19:30-21:30. Perfecto para parejas y pequeños grupos.",
      "price": "200",
      "url": `${SITE_URL}/precios-charter`,
      "availability": "https://schema.org/PreOrder",
    },
    {
      "@type": "Offer",
      "name": "Charter 4 Horas",
      "description": "Media jornada de navegación. Dos horarios: 10:00-14:00 o 16:00-20:00. Incluye parada para snorkel.",
      "price": "300",
      "url": `${SITE_URL}/precios-charter`,
      "availability": "https://schema.org/PreOrder",
    },
    {
      "@type": "Offer",
      "name": "Charter 6 Horas",
      "description": "Jornada de 6 horas con múltiples paradas para snorkel y baños. Horario flexible según grupo.",
      "price": "390",
      "url": `${SITE_URL}/precios-charter`,
      "availability": "https://schema.org/PreOrder",
    },
    {
      "@type": "Offer",
      "name": "Charter 8 Horas",
      "description": "Jornada completa: navegación, snorkel, fondeos múltiples, posibilidad de llevar comida.",
      "price": "480",
      "url": `${SITE_URL}/precios-charter`,
      "availability": "https://schema.org/PreOrder",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es el precio mínimo para alquilar un velero en La Manga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio mínimo es 200€ para el charter de puesta de sol (2 horas, 19:30-21:30). Este incluye el velero completamente equipado, patrón profesional, combustible, material de snorkel y todos los equipos de seguridad.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Los precios incluyen el patrón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, todos nuestros precios incluyen al patrón con experiencia profesional. Él gestiona la navegación, seguridad, y la experiencia general. No hay costo adicional por su servicio.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Cuántas personas máximo van en el velero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El velero Katmandú tiene capacidad para máximo 6 pasajeros más el patrón. Los precios mostrados son por el velero completo, no por persona.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Hay descuentos para grupos grandes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Para grupos de 4-6 personas, el costo por persona es muy económico. Contacta para cotizar paquetes especiales o múltiples charters para eventos corporativos.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Qué está incluido en el precio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Velero equipado, patrón profesional, combustible, material de seguridad, paddle surf, gafas de snorkel, aletas, ducha de agua dulce, nevera Igloo, solárium, colchonetas, altavoz bluetooth. Solo no incluye bebidas y comida (puedes llevar la tuya).",
      },
    },
    {
      "@type": "Question",
      "name": "¿Aceptan reservas con antelación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Recomendamos reservar con mínimo 1 semana de antelación, aunque podemos aceptar reservas de último momento según disponibilidad. Contacta por WhatsApp +34 637 715 281.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Hay costo adicional por combustible o seguro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. El precio incluye combustible (hasta 2 horas de navegación, suficiente para la mayoría de excursiones). El seguro es obligatorio y está incluido en el precio.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Precios Charter Velero La Manga | Desde 200€ | Alquiler con Patrón",
  description: "Precios de charter en velero La Manga: desde 200€ (puesta de sol) a 480€ (8 horas). Incluye patrón, combustible, snorkel, seguro. Grupos hasta 6 personas.",
  keywords: [
    "precio charter La Manga",
    "alquiler velero precio",
    "costo velero Mar Menor",
    "precio snorkel velero",
    "charter barato La Manga",
    "precio excursión barco",
  ],
  alternates: {
    canonical: `${SITE_URL}/precios-charter`,
  },
  openGraph: {
    title: "Precios Charter Velero La Manga | Desde 200€",
    description: "Alquila un velero con patrón desde 200€. 2-8 horas, grupos hasta 6 personas. Precio transparente, sin sorpresas.",
    url: `${SITE_URL}/precios-charter`,
    images: [
      {
        url: "/home/hero-section/hero.png",
        width: 1200,
        height: 630,
        alt: "Precios Charter Lobo de Mar",
      },
    ],
  },
};

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPricing) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <PreciosPage />
    </>
  );
}
