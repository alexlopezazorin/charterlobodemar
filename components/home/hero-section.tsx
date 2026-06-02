export default function HeroSection() {
    return (
        <section id="inicio" className="scroll-mt-[88px] md:scroll-mt-28 relative min-h-screen md:-mt-28 flex items-center justify-center overflow-hidden">

            {/* Imagen de fondo */}
            <img src="/home/hero-section/hero.png" alt="Katmandú navegando por La Manga" className="absolute inset-0 w-full h-full object-cover object-center" />

            {/* Overlay gris */}
            <div className="absolute inset-0 bg-gray-500/35" />

            {/* Contenido */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">

                {/* Título */}
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight">
                    Desconecta de la rutina...<br />
                    <span className="text-acento md:whitespace-nowrap">¡Navega hacia la aventura!</span>
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Charter con patrón incluido desde el <strong>Puerto Tomás Maestre</strong><br /><span className="text-acento font-black text-xl md:text-2xl">La Manga del Mar Menor</span>
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
