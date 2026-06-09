export default function CharterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-azul-claro-fondo to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-4">
          Charter de Velero con Patrón en La Manga
        </h1>

        <p className="text-lg text-gris-claro mb-8 leading-relaxed max-w-3xl">
          Un <strong>charter privado con patrón profesional</strong> es tu acceso a la experiencia náutica sin preocupaciones. Nosotros navegamos; tú disfrutas del mar, el snorkel y la compañía en grupos de hasta 6 personas.
        </p>

        {/* Incluye */}
        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">¿Qué Incluye?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Velero Katmandú", desc: "Completamente equipado y moderno" },
            { title: "Patrón Profesional", desc: "7+ años en Mar Menor" },
            { title: "Combustible", desc: "Hasta 2h de navegación" },
            { title: "Seguridad", desc: "Chalecos, botiquín, equipos" },
            { title: "Snorkel Completo", desc: "Gafas, tubo, aletas" },
            { title: "Paddle Surf", desc: "Incluido en el charter" },
            { title: "Ducha Agua Dulce", desc: "Post-baño" },
            { title: "Altavoz Bluetooth", desc: "Tu música a bordo" }
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="text-azul font-bold">✓</div>
              <div>
                <h3 className="font-bold text-azul-oscuro">{item.title}</h3>
                <p className="text-gris-claro text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Paquetes */}
        <h2 className="text-3xl font-bold text-azul-oscuro mb-6">Paquetes y Precios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { duration: "2 Horas", subtitle: "Puesta de sol", price: "200€", features: ["Atardecer", "Aguas calmadas", "Parejas"] },
            { duration: "4 Horas", subtitle: "Media jornada", price: "300€", features: ["Navegación", "Snorkel", "Familias"] },
            { duration: "6 Horas", subtitle: "Jornada ampliada", price: "390€", features: ["Múltiples fondeos", "Isla Grosa", "Comida"] },
            { duration: "8 Horas", subtitle: "Jornada completa", price: "480€", features: ["Experiencia total", "3-4 paradas", "Grupos"] }
          ].map((pkg, i) => (
            <div key={i} className="servicio-card bg-white rounded-lg p-6 border border-azul-claro/20">
              <h3 className="text-2xl font-bold text-azul mb-1">{pkg.duration}</h3>
              <p className="text-gris-claro text-sm mb-4">{pkg.subtitle}</p>
              <p className="text-4xl font-bold text-acento mb-4">{pkg.price}</p>
              <ul className="space-y-2">
                {pkg.features.map((f, j) => (
                  <li key={j} className="text-gris-claro text-sm flex items-center gap-2">
                    <span className="text-acento">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Destinos */}
        <h2 className="text-3xl font-bold text-azul-oscuro mb-6">Destinos que Visitarás</h2>
        <div className="space-y-4 mb-12">
          {[
            { name: "Calblanque", desc: "Playa virgen con acantilados rocosos. Fondeo 10-12m, fauna marina variada. La joya de La Manga." },
            { name: "Isla Grosa", desc: "Isla protegida con monoboyas. Aguas cristalinas, peces coloridos, tortugas ocasionales. Ideal familias." },
            { name: "Isla Perdiguera", desc: "Pequeña isla tranquila. Fondeo 3-6m, perfecto para principiantes. Zona protegida." },
            { name: "Cabo de Palos", desc: "Faro histórico icónico. Snorkel avanzado, panorámicas, posible avistamiento de delfines." }
          ].map((spot, i) => (
            <div key={i} className="bg-white border-l-4 border-acento p-4 rounded servicio-card">
              <h3 className="font-bold text-azul-oscuro">{spot.name}</h3>
              <p className="text-gris-claro text-sm mt-1">{spot.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-azul to-azul-claro p-8 rounded-lg text-white text-center">
          <h2 className="text-3xl font-bold mb-3">¿Listo para el alquiler de velero en La Manga?</h2>
          <p className="mb-6">Reserva tu charter y crea recuerdos inolvidables</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/34637715281" className="bg-white text-azul font-bold py-3 px-8 rounded-lg hover:bg-azul-claro transition-colors cursor-pointer">
              WhatsApp: +34 637 715 281
            </a>
            <a href="mailto:lobodemarcharter@gmail.com" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              Email: lobodemarcharter@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
