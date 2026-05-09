"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) setVisible(true);
    }, []);

    function aceptar() {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
    }

    function rechazar() {
        localStorage.setItem("cookie-consent", "rejected");
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-azul-oscuro text-white rounded-2xl px-6 py-5 shadow-xl flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-center md:text-left flex-1">
                Usamos cookies para mejorar tu experiencia de navegación.
                Puedes aceptarlas o rechazarlas. Más información en nuestra{" "}
                <a href="/legal/terminos-y-condiciones" className="underline font-semibold hover:text-azul-claro transition-colors">
                    términos y condiciones
                </a>.
            </p>
            <div className="flex gap-3 flex-shrink-0">
                <button
                    onClick={rechazar}
                    className="px-4 py-2 rounded-xl border border-white/40 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                    Rechazar
                </button>
                <button
                    onClick={aceptar}
                    className="px-4 py-2 rounded-xl bg-acento text-white text-sm font-semibold hover:brightness-110 transition-all"
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
}
