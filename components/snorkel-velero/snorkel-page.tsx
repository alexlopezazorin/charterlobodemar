export default function SnorkelPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-16 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Snorkel en Velero La Manga del Mar Menor
        </h1>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Hacer <strong>snorkel desde un velero en La Manga</strong> es la forma más cómoda de explorar los fondos marinos. Nuestro patrón conoce los mejores spots: fondos rocosos con fauna colorida, aguas cristalinas y protegidas. No necesitas experiencia previa; proporcionamos todo el equipo y instrucciones.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Los 4 Mejores Spots de Snorkel en La Manga</h2>
        <div className="space-y-8 mb-8">
          <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Calblanque — El Clásico</h3>
            <p className="text-gray-700 mb-4">
              Playa virgen con <strong>acantilados rocosos</strong> que descienden hasta 10-12 metros. Es el spot más popular por razones válidas: agua clara, fauna marina variada (peces dorados, meros, caballas) y fondos de arena y roca.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Profundidad:</strong> 5-12 metros</li>
              <li>• <strong>Fauna:</strong> Peces coloridos, erizos, estrellas de mar, ocasionales tortugas</li>
              <li>• <strong>Tiempo acceso:</strong> 15 minutos desde Puerto Tomás Maestre</li>
              <li>• <strong>Mejor hora:</strong> Mañana (menos turismo de playa)</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Isla Grosa — La Protegida</h3>
            <p className="text-gray-700 mb-4">
              Isla <strong>protegida como zona marino-terrestre</strong>, con monoboyas disponibles. Aguas calmadas dentro de la isla, fondeos seguros y <strong>fauna marina en abundancia</strong>. Ideal para familias y snorkelistas novatos.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Profundidad:</strong> 4-8 metros (aguas muy tranquilas)</li>
              <li>• <strong>Fauna:</strong> Peces pequeños, camarones, fauna submarina protegida</li>
              <li>• <strong>Tiempo acceso:</strong> 25 minutos desde puerto</li>
              <li>• <strong>Mejor hora:</strong> Mediodía (luz difana en fondos)</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Isla Perdiguera — Para Principiantes</h3>
            <p className="text-gray-700 mb-4">
              Pequeña isla con <strong>aguas tranquilas y poco profundas</strong> (3-6m). Fondeo seguro, plataforma estable, perfecta para niños y personas con poco snorkel. Fauna marina local abundante.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Profundidad:</strong> 3-6 metros</li>
              <li>• <strong>Fauna:</strong> Peces medianos, flora marina, fondos arenosos</li>
              <li>• <strong>Tiempo acceso:</strong> 20 minutos</li>
              <li>• <strong>Mejor para:</strong> Familias con niños, principiantes</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Cabo de Palos — Para Avanzados</h3>
            <p className="text-gray-700 mb-4">
              Promontorio rocoso con <strong>faro histórico</strong>. Corrientes visibles, puntas rocosas submarinas, <strong>mayor profundidad</strong> (8-15m). Avistamiento ocasional de delfines. Para snorkelistas con experiencia.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Profundidad:</strong> 8-15 metros</li>
              <li>• <strong>Fauna:</strong> Peces grandes, langostas, delfines ocasionales</li>
              <li>• <strong>Nivel:</strong> Intermedio-avanzado</li>
              <li>• <strong>Mejor hora:</strong> Calma marina (veranos)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Qué Fauna Marina Encontrarás</h2>
        <div className="bg-cyan-50 p-8 rounded-lg mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Peces (comunes)</h3>
              <ul className="text-gray-700 space-y-1">
                <li>🐠 Dorada</li>
                <li>🐠 Mero</li>
                <li>🐠 Caballa</li>
                <li>🐠 Pez fraile</li>
                <li>🐠 Pez espada pequeño</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Invertebrados</h3>
              <ul className="text-gray-700 space-y-1">
                <li>🦀 Erizos de mar</li>
                <li>🦀 Estrellas de mar</li>
                <li>🦀 Camarones</li>
                <li>🦀 Anémonas</li>
                <li>🦀 Pulpos (raros)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Rarezas (ocasionales)</h3>
              <ul className="text-gray-700 space-y-1">
                <li>🐢 Tortuga marina</li>
                <li>🐬 Delfines</li>
                <li>🐙 Langosta</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Flora Marina</h3>
              <ul className="text-gray-700 space-y-1">
                <li>🌿 Posidonia oceanica</li>
                <li>🌿 Algas verdes</li>
                <li>🌿 Algas rojas</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Cómo es una Sesión de Snorkel Típica</h2>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-2xl">👕</div>
            <div>
              <h3 className="font-bold text-gray-900">Antes de entrar al agua</h3>
              <p className="text-gray-700">El patrón explica la zona, corrientes, profundidad. Revisa que todos tengan el equipo correcto: gafas ajustadas, tubo limpio, aletas cómodas.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-2xl">🌊</div>
            <div>
              <h3 className="font-bold text-gray-900">Entrada al agua</h3>
              <p className="text-gray-700">Entra desde la plataforma de baño (fácil acceso). El patrón monitorea a todos. Respeta la distancia del velero (siempre visible).</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-2xl">🔭</div>
            <div>
              <h3 className="font-bold text-gray-900">Exploración</h3>
              <p className="text-gray-700">Nada cerca del velero siguiendo una ruta segura. Observa la fauna, toma fotos (lleva bolsa estanca), disfruta del ecosistema. Dura 30-45 minutos.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-2xl">🚿</div>
            <div>
              <h3 className="font-bold text-gray-900">Descanso y ducha</h3>
              <p className="text-gray-700">Regresa a bordo, ducha de agua dulce, descansa en solárium o colchonetas. Bebe agua, come algo ligero. Segunda tanda de snorkel opcional.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Preguntas Frecuentes sobre Snorkel</h2>
        <div className="space-y-6 mb-8">
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">¿Necesito experiencia previa?</h3>
            <p className="text-gray-700">No. El patrón proporciona instrucciones básicas. Las aguas del Mar Menor son calmadas y claras, perfectas para principiantes. Somos muy cautelosos con la seguridad.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">¿Es seguro para niños?</h3>
            <p className="text-gray-700">Sí. Proporcionamos chalecos salvavidas ajustables por edad, gafas y aletas de tamaño infantil. Supervisión constante. Elegimos spots tranquilos para familias.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">¿Qué temperature tiene el agua?</h3>
            <p className="text-gray-700">Verano: 24-26°C (cálida). Primavera/Otoño: 18-22°C (fresquita). No es fría, pero si eres sensible puedes traer un bañador de lycra.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">¿Puedo traer mi propia cámara?</h3>
            <p className="text-gray-700">Sí. Recomendamos una bolsa estanca para smartphone o cámara subacuática. El patrón puede ayudarte con fotos de grupo.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">¿Qué hago si me canso?</h3>
            <p className="text-gray-700">Vuelve al velero. No hay presión de tiempo. Descansa, toma agua, repite cuando tengas energía. Las tandas de snorkel duran 30-45 minutos.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Reserva tu Experiencia de Snorkel</h2>
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-8 text-center">
          <p className="text-blue-800 mb-6 text-lg">
            Elige un charter de 4, 6 u 8 horas y disfruta de snorkel en los mejores spots de La Manga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/34637715281" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg">
              📱 WhatsApp
            </a>
            <a href="mailto:lobodemarcharter@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg">
              📧 Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
