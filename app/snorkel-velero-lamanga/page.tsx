import type { Metadata } from "next";
import SnorkelPageComponent from "@/components/snorkel-velero/snorkel-page";
import { SITE_URL } from "../layout";

const jsonLdSnorkelFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuáles son los mejores lugares para hacer snorkel en La Manga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los mejores lugares para snorkel en La Manga son Calblanque (acantilados rocosos con fauna marina variada), Isla Grosa (isla protegida con fondeos seguros y peces coloridos), e Isla Perdiguera (aguas tranquilas, ideal para principiantes). Nuestro patrón conoce todos estos puntos y los elige según las condiciones del día para garantizar la mejor experiencia.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Necesito experiencia previa para hacer snorkel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Nuestro patrón proporciona instrucciones básicas antes de entrar al agua. El Mar Menor tiene aguas calmadas y claras, perfectas para principiantes. Proporcionamos gafas, tubo y aletas de calidad.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Qué fauna marina puedo ver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En La Manga podrás ver peces de colores (doradas, meros, caballas), erizos, estrellas de mar, anémonas, y ocasionalmente tortugas marinas y delfines. Las aguas del Mar Menor albergan un ecosistema marino protegido.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el snorkel para niños?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Proporcionamos chalecos salvavidas ajustables por edad y gafas de snorkel de tamaño infantil. Siempre hay supervisión de adultos y el patrón monitorea a todos los participantes.",
      },
    },
  ],
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo disfrutar del snorkel en La Manga desde un velero",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Zarpar desde Puerto Tomás Maestre",
      "text": "Nos reunimos 45 minutos antes de la salida. El patrón realiza un briefing sobre seguridad y normas de fondeo.",
    },
    {
      "@type": "HowToStep",
      "name": "Navegar hacia los fondeos",
      "text": "Navegamos hacia Calblanque, Isla Grosa o Isla Perdiguera según condiciones. Disfrutarás de vistas panorámicas y aprenderás sobre navegación.",
    },
    {
      "@type": "HowToStep",
      "name": "Fondeo y preparación",
      "text": "Una vez fondeados, el patrón explicará la zona de snorkel, corrientes y profundidad. Ponte las gafas, aletas y entra gradualmente.",
    },
    {
      "@type": "HowToStep",
      "name": "Explorar bajo el agua",
      "text": "Nada junto al velero (siempre visible). Observa la fauna marina, toma fotos y disfruta del ecosistema marino protegido.",
    },
    {
      "@type": "HowToStep",
      "name": "Descansa en el velero",
      "text": "Regresa a bordo para descansar, tomar agua fresca, y disfrutar del solárium o las sombras. Repite las tandas de snorkel.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Snorkel en Velero La Manga | Mejores Spots Calblanque, Isla Grosa",
  description: "Descubre el snorkel en La Manga del Mar Menor desde un velero privado. Calblanque, Isla Grosa, Isla Perdiguera. Fauna marina, aguas claras, fondeo protegido. Desde 200€.",
  keywords: [
    "snorkel La Manga",
    "snorkel velero La Manga",
    "Calblanque snorkel",
    "Isla Grosa snorkel",
    "charter snorkel Mar Menor",
    "actividades snorkel Murcia",
  ],
  alternates: {
    canonical: `${SITE_URL}/snorkel-velero-lamanga`,
  },
  openGraph: {
    title: "Snorkel en Velero La Manga | Guía de Spots y Fauna Marina",
    description: "Snorkel desde velero en los mejores lugares de La Manga: Calblanque, Isla Grosa. Fauna marina, aguas claras, seguro.",
    url: `${SITE_URL}/snorkel-velero-lamanga`,
    images: [
      {
        url: "/home/hero-section/hero.png",
        width: 1200,
        height: 630,
        alt: "Snorkel en velero - Fauna marina La Manga",
      },
    ],
  },
};

export default function SnorkelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSnorkelFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <SnorkelPageComponent />
    </>
  );
}
