import HeroSection from "./hero-section";
import InfoSection from "./info-section";
import InstagramSection from "./instagram-section";
import LaMangaSection from "./lamanga-section";
import TarifasSection from "./tarifas-section";
import ServiciosSection from "./servicios-section";
import FichaTecnicaSection from "./ficha-tecnica-section";
import OpinionesSection from "./opiniones-section";

export default function HomePage() {
    return (
        <div className="bg-gradient-to-b from-azul-claro-fondo to-white">
            <HeroSection />

            <InfoSection />

            <InstagramSection />
            <TarifasSection />
            <ServiciosSection />
            <LaMangaSection />
            <FichaTecnicaSection />

            <OpinionesSection />
        </div>
    );
}
