import type { Metadata } from "next";
import PoliticadePrivacidad from "@/components/legal/politica-de-privacidad";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Charter Lobo de Mar. Información sobre cómo tratamos tus datos personales.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PoliticadePrivacidadPage() {
  return (
    <div>
      <PoliticadePrivacidad />
    </div>
  );
}
