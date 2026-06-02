'use client';

import { useRef, useState, useEffect } from 'react';

const images = [
    { src: "/home/info/patron.png",   alt: "Clientes saltando desde Katmandú" },
    { src: "/home/info/barco.png",    alt: "Puesta de Sol desde velero Katmandú" },
    { src: "/home/info/clientes.png", alt: "Clientes disfrutando a bordo" },
];

const stats = [
    { value: "7+",   label: "Años de experiencia del patrón" },
    { value: "+100", label: "Clientes satisfechos" },
    { value: "100%", label: "Reseñas de 5 estrellas" },
];

export default function InfoSection() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [mobileIndex, setMobileIndex] = useState(0);
    const swipeStartX = useRef(0);
    const hasSwiped = useRef(false);

    // Mobile carousel swipe
    const onTouchStart = (e: React.TouchEvent) => {
        swipeStartX.current = e.touches[0].clientX;
        hasSwiped.current = false;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const dx = swipeStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 40) {
            hasSwiped.current = true;
            setMobileIndex(prev =>
                dx > 0 ? Math.min(prev + 1, images.length - 1) : Math.max(prev - 1, 0)
            );
        }
    };

    // Modal swipe
    const modalSwipeX = useRef(0);
    const onModalTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        modalSwipeX.current = e.touches[0].clientX;
        e.stopPropagation();
    };
    const onModalTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const dx = modalSwipeX.current - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 50) {
            setSelectedIndex(prev => prev !== null
                ? dx > 0 ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length
                : null
            );
        }
        e.stopPropagation();
    };

    // Keyboard navigation for modal
    useEffect(() => {
        if (selectedIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') setSelectedIndex(p => p !== null ? (p + 1) % images.length : null);
            else if (e.key === 'ArrowLeft') setSelectedIndex(p => p !== null ? (p - 1 + images.length) % images.length : null);
            else if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [selectedIndex]);

    const selected = selectedIndex !== null ? images[selectedIndex] : null;

    return (
        <section id="info" className="scroll-mt-[88px] md:scroll-mt-28 pt-16 pb-4 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row md:justify-center md:gap-2 gap-12">

                    {/* Mobile: swipe carousel */}
                    <div className="order-2 md:order-none md:hidden -mx-4">
                        <div
                            className="overflow-hidden"
                            style={{ width: '100vw', touchAction: 'pan-y' }}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                        >
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${mobileIndex * 100}vw)` }}
                            >
                                {images.map((img, i) => (
                                    <div
                                        key={i}
                                        className="relative flex-shrink-0 aspect-[9/7] rounded-2xl overflow-hidden px-4"
                                        style={{ width: '100vw' }}
                                        onClick={() => { if (!hasSwiped.current) setSelectedIndex(i); }}
                                    >
                                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-2xl" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-3">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setMobileIndex(i)}
                                    className={`rounded-full transition-all duration-200 ${i === mobileIndex ? 'w-4 h-2 bg-azul-oscuro' : 'w-2 h-2 bg-azul-oscuro/30'}`}
                                    aria-label={`Foto ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop: vertical stack */}
                    <div className="hidden md:flex flex-col gap-3 w-64 flex-shrink-0">
                        {images.map((img) => (
                            <div key={img.alt} className="relative flex-1 min-h-0 rounded-2xl overflow-hidden">
                                <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Text */}
                    <div className="order-1 md:order-none flex flex-col gap-6 md:max-w-lg">
                        <div className="pl-14">
                            <p className="text-acento font-semibold text-sm uppercase tracking-wider mb-2">Charter Lobo de Mar</p>
                            <h2 className="text-azul-oscuro text-xl md:text-4xl font-bold leading-tight mb-4">Tu mejor escapada<br />en el Mar Menor</h2>
                            <p className="text-gris-claro font-semibold mb-3">Rutas a medida y toda la magia del mar.</p>
                            <p className="text-gris-claro">Con Lobo de Mar, cada travesía es una experiencia pensada para ti. Puedes convertir cualquier ocasión en un recuerdo inolvidable.</p>
                            <p className="text-gris-claro mt-3">Solo te tienes que preocupar de disfrutar en alta mar, con estilo, tranquilidad y vistas únicas, ¡nosotros hacemos el resto!</p>
                        </div>

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

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setSelectedIndex(null)}
                    style={{ touchAction: 'none' }}
                >
                    <div
                        className="relative max-w-2xl w-full"
                        onClick={e => e.stopPropagation()}
                        onTouchStart={onModalTouchStart}
                        onTouchEnd={onModalTouchEnd}
                    >
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute -top-10 right-0 text-white/70 hover:text-white w-8 h-8 flex items-center justify-center text-lg transition-colors"
                            aria-label="Cerrar"
                        >✕</button>

                        <button
                            onClick={() => setSelectedIndex(p => p !== null ? (p - 1 + images.length) % images.length : null)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors text-3xl leading-none"
                            aria-label="Anterior"
                        >‹</button>

                        <button
                            onClick={() => setSelectedIndex(p => p !== null ? (p + 1) % images.length : null)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors text-3xl leading-none"
                            aria-label="Siguiente"
                        >›</button>

                        <img
                            src={selected.src}
                            alt={selected.alt}
                            className="w-full rounded-2xl object-cover"
                        />

                        <p className="text-white/60 text-sm text-center mt-3">{selected.alt}</p>

                        <div className="flex justify-center gap-2 mt-4">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedIndex(i)}
                                    className={`rounded-full transition-all duration-200 ${i === selectedIndex ? 'w-4 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'}`}
                                    aria-label={`Foto ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
