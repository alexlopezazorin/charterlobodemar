"use client";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("inicio");
        if (!hero) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0 }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <a
            href="https://wa.me/637715281?text=Hola,%20quiero%20reservar%20una%20excursi%C3%B3n%20en%20barco%20para%20el%20siguiente%20fin%20de%20semana.%20%C2%BFTienes%20disponibilidad?"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-verde-whatsapp hover:scale-110 transition-all duration-500 ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
            <img src="/whatsapp-logo.svg" alt="WhatsApp" className="w-8 h-8 brightness-0 invert" />
        </a>
    );
}
