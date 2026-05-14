import type { Metadata } from "next";
import HomePage from "@/components/home/home";
import { SITE_URL } from "./layout";

export const metadata: Metadata = {
  title: "Charter Barco La Manga del Mar Menor | Lobo de Mar",
  description: "Alquila un velero con patrón en La Manga del Mar Menor. Excursiones privadas para grupos de hasta 6 personas desde el Puerto Tomás Maestre, Murcia. ¡Reserva ya!",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Charter Barco La Manga del Mar Menor | Lobo de Mar",
    description: "Alquila un velero con patrón en La Manga del Mar Menor. Excursiones privadas para grupos de hasta 6 personas desde el Puerto Tomás Maestre, Murcia.",
    url: SITE_URL,
  },
};

export default async function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
