export default function SnorkelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-azul-claro-fondo to-white">
      <section className="pt-20 pb-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-4">
          Snorkel en Velero La Manga
        </h1>

        <p className="text-lg text-gris-claro mb-8 leading-relaxed max-w-3xl">
          <strong>Snorkel desde un velero</strong> es la forma más cómoda de explorar los fondos marinos. Agua cristalina, fauna colorida, fondeos protegidos. Sin experiencia previa; todo incluido y seguro.
        </p>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">Los 4 Mejores Spots de Snorkel</h2>
        <div className="space-y-6 mb-12">
          <div className="border-l-4 border-acento bg-white rounded-lg p-6 servicio-card">
            <h3 className="text-2xl font-bold text-azul-oscuro mb-2">🏖️ Calblanque — El Clásico</h3>
            <p className="text-gris-claro mb-4">
              Playa virgen con <strong>acantilados rocosos</strong> que descienden hasta 10-12 metros. Es el spot más popular por razones válidas: agua clara, fauna marina variada (peces dorados, meros, caballas) y fondos de arena y roca.
            </p>
            <ul className="text-gris-claro space-y-2 text-sm">
              <li>• <strong>Profundidad:</strong> 5-12 metros</li>
              <li>• <strong>Fauna:</strong> Peces coloridos, erizos, estrellas de mar, ocasionales tortugas</li>
              <li>• <strong>Tiempo acceso:</strong> 15 minutos desde Puerto Tomás Maestre</li>
              <li>• <strong>Mejor hora:</strong> Mañana (menos turismo de playa)</li>
            </ul>
          </div>

          <div className="border-l-4 border-azul bg-white rounded-lg p-6 servicio-card">
            <h3 className="text-2xl font-bold text-azul-oscuro mb-2">🏝️ Isla Grosa — La Protegida</h3>
            <p className="text-gris-claro mb-4">
              Isla <strong>protegida como zona marino-terrestre</strong>, con monoboyas disponibles. Aguas calmadas dentro de la isla, fondeos seguros y <strong>fauna marina en abundancia</strong>. Ideal para familias y snorkelistas novatos.
            </p>
            <ul className="text-gris-claro space-y-2 text-sm">
              <li>• <strong>Profundidad:</strong> 4-8 metros (aguas muy tranquilas)</li>
              <li>• <strong>Fauna:</strong> Peces pequeños, camarones, fauna submarina protegida</li>
              <li>• <strong>Tiempo acceso:</strong> 25 minutos desde puerto</li>
              <li>• <strong>Mejor hora:</strong> Mediodía (luz difana en fondos)</li>
            </ul>
          </div>

          <div className="border-l-4 border-azul-claro bg-white rounded-lg p-6 servicio-card">
            <h3 className="text-2xl font-bold text-azul-oscuro mb-2">🏊 Isla Perdiguera — Para Principiantes</h3>
            <p className="text-gris-claro mb-4">
              Pequeña isla con <strong>aguas tranquilas y poco profundas</strong> (3-6m). Fondeo seguro, plataforma estable, perfecta para niños y personas con poco snorkel. Fauna marina local abundante.
            </p>
            <ul className="text-gris-claro space-y-2 text-sm">
              <li>• <strong>Profundidad:</strong> 3-6 metros</li>
              <li>• <strong>Fauna:</strong> Peces medianos, flora marina, fondos arenosos</li>
              <li>• <strong>Tiempo acceso:</strong> 20 minutos</li>
              <li>• <strong>Mejor para:</strong> Familias con niños, principiantes</li>
            </ul>
          </div>

          <div className="border-l-4 border-acento bg-white rounded-lg p-6 servicio-card">
            <h3 className="text-2xl font-bold text-azul-oscuro mb-2">🗼 Cabo de Palos — Para Avanzados</h3>
            <p className="text-gris-claro mb-4">
              Promontorio rocoso con <strong>faro histórico</strong>. Corrientes visibles, puntas rocosas submarinas, <strong>mayor profundidad</strong> (8-15m). Avistamiento ocasional de delfines. Para snorkelistas con experiencia.
            </p>
            <ul className="text-gris-claro space-y-2 text-sm">
              <li>• <strong>Profundidad:</strong> 8-15 metros</li>
              <li>• <strong>Fauna:</strong> Peces grandes, langostas, delfines ocasionales</li>
              <li>• <strong>Nivel:</strong> Intermedio-avanzado</li>
              <li>• <strong>Mejor hora:</strong> Calma marina (veranos)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">Fauna Marina que Encontrarás</h2>
        <div className="bg-azul-claro/10 p-8 rounded-lg mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-azul-oscuro mb-3">Peces (comunes)</h3>
              <ul className="text-gris-claro space-y-1">
                <li>Dorada</li>
                <li>Mero</li>
                <li>Caballa</li>
                <li>Pez fraile</li>
                <li>Pez espada pequeño</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-azul-oscuro mb-3">Invertebrados</h3>
              <ul className="text-gris-claro space-y-1">
                <li>Erizos de mar</li>
                <li>Estrellas de mar</li>
                <li>Camarones</li>
                <li>Anémonas</li>
                <li>Pulpos (raros)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-azul-oscuro mb-3">Rarezas</h3>
              <ul className="text-gris-claro space-y-1">
                <li>Tortuga marina</li>
                <li>Delfines</li>
                <li>Langosta</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-azul-oscuro mb-3">Flora Marina</h3>
              <ul className="text-gris-claro space-y-1">
                <li>Posidonia oceanica</li>
                <li>Algas verdes</li>
                <li>Algas rojas</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">Sesión de Snorkel Típica</h2>
        <div className="space-y-4 mb-12">
          <div className="flex gap-4 bg-white servicio-card p-4 rounded-lg">
            <div className="flex-shrink-0 text-3xl">👕</div>
            <div>
              <h3 className="font-bold text-azul-oscuro">Antes de entrar al agua</h3>
              <p className="text-gris-claro text-sm">El patrón explica la zona, corrientes, profundidad. Revisa que todos tengan el equipo correcto: gafas ajustadas, tubo limpio, aletas cómodas.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-white servicio-card p-4 rounded-lg">
            <div className="flex-shrink-0 text-3xl">🌊</div>
            <div>
              <h3 className="font-bold text-azul-oscuro">Entrada al agua</h3>
              <p className="text-gris-claro text-sm">Entra desde la plataforma de baño (fácil acceso). El patrón monitorea a todos. Respeta la distancia del velero (siempre visible).</p>
            </div>
          </div>
          <div className="flex gap-4 bg-white servicio-card p-4 rounded-lg">
            <div className="flex-shrink-0 text-3xl">🔭</div>
            <div>
              <h3 className="font-bold text-azul-oscuro">Exploración</h3>
              <p className="text-gris-claro text-sm">Nada cerca del velero siguiendo una ruta segura. Observa la fauna, toma fotos (lleva bolsa estanca), disfruta del ecosistema. Dura 30-45 minutos.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-white servicio-card p-4 rounded-lg">
            <div className="flex-shrink-0 text-3xl">🚿</div>
            <div>
              <h3 className="font-bold text-azul-oscuro">Descanso y ducha</h3>
              <p className="text-gris-claro text-sm">Regresa a bordo, ducha de agua dulce, descansa en solárium o colchonetas. Bebe agua, come algo ligero. Segunda tanda de snorkel opcional.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-6 mt-12">Preguntas Frecuentes</h2>
        <div className="space-y-4 mb-12">
          <div className="border-b-2 border-azul-claro pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Necesito experiencia previa?</h3>
            <p className="text-gris-claro text-sm">No. El patrón proporciona instrucciones básicas. Las aguas del Mar Menor son calmadas y claras, perfectas para principiantes. Somos muy cautelosos con la seguridad.</p>
          </div>
          <div className="border-b-2 border-azul-claro pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Es seguro para niños?</h3>
            <p className="text-gris-claro text-sm">Sí. Proporcionamos chalecos salvavidas ajustables por edad, gafas y aletas de tamaño infantil. Supervisión constante. Elegimos spots tranquilos para familias.</p>
          </div>
          <div className="border-b-2 border-azul-claro pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Qué temperatura tiene el agua?</h3>
            <p className="text-gris-claro text-sm">Verano: 24-26°C (cálida). Primavera/Otoño: 18-22°C (fresquita). No es fría, pero si eres sensible puedes traer un bañador de lycra.</p>
          </div>
          <div className="border-b-2 border-azul-claro pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Puedo traer mi propia cámara?</h3>
            <p className="text-gris-claro text-sm">Sí. Recomendamos una bolsa estanca para smartphone o cámara subacuática. El patrón puede ayudarte con fotos de grupo.</p>
          </div>
          <div className="border-b-2 border-azul-claro pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Qué hago si me canso?</h3>
            <p className="text-gris-claro text-sm">Vuelve al velero. No hay presión de tiempo. Descansa, toma agua, repite cuando tengas energía. Las tandas de snorkel duran 30-45 minutos.</p>
          </div>
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
