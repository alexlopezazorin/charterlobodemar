import Link from "next/link";

export default function LaMangaSection() {
    return (
        <section
            id="la-manga"
            className="scroll-mt-[88px] md:scroll-mt-28 py-20"
        >
            <div className="max-w-2xl mx-auto text-center px-6">
                <h2 className="text-azul-oscuro text-4xl font-bold mb-6">
                    La Manga del Mar Menor
                </h2>
                <p className="text-gris-claro text-lg leading-relaxed mb-4">
                    Un paraíso natural único en el Mediterráneo: 22 kilómetros de franja de tierra entre el Mar Menor y el Mar Mediterráneo, con aguas cristalinas, calas escondidas y una riqueza natural incomparable.
                </p>
                <p className="text-gris-claro text-lg leading-relaxed mb-10">
                    A bordo de Katmandú, te llevamos a descubrir sus rincones más especiales: desde el Parque Natural de Calblanque hasta la Isla Perdiguera, pasando por calas de difícil acceso que solo se pueden alcanzar desde el mar.
                </p>
                <Link
                    href="/la-manga"
                    className="inline-flex items-center gap-2 bg-azul text-white font-semibold px-8 py-3 rounded-full hover:bg-azul-oscuro transition-colors duration-300"
                >
                    Descubre La Manga
                    <span>→</span>
                </Link>
            </div>
        </section>
    );
}
