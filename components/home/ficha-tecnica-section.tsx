const fichatecnica = [
    { src: "/home/ficha-tecnica/eslora.png", alt: "eslora", label1: "Eslora", label2: "11,99m" },
    { src: "/home/ficha-tecnica/manga.png", alt: "manga", label1: "Manga", label2: "3,49m" },
    { src: "/home/ficha-tecnica/baños.png", alt: "baños", label1: "Baños", label2: "2" },
    { src: "/home/ficha-tecnica/tipo_de_alquiler.png", alt: "tipo de alquiler", label1: "Tipo de alquiler", label2: "Con patrón" },
    { src: "/home/ficha-tecnica/capacidad.png", alt: "capacidad", label1: "Capacidad", label2: "6 pax + patrón" },
    { src: "/home/ficha-tecnica/camarotes.png", alt: "camarotes", label1: "Camarotes", label2: "2 dobles + 2 camas en salon" },
    { src: "/home/ficha-tecnica/cocina.png", alt: "cocina", label1: "Cocina", label2: "Gas butano y horno" },
    { src: "/home/ficha-tecnica/tecnologia_a_bordo.png", alt: "tecnologia a bordo", label1: "Tencnologia", label2: "Plotter, equipo de viento, sonda" },
    { src: "/home/ficha-tecnica/solarium.png", alt: "solarium", label1: "Solarium", label2: "Amplio solarium/cama en proa con colchonetas" },
    { src: "/home/ficha-tecnica/plataforma_de_baño.png", alt: "plataforma de baño", label1: "Plataforma de baño", label2: "Plataforma con escalera de baño" },
    { src: "/home/ficha-tecnica/equipamientos_adicionales.png", alt: "equipamientos adicionales", label1: "Equipamiento extra", label2: "Tabla Paddlesurf y equipos de snorkel" },
    { src: "/home/ficha-tecnica/salida.png", alt: "salida", label1: "Salida desde", label2: "Puerto Tomas Maestre" },
    { src: "/home/ficha-tecnica/motores.png", alt: "motores", label1: "Motor", label2: "1 motor Perkins 50cv" },
    { src: "/home/ficha-tecnica/año_de_construccion.png", alt: "año de construccion", label1: "Año de construccion", label2: "1989" },
    { src: "/home/ficha-tecnica/deposito_de_combustible.png", alt: "deposito de combustible", label1: "Deposito combustible", label2: "200L" },
    { src: "/home/ficha-tecnica/deposito_agua.png", alt: "deposito de agua", label1: "Deposito agua", label2: "2 x 150L" },
];

export default function FichaTecnicaSection() {
    return (
        <section id="ficha-tecnica" className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-azul-oscuro text-4xl font-bold mb-3">Ficha Tecnica</h2>
                    <p className="text-gris-claro">Combina lujo, confort y seguridad.</p>
                    <p className="text-gris-claro">Ideal para escapadas con familiares o con amigos, para pasar el día o para desconectar varios días.</p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-12 group">
                    {fichatecnica.map((servicio) => (
                        <div key={servicio.alt} className="servicio-card bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-0.5 last:col-start-2 md:last:col-start-auto group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                            <img src={servicio.src} alt={servicio.alt} className="w-24 h-24 object-contain" />
                            <div className="flex flex-col gap-1">
                                <p className="text-azul-oscuro font-bold text-sm md:text-base">{servicio.label1}</p>
                                <p className="text-gris-claro text-sm md:text-base">{servicio.label2}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
