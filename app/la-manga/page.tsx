import type { Metadata } from "next";
import LaMangaPage from "@/components/la-manga/la-manga-page";
import { SITE_URL } from "../layout";

const jsonLdAttractions = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "TouristAttraction",
        "name": "Calblanque",
        "description": "Playa virgen con acantilados rocosos en La Manga del Mar Menor. Fondeo perfecto para charter y snorkel.",
        "url": `${SITE_URL}/la-manga`,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.6500,
          "longitude": -0.7500,
        },
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "TouristAttraction",
        "name": "Isla Grosa",
        "description": "Isla protegida de La Manga del Mar Menor. Excelente para fondeo, snorkel y avistamiento de fauna marina.",
        "url": `${SITE_URL}/la-manga`,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.6850,
          "longitude": -0.7200,
        },
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "TouristAttraction",
        "name": "Isla Perdiguera",
        "description": "Pequeña isla en el Mar Menor, ideal para excursiones en velero y baños en aguas tranquilas.",
        "url": `${SITE_URL}/la-manga`,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.6750,
          "longitude": -0.7400,
        },
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "TouristAttraction",
        "name": "Cabo de Palos",
        "description": "Promontorio rocoso con faro histórico. Punto de referencia para navegación y avistamiento marino en La Manga.",
        "url": `${SITE_URL}/la-manga`,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.6450,
          "longitude": -0.6900,
        },
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Qué Ver en La Manga del Mar Menor desde el Mar | Calblanque, Cabo de Palos, Isla Grosa",
  description: "Descubre los mejores fondeos de La Manga: Calblanque, Isla Perdiguera, Cabo de Palos, Isla Grosa. Rutas en velero con patrón incluido. Snorkel, baños y playas vírgenes.",
  keywords: [
    "qué ver La Manga del Mar Menor",
    "excursión barco La Manga",
    "ruta velero Mar Menor",
    "Calblanque desde el mar",
    "Isla Perdiguera velero",
    "Cabo de Palos charter",
    "Isla Grosa Mar Menor",
    "fondear La Manga del Mar Menor",
    "playas vírgenes La Manga",
    "ruta de snorkel Mar Menor",
    "bahías La Manga",
    "navegación Mar Menor",
    "mejores fondeos La Manga",
  ],
  alternates: {
    canonical: `${SITE_URL}/la-manga`,
  },
  openGraph: {
    title: "Qué Ver en La Manga del Mar Menor desde el Mar | Charter Velero",
    description: "Descubre Calblanque, Isla Perdiguera, Cabo de Palos, Isla Grosa desde el mar. Rutas en velero con snorkel.",
    url: `${SITE_URL}/la-manga`,
  },
};

export default function LaManga() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAttractions) }}
      />
      <LaMangaPage />
    </>
  );
}
