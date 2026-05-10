"use client";
import { useRef, useState, useEffect } from "react";

const ROTATIONS = [-2.5, 1.8, -1.2];

const laMangaPosts = [
    { src: "/home/la-manga/calblanque.png", label: "Parque Natural Calblanque" },
    { src: "/home/la-manga/farallon.png", label: "Islote del Farallón" },
    { src: "/home/la-manga/cala_cerrada.png", label: "Cala Cerrada" },
    { src: "/home/la-manga/azohia.png", label: "Playa de la Azohía" },
    { src: "/home/la-manga/isla_del_baron.png", label: "Isla del Barón" },
    { src: "/home/la-manga/playa_del_estacio.png", label: "Playa del Estacio" },
    { src: "/home/la-manga/faro_cabo_de_palos.png", label: "Faro Cabo de Palos" },
    { src: "/home/la-manga/isla_grosa.png", label: "Isla Grosa" },
    { src: "/home/la-manga/perdiguera.png", label: "Isla Perdiguera" },
];

export default function LaMangaSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [lightbox, setLightbox] = useState<number | null>(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const cards = Array.from(sectionEl.querySelectorAll<HTMLElement>("[data-story-card]"));
        const N = cards.length;
        let rafId: ReturnType<typeof requestAnimationFrame> | null = null;

        const update = () => {
            rafId = null;
            const rect = sectionEl.getBoundingClientRect();
            if (rect.bottom < -window.innerHeight || rect.top > 1.5 * window.innerHeight) return;

            const isMobile = window.innerWidth < 768;
            const z = 0.5 * window.innerHeight;
            const DELTA = isMobile ? 14 : 20;
            const r = Math.max(0, -rect.top);

            const getCardW = (a: number) => {
                if (a < 3) return isMobile ? 196 : 246;
                if (a < 6) return isMobile ? 231 : 289;
                return isMobile ? 272 : 340;
            };
            const maxCardH = getCardW(6) * 1.135;
            const headerH = isMobile ? 88 : 112;
            const topPx = Math.max(headerH + 90, (window.innerHeight - (maxCardH + (N - 1) * DELTA)) / 2);

            let n = 0;
            for (let e = 1; e < N; e++) {
                n += Math.min(Math.max((r - (e * z - 140)) / 140, 0), 1);
            }
            const c = n * DELTA;

            cards.forEach((card, a) => {
                card.style.top = topPx + "px";
                card.style.visibility = "visible";
                const s = Math.max(a * z - r, 0);
                let l = 0;
                for (let e = a + 1; e < N; e++) {
                    l += Math.min(Math.max((r - (e * z - 140)) / 140, 0), 1);
                }
                card.style.transform = `translate3d(0, ${s - l * DELTA + c}px, 0)`;
            });
        };

        const onScroll = () => {
            if (rafId === null) rafId = requestAnimationFrame(update);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", update, { passive: true });
        update();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", update);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                id="la-manga"
                className="relative w-full z-30"
                style={{ height: `calc(${200 + 50 * (laMangaPosts.length - 1)}vh + 0px)` }}
            >
                <div className="sticky top-0 h-[100svh] w-full">

                    <div className="pointer-events-none absolute inset-x-0 z-30 text-center px-4 pt-[5.5rem] md:pt-[7rem] pb-4">
                        <h2 className="text-azul-oscuro text-4xl font-bold">La Manga del Mar Menor</h2>
                    </div>

                    {laMangaPosts.map((post, i) => (
                        <div
                            key={post.src}
                            data-story-card={i}
                            className="pointer-events-auto absolute inset-x-0 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center px-4 md:flex-row md:px-8"
                            style={{
                                top: "50%",
                                visibility: "hidden",
                                zIndex: i + 1,
                                transform: "translate3d(0, 0, 0)",
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <div className="hidden w-1/4 md:block" />

                            <div
                                className={`relative mx-4 shrink-0 transform-gpu ${
                                    i < 3
                                        ? "w-[min(50vw,196px)] md:w-[min(24vw,246px)]"
                                        : i < 6
                                        ? "w-[min(60vw,231px)] md:w-[min(28vw,289px)]"
                                        : "w-[min(70vw,272px)] md:w-[min(34vw,340px)]"
                                }`}
                                style={{ aspectRatio: "1 / 1.135" }}
                            >
                                <div className="h-full w-full transition-transform duration-300 ease-out md:hover:-translate-y-4 md:hover:scale-[1.03]">
                                    <button
                                        type="button"
                                        className="relative h-full w-full cursor-pointer rounded-[0.45rem] border border-black/10 bg-[#f8f3e8] p-[4.5%] pb-[18%] transition-shadow duration-300 shadow-[0_14px_42px_rgba(0,0,0,0.32)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                                        style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
                                        onClick={() => setLightbox(i)}
                                        aria-label={`Ver foto de ${post.label}`}
                                    >
                                        <div className="relative h-full w-full overflow-hidden rounded-[0.2rem] bg-black/5">
                                            <img
                                                src={post.src}
                                                alt={post.label}
                                                className="absolute inset-0 h-full w-full object-cover"
                                                loading={i === 0 ? "eager" : "lazy"}
                                            />
                                        </div>
                                        <p className="absolute bottom-[7%] left-1/2 block max-w-[90%] -translate-x-1/2 whitespace-nowrap text-center text-[clamp(0.7rem,1.8vw,1rem)] text-black/70">
                                            {post.label}
                                        </p>
                                    </button>
                                </div>
                            </div>

                            <div className="hidden w-1/4 md:block" />
                        </div>
                    ))}
                </div>
            </section>

            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl leading-none w-10 h-10 flex items-center justify-center"
                        onClick={() => setLightbox(null)}
                    >
                        ×
                    </button>
                    <img
                        src={laMangaPosts[lightbox].src}
                        alt={laMangaPosts[lightbox].label}
                        className="max-w-full max-h-full rounded-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
