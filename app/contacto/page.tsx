import type { Metadata } from "next";
import Contacto from "@/components/contacto/contacto";
import { SITE_URL } from "../layout";

export const metadata: Metadata = {
  title: "Reserva tu Excursión en Velero La Manga",
  description: "Reserva tu excursión en barco por La Manga del Mar Menor. Charter privado con patrón, grupos de hasta 6 personas. Contáctanos por WhatsApp o formulario.",
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    title: "Reserva tu Excursión en Velero La Manga | Charter Lobo de Mar",
    description: "Reserva tu excursión en barco por La Manga del Mar Menor. Charter privado con patrón, grupos de hasta 6 personas.",
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
