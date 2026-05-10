"use client";
import { useRef, useState, useEffect } from "react";

const tarifas = [
    {
        temporada: "Temporada Baja",
        periodo: "Del 1 de Septiembre al 30 de Junio",
        opciones: [
            { nombre: "Charter Day 8h", precio: "480€", horario: "Horario a convenir con el cliente" },
            { nombre: "Charter Day 6h", precio: "390€", horario: "Horario a convenir con el cliente" },
            { nombre: "Charter 4h", precio: "300€", horario: "10:00-14:00 ó 16:00-20:00" },
            { nombre: "Charter Puesta de Sol 2h", precio: "200€", horario: "19:30-21:30" },
        ],
    },
    {
        temporada: "Temporada Alta",
        periodo: "Del 1 de Julio al 31 de Agosto",
        opciones: [
            { nombre: "Charter Day 8h", precio: "530€", horario: "Horario a convenir con el cliente" },
            { nombre: "Charter Day 6h", precio: "440€", horario: "Horario a convenir con el cliente" },
            { nombre: "Charter 4h", precio: "350€", horario: "10:00-14:00 ó 16:00-20:00" },
            { nombre: "Charter Puesta de Sol 2h", precio: "250€", horario: "20:00-22:00" },
        ],
    },
];

export default function TarifasSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const hintDoneRef = useRef(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const scrollEl = scrollRef.current;
        const sectionEl = sectionRef.current;
        if (!scrollEl || !sectionEl) return;

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hintDoneRef.current && scrollEl.scrollWidth > scrollEl.clientWidth) {
                    hintDoneRef.current = true;
                    setTimeout(() => {
                        scrollEl.style.scrollSnapType = "none";
                        scrollEl.scrollTo({ left: 120, behavior: "smooth" });
                        setTimeout(() => {
                            scrollEl.scrollTo({ left: 0, behavior: "smooth" });
                            setTimeout(() => { scrollEl.style.scrollSnapType = ""; }, 500);
                        }, 700);
                    }, 1000);
                }
            },
            { threshold: 0.6 }
        );
        sectionObserver.observe(sectionEl);

        const handleScroll = () => {
            setActiveIndex(scrollEl.scrollLeft > scrollEl.clientWidth / 2 ? 1 : 0);
        };
        scrollEl.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            sectionObserver.disconnect();
            scrollEl.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} id="tarifas" className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-azul-oscuro text-4xl font-bold mb-3">Tarifas</h2>
                    <p className="text-gris-claro">Salidas para un máximo de 6 pasajeros en los chárter de día.</p>
                    <p className="text-gris-claro"><span className="font-bold">¿Quieres una Salida a Medida? Pregúntanos</span> sin ningún tipo de compromiso y lo planificamos juntos.</p>
                </div>

                <div ref={scrollRef} className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-8 md:overflow-x-visible md:justify-center">
                    {tarifas.map((tarifa) => (
                        <div key={tarifa.temporada} className="snap-start shrink-0 w-full md:w-auto md:flex-1 bg-white rounded-3xl p-8 flex flex-col gap-6">
                            <div className="text-center">
                                <h3 className="text-azul-oscuro text-2xl font-bold">{tarifa.temporada}</h3>
                                <p className="text-gris-claro text-sm mt-1">{tarifa.periodo}</p>
                            </div>

                            <div className="flex flex-col divide-y divide-gray-100">
                                {tarifa.opciones.map((opcion) => (
                                    <div key={opcion.nombre} className="py-4 flex flex-col gap-1">
                                        <div className="flex justify-between items-center">
                                            <span className="text-azul-oscuro font-semibold">{opcion.nombre}</span>
                                            <span className="text-acento font-bold text-lg">{opcion.precio}</span>
                                        </div>
                                        <p className="text-gris-claro text-sm">{opcion.horario}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center gap-2 mt-auto pt-2">
                                <a
                                    href="https://wa.me/637715281?text=Hola,%20quiero%20reservar%20una%20excursi%C3%B3n%20en%20barco%20para%20el%20siguiente%20fin%20de%20semana.%20%C2%BFTienes%20disponibilidad?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-azul-oscuro text-white font-bold py-3 px-8 rounded-full hover:bg-azul transition-colors duration-300"
                                >
                                    Reservar
                                </a>
                                <p className="text-gris-claro text-xs">IVA Incluido</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {tarifas.map((_, i) => (
                        <div
                            key={i}
                            className={`rounded-full transition-all duration-300 ${
                                activeIndex === i ? "w-5 h-2 bg-azul-oscuro" : "w-2 h-2 bg-gray-300"
                            }`}
                        > </div>
                    ))}
                </div>

                <p className="text-gris-claro text-sm text-center mt-8">Política de cancelación: Reembolso de la señal del 100% si se cancela antes de 3 días, del 50% de la señal 2 días antes de la llegada y 0% si se cancela el mismo día.</p>
            </div>
        </section>
    );
}
