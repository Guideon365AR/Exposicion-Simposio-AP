import React from 'react';
import {
  Scale,
  ShieldCheck,
  Network,
  Clock,
  TrendingDown,
  FileCheck,
  Building2,
  Users,
  CheckCircle2,
  Download
} from 'lucide-react';
import { SYSTEM_PILLARS, IMPACT_METRICS } from '../data/congresoData';

interface PillarsAndMetricsProps {
  onOpenAbstract: () => void;
}

export function PillarsAndMetrics({ onOpenAbstract }: PillarsAndMetricsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Timer':
        return <Clock className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-purple-400" />;
      case 'TrendingDown':
        return <TrendingDown className="w-6 h-6 text-emerald-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-purple-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-purple-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-purple-400" />;
    }
  };

  const getPillarIcon = (idx: number) => {
    if (idx === 0) return <Scale className="w-6 h-6 text-purple-300" />;
    if (idx === 1) return <ShieldCheck className="w-6 h-6 text-purple-300" />;
    return <Network className="w-6 h-6 text-purple-300" />;
  };

  return (
    <section id="pilares" className="py-20 md:py-32 bg-slate-900/40 border-t border-purple-900/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
            Rigor Metodológico & Jurídico
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Los 3 Pilares del Modelo Institucional
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Una solución probada, transferible y jurídicamente válida, que evita la fragilidad legal y la cautividad de
            proveedores externos.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {SYSTEM_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="p-8 rounded-3xl bg-slate-950 border border-purple-900/30 hover:border-purple-600/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="text-2xl font-black text-purple-500/40 font-mono">{pillar.number}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5 font-heading group-hover:text-purple-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs text-purple-400 font-medium mb-3">{pillar.subtitle}</div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{pillar.description}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
                {pillar.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics Grid */}
        <div className="pt-10 border-t border-purple-900/30">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
              Evidencia Cuantitativa
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading">
              Impacto Sostenible en la Comunidad
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Resultados empíricos obtenidos en la Ciudad Universitaria de Rosario (CUR).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {IMPACT_METRICS.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between text-center group hover:border-purple-600/40 transition-all"
              >
                <div className="mx-auto p-2 rounded-xl bg-purple-950/50 border border-purple-900/40 mb-3">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight tabular-nums group-hover:text-purple-300 transition-colors">
                    {item.metric}
                  </div>
                  <div className="text-xs font-semibold text-purple-400 mt-1 leading-snug">{item.label}</div>
                  <p className="text-[11px] text-slate-400 mt-2 font-light leading-relaxed hidden sm:block">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Replicability Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-slate-900 border border-purple-700/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Transferibilidad Institucional
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Un Modelo Replicable para la Administración Pública
            </h4>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Cualquier organismo estatal, universidad, municipio o área de custodia con restricciones presupuestarias
              puede implementar esta matriz sin quedar rehén de licencias corporativas privativas.
            </p>
          </div>

          <button
            onClick={onOpenAbstract}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-950 shrink-0 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Resumen del Proyecto</span>
          </button>
        </div>
      </div>
    </section>
  );
}
