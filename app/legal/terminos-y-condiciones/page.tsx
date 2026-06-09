import type { Metadata } from "next";
import TerminosYCondiciones from "@/components/legal/terminos-y-condiciones";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones del servicio de Charter Lobo de Mar.",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function TerminosYCondicionesPage() {
  return (
    <div>
      <TerminosYCondiciones />
    </div>
  );
}
