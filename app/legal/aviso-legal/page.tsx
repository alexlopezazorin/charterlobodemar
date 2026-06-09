import type { Metadata } from "next";
import AvisoLegal from "@/components/legal/aviso-legal";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Charter Lobo de Mar. Información sobre el titular del sitio web y condiciones de uso.",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function AvisoLegalPage() {
  return (
    <div>
      <AvisoLegal />
    </div>
  );
}
