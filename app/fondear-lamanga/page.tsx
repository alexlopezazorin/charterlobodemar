import type { Metadata } from "next";
import FondearPageComponent from "@/components/fondear-lamanga/fondear-page";
import { SITE_URL } from "../layout";

const jsonLdGuide = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Guía Completa: Cómo Fondear en La Manga del Mar Menor",
  "description": "Aprende las mejores técnicas y lugares para fondear en La Manga. Zonas protegidas, profundidades seguras, respeto al ecosistema marino.",
  "datePublished": "2024-06-09",
  "dateModified": "2024-06-09",
  "author": {
    "@type": "Organization",
    "name": "Charter Lobo de Mar",
  },
  "image": "/home/hero-section/hero.png",
};

const jsonLdFondeoFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es la profundidad ideal para fondear en La Manga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La profundidad ideal para fondear en La Manga es entre 5-12 metros. En Calblanque y alrededor de Isla Grosa encontrarás fondos de arena o posidonia a estas profundidades. Respeta siempre las zonas protegidas evitando fondear sobre posidonia.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Qué cadena y ancla necesito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro velero (Katmandú) cuenta con ancla Danforth de 20 kg y 100 metros de cadena de acero. Para fondeos hasta 10 metros, 50 metros de cadena es suficiente. Siempre usamos relación 5:1 (cadena:profundidad) para seguridad.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Es obligatorio fondear en zona de monoboyas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No es obligatorio, pero es recomendado en zonas protegidas como Isla Grosa. Las monoboyas evitan dañar la posidonia marina. En Calblanque y otras áreas, fondear en arena es seguro y respeta el ecosistema.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la mejor técnica de fondeo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aproximarse contraviento lentamente, soltar cadena progresivamente mientras retroces, dejar derivar hasta 50 metros de distancia, revirar para confirmar que aguanta. Verificar con sonda de profundidad. Nuestro patrón realiza este proceso con seguridad.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Qué permisos necesito para fondear?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En La Manga del Mar Menor no necesitas permiso previo para fondear recreativamente, pero debes respetar las normas: no fondear en canales de navegación, respetar zonas protegidas, mantener distancia de otros barcos.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Guía de Fondeo en La Manga del Mar Menor | Técnicas y Mejores Spots",
  description: "Aprende a fondear correctamente en La Manga: profundidades seguras, cadenas, anclado en Calblanque, Isla Grosa, respeto al ecosistema marino. Incluye FAQ y técnicas.",
  keywords: [
    "fondear La Manga",
    "fondeo Mar Menor",
    "técnicas de fondeo",
    "fondear Calblanque",
    "fondear Isla Grosa",
    "seguridad fondeo velero",
    "fondeo ecosistema marino",
  ],
  alternates: {
    canonical: `${SITE_URL}/fondear-lamanga`,
  },
  openGraph: {
    title: "Guía de Fondeo La Manga | Técnicas y Spots Recomendados",
    description: "Fondea seguramente en La Manga. Profundidades, cadenas, técnicas. Calblanque, Isla Grosa, zonas protegidas.",
    url: `${SITE_URL}/fondear-lamanga`,
    images: [
      {
        url: "/home/hero-section/hero.png",
        width: 1200,
        height: 630,
        alt: "Fondeo en La Manga - Velero Lobo de Mar",
      },
    ],
  },
};

export default function FondearPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFondeoFaq) }}
      />
      <FondearPageComponent />
    </>
  );
}
