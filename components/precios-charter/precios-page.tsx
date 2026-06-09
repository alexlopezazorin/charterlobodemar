export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-16 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Precios Charter Velero La Manga | Alquiler con Patrón
        </h1>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Nuestros precios son <strong>transparentes, sin sorpresas</strong>. El alquiler incluye todo: velero equipado, patrón profesional, combustible, seguro, material de snorkel. No hay cargos ocultos. Desde <strong>200€ para 2 horas hasta 480€ para jornada completa</strong>.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Nuestros Paquetes</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Charter 2 Horas */}
          <div className="border-2 border-blue-200 rounded-lg p-8 hover:shadow-xl transition">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">Charter 2 Horas</h3>
              <p className="text-gray-600 text-lg">Puesta de sol especial</p>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold text-gray-900">200<span className="text-2xl font-normal">€</span></p>
              <p className="text-gray-600 text-sm mt-2">Precio por velero (no por persona)</p>
            </div>

            <div className="mb-6 pb-6 border-b">
              <p className="text-gray-700 font-semibold mb-3">Horario:</p>
              <p className="text-gray-700">19:30-21:30 (adaptable según temporada)</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 font-semibold mb-3">Incluye:</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Velero Katmandú equipado</li>
                <li>✓ Patrón profesional</li>
                <li>✓ Combustible</li>
                <li>✓ Equipo snorkel básico</li>
                <li>✓ Seguros y seguridad</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 font-semibold mb-2">Ideal para:</p>
              <p className="text-gray-700">Parejas, pequeños grupos, experiencia romántica al atardecer</p>
            </div>
          </div>

          {/* Charter 4 Horas */}
          <div className="border-2 border-green-200 rounded-lg p-8 hover:shadow-xl transition">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-green-600 mb-2">Charter 4 Horas</h3>
              <p className="text-gray-600 text-lg">Media jornada</p>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold text-gray-900">300<span className="text-2xl font-normal">€</span></p>
              <p className="text-gray-600 text-sm mt-2">Precio por velero</p>
            </div>

            <div className="mb-6 pb-6 border-b">
              <p className="text-gray-700 font-semibold mb-3">Horarios:</p>
              <p className="text-gray-700">10:00-14:00 ó 16:00-20:00</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 font-semibold mb-3">Incluye:</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Todo lo anterior</li>
                <li>✓ Navegación hacia fondeos</li>
                <li>✓ Una parada snorkel completa</li>
                <li>✓ Paddle surf</li>
                <li>✓ Ducha agua dulce</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 font-semibold mb-2">Ideal para:</p>
              <p className="text-gray-700">Familias, primeros charters, experiencia equilibrada</p>
            </div>
          </div>

          {/* Charter 6 Horas */}
          <div className="border-2 border-purple-200 rounded-lg p-8 hover:shadow-xl transition">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">Charter 6 Horas</h3>
              <p className="text-gray-600 text-lg">Jornada ampliada</p>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold text-gray-900">390<span className="text-2xl font-normal">€</span></p>
              <p className="text-gray-600 text-sm mt-2">Precio por velero</p>
            </div>

            <div className="mb-6 pb-6 border-b">
              <p className="text-gray-700 font-semibold mb-3">Horario:</p>
              <p className="text-gray-700">Flexible según grupo (ej: 09:00-15:00)</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 font-semibold mb-3">Incluye:</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Todo lo anterior</li>
                <li>✓ 2-3 paradas snorkel</li>
                <li>✓ Múltiples fondeos</li>
                <li>✓ Nevera Igloo con espacio</li>
                <li>✓ Comida a bordo (traes la tuya)</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 font-semibold mb-2">Ideal para:</p>
              <p className="text-gray-700">Grupos entusiastas, empresas, quienes quieren más tiempo</p>
            </div>
          </div>

          {/* Charter 8 Horas */}
          <div className="border-2 border-orange-200 rounded-lg p-8 hover:shadow-xl transition bg-orange-50">
            <div className="mb-6">
              <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                MÁS POPULAR
              </div>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">Charter 8 Horas</h3>
              <p className="text-gray-600 text-lg">Jornada completa</p>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold text-gray-900">480<span className="text-2xl font-normal">€</span></p>
              <p className="text-gray-600 text-sm mt-2">Precio por velero</p>
            </div>

            <div className="mb-6 pb-6 border-b">
              <p className="text-gray-700 font-semibold mb-3">Horario:</p>
              <p className="text-gray-700">Flexible, ej: 08:30-16:30 (pausa comida)</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 font-semibold mb-3">Incluye:</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Todo lo anterior</li>
                <li>✓ 3-4 paradas snorkel</li>
                <li>✓ Múltiples fondeos icónicos</li>
                <li>✓ Experiencia completa del día</li>
                <li>✓ Navegación de largo recorrido</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 font-semibold mb-2">Ideal para:</p>
              <p className="text-gray-700">Experiencia inolvidable, grupos grandes, máximo disfrute</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Lo que SIEMPRE Incluimos</h2>
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Velero y Equipo</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Velero Katmandú (11m, moderno)</li>
                <li>✓ Velas y toda lona de navegación</li>
                <li>✓ Motor de propulsión</li>
                <li>✓ Timón y sistemas de control</li>
                <li>✓ Brújula, sonda, mapa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seguridad y Confort</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Chalecos salvavidas para todos</li>
                <li>✓ Equipo de emergencia + botiquín</li>
                <li>✓ Aro salvavidas y cuerda</li>
                <li>✓ Seguros de responsabilidad civil</li>
                <li>✓ Solárium premium en proa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Snorkel y Agua</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Gafas de snorkel ajustables</li>
                <li>✓ Tubos de snorkel de calidad</li>
                <li>✓ Aletas (múltiples tallas)</li>
                <li>✓ Plataforma de baño estable</li>
                <li>✓ Ducha agua dulce post-baño</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Extras y Servicios</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Patrón profesional 7+ años</li>
                <li>✓ Combustible (hasta 2h nav.)</li>
                <li>✓ Paddle surf incluido</li>
                <li>✓ Nevera Igloo</li>
                <li>✓ Altavoz bluetooth</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Lo que NO Incluimos (¡Puedes Llevar!)</h2>
        <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-8 mb-12">
          <div className="text-gray-700 space-y-3">
            <p className="font-semibold">Estos artículos NO están incluidos, pero <strong>puedes traer libremente</strong>:</p>
            <ul className="space-y-2 ml-4">
              <li>🍽️ Comida y bebida (¡trae lo que quieras!)</li>
              <li>☀️ Protector solar (recomendamos traer)</li>
              <li>📷 Cámara subacuática o GoPro</li>
              <li>🏐 Flotadores, colchonetas hinchables</li>
              <li>🎵 Música (via bluetooth, gratuito)</li>
              <li>👶 Artículos de bebé (pañales, biberones, etc.)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Preguntas sobre Precios</h2>
        <div className="space-y-6 mb-12">
          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">¿Los precios son por persona o por velero?</h3>
            <p className="text-gray-700">
              <strong>Por velero</strong>. Tú alquilas el velero completo (máximo 6 pasajeros). Si somos 2 personas, pagas 200€ y disfrutas el velero entero. Si somos 6, siguen siendo 200€ (mucho más económico por persona).
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">¿Hay descuentos para grupos?</h3>
            <p className="text-gray-700">
              Implícitamente sí: 6 personas a 200€ son ~33€/persona. Para reservas de múltiples charters o eventos corporativos, contacta para cotización personalizada.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">¿Hay costos adicionales?</h3>
            <p className="text-gray-700">
              No. El precio es <strong>todo incluido</strong>. El combustible, seguros, patrón, equipo... todo está en el precio que ves. Sin sorpresas.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">¿Puedo cancelar o cambiar fecha?</h3>
            <p className="text-gray-700">
              Sí. Condiciones de cancelación: <strong>Cancelación 7+ días antes: 100% reembolso. Cancelación 3-6 días: 50% reembolso. Menos de 3 días: Sin reembolso</strong>. Cambios de fecha sin penalización si avisas con tiempo.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">¿Hacen ofertas o promociones?</h3>
            <p className="text-gray-700">
              Ocasionalmente. Síguenos en Instagram @charterlobodemar y suscríbete a nuestro WhatsApp (+34 637 715 281) para ofertas de temporada baja.
            </p>
          </div>

          <div className="pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">¿Acepta tarjeta, Bizum, o transferencia?</h3>
            <p className="text-gray-700">
              Sí a todo. Transferencia para depósito, y flexibilidad en pago final (tarjeta, Bizum, efectivo). Contacta para detalles.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">¿Por Qué Nuestros Precios?</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-12">
          <ul className="text-gray-700 space-y-4">
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

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Reservar?</h2>
          <p className="text-lg mb-8">
            Elige tu paquete, elige tu fecha, ¡y prepárate para la mejor experiencia en La Manga!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/34637715281" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
              📱 WhatsApp: +34 637 715 281
            </a>
            <a href="mailto:lobodemarcharter@gmail.com" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition">
              📧 Email: lobodemarcharter@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
