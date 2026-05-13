import Link from "next/link";

const locations = [
    {
        src: "/home/la-manga/calblanque.png",
        label: "Parque Natural Calblanque",
        description: "Playas vírgenes de arena fina y aguas turquesas en un entorno protegido. Ideal para el snorkel y el baño en plena naturaleza.",
    },
    {
        src: "/home/la-manga/farallon.png",
        label: "Islote del Farallón",
        description: "Pequeño islote volcánico con aguas de una claridad excepcional. Un enclave único para fondear y explorar el fondo marino.",
    },
    {
        src: "/home/la-manga/cala_cerrada.png",
        label: "Cala Cerrada",
        description: "Cala de difícil acceso por tierra, solo alcanzable desde el mar. Aguas protegidas y tranquilas rodeadas de acantilados.",
    },
    {
        src: "/home/la-manga/azohia.png",
        label: "Playa de la Azohía",
        description: "Amplia bahía con fondo de arena fina y aguas calm as bajo la sombra del castillo de Cope. Un rincón apartado del turismo masivo.",
    },
    {
        src: "/home/la-manga/isla_del_baron.png",
        label: "Isla del Barón",
        description: "Isla deshabitada en el corazón del Mar Menor. Perfecta para fondear y disfrutar de las aguas más cálidas y transparentes del litoral.",
    },
    {
        src: "/home/la-manga/playa_del_estacio.png",
        label: "Playa del Estacio",
        description: "El paso que une el Mar Menor y el Mediterráneo. Un paisaje único donde conviven dos mundos marinos con carácter completamente distinto.",
    },
    {
        src: "/home/la-manga/faro_cabo_de_palos.png",
        label: "Faro Cabo de Palos",
        description: "El punto más emblemático de La Manga. Vistas panorámicas al Mediterráneo y aguas con una diversidad marina extraordinaria.",
    },
    {
        src: "/home/la-manga/isla_grosa.png",
        label: "Isla Grosa",
        description: "La mayor isla del Mar Menor, reserva natural con flora y fauna endémica. Un destino imprescindible para los amantes de la naturaleza.",
    },
    {
        src: "/home/la-manga/perdiguera.png",
        label: "Isla Perdiguera",
        description: "La joya del Mar Menor: playas de arena blanca, aguas cálidas y una paz difícil de encontrar en tierra. El lugar preferido de nuestros clientes.",
    },
];

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
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-azul-oscuro text-3xl font-bold mb-2">Nuestras paradas favoritas</h2>
                    <p className="text-gris-claro mb-10">Cada ruta es diferente, pero estos son los lugares que nunca fallan.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {locations.map((loc, i) => (
                            <div
                                key={loc.src}
                                className={`group rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-shadow duration-300 ${
                                    i === locations.length - 1 && locations.length % 3 === 1
                                        ? "sm:col-span-2 lg:col-span-1"
                                        : ""
                                }`}
                            >
                                <img
                                    src={loc.src}
                                    alt={loc.label}
                                    className="w-full block group-hover:scale-105 transition-transform duration-500"
                                    loading={i < 3 ? "eager" : "lazy"}
                                />
                                <div className="p-5 bg-white">
                                    <h3 className="font-bold text-gris-oscuro text-base mb-1">{loc.label}</h3>
                                    <p className="text-gris-claro text-sm leading-relaxed">{loc.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
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
