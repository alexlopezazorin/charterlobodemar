import type { Metadata } from "next";
import Contacto from "@/components/contacto/contacto";
import { SITE_URL } from "../layout";

export const metadata: Metadata = {
  title: "Reserva tu Excursión en Velero La Manga del Mar Menor | Lobo de Mar",
  description: "Reserva tu charter en barco por La Manga del Mar Menor. Contacta directamente por WhatsApp o formulario. Grupos privados hasta 6 personas con patrón profesional incluido.",
  keywords: [
    "reservar velero La Manga",
    "contacto charter La Manga",
    "alquiler barco reserva",
    "whatsapp charter velero",
    "reserva excursión barco Mar Menor",
    "contactar charter privado",
    "disponibilidad velero La Manga",
    "formulario reserva barco",
  ],
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    title: "Reserva tu Excursión en Velero La Manga | Charter Lobo de Mar",
    description: "Reserva tu charter privado. Contacta por WhatsApp o formulario. Respuesta rápida.",
    url: `${SITE_URL}/contacto`,
  },
};

export default async function ContactoPage() {
  return (
    <div>
      <Contacto />
    </div>
  );
}
