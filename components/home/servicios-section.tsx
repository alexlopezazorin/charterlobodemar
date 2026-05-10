const serviciosIncluidos = [
    { src: "/home/servicios-incluidos/patron.png", alt: "Patron profesional", label: "Patrón profesional", info: "Más de 5 años de experiencia" },
    { src: "/home/servicios-incluidos/material_de_seguridad.png", alt: "Material de seguridad", label: "Material de Seguridad", info: "Homologado y revisado" },
    { src: "/home/servicios-incluidos/seguro_de_pasajeros.png", alt: "Seguro de pasajeros", label: "Seguro de pasajeros", info: "Cobertura total a bordo" },
    { src: "/home/servicios-incluidos/chalecos.png", alt: "Chalecos salvavidas", label: "Chalecos salvavidas", info: "Tallas para niños 10-15kg y 15-40kg" },
    { src: "/home/servicios-incluidos/paddlesurf.png", alt: "Paddlesurf", label: "Paddlesurf", info: "Tabla de Paddle Surf para diversion extra" },
    { src: "/home/servicios-incluidos/parking.png", alt: "Parking gratuito", label: "Parking gratuito", info: "Plaza asegurada en el puerto" },
    { src: "/home/servicios-incluidos/snorkel.png", alt: "Snorkel", label: "Snorkel", info: "Material de snorkel incluido" },
    { src: "/home/servicios-incluidos/preparacion.png", alt: "Preparacion", label: "Preparación", info: "Barco listo antes de zarpar" },
];

export default function ServiciosSection() {
    return (
        <section id="servicios-incluidos" className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-azul-oscuro text-4xl font-bold">Servicios Incluidos</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 group">
                    {serviciosIncluidos.map((servicio) => (
                        <div key={servicio.alt} className="group/card relative servicio-card bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-0.5 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                            <div className="absolute -top-3 -right-3 bg-azul-claro text-white font-bold text-xs px-2 py-1 rounded-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                {servicio.info}
                            </div>
                            <img src={servicio.src} alt={servicio.alt} className="w-24 h-24 object-contain" />
                            <p className="text-gris-claro">{servicio.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
