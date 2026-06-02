"use client";
import { useRef, useState, useEffect, useCallback } from "react";

const images = [
    { src: "/home/instagram/1.png", alt: "Foto de Instagram 1" },
    { src: "/home/instagram/2.png", alt: "Foto de Instagram 2" },
    { src: "/home/instagram/3.png", alt: "Foto de Instagram 3" },
    { src: "/home/instagram/4.png", alt: "Foto de Instagram 4" },
    { src: "/home/instagram/5.png", alt: "Foto de Instagram 5" },
    { src: "/home/instagram/6.png", alt: "Foto de Instagram 6" },
    { src: "/home/instagram/7.png", alt: "Foto de Instagram 7" },
    { src: "/home/instagram/8.png", alt: "Foto de Instagram 8" },
];

const ROTATIONS = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.2, -2.0, 1.5];

export default function InstagramSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const isPaused = useRef(false);
    const isModalOpen = useRef(false);
    const isDragging = useRef(false);
    const hasDragged = useRef(false);
    const dragStartX = useRef(0);
    const scrollStart = useRef(0);
    const animFrameRef = useRef<number | null>(null);
    const velocity = useRef(0);
    const momentum = useRef(false);
    const lastPointerX = useRef(0);
    const lastPointerTime = useRef(0);

    useEffect(() => {
        isModalOpen.current = selectedIndex !== null;
        isPaused.current = selectedIndex !== null;
    }, [selectedIndex]);

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
            animFrameRef.current = requestAnimationFrame(tick);
        };

        animFrameRef.current = requestAnimationFrame(tick);
        return () => {
            if (animFrameRef.current !== null) cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

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
        if (!isModalOpen.current && Math.abs(velocity.current) > 0.1) {
            momentum.current = true;
        }
        isPaused.current = isModalOpen.current;
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [onMouseMove, onMouseUp]);

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
        if (!isModalOpen.current && Math.abs(velocity.current) > 0.1) {
            momentum.current = true;
        }
        isPaused.current = isModalOpen.current;
    };

    const modalSwipeX = useRef(0);

    const onModalTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        modalSwipeX.current = e.touches[0].clientX;
        e.stopPropagation();
    };

    const onModalTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const dx = modalSwipeX.current - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 50) {
            setSelectedIndex(prev => {
                if (prev === null) return null;
                return dx > 0
                    ? (prev + 1) % images.length
                    : (prev - 1 + images.length) % images.length;
            });
        }
        e.stopPropagation();
    };

    useEffect(() => {
        if (selectedIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") setSelectedIndex(p => p !== null ? (p + 1) % images.length : null);
            else if (e.key === "ArrowLeft") setSelectedIndex(p => p !== null ? (p - 1 + images.length) % images.length : null);
            else if (e.key === "Escape") setSelectedIndex(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selectedIndex]);

    const doubled = [...images, ...images];

    return (
        <section id="instagram" className="scroll-mt-[88px] md:scroll-mt-28 py-16">
            <div className="max-w-3xl mx-auto text-center px-4 mb-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <defs>
                            <linearGradient id="ig-grad" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#f9ce34"/>
                                <stop offset="35%" stopColor="#ee2a7b"/>
                                <stop offset="100%" stopColor="#6228d7"/>
                            </linearGradient>
                        </defs>
                        <rect width="32" height="32" rx="8" fill="url(#ig-grad)"/>
                        <path fill="white" d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"/>
                        <path fill="white" d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"/>
                        <path fill="white" d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"/>
                    </svg>
                    <h2 className="text-azul-oscuro text-4xl font-bold">Instagram</h2>
                </div>
                <p className="text-gris-claro">
                    Síguenos en{" "}
                    <a
                        href="https://www.instagram.com/charterlobodemar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-acento font-bold inline-block transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        @charterlobodemar
                    </a>{" "}
                    para descubrir nuestras travesías, novedades y sorteos.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="overflow-x-hidden no-scrollbar select-none cursor-grab active:cursor-grabbing pb-4"
                    style={{ touchAction: "pan-y" }}
                    onMouseDown={onMouseDown}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="flex gap-8 py-8 px-4" style={{ width: "max-content" }}>
                        {doubled.map((image, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 cursor-pointer group transition-transform duration-300 hover:-translate-y-2"
                                style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
                                onClick={() => {
                                    if (!hasDragged.current) setSelectedIndex(i % images.length);
                                }}
                            >
                                <div className="bg-white p-3 pb-8 shadow-[0_8px_30px_rgba(0,0,0,0.18)] rounded-sm w-52 md:w-60">
                                    <div className="overflow-hidden w-full aspect-square">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setSelectedIndex(null)}
                    style={{ touchAction: "none" }}
                >
                    <div
                        className="relative max-w-2xl w-full flex flex-col items-center"
                        onClick={e => e.stopPropagation()}
                        onTouchStart={onModalTouchStart}
                        onTouchEnd={onModalTouchEnd}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute -top-10 right-0 text-white/70 hover:text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-xl"
                            aria-label="Cerrar"
                        >
                            ✕
                        </button>

                        {/* Prev */}
                        <button
                            onClick={() => setSelectedIndex(prev => prev !== null ? (prev - 1 + images.length) % images.length : null)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-3xl leading-none"
                            aria-label="Anterior"
                        >
                            ‹
                        </button>

                        {/* Image */}
                        <img
                            src={images[selectedIndex].src}
                            alt={images[selectedIndex].alt}
                            className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                        />

                        {/* Next */}
                        <button
                            onClick={() => setSelectedIndex(prev => prev !== null ? (prev + 1) % images.length : null)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-3xl leading-none"
                            aria-label="Siguiente"
                        >
                            ›
                        </button>

                        {/* Dots */}
                        <div className="flex justify-center gap-1.5 mt-4">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedIndex(i)}
                                    className={`rounded-full transition-all duration-200 ${i === selectedIndex ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
                                    aria-label={`Ir a foto ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="text-center mt-10">
                <a
                    href="https://www.instagram.com/charterlobodemar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-azul text-white font-semibold px-6 py-3 rounded-full hover:bg-azul-oscuro transition-colors duration-300"
                >
                    Síguenos en Instagram
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}
