import React from 'react';
import { Quote, AlertTriangle, Cpu, TrendingUp, Users, ArrowRight } from 'lucide-react';

export function SolowParadoxSection() {
  return (
    <section id="desafio" className="py-20 md:py-32 bg-slate-900/60 border-t border-purple-900/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
            Marco Conceptual & Debate Teórico
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Superando la Paradoja de Solow en la Universidad Pública
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Cómo un equipo operativo de 3 personas demostró que la Inteligencia Artificial en el Estado no es una moda
            corporativa, sino una palanca imprescindible ante severas restricciones presupuestarias.
          </p>
        </div>

        {/* Featured Solow Quote Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/60 via-slate-900 to-slate-900 border border-purple-800/40 shadow-xl relative overflow-hidden mb-14">
          <div className="absolute top-4 right-6 text-purple-500/10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="text-xs uppercase tracking-widest font-bold text-purple-300">
              Robert Solow · Premio Nobel de Economía (1987)
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-white italic leading-snug font-heading">
              "Podemos ver la era de las computadoras en todas partes, menos en las estadísticas de productividad."
            </blockquote>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light pt-2">
              Casi 40 años después, este debate renace con fuerza frente a la Inteligencia Artificial. Académicos y
              analistas suelen señalar que la IA en las organizaciones es a menudo una moda de marketing o un costo
              excesivo con escaso impacto en el día a día. Sin embargo, en la Universidad Nacional de Rosario demostramos
              que la paradoja no se cumple cuando la tecnología se diseña con rigor de servicio público.
            </p>
          </div>
        </div>

        {/* 3 Pillars of the Challenge vs Response */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: La Inercia Burocrática */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">El Estado Lineal del Siglo XIX</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              El sector público suele operar con rutinas burocráticas heredadas para resolver problemas complejos del siglo XXI.
              En el resguardo patrimonial, esto significaba libros de actas manuales, planillas aisladas y un funcionamiento
              100% reactivo: enterarse del siniestro horas o días después.
            </p>
            <div className="text-xs text-amber-300/80 font-medium">Diagnóstico: Parálisis reactiva y datos sepultados</div>
          </div>

          {/* Card 2: Restricciones Severas */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Innovar en Escasez Estricta</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              La UNR no contaba con excedentes presupuestarios para contratar consultoras de software ni licencias
              privativas millonarias. El proyecto fue concebido y ejecutado por un equipo interno de solo 3 personas,
              quienes simultáneamente debían cubrir sus tareas operativas cotidianas.
            </p>
            <div className="text-xs text-purple-300/80 font-medium">Condición: 3 personas · Cero licencias privativas</div>
          </div>

          {/* Card 3: IA Agéntica como Multiplicador */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">IA Agéntica: Multiplicador Real</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Utilizar agentes de Inteligencia Artificial permitió diseñar arquitecturas de software complejas, depurar
              código en tiempo récord y estructurar bases de datos relacionales en PostgreSQL. Sin este apalancamiento,
              la transformación hubiera sido materialmente inviable.
            </p>
            <div className="text-xs text-emerald-300/80 font-medium">Solución: Desarrollo a medida y código propio</div>
          </div>
        </div>

        {/* Dialogue with CLAD & Oscar Oszlak */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-purple-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
              Diálogo Teórico con Oscar Oszlak y el CLAD
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-heading">
              Mutaciones del Estado en la denominada Era Exponencial
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              El proyecto dialoga directamente con los lineamientos del Centro Latinoamericano de Administración para el
              Desarrollo (CLAD): transformar el dato administrativo en inteligencia preventiva y pasar de rutinas obsoletas
              a una gobernanza pública basada en evidencia empírica.
            </p>
          </div>

          <a
            href="#arquitectura"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-200 text-xs font-semibold shrink-0 transition-colors"
          >
            <span>Ver Arquitectura Técnica</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
