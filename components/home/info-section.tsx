'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

const images = [
    { src: "/home/info/patron.png",   alt: "Juan Carlos, patrón de Katmandú" },
    { src: "/home/info/barco.png",    alt: "Puesta de Sol desde velero Katmandú" },
    { src: "/home/info/clientes.png", alt: "Clientes disfrutando a bordo" },
];

const stats = [
    { value: "7+",   label: "Años de experiencia del patrón" },
    { value: "+100", label: "Clientes satisfechos" },
    { value: "100%", label: "Reseñas de 5 estrellas" },
];

export default function InfoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const isPaused = useRef(false);
    const isModalOpen = useRef(false);
    const isDragging = useRef(false);
    const hasDragged = useRef(false);
    const dragStartX = useRef(0);
    const scrollStart = useRef(0);
    const rafRef = useRef<number | null>(null);
    const velocity = useRef(0);
    const momentum = useRef(false);
    const lastPointerX = useRef(0);
    const lastPointerTime = useRef(0);

    useEffect(() => {
        isModalOpen.current = selectedIndex !== null;
        isPaused.current = selectedIndex !== null;
    }, [selectedIndex]);

    // Auto scroll
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const tick = () => {
            const half = container.scrollWidth / 2;
            if (momentum.current && Math.abs(velocity.current) > 0.05) {
                container.scrollLeft += velocity.current * 16;
                velocity.current *= 0.93;
                if (container.scrollLeft >= half) container.scrollLeft -= half;
                if (container.scrollLeft < 0) container.scrollLeft += half;
            } else if (momentum.current) {
                momentum.current = false;
                velocity.current = 0;
            } else if (!isPaused.current) {
                container.scrollLeft += 1;
                if (container.scrollLeft >= half) container.scrollLeft -= half;
            }
            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
    }, []);

    // Mouse drag
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        isDragging.current = true;
        hasDragged.current = false;
        momentum.current = false;
        velocity.current = 0;
        isPaused.current = true;
        dragStartX.current = e.clientX;
        scrollStart.current = containerRef.current?.scrollLeft ?? 0;
        lastPointerX.current = e.clientX;
        lastPointerTime.current = performance.now();
        e.preventDefault();
    };

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        const dx = e.clientX - dragStartX.current;
        if (Math.abs(dx) > 4) hasDragged.current = true;
        const container = containerRef.current;
        const half = container.scrollWidth / 2;
        let newLeft = scrollStart.current - dx;
        if (newLeft >= half) newLeft -= half;
        if (newLeft < 0) newLeft += half;
        container.scrollLeft = newLeft;
        const now = performance.now();
        const dt = now - lastPointerTime.current;
        if (dt > 0 && dt < 100) {
            velocity.current = Math.max(-15, Math.min(15, -(e.clientX - lastPointerX.current) / dt));
        }
        lastPointerX.current = e.clientX;
        lastPointerTime.current = now;
    }, []);

    const onMouseUp = useCallback(() => {
        if (!isDragging.current) return;
        isDragging.current = false;
        if (!isModalOpen.current && Math.abs(velocity.current) > 0.1) momentum.current = true;
        isPaused.current = isModalOpen.current;
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [onMouseMove, onMouseUp]);

    // Touch drag
    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        hasDragged.current = false;
        momentum.current = false;
        velocity.current = 0;
        isPaused.current = true;
        dragStartX.current = e.touches[0].clientX;
        scrollStart.current = containerRef.current?.scrollLeft ?? 0;
        lastPointerX.current = e.touches[0].clientX;
        lastPointerTime.current = performance.now();
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const touch = e.touches[0];
        const dx = touch.clientX - dragStartX.current;
        if (Math.abs(dx) > 4) hasDragged.current = true;
        const container = containerRef.current;
        const half = container.scrollWidth / 2;
        let newLeft = scrollStart.current - dx;
        if (newLeft >= half) newLeft -= half;
        if (newLeft < 0) newLeft += half;
        container.scrollLeft = newLeft;
        const now = performance.now();
        const dt = now - lastPointerTime.current;
        if (dt > 0 && dt < 100) {
            velocity.current = Math.max(-15, Math.min(15, -(touch.clientX - lastPointerX.current) / dt));
        }
        lastPointerX.current = touch.clientX;
        lastPointerTime.current = now;
    };

    const onTouchEnd = () => {
        if (!isModalOpen.current && Math.abs(velocity.current) > 0.1) momentum.current = true;
        isPaused.current = isModalOpen.current;
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

    // Keyboard navigation
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

    const doubled = [...images, ...images];
    const selected = selectedIndex !== null ? images[selectedIndex] : null;

    return (
        <section id="info" className="scroll-mt-[88px] md:scroll-mt-28 pt-16 pb-4 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row md:justify-center md:gap-2 gap-12">

                    {/* Mobile ticker */}
                    <div className="order-2 md:order-none md:hidden -mx-4">
                        <div
                            ref={containerRef}
                            className="flex gap-3 px-4 overflow-x-hidden no-scrollbar select-none cursor-grab active:cursor-grabbing"
                            style={{ width: '100vw', touchAction: 'pan-y' }}
                            onMouseDown={onMouseDown}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            {doubled.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative flex-shrink-0 w-72 aspect-[9/7] rounded-2xl overflow-hidden cursor-pointer"
                                    onClick={() => { if (!hasDragged.current) setSelectedIndex(i % images.length); }}
                                >
                                    <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
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
                        {/* Close */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute -top-10 right-0 text-white/70 hover:text-white w-8 h-8 flex items-center justify-center text-lg transition-colors"
                            aria-label="Cerrar"
                        >✕</button>

                        {/* Prev */}
                        <button
                            onClick={() => setSelectedIndex(p => p !== null ? (p - 1 + images.length) % images.length : null)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors text-3xl leading-none"
                            aria-label="Anterior"
                        >‹</button>

                        {/* Next */}
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

                        {/* Alt text */}
                        <p className="text-white/60 text-sm text-center mt-3">{selected.alt}</p>

                        {/* Dots */}
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
