const reviews = [
    {
        name: "Ana-María Barquero López",
        date: "06-09-2025",
        text: "Qué día tan especial vivimos en el Lobo del Mar! Juan Carlos no solo es un gran patrón, sino también un anfitrión de primera: simpático, atento y con un gran amor por el mar que contagia a todos a bordo. Nos llevó a lugares mágicos donde pudimos nadar, relajarnos, admirar y desconectar de todo. Fue mucho más que una salida en barco, fue una experiencia que quedará en nuestra memoria para siempre. El barco está en excelentes condiciones, muy cómodo y muy bien equipado. ¡Gracias!",
    },
    {
        name: "Miguel Ángel Muñoz",
        date: "09-08-2025",
        photo: "/home/opiniones/miguel_angel_munoz.png",
        text: "Una experiencia espectacular. Todo lo relativo al barco estaba genial, muy bien equipado, limpieza perfecta, etc. Y en cuanto al patrón Juan Carlos, sencillamente lo mejor del viaje, un muchacho agradable, enrollado, amable y muy atento de todo lo que fuimos necesitando, nos aconsejó todo lo necesario, nos fue dando indicaciones de cada sitio que pasábamos, datos curiosos, etc. La verdad que si el barco ya merece la pena de por sí, el que lo lleve Juan Carlos le da un plus para un día de 10! Ya le dijimos que repetiremos con él el verano que viene sin ninguna duda. Totalmente recomendable.",
    },
    {
        name: "María Valor",
        date: "16-08-2025",
        photo: "/home/opiniones/maria_valor.png",
        text: "Pasamos un día estupendo!!! Gran barco, súper cómodo y patrón muy simpático. Repetiríamos sin dudarlo.",
    },
    {
        name: "Eva Zingoni",
        date: "02-08-2025",
        text: "Un día espectacular e inolvidable a bordo de este barco maravilloso en La Manga! Juan Carlos es una persona seria y adorable y se preocupa por todo y todos. No duden ni un minuto en pasar un día o más navegando con él!",
    },
    {
        name: "Cristina Escribano Sánchez",
        date: "23-08-2025",
        text: "Una experiencia increíble en alta mar. Estuve con unas amigas en el velero con Juan Carlos como patrón y no puedo estar más contenta con la experiencia. Es super amable, atento y muy profesional. Te respeta totalmente tu espacio e intimidad, pero siempre está disponible para resolver cualquier duda o ayudarte con lo que necesites. Además, se adapta a cualquier imprevisto y lo hace todo muy fácil. Sin duda, lo recomiendo 100% si quieres pasar un día diferente y especial navegando.",
    },
    {
        name: "Guillermo Villalba Cuesta",
        date: "12-07-2025",
        photo: "/home/opiniones/guillermo_villalba.png",
        text: "La experiencia de navegar el fin de semana completo con Juan Carlos, el patrón de Katmandú y gerente de Lobo de Mar Charter, fue impresionante. No solo es excelente en su trabajo, super atento con todo, pero además una gran persona con la que apetece estar en el velero, compartiendo y conversando sobre la navegación o cualquier otro tema. Siempre fue más allá para que nuestra experiencia fuese increíble, disfrutando de sitios tan bonitos como la isla de Tabarca o Cabo Roig. Sin lugar a duda recomendaría a Juan Carlos y su servicio de charter de día o fin de semana completo, es una opción segura con la cual vas a poder disfrutar de tu familia y amigos de una manera diferente y muy especial.",
    },
    {
        name: "Victoria Puche",
        date: "30-08-2025",
        text: "No pudimos elegir mejor barco y compañía! Juan Carlos fue muy agradable y cuidó cada detalle. Nos lo pasamos espectacular y sin duda repetiremos!",
    },
    {
        name: "Chus S.O.S",
        date: "13-09-2025",
        photo: "/home/opiniones/chus.png",
        text: "Muy buen trato, muy recomendable, repetiremos seguro.",
    },
    {
        name: "Fernando Mendoza",
        date: "19-07-2025",
        photo: "/home/opiniones/fernando_mendoza.png",
        text: "Un barco espectacular y lleno de detalles. El capitán, un lobo de mar experimentado que surcó las olas con majestuosidad. Sin duda repetiré.",
    },
    {
        name: "Julio Requena Pico",
        date: "03-08-2025",
        photo: "/home/opiniones/julio_requena.png",
        text: "Una experiencia increíble, con compañía inmejorable.",
    },
];

const avatarColors = [
    "bg-azul",
    "bg-azul-oscuro",
    "bg-acento",
    "bg-gris-oscuro",
    "bg-verde-whatsapp",
    "bg-azul",
    "bg-azul-oscuro",
    "bg-acento",
    "bg-gris-oscuro",
    "bg-verde-whatsapp",
];

const borderColors = [
    "#4381d1",
    "#006090",
    "#f09a00",
    "rgb(35,40,43)",
    "#075E54",
    "#4381d1",
    "#006090",
    "#f09a00",
    "rgb(35,40,43)",
    "#075E54",
];


function GoogleLogo({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"/>
            <path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"/>
            <path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"/>
            <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"/>
        </svg>
    );
}

export default function OpinionesSection() {
    const doubled = [...reviews, ...reviews];

    return (
        <section id="opiniones" className="scroll-mt-[88px] md:scroll-mt-28 py-16">
            <div className="max-w-3xl mx-auto text-center px-4 mb-10">
                <h2 className="text-azul-oscuro text-4xl font-bold mb-2">
                    Lo que dicen nuestros clientes
                </h2>
                <p className="text-gris-claro text-lg mb-4">+100 clientes contentos con Katmandú!</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-acento text-lg tracking-wider">★★★★★</span>
                    <span className="font-bold text-gris-oscuro">5.0</span>
                    <span className="text-gris-claro">·</span>
                    <span className="text-gris-claro">11 reseñas en</span>
                    <a
                        href="https://maps.app.goo.gl/7nqsUgrXmdJUkgA27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 group"
                    >
                        <span className="inline-flex transition-transform duration-300 group-hover:-translate-y-1">
                            <GoogleLogo size={16} />
                        </span>
                        <span className="font-semibold text-gris-oscuro">Google</span>
                    </a>
                </div>
            </div>

            <div className="relative overflow-x-clip">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />
                <div className="ticker-track flex gap-5 py-6">
                    {doubled.map((review, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-72 bg-azul-claro-fondo/40 rounded-2xl p-6 flex flex-col gap-3 servicio-card border-t-4"
                            style={{ borderTopColor: borderColors[i % reviews.length] }}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-3">
                                    {review.photo ? (
                                        <img src={review.photo} alt={review.name} className="w-10 h-10 rounded-full flex-shrink-0 object-cover" />
                                    ) : (
                                        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-base ${avatarColors[i % reviews.length]}`}>
                                            {review.name.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                    <div>
                                        <p className="font-semibold text-gris-oscuro text-sm leading-tight">{review.name}</p>
                                        <p className="text-xs text-gris-claro mt-0.5">{review.date}</p>
                                    </div>
                                </div>
                                <span className="text-acento text-sm tracking-wider flex-shrink-0">★★★★★</span>
                            </div>
                            <p className="text-gris-claro text-sm leading-relaxed line-clamp-5">{review.text}</p>
                            <div className="flex items-center gap-1.5 pt-2 border-t border-gray-100">
                                <GoogleLogo size={14} />
                                <span className="text-xs text-gris-claro">Reseña de Google</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-10">
                <a
                    href="https://maps.app.goo.gl/7nqsUgrXmdJUkgA27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-azul text-white font-semibold px-6 py-3 rounded-full hover:bg-azul-oscuro transition-colors duration-300"
                >
                    Déjanos tu reseña en Google
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}
