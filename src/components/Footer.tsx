import React from 'react';
import { CongresoDemocraciaLogo, UNRBadge, OrganizersRow } from './Logos';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-purple-900/30 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-900">
          <div>
            <CongresoDemocraciaLogo />
            <p className="text-xs text-slate-500 mt-3 max-w-md">
              XVII Congreso Nacional y X Internacional sobre Democracia · VII Simposio de Administración Pública:
              "Del expediente al ALGORITMO: mutaciones del Estado en la era exponencial".
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <UNRBadge />
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-2 text-xs"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Inicio</span>
            </button>
          </div>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">La Ponencia</div>
            <ul className="space-y-2 font-light">
              <li>
                <a href="#video" className="hover:text-purple-300 transition-colors">
                  Presentación en Video
                </a>
              </li>
              <li>
                <a href="#desafio" className="hover:text-purple-300 transition-colors">
                  La Paradoja de Solow
                </a>
              </li>
              <li>
                <a href="#arquitectura" className="hover:text-purple-300 transition-colors">
                  Arquitectura 3 Capas
                </a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-purple-300 transition-colors">
                  Pilares & Métricas
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">El Evento</div>
            <ul className="space-y-2 font-light">
              <li>
                <a href="#programa" className="hover:text-purple-300 transition-colors">
                  Programa Completo
                </a>
              </li>
              <li>
                <a href="#programa" className="hover:text-purple-300 transition-colors">
                  Galería de Afiches
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-purple-300 transition-colors">
                  Contacto con el Ponente
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Sede & Fecha</div>
            <div className="space-y-1.5 font-light text-slate-400">
              <p className="text-white font-medium">3, 4 y 5 de Noviembre 2026</p>
              <p>Facultad de Ciencia Política y RRII</p>
              <p>Aulas 4 y 5, Aulario (CUR La Siberia)</p>
              <p>Rosario, Santa Fe, Argentina</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Organizan</div>
            <p className="text-[11px] leading-relaxed font-light text-slate-500">
              INPAE, aaeap, Política & Gestión, PoliLab UNR, y las Cátedras de Análisis de Políticas Públicas y Análisis,
              Diseño y Gestión de Organizaciones Públicas de la UNR.
            </p>
          </div>
        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Servicio de Resguardo Patrimonial · Universidad Nacional de Rosario (UNR).
          </div>
          <div className="flex items-center gap-4">
            <span>Firma Digital Ley 25.506</span>
            <span>·</span>
            <span>Interoperable con Sudocu</span>
            <span>·</span>
            <span>Soberanía Tecnológica</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
