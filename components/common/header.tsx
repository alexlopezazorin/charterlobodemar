'use client'

import { useState } from 'react'
import Link from 'next/link'
import FacebookIcon from '@/public/facebook-logo.svg'
import InstagramIcon from '@/public/instagram-logo.svg'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <header className="sticky md:fixed top-0 left-0 w-full z-50 bg-azul-claro shadow-md">
            {/* Desktop */}
            <div className="hidden md:flex items-center justify-between px-8 py-4">

                <Link href="/"><img src="/logo.png" alt="logo" className="h-20 w-auto" /></Link>

                <nav className="flex items-center gap-6 text-sm font-medium text-white">
                    <a href="/#inicio" className="hover:text-gris-oscuro transition-colors">Inicio</a>
                    <a href="/#info" className="hover:text-gris-oscuro transition-colors">Info</a>
                    <a href="/#tarifas" className="hover:text-gris-oscuro transition-colors">Tarifas</a>
                    <a href="/#ficha-tecnica" className="hover:text-gris-oscuro transition-colors">Ficha Técnica</a>
                    <a href="/la-manga" className="hover:text-gris-oscuro transition-colors">La Manga del Mar Menor</a>
                    <a href="/preguntas-frecuentes" className="hover:text-gris-oscuro transition-colors">Preguntas Frecuentes</a>
                    <a href="/contacto" className="hover:text-gris-oscuro transition-colors">Contacto</a>
                </nav>

                <div className="flex items-center gap-4 text-azul-oscuro">
                    <a href="https://www.facebook.com/profile.php?id=61571894465835" target="_blank" rel="noopener noreferrer"><FacebookIcon className="h-6 w-6 hover:text-gris-oscuro transition-colors" /></a>
                    <a href="https://www.instagram.com/charterlobodemar/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="h-7 w-7 hover:text-gris-oscuro transition-colors" /></a>
                </div>

            </div>

            {/* Barra móvil */}
            <div className="md:hidden flex items-center justify-between px-4 py-3">
                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white text-2xl font-light w-10">
                    {menuOpen ? '✕' : (
                        <>
                            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                        </>
                    )}
                </button>
                <Link href="/"><img src="/logo.png" alt="logo" className="h-16 w-auto" /></Link>
                <div className="w-10"></div>
            </div>

            {/* Menú desplegable móvil */}
            {menuOpen && (
                <div className="md:hidden flex flex-col px-6 pb-4 text-white font-medium">
                    <a href="/#inicio" onClick={() => setMenuOpen(false)} className="py-3 border-b border-white/20">Inicio</a>
                    <a href="/#info" onClick={() => setMenuOpen(false)} className="py-3 border-b border-white/20">Info</a>
                    <a href="/#tarifas" onClick={() => setMenuOpen(false)} className="py-3 border-b border-white/20">Tarifas</a>
                    <a href="/#ficha-tecnica" onClick={() => setMenuOpen(false)} className="py-3 border-b border-white/20">Ficha Técnica</a>
                    <a href="/la-manga" onClick={() => setMenuOpen(false)} className="py-3 border-b border-white/20">La Manga del Mar Menor</a>
                    <a href="/preguntas-frecuentes" onClick={() => setMenuOpen(false)} className="py-3 border-b border-white/20">Preguntas Frecuentes</a>
                    <a href="/contacto" onClick={() => setMenuOpen(false)} className="py-3 border-b border-white/20">Contacto</a>
                    <div className="flex gap-4 pt-4 text-azul-oscuro">
                        <a href="https://www.facebook.com/profile.php?id=61571894465835" target="_blank" rel="noopener noreferrer"><FacebookIcon className="h-6 w-6" /></a>
                        <a href="https://www.instagram.com/charterlobodemar/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="h-7 w-7" /></a>
                    </div>
                </div>
            )}

        </header>
    );
}