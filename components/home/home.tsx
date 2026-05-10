import InstagramSection from "./instagram-section";
import LaMangaSection from "./lamanga-section";
import TarifasSection from "./tarifas-section";
import ServiciosSection from "./servicios-section";
import FichaTecnicaSection from "./ficha-tecnica-section";

export default function HomePage() {
    return (
        <div className="bg-gradient-to-b from-azul-claro-fondo to-white">
            <section id="inicio">
                <h2>Hero Section</h2>
                <p>Aqui va la hero section</p>
            </section>

            <section id="info">
                <h2>Info</h2>
                <p>Aqui va la informacion</p>
            </section>

            <InstagramSection />
            <TarifasSection />
            <ServiciosSection />
            <LaMangaSection />
            <FichaTecnicaSection />

            <section id="opiniones">
                <h2>Opiniones</h2>
                <p>Aqui van las opiniones</p>
            </section>

            <a
                href="https://wa.me/637715281?text=Hola,%20quiero%20reservar%20una%20excursi%C3%B3n%20en%20barco%20para%20el%20siguiente%20fin%20de%20semana.%20%C2%BFTienes%20disponibilidad?"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-verde-whatsapp hover:scale-110 transition-transform duration-300"
            >
                <img src="/whatsapp-logo.svg" alt="WhatsApp" className="w-8 h-8 brightness-0 invert" />
            </a>
        </div>
    );
}
