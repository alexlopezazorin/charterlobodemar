export default function PreguntasFrecuentes() {
    return (
        <>
        <section className="min-h-screen bg-gradient-to-b from-azul-claro-fondo to-white py-16 px-4">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-azul-oscuro mb-3">Preguntas Frecuentes</h1>
                    <p className="text-gris-claro">Todo lo que necesitas saber antes de reservar tu experiencia.</p>
                </div>

                <div className="flex flex-col gap-4">

                    <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
                        <div className="w-[15%] md:w-[12%] flex-shrink-0">
                            <img src="/preguntas-frecuentes/incluido-en-el-alquiler.png" alt="Qué incluye el alquiler" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[85%]">
                            <h2 className="text-base font-semibold text-azul-oscuro mb-2">¿QUÉ INCLUYE EL ALQUILER DEL BARCO?</h2>
                            <p className="text-sm text-gris-claro leading-relaxed">El alquiler incluye la embarcación equipada con todo el material de seguridad obligatorio además de sus seguros correspondientes, patrón con más de 5 años de experiencia y combustible (hasta 2h de navegación). Además el velero dispone de solárium premium en proa, nevera Igloo en la cubierta para tus bebidas, zonas de sombreado y colchonetas en cockpit, tabla de Paddle Surf, plataforma de baño en popa, ducha agua dulce, gafas de esnórquel y altavoz bluetooth para conectar tu tlf y escuchar tu música.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
                        <div className="w-[15%] md:w-[12%] flex-shrink-0">
                            <img src="/preguntas-frecuentes/inicio-ruta.png" alt="Desde dónde zarpamos" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[85%]">
                            <h2 className="text-base font-semibold text-azul-oscuro mb-2">¿DESDE DÓNDE ZARPAMOS?</h2>
                            <p className="text-sm text-gris-claro leading-relaxed">Las salidas son desde el Puerto de Tomas Maestre, una vez hecha la reserva se enviará la ubicación exacta. Disponemos de zona gratuita de aparcamiento. Es recomendable estar 45min antes de la salida para preparar todas las cosas y recibir un pequeño breefing de seguridad y ruta a seguir.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
                        <div className="w-[15%] md:w-[12%] flex-shrink-0">
                            <img src="/preguntas-frecuentes/comida-y-bebida.png" alt="Comida y bebida a bordo" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[85%]">
                            <h2 className="text-base font-semibold text-azul-oscuro mb-2">¿PUEDO LLEVAR COMIDA Y BEBIDA A BORDO?</h2>
                            <p className="text-sm text-gris-claro leading-relaxed">Por supuesto, puedes traer cualquier comida ya preparada o de picoteo y toda la bebida que desees.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
                        <div className="w-[15%] md:w-[12%] flex-shrink-0">
                            <img src="/preguntas-frecuentes/nube-del-tiempo.png" alt="Tiempo meteorológico" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[85%]">
                            <h2 className="text-base font-semibold text-azul-oscuro mb-2">¿QUÉ PASA SI EL TIEMPO NO ACOMPAÑA?</h2>
                            <p className="text-sm text-gris-claro leading-relaxed">La seguridad es lo primero. Si las condiciones meteorológicas no permiten una navegación segura (viento fuerte, mala mar o tormentas), nos pondremos en contacto con usted y se buscará una nueva fecha para realizar la actividad o se ofrecerá un reembolso según las condiciones del contrato.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
                        <div className="w-[15%] md:w-[12%] flex-shrink-0">
                            <img src="/preguntas-frecuentes/bañarse.png" alt="Parar a bañarse" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[85%]">
                            <h2 className="text-base font-semibold text-azul-oscuro mb-2">¿SE PUEDE PARAR A BAÑARSE?</h2>
                            <p className="text-sm text-gris-claro leading-relaxed">¡Por supuesto! Una de las mejores partes de alquilar un barco es poder fondear y disfrutar del mar y las vistas desde un velero teniendo toda tu privatividad en él. Respetando siempre las normas de fondeo para no dañar el ecosistema marino.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
                        <div className="w-[15%] md:w-[12%] flex-shrink-0">
                            <img src="/preguntas-frecuentes/ruta-recomendada.png" alt="Ruta recomendada" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[85%]">
                            <h2 className="text-base font-semibold text-azul-oscuro mb-2">¿HAY ALGUNA RUTA RECOMENDADA?</h2>
                            <p className="text-sm text-gris-claro leading-relaxed">Sí, según las condiciones del tiempo y del mar, pondremos rumbo a los mejores fondeos de la zona. El patrón lo consensuara con los clientes, en el breefing antes de zarpar, sugiriendo las mejores rutas para ese día y según la idea que lleve el cliente.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
                        <div className="w-[15%] md:w-[12%] flex-shrink-0">
                            <img src="/preguntas-frecuentes/seguro-para-niños.png" alt="Seguro para niños" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-[85%]">
                            <h2 className="text-base font-semibold text-azul-oscuro mb-2">¿ES SEGURO PARA NIÑ@S?</h2>
                            <p className="text-sm text-gris-claro leading-relaxed">Sí, es seguro y super divertido. Proporcionamos chalecos salvavidas adaptados según su edad, y por motivo de seguridad siempre tendrá que ir mínimo un adulto por niñ@ para su supervisión.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <a href="https://wa.me/637715281?text=Hola,%20quiero%20reservar%20una%20excursi%C3%B3n%20en%20barco%20para%20el%20siguiente%20fin%20de%20semana.%20%C2%BFTienes%20disponibilidad?" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-verde-whatsapp hover:scale-110 transition-transform duration-300">
            <img src="/whatsapp-logo.svg" alt="WhatsApp" className="w-8 h-8 brightness-0 invert"/>
        </a>
        </>
    );
}
