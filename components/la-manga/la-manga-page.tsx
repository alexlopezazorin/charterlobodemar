import Link from "next/link";
import LaMangaCarousel from "./la-manga-carousel";
import { locations } from "./la-manga-data";

export default function LaMangaPage() {
    return (
        <div className="bg-gradient-to-b from-azul-claro-fondo to-white">

            {/* Header */}
            <div className="pt-12 pb-4 px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-acento font-semibold text-sm uppercase tracking-widest mb-3">Charter Lobo de Mar</p>
                    <h1 className="text-azul-oscuro text-4xl md:text-6xl font-bold leading-tight mb-3">
                        La Manga del Mar Menor
                    </h1>
                    <p className="text-gris-claro text-lg max-w-xl">
                        22 kilómetros de paraíso entre dos mares
                    </p>
                </div>
            </div>

            {/* Intro */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 text-gris-claro leading-relaxed">
                        <p>
                            La Manga del Mar Menor es uno de los paisajes más singulares de la costa mediterránea española. Una delgada franja de tierra de apenas 100 metros de anchura separa el Mar Menor —la laguna salada más grande de Europa— del Mar Mediterráneo abierto.
                        </p>
                        <p>
                            A bordo de Katmandú, navegamos hasta los rincones más especiales de esta zona: calas vírgenes, islas deshabitadas y fondos marinos de una riqueza difícil de encontrar en otro lugar del Mediterráneo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Divisor */}
            <div className="max-w-3xl mx-auto px-6">
                <div className="border-t border-azul-claro/30" />
            </div>

            {/* Galería */}
            <section className="py-16 md:px-6">
                <div className="max-w-6xl mx-auto px-6 md:px-0 mb-10">
                    <h2 className="text-azul-oscuro text-3xl font-bold mb-2">Nuestras paradas favoritas</h2>
                    <p className="text-gris-claro">Cada ruta es diferente, pero estos son los lugares que nunca fallan.</p>
                </div>

                {/* Mobile: carrusel automático */}
                <div className="md:hidden">
                    <LaMangaCarousel />
                </div>

                {/* Desktop: grid original */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {locations.map((loc, i) => (
                        <div
                            key={loc.src}
                            className={`rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.1)] ${
                                i === locations.length - 1 && locations.length % 3 === 1
                                    ? "lg:col-span-1"
                                    : ""
                            }`}
                        >
                            <img
                                src={loc.src}
                                alt={loc.label}
                                className="w-full block"
                                loading={i < 3 ? "eager" : "lazy"}
                            />
                            <div className="p-5 bg-white">
                                <h3 className="font-bold text-gris-oscuro text-base mb-1">{loc.label}</h3>
                                <p className="text-gris-claro text-sm leading-relaxed">{loc.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-azul-oscuro text-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    ¿Listo para zarpar?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                    Reserva tu experiencia a bordo de Katmandú y descubre La Manga desde el mar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://wa.me/637715281?text=Hola,%20quiero%20reservar%20una%20excursi%C3%B3n%20en%20barco%20para%20el%20siguiente%20fin%20de%20semana.%20%C2%BFTienes%20disponibilidad?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-acento text-white font-semibold px-8 py-3 rounded-full hover:bg-amber-500 transition-colors duration-300"
                    >
                        Reservar ahora
                        <span>→</span>
                    </a>
                    <Link
                        href="/#tarifas"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors duration-300 border border-white/20"
                    >
                        Ver tarifas
                    </Link>
                </div>
            </section>

            <div className="h-px bg-white" />

        </div>
    );
}
