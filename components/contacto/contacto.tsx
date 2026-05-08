"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contacto() {
    const [enviado, setEnviado] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log("Datos del formulario:", {
            nombre: data.get("nombre"),
            email: data.get("email"),
            mensaje: data.get("mensaje"),
            privacidad: data.get("privacidad") === "on",
        });
        e.currentTarget.reset();
        setEnviado(true);
        setTimeout(() => setEnviado(false), 7000);
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-azul-claro-fondo to-white py-16 px-4">
            <div className="max-w-2xl mx-auto">

                {/* Encabezado */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-azul-oscuro mb-3">Reserva tu Experiencia</h1>
                    <p className="text-gris-claro text-base leading-relaxed">
                        Rellena el formulario o contacta por WhatsApp al{" "}
                        <a
                            href="https://wa.me/637715281?text=Hola,%20quiero%20reservar%20una%20excursi%C3%B3n%20en%20barco%20para%20el%20siguiente%20fin%20de%20semana.%20%C2%BFTienes%20disponibilidad?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#4381d1] hover:underline"
                        >
                            +34 637 715 281
                        </a>{" "}
                        para consultar disponibilidad e indicaciones para la reserva.
                    </p>
                </div>

                {/* Tarjeta del formulario */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700"> Nombre* </label>
                            <input
                                name="nombre"
                                type="text"
                                placeholder="Tu nombre completo"
                                required
                                className="border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4381d1] focus:border-transparent transition bg-gray-50"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700"> Correo electrónico* </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="tucorreo@gmail.com"
                                required
                                className="border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4381d1] focus:border-transparent transition bg-gray-50"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700"> Mensaje o consulta* </label>
                            <textarea
                                name="mensaje"
                                placeholder="Escribe tu consulta aquí"
                                required
                                rows={5}
                                className="border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#4381d1] focus:border-transparent transition bg-gray-50"
                            />
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                name="privacidad"
                                type="checkbox"
                                required
                                className="mt-0.5 w-4 h-4 accent-[#4381d1] flex-shrink-0 cursor-pointer"
                            />
                            <span className="text-sm text-gris-claro leading-relaxed">
                                He leído y acepto la{" "}
                                <Link
                                    href="/legal/politica-de-privacidad"
                                    className="text-[#4381d1] underline hover:text-azul-oscuro transition-colors"
                                >
                                    política de privacidad
                                </Link>
                            </span>
                        </label>

                        <button type="submit" className="mt-1 bg-[#f09a00] hover:bg-[#d88800] active:bg-[#c07a00] text-white font-bold py-3.5 px-6 rounded-xl transition-colors cursor-pointer text-base tracking-wide shadow-sm">
                            Enviar consulta
                        </button>

                        {enviado && (
                            <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm font-medium">
                                <span className="text-lg">✓</span> ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
                            </div>
                        )}

                    </form>
                </div>

            </div>
        </section>
    );
}
