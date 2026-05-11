const images = [
    { src: "/home/info/patron.png",   alt: "Juan Carlos, patrón de Katmandú" },
    { src: "/home/info/barco.png",    alt: "Velero Katmandú" },
    { src: "/home/info/clientes.png", alt: "Clientes disfrutando a bordo" },
];

const stats = [
    { value: "5+",   label: "Años de experiencia del patrón" },
    { value: "+100", label: "Clientes satisfechos" },
    { value: "100%", label: "Reseñas de 5 estrellas" },
];

export default function InfoSection() {
    return (
        <section id="info" className="scroll-mt-[88px] md:scroll-mt-28 pt-16 pb-4 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Layout principal */}
                <div className="flex flex-col md:flex-row md:justify-center md:gap-2 gap-12">

                    {/* Izquierda — mobile: ticker horizontal */}
                    <div className="order-2 md:order-none md:hidden overflow-x-clip -mx-4">
                        <div className="ticker-track flex gap-3 px-4" style={{ animationDuration: "10s" }}>
                            {[...images, ...images].map((img, i) => (
                                <div key={i} className="relative flex-shrink-0 w-72 aspect-[9/7] rounded-2xl overflow-hidden">
                                    <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Izquierda — desktop: pila vertical */}
                    <div className="hidden md:flex flex-col gap-3 w-64 flex-shrink-0">
                        {images.map((img) => (
                            <div key={img.alt} className="relative flex-1 min-h-0 rounded-2xl overflow-hidden">
                                <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Derecha — texto */}
                    <div className="order-1 md:order-none flex flex-col gap-6 md:max-w-lg">

                        <div className="pl-14">
                            <p className="text-acento font-semibold text-sm uppercase tracking-wider mb-2">Charter Lobo de Mar</p>
                            <h2 className="text-azul-oscuro text-4xl font-bold leading-tight mb-4">Eventos especiales</h2>
                            <p className="text-gris-claro font-semibold mb-3">Rutas a medida y toda la magia del mar.</p>
                            <p className="text-gris-claro">Con Lobo de Mar, cada travesía es una experiencia pensada para ti. Puedes convertir cualquier ocasión en un recuerdo inolvidable.</p>
                            <p className="text-gris-claro mt-3">Solo te tienes que preocupar de disfrutar en alta mar, con estilo, tranquilidad y vistas únicas, ¡nosotros hacemos el resto!</p>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-5 mt-2">

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-azul-claro-fondo flex items-center justify-center flex-shrink-0 text-azul-oscuro">
                                    <svg width="20" height="20" viewBox="0 0 24 27" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="5" r="3"/>
                                        <line x1="12" y1="8" x2="12" y2="22"/>
                                        <path d="M5 15H2a10 10 0 0 0 20 0h-3"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gris-oscuro mb-1">Charters privados exclusivos</h3>
                                    <p className="text-gris-claro text-sm">Piensa en un velero en exclusividad solo para ti y tus personas favoritas. Charters privados para hasta 6 personas + patrón, con todo el confort que mereces.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-azul-claro-fondo flex items-center justify-center flex-shrink-0 text-azul-oscuro">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
                                        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
                                        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gris-oscuro mb-1">Actividades acuáticas</h3>
                                    <p className="text-gris-claro text-sm">Además de navegar, disfruta de paddle surf, snorkel y baños en rincones paradisíacos. Naturaleza, relax y diversión en cada travesía.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 border-t border-azul-claro/40 mt-16 pt-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-4xl md:text-5xl font-bold text-acento">{stat.value}</p>
                            <p className="text-gris-claro text-sm mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
