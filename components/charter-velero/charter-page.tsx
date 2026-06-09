export default function CharterPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-16 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Charter de Velero con Patrón en La Manga del Mar Menor
        </h1>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Un <strong>charter privado con patrón profesional</strong> es el alquiler de un velero donde un navegante experimentado se encarga de toda la navegación, seguridad y experiencia. En Charter Lobo de Mar ofrecemos excursiones personalizadas de 2 a 8 horas para grupos de hasta 6 personas, sin necesidad de experiencia previa. Solo disfruta del mar, el snorkel y la compañía.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">¿Qué incluye nuestro charter?</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <ul className="space-y-3 text-gray-800">
            <li>✓ <strong>Velero Katmandú</strong> completamente equipado</li>
            <li>✓ <strong>Patrón profesional</strong> con 7+ años de experiencia en Mar Menor</li>
            <li>✓ <strong>Combustible</strong> (hasta 2 horas de navegación)</li>
            <li>✓ <strong>Material de seguridad</strong>: chalecos salvavidas, botiquín, equipo emergencia</li>
            <li>✓ <strong>Equipo de snorkel</strong>: gafas, tubo, aletas de calidad</li>
            <li>✓ <strong>Paddle surf</strong> para explorar fondos tranquilos</li>
            <li>✓ <strong>Plataforma de baño</strong> en popa para acceso fácil al agua</li>
            <li>✓ <strong>Ducha de agua dulce</strong> para enjuagarse post-baño</li>
            <li>✓ <strong>Solárium premium</strong> en proa</li>
            <li>✓ <strong>Nevera Igloo</strong> con espacio para bebidas y alimentos</li>
            <li>✓ <strong>Colchonetas y sombreado</strong> en cockpit</li>
            <li>✓ <strong>Altavoz bluetooth</strong> para tu música favorita</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Paquetes y Precios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">2 Horas</h3>
            <p className="text-gray-600 mb-4">Puesta de sol especial (19:30-21:30)</p>
            <p className="text-4xl font-bold text-gray-900 mb-4">200<span className="text-lg">€</span></p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Atardecer mágico</li>
              <li>• Aguas calmadas</li>
              <li>• Ideal parejas</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">4 Horas</h3>
            <p className="text-gray-600 mb-4">Media jornada (10-14 o 16-20)</p>
            <p className="text-4xl font-bold text-gray-900 mb-4">300<span className="text-lg">€</span></p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Navegación + snorkel</li>
              <li>• Fondeo en Calblanque</li>
              <li>• Familias y grupos</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">6 Horas</h3>
            <p className="text-gray-600 mb-4">Jornada ampliada</p>
            <p className="text-4xl font-bold text-gray-900 mb-4">390<span className="text-lg">€</span></p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Múltiples fondeos</li>
              <li>• Snorkel en Isla Grosa</li>
              <li>• Comida a bordo</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">8 Horas</h3>
            <p className="text-gray-600 mb-4">Jornada completa</p>
            <p className="text-4xl font-bold text-gray-900 mb-4">480<span className="text-lg">€</span></p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Experiencia completa</li>
              <li>• 3-4 paradas snorkel</li>
              <li>• Grupos grandes</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">¿Por qué elegir nuestro charter?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2">Rating 5/5</h3>
            <p className="text-gray-600">11 reseñas verificadas de clientes satisfechos</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🧭</div>
            <h3 className="text-xl font-bold mb-2">Patrón Profesional</h3>
            <p className="text-gray-600">7+ años navegando Mar Menor. Conoce cada fondeo.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">Seguridad Garantizada</h3>
            <p className="text-gray-600">Certificación oficial, seguros, equipos modernos</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Destinos que visitarás</h2>
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🏖️ Calblanque</h3>
              <p className="text-gray-700">Playa virgen con acantilados rocosos y fauna marina. Fondeo profundo (10-12m) perfecto para snorkel. Una de las joyas de La Manga.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🏝️ Isla Grosa</h3>
              <p className="text-gray-700">Isla protegida con monoboyas disponibles. Aguas cristalinas, peces coloridos, avistamiento ocasional de tortugas. Ideal para familias.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🏊 Isla Perdiguera</h3>
              <p className="text-gray-700">Pequeña isla con aguas tranquilas. Fondeo seguro para principiantes en snorkel. Zona protegida con ecosistema marino vibrante.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🗼 Cabo de Palos</h3>
              <p className="text-gray-700">Faro histórico y punto de navegación icónico. Vistas panorámicas, puntas rocosas para snorkel avanzado, avistamiento de delfines.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Cómo reservar tu charter</h2>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <ol className="space-y-4 text-gray-800">
            <li><strong>1. Elige tu fecha y duración</strong> — Mira disponibilidad en nuestro calendario</li>
            <li><strong>2. Contacta con nosotros</strong> — WhatsApp: +34 637 715 281 o email: lobodemarcharter@gmail.com</li>
            <li><strong>3. Confirma detalles</strong> — Número de personas, preferencias de fondeos</li>
            <li><strong>4. Reserva confirmada</strong> — Recibe ubicación exacta del puerto y instrucciones</li>
            <li><strong>5. Presenta 45 minutos antes</strong> — Briefing de seguridad y comienzo de la aventura</li>
          </ol>
        </div>

        <div className="bg-blue-100 border border-blue-300 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">¿Listo para tu aventura?</h2>
          <p className="text-blue-800 mb-6 text-lg">
            Reserva tu charter privado en velero y crea recuerdos inolvidables en La Manga del Mar Menor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/34637715281" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg">
              📱 WhatsApp: +34 637 715 281
            </a>
            <a href="mailto:lobodemarcharter@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg">
              📧 Email: lobodemarcharter@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
