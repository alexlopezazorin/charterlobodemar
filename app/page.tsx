import type { Metadata } from "next";
import HomePage from "@/components/home/home";
import { SITE_URL } from "./layout";

export const metadata: Metadata = {
  title: "Charter Velero La Manga del Mar Menor | Alquiler con Patrón Profesional",
  description: "Alquila un velero con patrón en La Manga del Mar Menor desde solo 200€. Excursiones privadas, snorkel, puesta de sol, fondeo. Grupos hasta 6 personas. Reserva ya en Lobo de Mar.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Charter Velero La Manga del Mar Menor | Alquiler con Patrón",
    description: "Alquila un velero con patrón en La Manga. Excursiones privadas, snorkel, puesta de sol. Grupos hasta 6 personas desde 200€.",
    url: SITE_URL,
    images: [
      {
        url: "/home/hero-section/hero.png",
        width: 1200,
        height: 630,
        alt: "Charter Lobo de Mar — Velero Katmandú navegando por La Manga del Mar Menor",
      },
    ],
  },
};

export default async function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
