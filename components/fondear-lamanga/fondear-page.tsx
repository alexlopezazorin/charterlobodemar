export default function FondearPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-azul-claro-fondo to-white">
      <section className="pt-16 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-4">
          Guía Completa: Cómo Fondear en La Manga del Mar Menor
        </h1>

        <p className="text-xl text-gris-claro mb-8 leading-relaxed">
          <strong>Fondear</strong> es anclar el velero en un lugar seguro para bañarse, snorkel o descansar. En La Manga del Mar Menor existen fondeos ideales: zonas de arena, monoboyas, profundidades manejables y protección contra corrientes. Esta guía te enseña técnicas correctas y respeto al ecosistema marino.
        </p>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-4 mt-12">¿Qué es Fondear?</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-gris-claro mb-4">
            <strong>Fondear</strong> es soltar un ancla desde el velero para fijarlo en el fondo marino sin usar motor. Es la forma tradicional de navegación que permite detenerse en aguas tranquilas, lejos de muelles y otros barcos, para disfrutar de privacidad total.
          </p>
          <p className="text-gris-claro">
            En La Manga, fondear es la experiencia estrella: aguas cristalinas, fondos seguros, y zonas protegidas. Nuestro patrón realiza fondeos profesionales respetando normas de seguridad y medioambiente.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-4 mt-12">Factores Clave para un Buen Fondeo</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-azul-oscuro mb-3">📏 Profundidad Ideal</h3>
            <p className="text-gris-claro mb-3">La profundidad recomendada en La Manga es:</p>
            <ul className="text-gris-claro space-y-2">
              <li>• <strong>Mínimo:</strong> 4-5 metros (seguridad ancla)</li>
              <li>• <strong>Óptimo:</strong> 6-10 metros (mejor sostenimiento)</li>
              <li>• <strong>Máximo:</strong> 12-15 metros (límite práctico)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-azul-oscuro mb-3">⛓️ Regla de la Cadena</h3>
            <p className="text-gris-claro mb-3">La relación cadena-profundidad es crítica:</p>
            <ul className="text-gris-claro space-y-2">
              <li>• <strong>Relación 5:1:</strong> Estándar en navegación</li>
              <li>• <strong>Ejemplo:</strong> 10m profundidad = 50m cadena</li>
              <li>• <strong>En La Manga:</strong> Generalmente 40-60m cadena</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-azul-oscuro mb-3">🏞️ Tipo de Fondo</h3>
            <p className="text-gris-claro mb-3">Los mejores fondos en La Manga:</p>
            <ul className="text-gris-claro space-y-2">
              <li>✅ <strong>Arena:</strong> Excelente agarre, ecológico</li>
              <li>✅ <strong>Fango:</strong> Muy buen agarre</li>
              <li>⚠️ <strong>Posidonia:</strong> Protegida, evitar si es posible</li>
              <li>❌ <strong>Roca:</strong> Pobre agarre, difícil levante</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-azul-oscuro mb-3">🌊 Protección del Viento</h3>
            <p className="text-gris-claro mb-3">Elige fondeos con protección:</p>
            <ul className="text-gris-claro space-y-2">
              <li>• Bahías cerradas (mejor protección)</li>
              <li>• Lee de puntas rocosas</li>
              <li>• Evitar playas expuestas</li>
              <li>• Monitoreartorno por cambios</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-4 mt-12">Los Mejores Fondeos de La Manga</h2>
        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded">
            <h3 className="text-2xl font-bold text-azul-oscuro mb-2">🏖️ Calblanque</h3>
            <div className="text-gris-claro space-y-2">
              <p><strong>Profundidad:</strong> 8-12 metros</p>
              <p><strong>Fondo:</strong> Arena y roca (excelente agarre)</p>
              <p><strong>Protección:</strong> Acantilados rocosos protegen del viento oeste</p>
              <p><strong>Fauna:</strong> Peces coloridos, erizos, estrellas</p>
              <p><strong>Mejor para:</strong> Snorkel, baños prolongados, grupos</p>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded">
            <h3 className="text-2xl font-bold text-azul-oscuro mb-2">🏝️ Isla Grosa</h3>
            <div className="text-gris-claro space-y-2">
              <p><strong>Profundidad:</strong> 4-8 metros (agua tranquila)</p>
              <p><strong>Monoboyas:</strong> Disponibles (respetuoso con posidonia)</p>
              <p><strong>Fondo:</strong> Arena, fango, posidonia protegida</p>
              <p><strong>Mejor para:</strong> Familias, principiantes, fondeo ecológico</p>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded">
            <h3 className="text-2xl font-bold text-azul-oscuro mb-2">🏊 Isla Perdiguera</h3>
            <div className="text-gris-claro space-y-2">
              <p><strong>Profundidad:</strong> 3-6 metros (muy tranquilo)</p>
              <p><strong>Fondo:</strong> Arena fina, muy suave</p>
              <p><strong>Protección:</strong> Isla pequeña protege de corrientes</p>
              <p><strong>Mejor para:</strong> Niños, snorkel tranquilo, descanso</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-4 mt-12">Pasos para Fondear Correctamente</h2>
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-3xl font-bold text-blue-600">1</div>
            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-2">Aproximación lenta y controlada</h3>
              <p className="text-gris-claro">Aproximarse contraviento (de frente) lentamente. El velero pierde velocidad naturalmente. Usar sonda para detectar profundidad.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 text-3xl font-bold text-blue-600">2</div>
            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-2">Soltar cadena progresivamente</h3>
              <p className="text-gris-claro">Cuando alcances la profundidad deseada, comienza a soltar cadena mientras el barco retrocede lentamente. Patrón controla velocidad.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 text-3xl font-bold text-blue-600">3</div>
            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-2">Dejar derivar para que agarre el ancla</h3>
              <p className="text-gris-claro">Soltar más cadena (relación 5:1) y dejar que el barco derive en arco. El ancla se clava en el fondo. Esperar 2-3 minutos.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 text-3xl font-bold text-blue-600">4</div>
            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-2">Verificar que aguanta</h3>
              <p className="text-gris-claro">Revirar lentamente para crear tensión. Si la cadena está tensa y el barco no deriva hacia atrás, el ancla está bien agarrada.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 text-3xl font-bold text-blue-600">5</div>
            <div>
              <h3 className="text-xl font-bold text-azul-oscuro mb-2">Monitorear y relajarse</h3>
              <p className="text-gris-claro">Revisar ocasionalmente que el barco no deriva (usar referencias visuales en tierra). Disfrutar del snorkel, baños, descanso.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-4 mt-12">Respeto al Ecosistema Marino</h2>
        <div className="bg-green-100 border border-green-300 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">🌿 Normas de Fondeo Ecológico</h3>
          <ul className="text-green-900 space-y-3">
            <li>✓ <strong>Fondea en arena o fango</strong>, nunca directamente sobre posidonia</li>
            <li>✓ <strong>Usa monoboyas</strong> donde estén disponibles (Isla Grosa)</li>
            <li>✓ <strong>No toques ni pises</strong> plantas marinas o corales</li>
            <li>✓ <strong>No alimentes peces</strong> (altera comportamiento natural)</li>
            <li>✓ <strong>Evita aceites, gasolina y basura</strong> en el agua</li>
            <li>✓ <strong>Lleva tus residuos</strong> de bordo (ni siquiera cáscaras)</li>
            <li>✓ <strong>Mantén distancia</strong> de tortugas, delfines, fauna protegida</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-azul-oscuro mb-4 mt-12">Preguntas Frecuentes sobre Fondeo</h2>
        <div className="space-y-6 mb-8">
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Es seguro fondear de noche?</h3>
            <p className="text-gris-claro">En La Manga, sí si tomas precauciones: buenas luces de navegación, sonda activa, buen fondeo confirmado. Nuestro patrón puede hacerlo, pero es poco común en turismo.</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Qué hago si hay tormenta mientras fondeo?</h3>
            <p className="text-gris-claro">Levantamos ancla y buscamos puerto seguro o un fondeo más protegido. La seguridad es prioridad. El patrón monitorea meteorología constantemente.</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Puedo fondear en cualquier lugar de La Manga?</h3>
            <p className="text-gris-claro">No. Hay zonas prohibidas, canales de navegación, y áreas protegidas. El patrón conoce exactamente dónde es legal y seguro fondear.</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-bold text-lg text-azul-oscuro mb-2">¿Cuánto tiempo puedo fondear?</h3>
            <p className="text-gris-claro">En recorridos recreativos, fondeas 30-60 minutos por parada. En charters largos (6-8h), puedes hacer múltiples fondeos de duración variable.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-azul to-azul-claro p-8 rounded-lg text-white text-center">
          <h2 className="text-3xl font-bold mb-3">¿Listo para tu aventura en la vela?</h2>
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
