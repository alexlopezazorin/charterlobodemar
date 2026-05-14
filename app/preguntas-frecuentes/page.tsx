import type { Metadata } from "next";
import PreguntasFrecuentes from "@/components/preguntas-frecuentes/preguntas-frecuentes";
import { SITE_URL } from "../layout";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Alquiler de Barco en La Manga",
  description: "Resolvemos todas tus dudas: qué incluye el alquiler del velero, desde dónde zarpamos, si puedes llevar comida, rutas recomendadas y más. Charter La Manga del Mar Menor.",
  alternates: {
    canonical: `${SITE_URL}/preguntas-frecuentes`,
  },
  openGraph: {
    title: "Preguntas Frecuentes sobre Alquiler de Barco en La Manga | Charter Lobo de Mar",
    description: "Resolvemos todas tus dudas sobre el alquiler de velero en La Manga: qué incluye, desde dónde zarpar, rutas recomendadas y más.",
    url: `${SITE_URL}/preguntas-frecuentes`,
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué incluye el alquiler del barco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El alquiler incluye la embarcación equipada con todo el material de seguridad obligatorio además de sus seguros correspondientes, patrón con más de 5 años de experiencia y combustible (hasta 2h de navegación). Además el velero dispone de solárium premium en proa, nevera Igloo en la cubierta para tus bebidas, zonas de sombreado y colchonetas en cockpit, tabla de Paddle Surf, plataforma de baño en popa, ducha agua dulce, gafas de esnórquel y altavoz bluetooth.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Desde dónde zarpamos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las salidas son desde el Puerto de Tomás Maestre, La Manga del Mar Menor. Una vez hecha la reserva se enviará la ubicación exacta. Disponemos de zona gratuita de aparcamiento. Es recomendable estar 45 minutos antes de la salida.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Puedo llevar comida y bebida a bordo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Por supuesto, puedes traer cualquier comida ya preparada o de picoteo y toda la bebida que desees.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si el tiempo no acompaña?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La seguridad es lo primero. Si las condiciones meteorológicas no permiten una navegación segura (viento fuerte, mala mar o tormentas), nos pondremos en contacto con usted y se buscará una nueva fecha para realizar la actividad o se ofrecerá un reembolso según las condiciones del contrato.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Se puede parar a bañarse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Por supuesto! Una de las mejores partes de alquilar un barco es poder fondear y disfrutar del mar y las vistas desde un velero teniendo toda tu privacidad en él. Respetando siempre las normas de fondeo para no dañar el ecosistema marino.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Hay alguna ruta recomendada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, según las condiciones del tiempo y del mar, pondremos rumbo a los mejores fondeos de la zona. El patrón lo consensuará con los clientes en el briefing antes de zarpar, sugiriendo las mejores rutas para ese día.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Es seguro para niños?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es seguro y super divertido. Proporcionamos chalecos salvavidas adaptados según su edad, y por motivo de seguridad siempre tendrá que ir mínimo un adulto por niño para su supervisión.",
      },
    },
  ],
};

export default async function PreguntasFrecuentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <div>
        <PreguntasFrecuentes />
      </div>
    </>
  );
}
