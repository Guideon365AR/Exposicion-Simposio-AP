import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCalendar: () => void;
}

export function Navbar({ onOpenCalendar }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-purple-900/30 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark display face */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-purple-300 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            <span>VII SIMPOSIO AP · UNR</span>
          </a>

          {/* Zone 2: Nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#ponencia" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              La Ponencia
            </a>
            <a href="#video" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Presentación
            </a>
            <a href="#desafio" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              El Desafío
            </a>
            <a href="#arquitectura" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Arquitectura
            </a>
            <a href="#pilares" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Pilares & Métricas
            </a>
            <a href="#programa" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Programa
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCalendar}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-sm shadow-purple-950 transition-all active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Ponencia (4/11)</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCalendar}
              className="p-2 text-xs font-semibold text-white bg-purple-600 rounded-lg sm:hidden"
              aria-label="Agendar"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-purple-900/40 px-6 py-6 space-y-4">
          <a
            href="#ponencia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-purple-300 font-medium py-1"
          >
            La Ponencia
          </a>
          <a
            href="#video"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-purple-300 font-medium py-1"
          >
            Presentación en Video
          </a>
          <a
            href="#desafio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-purple-300 font-medium py-1"
          >
            El Desafío (Paradoja de Solow)
          </a>
          <a
            href="#arquitectura"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-purple-300 font-medium py-1"
          >
            Arquitectura del Sistema
          </a>
          <a
            href="#pilares"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-purple-300 font-medium py-1"
          >
            Pilares & Métricas
          </a>
          <a
            href="#programa"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-purple-300 font-medium py-1"
          >
            Programa del Congreso
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalendar();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-purple-600 rounded-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Ponencia (Miércoles 4/11 · 16h)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
