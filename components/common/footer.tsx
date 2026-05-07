import FacebookIcon from '@/public/facebook-logo.svg'
import InstagramIcon from '@/public/instagram-logo.svg'
import MailIcon from '@/public/mail-icon.svg'
import WhatsappIcon from '@/public/whatsapp-logo.svg'

export default function Footer() {
    return (
        <footer>

            <div className="bg-azul-oscuro grid grid-cols-1 md:grid-cols-3 px-[10%] gap-x-[10%] gap-y-6 py-6 pb-10 md:pb-6">

                <div className="flex flex-col gap-2 font-medium text-white text-sm items-center md:items-start">
                    <h2 className="text-[22px] text-center md:text-left">CONTACTO</h2>
                    <a href="https://wa.me/637715281?text=Hola,%20quiero%20reservar%20una%20excursi%C3%B3n%20en%20barco%20para%20el%20siguiente%20fin%20de%20semana.%20%C2%BFTienes%20disponibilidad?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit hover:-translate-y-0.5 transition-transform"><WhatsappIcon className="h-6 w-6 shrink-0"/><p>+34 637 715 281</p></a>
                    <a href="https://mailto:lobodemarcharter@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit hover:-translate-y-0.5 transition-transform"><MailIcon className="h-6 w-6 shrink-0" /><p>lobodemarcharter@gmail.com</p></a>
                    <a href="https://www.facebook.com/profile.php?id=61571894465835" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit hover:-translate-y-0.5 transition-transform"><FacebookIcon className="h-6 w-6 shrink-0"/><p>Charter Lobo de Mar</p></a>
                    <a href="https://www.instagram.com/charterlobodemar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit hover:-translate-y-0.5 transition-transform"><InstagramIcon className="h-7 w-7 shrink-0"/><p>charterlobodemar</p></a>
                </div>

                <div className="flex flex-col gap-2 font-medium text-white text-sm items-center md:items-start">
                    <h2 className="text-[22px] text-center md:text-left">PRIVACIDAD</h2>
                    <a href="/legal/terminos-y-condiciones" className="w-fit hover:-translate-y-0.5 transition-transform">Términos y Condiciones del Servicio</a>
                    <a href="/legal/aviso-legal" className="w-fit hover:-translate-y-0.5 transition-transform">Aviso Legal</a>
                    <a href="/legal/politica-de-privacidad" className="w-fit hover:-translate-y-0.5 transition-transform">Política de Privacidad</a>

                    <div className="hidden md:block h-10"></div>

                    <h2 className="text-[22px] text-center md:text-left">HAZ TU RESERVA</h2>
                    <a href="/contacto" className="w-fit hover:-translate-y-0.5 transition-transform">Reserva Tu Experiencia</a>
                    <a href="/preguntas-frecuentes" className="w-fit hover:-translate-y-0.5 transition-transform">Preguntas Frecuentes</a>

                    <div className="hidden md:block h-10"></div>
                </div>

                <div className="flex flex-col gap-2 font-medium text-white text-sm items-center md:items-start">
                    <h2 className="hidden md:block text-[22px] md:text-left">UBICACIÓN</h2>
                    <iframe
                        src="https://www.google.com/maps?q=Puerto+Tomas+Maestre+La+Manga+Murcia&output=embed"
                        className="w-full h-52 rounded"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <p className="text-white text-sm text-center">© 2025 Lobo de Mar</p>
                </div>

            </div>

            <div className="bg-azul-oscuro pl-4 pb-3 flex items-center gap-1">
                <span className="text-white text-xs">created by</span>
                <a href="https://mailto:alexlopezazorin@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block text-white text-xs hover:-translate-y-0.5 transition-transform">alexlopezazorin@gmail.com</a>
            </div>

        </footer>
    );
}