export default function HeroSection() {
    return (
        <section id="inicio" className="scroll-mt-[88px] md:scroll-mt-28 relative min-h-[calc(100vh-5.5rem)] md:min-h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden">

            {/* Imagen de fondo */}
            <img src="/home/hero-section/hero.png" alt="Katmandú navegando por La Manga" className="absolute inset-0 w-full h-full object-cover object-center" />

            {/* Overlay oscuro para legibilidad del texto */}

            {/* Contenido */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-sm mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-acento inline-block" />
                    Charter privado · La Manga del Mar Menor
                </div>

                {/* Título */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Navega por el<br />
                    <span className="text-acento">Mar Menor</span>
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10">
                    Experiencia única con patrón incluido. Grupos de hasta <strong>6 personas</strong> desde el <strong>Puerto Tomás Maestre - <span className="text-acento font-black text-xl md:text-2xl">La Manga del Mar Menor</span></strong>.
                </p>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#info"
                        className="bg-acento hover:bg-acento/80 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Descúbrenos →
                    </a>
                    <a
                        href="#tarifas"
                        className="bg-white text-gris-oscuro font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105"
                    >
                        Ver tarifas
                    </a>
                </div>
            </div>

            {/* Indicador de scroll */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-white animate-bounce">
                <span className="text-xs font-bold tracking-widest uppercase">Descubrir</span>
                <div className="flex flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 7L10 13L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="-mt-3">
                        <path d="M4 7L10 13L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

        </section>
    );
}
