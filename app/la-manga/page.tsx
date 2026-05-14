import type { Metadata } from "next";
import LaMangaPage from "@/components/la-manga/la-manga-page";
import { SITE_URL } from "../layout";

export const metadata: Metadata = {
  title: "Qué Ver en La Manga del Mar Menor desde el Mar",
  description: "Descubre Calblanque, Isla Perdiguera, Cabo de Palos, Isla Grosa y más desde el mar. Rutas en velero por los mejores rincones de La Manga del Mar Menor con patrón incluido.",
  keywords: [
    "qué ver La Manga del Mar Menor",
    "excursión barco La Manga",
    "ruta velero Mar Menor",
    "Calblanque barco",
    "Isla Perdiguera velero",
    "Cabo de Palos charter",
    "Isla Grosa Mar Menor",
    "fondear La Manga",
  ],
  alternates: {
    canonical: `${SITE_URL}/la-manga`,
  },
  openGraph: {
    title: "Qué Ver en La Manga del Mar Menor desde el Mar | Charter Lobo de Mar",
    description: "Descubre Calblanque, Isla Perdiguera, Cabo de Palos y más desde el mar. Rutas en velero por La Manga del Mar Menor con patrón incluido.",
    url: `${SITE_URL}/la-manga`,
  },
};

export default function LaManga() {
  return <LaMangaPage />;
}
