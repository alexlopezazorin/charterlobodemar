export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-azul-claro-fondo to-white">
      <section className="pt-16 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-4">
          Precios Charter Velero La Manga | Alquiler con Patrón
        </h1>

        <p className="text-xl text-gris-claro mb-8 leading-relaxed">
          Nuestros precios son <strong>transparentes, sin sorpresas</strong>. El alquiler incluye todo: velero equipado, patrón profesional, combustible, seguro, material de snorkel. No hay cargos ocultos. Desde <strong>200€ para 2 horas hasta 480€ para jornada completa</strong>.
        </p>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-4">Nuestros Paquetes</h2>
        <p className="text-gris-claro mb-8 bg-azul-claro/10 p-4 rounded-lg">
          <strong>Temporada Baja</strong> (1 Sep - 30 Jun) | <strong>Temporada Alta</strong> (1 Jul - 31 Ago)
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Charter 2 Horas */}
          <div className="border-2 border-azul-claro/30 rounded-lg p-8 hover:shadow-xl transition servicio-card">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-azul mb-2">Charter 2 Horas</h3>
              <p className="text-gris-claro text-lg">Puesta de sol especial</p>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold text-acento">200€ / 250€</p>
              <p className="text-gris-claro text-sm mt-2">Por velero (no por persona) | Baja / Alta</p>
            </div>

            <div className="mb-6 pb-6 border-b border-azul-claro/20">
              <p className="text-gris-claro font-semibold mb-3">Horario:</p>
              <p className="text-gris-claro">19:30-21:30 (alta: 20:00-22:00)</p>
            </div>

            <div className="mb-6">
              <p className="text-gris-claro font-semibold mb-3">Incluye:</p>
              <ul className="text-gris-claro space-y-2 text-sm">
                <li>✓ Velero Katmandú equipado</li>
                <li>✓ Patrón profesional (+10 años)</li>
                <li>✓ Combustible</li>
                <li>✓ Equipo snorkel completo</li>
                <li>✓ Seguros y seguridad</li>
              </ul>
            </div>

            <div>
              <p className="text-gris-claro font-semibold mb-2">Ideal para:</p>
              <p className="text-gris-claro">Parejas, pequeños grupos, experiencia romántica al atardecer</p>
            </div>
          </div>

          {/* Charter 4 Horas */}
          <div className="border-2 border-azul-claro/30 rounded-lg p-8 hover:shadow-xl transition servicio-card">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-azul mb-2">Charter 4 Horas</h3>
              <p className="text-gris-claro text-lg">Media jornada</p>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold text-acento">300€ / 350€</p>
              <p className="text-gris-claro text-sm mt-2">Por velero | Baja / Alta</p>
            </div>

            <div className="mb-6 pb-6 border-b border-azul-claro/20">
              <p className="text-gris-claro font-semibold mb-3">Horarios:</p>
              <p className="text-gris-claro">10:00-14:00 ó 16:00-20:00</p>
            </div>

            <div className="mb-6">
              <p className="text-gris-claro font-semibold mb-3">Incluye:</p>
              <ul className="text-gris-claro space-y-2 text-sm">
                <li>✓ Velero Katmandú</li>
                <li>✓ Patrón profesional (+10 años)</li>
                <li>✓ Navegación y fondeo</li>
                <li>✓ Parada snorkel completa</li>
                <li>✓ Paddle surf, ducha agua dulce</li>
              </ul>
            </div>

            <div>
              <p className="text-gris-claro font-semibold mb-2">Ideal para:</p>
              <p className="text-gris-claro">Familias, primeros charters, experiencia equilibrada</p>
            </div>
          </div>

          {/* Charter 6 Horas */}
          <div className="border-2 border-azul-claro/30 rounded-lg p-8 hover:shadow-xl transition servicio-card">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-azul mb-2">Charter 6 Horas</h3>
              <p className="text-gris-claro text-lg">Jornada ampliada</p>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold text-acento">390€ / 440€</p>
              <p className="text-gris-claro text-sm mt-2">Por velero | Baja / Alta</p>
            </div>

            <div className="mb-6 pb-6 border-b border-azul-claro/20">
              <p className="text-gris-claro font-semibold mb-3">Horario:</p>
              <p className="text-gris-claro">Flexible según grupo (ej: 09:00-15:00)</p>
            </div>

            <div className="mb-6">
              <p className="text-gris-claro font-semibold mb-3">Incluye:</p>
              <ul className="text-gris-claro space-y-2 text-sm">
                <li>✓ Velero y patrón profesional</li>
                <li>✓ 2-3 paradas snorkel</li>
                <li>✓ Múltiples fondeos</li>
                <li>✓ Nevera Igloo con espacio</li>
                <li>✓ Comida a bordo (traes la tuya)</li>
              </ul>
            </div>

            <div>
              <p className="text-gris-claro font-semibold mb-2">Ideal para:</p>
              <p className="text-gris-claro">Grupos entusiastas, empresas, quienes quieren más tiempo</p>
            </div>
          </div>

          {/* Charter 8 Horas */}
          <div className="border-2 border-acento rounded-lg p-8 hover:shadow-xl transition servicio-card bg-acento/5">
            <div className="mb-6">
              <div className="inline-block bg-acento text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                MÁS POPULAR
              </div>
              <h3 className="text-3xl font-bold text-azul mb-2">Charter 8 Horas</h3>
              <p className="text-gris-claro text-lg">Jornada completa</p>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold text-acento">480€ / 530€</p>
              <p className="text-gris-claro text-sm mt-2">Por velero | Baja / Alta</p>
            </div>

            <div className="mb-6 pb-6 border-b border-azul-claro/20">
              <p className="text-gris-claro font-semibold mb-3">Horario:</p>
              <p className="text-gris-claro">Flexible, ej: 08:30-16:30 (pausa comida)</p>
            </div>

            <div className="mb-6">
              <p className="text-gris-claro font-semibold mb-3">Incluye:</p>
              <ul className="text-gris-claro space-y-2 text-sm">
                <li>✓ Velero Katmandú + patrón (+10 años)</li>
                <li>✓ 3-4 paradas snorkel múltiples</li>
                <li>✓ Fondeos icónicos de La Manga</li>
                <li>✓ Experiencia completa del día</li>
                <li>✓ Navegación de largo recorrido</li>
              </ul>
            </div>

            <div>
              <p className="text-gris-claro font-semibold mb-2">Ideal para:</p>
              <p className="text-gris-claro">Experiencia inolvidable, grupos grandes, máximo disfrute</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">Lo que SIEMPRE Incluimos</h2>
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-4">Velero y Equipo</h3>
              <ul className="text-gris-claro space-y-2">
                <li>✓ Velero Katmandú (11m, moderno)</li>
                <li>✓ Velas y toda lona de navegación</li>
                <li>✓ Motor de propulsión</li>
                <li>✓ Timón y sistemas de control</li>
                <li>✓ Brújula, sonda, mapa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-4">Seguridad y Confort</h3>
              <ul className="text-gris-claro space-y-2">
                <li>✓ Chalecos salvavidas para todos</li>
                <li>✓ Equipo de emergencia + botiquín</li>
                <li>✓ Aro salvavidas y cuerda</li>
                <li>✓ Seguros de responsabilidad civil</li>
                <li>✓ Solárium premium en proa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-4">Snorkel y Agua</h3>
              <ul className="text-gris-claro space-y-2">
                <li>✓ Gafas de snorkel ajustables</li>
                <li>✓ Tubos de snorkel de calidad</li>
                <li>✓ Aletas (múltiples tallas)</li>
                <li>✓ Plataforma de baño estable</li>
                <li>✓ Ducha agua dulce post-baño</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-4">Extras y Servicios</h3>
              <ul className="text-gris-claro space-y-2">
                <li>✓ Patrón profesional +10 años</li>
                <li>✓ Combustible incluido</li>
                <li>✓ Paddle surf incluido</li>
                <li>✓ Nevera Igloo</li>
                <li>✓ Altavoz bluetooth</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">Lo que NO Incluimos (¡Puedes Llevar!)</h2>
        <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-8 mb-12">
          <div className="text-gris-claro space-y-3">
            <p className="font-semibold">Estos artículos NO están incluidos, pero <strong>puedes traer libremente</strong>:</p>
            <ul className="space-y-2 ml-4">
              <li>Comida y bebida (¡trae lo que quieras!)</li>
              <li>Protector solar (recomendamos traer)</li>
              <li>Cámara subacuática o GoPro</li>
              <li>Flotadores, colchonetas hinchables</li>
              <li>Música (via bluetooth, gratuito)</li>
              <li>Artículos de bebé (pañales, biberones, etc.)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">Preguntas sobre Precios</h2>
        <div className="space-y-6 mb-12">
          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-azul-oscuro mb-3">¿Los precios son por persona o por velero?</h3>
            <p className="text-gris-claro">
              <strong>Por velero</strong>. Tú alquilas el velero completo (máximo 6 pasajeros). Si somos 2 personas, pagas 200€ y disfrutas el velero entero. Si somos 6, siguen siendo 200€ (mucho más económico por persona).
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-azul-oscuro mb-3">¿Hay descuentos para grupos?</h3>
            <p className="text-gris-claro">
              Implícitamente sí: 6 personas a 200€ son ~33€/persona. Para reservas de múltiples charters o eventos corporativos, contacta para cotización personalizada.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-azul-oscuro mb-3">¿Hay costos adicionales?</h3>
            <p className="text-gris-claro">
              No. El precio es <strong>todo incluido</strong>. El combustible, seguros, patrón, equipo... todo está en el precio que ves. Sin sorpresas.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-azul-oscuro mb-3">¿Puedo cancelar o cambiar fecha?</h3>
            <p className="text-gris-claro">
              Sí. Condiciones de cancelación: <strong>Cancelación 7+ días antes: 100% reembolso. Cancelación 3-6 días: 50% reembolso. Menos de 3 días: Sin reembolso</strong>. Cambios de fecha sin penalización si avisas con tiempo.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-azul-oscuro mb-3">¿Hacen ofertas o promociones?</h3>
            <p className="text-gris-claro">
              Ocasionalmente. Síguenos en Instagram @charterlobodemar y suscríbete a nuestro WhatsApp (+34 637 715 281) para ofertas de temporada baja.
            </p>
          </div>

          <div className="pb-6">
            <h3 className="text-lg font-bold text-azul-oscuro mb-3">¿Acepta tarjeta, Bizum, o transferencia?</h3>
            <p className="text-gris-claro">
              Sí a todo. Transferencia para depósito, y flexibilidad en pago final (tarjeta, Bizum, efectivo). Contacta para detalles.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">¿Por Qué Nuestros Precios?</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-12">
          <ul className="text-gris-claro space-y-4">
            <li className="flex gap-4">
              <span className="text-2xl">⚙️</span>
              <div>
                <strong>Velero moderno y mantenido:</strong> El Katmandú es un velero de 11m bien cuidado, con equipamiento premium y revisiones periódicas.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">👨‍✈️</span>
              <div>
                <strong>Patrón profesional:</strong> 7+ años de experiencia navegando específicamente Mar Menor. Garant...
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">🛡️</span>
              <div>
                <strong>Seguridad e Seguros:</strong> Certificación oficial, seguros de responsabilidad civil, equipo de emergencia actualizado.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">🌊</span>
              <div>
                <strong>Experiencia Garantizada:</strong> Conocemos los mejores fondeos, fauna marina, y sabemos cómo hacer tu día inolvidable.
              </div>
            </li>
          </ul>
        </div>

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
