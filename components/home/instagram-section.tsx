"use client";
import { useRef, useEffect } from "react";

const ROTATIONS = [-2.5, 1.8, -1.2];

const instagramPosts = [
    { src: "/home/instagram/1.png" },
    { src: "/home/instagram/3.png" },
    { src: "/home/instagram/4.png" },
    { src: "/home/instagram/7.png" },
];

export default function InstagramSection() {
    const sectionRef = useRef<HTMLElement>(null);

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
                if (a < 1) return isMobile ? 196 : 246;
                if (a < 3) return isMobile ? 231 : 289;
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
        <section
            ref={sectionRef}
            id="instagram"
            className="relative w-full z-30"
            style={{ height: `calc(${130 + 50 * (instagramPosts.length - 1)}vh + 0px)` }}
        >
            <div className="sticky top-0 h-[100svh] w-full">

                <div className="pointer-events-none absolute inset-x-0 z-30 text-center px-4 pt-[5.5rem] md:pt-[7rem] pb-4">
                    <h2 className="text-azul-oscuro text-4xl font-bold">Instagram</h2>
                    <p className="text-gris-claro mt-2">
                        Síguenos en{" "}
                        <a
                            href="https://www.instagram.com/charterlobodemar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto text-acento font-bold inline-block transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            Instagram
                        </a>{" "}
                        para descubrir nuestras travesías, novedades y sorteos. ¡No te lo pierdas!
                    </p>
                </div>

                {instagramPosts.map((post, i) => (
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
                                i < 1
                                    ? "w-[min(50vw,196px)] md:w-[min(24vw,246px)]"
                                    : i < 3
                                    ? "w-[min(60vw,231px)] md:w-[min(28vw,289px)]"
                                    : "w-[min(70vw,272px)] md:w-[min(34vw,340px)]"
                            }`}
                            style={{ aspectRatio: "1 / 1.135" }}
                        >
                            <div className="h-full w-full transition-transform duration-300 ease-out md:hover:-translate-y-4 md:hover:scale-[1.03]">
                                <a
                                    href="https://www.instagram.com/charterlobodemar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/card relative h-full w-full cursor-pointer rounded-[0.45rem] border border-black/10 bg-[#f8f3e8] p-[4.5%] transition-shadow duration-300 shadow-[0_14px_42px_rgba(0,0,0,0.32)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex"
                                    style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
                                    aria-label={`Ver foto de Instagram ${i + 1}`}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-[0.2rem] bg-black/5">
                                        <img
                                            src={post.src}
                                            alt={`Instagram ${i + 1}`}
                                            className="absolute inset-0 h-full w-full object-cover"
                                            loading={i === 0 ? "eager" : "lazy"}
                                        />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                                            <img src="/instagram-logo.svg" alt="" className="w-8 h-8 brightness-0 invert" />
                                            <span className="text-white text-sm font-semibold">Ver en Instagram</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="hidden w-1/4 md:block" />
                    </div>
                ))}
            </div>
        </section>
    );
}
