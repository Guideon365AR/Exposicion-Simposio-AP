import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText, Download } from 'lucide-react';
import { MAIN_SPEAKER, CONGRESS_INFO } from '../data/congresoData';

interface PaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaperModal({ isOpen, onClose }: PaperModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const fullText = `CONGRESO SOBRE DEMOCRACIA 2026 - VII SIMPOSIO DE ADMINISTRACIÓN PÚBLICA
UNIVERSIDAD NACIONAL DE ROSARIO

PONENCIA: ${MAIN_SPEAKER.paperTitle}
AUTOR: ${MAIN_SPEAKER.name} (${MAIN_SPEAKER.institution})
PANEL: Usos de la Inteligencia Artificial en la Administración Pública (Miércoles 4/11, 16:00 h, Aula 5)

RESUMEN EJECUTIVO:
${MAIN_SPEAKER.abstract}

METODOLOGÍA Y PILARES:
1. Superación de la Paradoja de Solow (1987) mediante IA Agéntica como multiplicador de fuerzas en equipos reducidos con presupuesto acotado.
2. Arquitectura de 3 Capas:
   - Capa 1: Digitalización Documental con Gestión SRP y lectura algorítmica de antecedentes penales en PDF.
   - Capa 2: Operación en Territorio con SGD-SRP móvil 24/7 en 15 edificios de la Ciudad Universitaria de Rosario.
   - Capa 3: Analítica Predictiva con PostgreSQL y mapas espaciotemporales de calor.
3. Seguridad Jurídica y Ciberseguridad:
   - Firma Digital (Ley Nacional 25.506).
   - Cifrado TLS 1.3 / AES-256 y control de acceso por roles (RBAC).
   - Interoperabilidad abierta con el ecosistema estatal (Sudocu).

RESULTADOS CUANTITATIVOS:
- 80% reducción en tiempos de respuesta operativa inmediata.
- 90% reducción en tiempos de auditoría de registros.
- 35% disminución de siniestros y vandalismo en el campus.
- 100% trazabilidad e inmutabilidad documental.`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-purple-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-2 text-xs text-purple-400 font-semibold tracking-wide uppercase">
            <FileText className="w-4 h-4" />
            <span>Documento Académico · Resumen Ejecutivo</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-heading leading-tight">
            {MAIN_SPEAKER.paperTitle}
          </h2>
          <div className="text-xs sm:text-sm text-slate-400">
            <strong className="text-slate-200">{MAIN_SPEAKER.name}</strong> · {MAIN_SPEAKER.title} ·{' '}
            <span className="text-purple-400 font-medium">{MAIN_SPEAKER.institution}</span>
          </div>
          <div className="text-xs text-slate-400">
            {CONGRESS_INFO.symposium} · {CONGRESS_INFO.edition} · Rosario, Argentina (2026)
          </div>
        </div>

        {/* Content body */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2 font-mono">
              Abstract / Resumen
            </h4>
            <p className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-sm leading-relaxed text-justify">
              {MAIN_SPEAKER.abstract}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 font-mono">
              Ejes Metodológicos & Debate Central
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>
                <strong className="text-white font-medium">Desafío a la Paradoja de Solow (1987):</strong> Demostración
                práctica de que la IA no es un lujo corporativo superficial, sino la palanca imprescindible para dotar de
                eficiencia al Estado ante severas restricciones presupuestarias y de personal.
              </li>
              <li>
                <strong className="text-white font-medium">IA Agéntica como Multiplicador:</strong> Un equipo operativo
                de solo 3 personas logró programar, depurar código y estructurar bases de datos relacionales sin costo
                en licencias privativas.
              </li>
              <li>
                <strong className="text-white font-medium">Seguridad Jurídica y Validez Probatoria:</strong> Adopción
                de la Ley Nacional 25.506 de Firma Digital, otorgando plena eficacia probatoria equiparable al papel
                manuscrito.
              </li>
              <li>
                <strong className="text-white font-medium">Interoperabilidad Soberana:</strong> Integración abierta con
                sistemas del ecosistema estatal (como Sudocu), evitando monopolios de software y permitiendo que la matriz
                sea transferible a cualquier universidad o municipio.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 font-mono">
              Indicadores Clave de Impacto Demostrado
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-bold text-white font-mono">-80%</div>
                <div className="text-[11px] text-slate-400">Tiempo de Respuesta</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-bold text-white font-mono">-90%</div>
                <div className="text-[11px] text-slate-400">Tiempo de Auditorías</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-bold text-emerald-400 font-mono">-35%</div>
                <div className="text-[11px] text-slate-400">Reducción de Delitos</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-bold text-purple-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400">Trazabilidad Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal actions */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Resumen'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
