import React, { useState } from 'react';
import { Layers, Smartphone, Database, BrainCircuit, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Map } from 'lucide-react';
import { ARCHITECTURE_LAYERS } from '../data/congresoData';

export function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState(0);

  const comparisons = [
    {
      aspect: 'Registro de Novedades',
      before: 'Libros de papel foliados, actas manuscritas lentas y vulnerables a extravío.',
      after: 'Sistema Operativo Digital SRP en app móvil con sincronización 24/7 en tiempo real.'
    },
    {
      aspect: 'Gestión Documental & Legajos',
      before: 'Semanas de cotejo manual de certificados de antecedentes penales y licencias.',
      after: 'Lectura algorítmica por IA de PDFs complejos en segundos con alertas preventivas.'
    },
    {
      aspect: 'Validez Legal & Probatoria',
      before: 'Sellos de goma y firmas manuales vulnerables a repudio y sin trazabilidad segura.',
      after: 'Firma Digital regulada por Ley Nacional 25.506 con auditorías inmutables.'
    },
    {
      aspect: 'Asignación de Personal & Rondas',
      before: 'Rondas fijas basadas en intuición, rutina histórica o inercia de guardia.',
      after: 'Planificación predictiva guiada por mapas de calor espaciotemporales y patrones de riesgo.'
    },
    {
      aspect: 'Tiempo de Respuesta',
      before: 'Reacción tardía; los directivos se enteraban de los siniestros días después.',
      after: 'Reducción del 80% en tiempos de respuesta operativa inmediata en todo el campus.'
    }
  ];

  return (
    <section id="arquitectura" className="py-20 md:py-32 bg-slate-950 relative border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
            Modelo Operativo Secuencial
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Arquitectura Tecnológica en 3 Capas
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Una solución modular, escalable y soberana diseñada específicamente para dar respuesta a la complejidad del
            territorio universitario de Rosario.
          </p>
        </div>

        {/* 3 Interactive Layer Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {ARCHITECTURE_LAYERS.map((layer, idx) => (
            <button
              key={layer.layer}
              onClick={() => setActiveLayer(idx)}
              className={`p-6 rounded-2xl text-left border transition-all ${
                activeLayer === idx
                  ? 'bg-purple-950/60 border-purple-500 shadow-lg shadow-purple-950/50 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold uppercase tracking-wider ${activeLayer === idx ? 'text-purple-300' : 'text-slate-500'}`}>
                  {layer.layer}
                </span>
                {idx === 0 && <Database className="w-5 h-5 text-purple-400" />}
                {idx === 1 && <Smartphone className="w-5 h-5 text-purple-400" />}
                {idx === 2 && <BrainCircuit className="w-5 h-5 text-purple-400" />}
              </div>
              <h3 className="text-base font-bold text-white mb-1 font-heading">{layer.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{layer.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Active Layer Deep Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-purple-800/40 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-purple-900/40 text-purple-300 text-xs font-semibold">
                {ARCHITECTURE_LAYERS[activeLayer].layer} · Componente Operativo
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {ARCHITECTURE_LAYERS[activeLayer].name}
              </h3>
              <p className="text-sm font-medium text-purple-300">
                {ARCHITECTURE_LAYERS[activeLayer].subtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {ARCHITECTURE_LAYERS[activeLayer].description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                {ARCHITECTURE_LAYERS[activeLayer].benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>{benefit}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Callout or Diagram Representation */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Implementación en Territorio</div>
              {activeLayer === 0 && (
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-white block mb-1">OCR & Extracción Automatizada</span>
                    Los antecedentes penales y certificados se cargan y analizan con modelos de lenguaje sin intervención humana repetitiva.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-white block mb-1">Disparo Preventivo de Alertas</span>
                    Notificación automática 30 días antes del vencimiento de habilitaciones y certificados.
                  </div>
                </div>
              )}
              {activeLayer === 1 && (
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-white block mb-1">App Móvil para Guardias</span>
                    Registro in situ de ingresos, egresos, inspecciones de llaves y novedades patrimoniales.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-white block mb-1">15 Edificios Conectados</span>
                    Sincronización en tiempo real en todo el predio de La Siberia (CUR).
                  </div>
                </div>
              )}
              {activeLayer === 2 && (
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-white block mb-1">Analítica Espaciotemporal</span>
                    Modelado de anomalías, franjas horarias y puntos ciegos para optimizar turnos de guardia.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-white block mb-1">Decisiones Basadas en Datos</span>
                    Sustitución de la intuición por evidencia objetiva para el despliegue del personal.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comparativa Directa: El "Antes" vs. El "Después" */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Comparativa Directa: Resultados de la Modernización
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              El impacto concreto medido tras la implementación del modelo en la Universidad.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900 text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-6 font-semibold">Aspecto Operativo</th>
                  <th className="py-4 px-6 font-semibold text-rose-400">El "Antes" (Modelo Analógico)</th>
                  <th className="py-4 px-6 font-semibold text-emerald-400">El "Después" (Paradigma Predictivo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                {comparisons.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-900/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white whitespace-nowrap">
                      {row.aspect}
                    </td>
                    <td className="py-4 px-6 text-slate-400 font-light">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.before}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-200 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.after}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
