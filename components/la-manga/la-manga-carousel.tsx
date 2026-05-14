'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { locations } from './la-manga-data';

export default function LaMangaCarousel() {
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
        return () => { if (animFrameRef.current !== null) cancelAnimationFrame(animFrameRef.current); };
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
        if (dt > 0 && dt < 100) velocity.current = Math.max(-15, Math.min(15, -(e.clientX - lastPointerX.current) / dt));
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
        if (dt > 0 && dt < 100) velocity.current = Math.max(-15, Math.min(15, -(touch.clientX - lastPointerX.current) / dt));
        lastPointerX.current = touch.clientX;
        lastPointerTime.current = now;
    };

    const onTouchEnd = () => {
        if (!isModalOpen.current && Math.abs(velocity.current) > 0.1) momentum.current = true;
        isPaused.current = isModalOpen.current;
    };

    const onTouchCancel = () => {
        momentum.current = false;
        velocity.current = 0;
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
                return dx > 0 ? (prev + 1) % locations.length : (prev - 1 + locations.length) % locations.length;
            });
        }
        e.stopPropagation();
    };

    useEffect(() => {
        if (selectedIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') setSelectedIndex(p => p !== null ? (p + 1) % locations.length : null);
            else if (e.key === 'ArrowLeft') setSelectedIndex(p => p !== null ? (p - 1 + locations.length) % locations.length : null);
            else if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [selectedIndex]);

    const doubled = [...locations, ...locations];
    const selected = selectedIndex !== null ? locations[selectedIndex] : null;

    return (
        <>
            <div className="relative">
                <div
                    ref={containerRef}
                    className="overflow-x-hidden no-scrollbar select-none cursor-grab active:cursor-grabbing"
                    style={{ touchAction: 'pan-y' }}
                    onMouseDown={onMouseDown}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onTouchCancel={onTouchCancel}
                >
                    <div className="flex gap-5 py-6" style={{ width: 'max-content' }}>
                        {doubled.map((loc, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[280px] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.1)] cursor-pointer bg-white"
                                onClick={() => { if (!hasDragged.current) setSelectedIndex(i % locations.length); }}
                            >
                                <img
                                    src={loc.src}
                                    alt={loc.label}
                                    className="w-full block"
                                    loading={i < 4 ? "eager" : "lazy"}
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-gris-oscuro text-sm leading-tight">{loc.label}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                    onClick={() => setSelectedIndex(null)}
                    style={{ touchAction: 'none' }}
                >
                    <div
                        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative max-h-[90vh] flex flex-col"
                        onClick={e => e.stopPropagation()}
                        onTouchStart={onModalTouchStart}
                        onTouchEnd={onModalTouchEnd}
                    >
                        <div className="relative flex-shrink-0">
                            <button
                                onClick={() => setSelectedIndex(null)}
                                className="absolute top-3 right-3 z-10 text-white bg-black/40 hover:bg-black/60 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                                aria-label="Cerrar"
                            >
                                ✕
                            </button>
                            <button
                                onClick={() => setSelectedIndex(prev => prev !== null ? (prev - 1 + locations.length) % locations.length : null)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 w-10 h-10 flex items-center justify-center rounded-full transition-colors text-3xl leading-none"
                                aria-label="Anterior"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() => setSelectedIndex(prev => prev !== null ? (prev + 1) % locations.length : null)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 w-10 h-10 flex items-center justify-center rounded-full transition-colors text-3xl leading-none"
                                aria-label="Siguiente"
                            >
                                ›
                            </button>
                            <img
                                src={selected.src}
                                alt={selected.label}
                                className="w-full object-cover"
                                style={{ maxHeight: '55vh' }}
                            />
                        </div>

                        <div className="p-6 overflow-y-auto">
                            <h3 className="font-bold text-gris-oscuro text-lg mb-2">{selected.label}</h3>
                            <p className="text-gris-claro text-sm leading-relaxed">{selected.description}</p>
                        </div>

                        <div className="flex justify-center gap-1.5 pb-4 flex-shrink-0">
                            {locations.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedIndex(i)}
                                    className={`rounded-full transition-all duration-200 ${i === selectedIndex ? 'w-4 h-2 bg-azul' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
                                    aria-label={`Ver ${locations[i].label}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
