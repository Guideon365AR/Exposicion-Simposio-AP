import React from 'react';
import { Calendar, Video, FileText, MapPin, Clock, Users, ArrowDown, Sparkles } from 'lucide-react';
import { CongresoDemocraciaLogo, UNRBadge, OrganizersRow } from './Logos';
import { AudioPlayer } from './AudioPlayer';
import { MAIN_SPEAKER } from '../data/congresoData';

interface HeroProps {
  onOpenCalendar: () => void;
  onOpenAbstract: () => void;
}

export function Hero({ onOpenCalendar, onOpenAbstract }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-between">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/25 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle geometric grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <CongresoDemocraciaLogo />
          <div className="flex items-center gap-2">
            <UNRBadge />
            <span className="text-xs text-slate-400 border border-slate-800 bg-slate-900/50 px-3 py-1 rounded-md hidden sm:inline-block">
              3, 4 y 5 de Noviembre 2026
            </span>
          </div>
        </div>

        {/* Hero Central Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (8 cols): Title & Description */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-200 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>VII Simposio de Administración Pública · Ponencia Destacada</span>
            </div>

            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Del expediente al ALGORITMO: mutaciones del Estado en la era exponencial
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
              Transformación Digital del{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">
                Servicio de Resguardo Patrimonial
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              De un modelo reactivo analógico hacia un paradigma predictivo impulsado por{' '}
              <strong className="text-white font-medium">Inteligencia Artificial Agéntica</strong> y datos empíricos en
              la Universidad Nacional de Rosario.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#video"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/50 transition-all active:scale-[0.98]"
              >
                <Video className="w-4 h-4" />
                <span>Ver Presentación en Video</span>
              </a>

              <button
                onClick={onOpenCalendar}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Agendar (4/11 · 16:00 h)</span>
              </button>

              <button
                onClick={onOpenAbstract}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resumen Académico</span>
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Event Info Card & Speaker */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900/90 to-purple-950/40 border border-purple-800/40 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-6">
              {/* Speaker Profile header */}
              <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-purple-900/50 border border-purple-500/30 overflow-hidden flex items-center justify-center text-purple-200 font-bold text-xl shrink-0 shadow-md">
                  {/* Avatar or speaker initial */}
                  <img
                    src="/assets/aistudio/Presentacion_Congreso_intro_769e4df9.mp4"
                    className="w-full h-full object-cover hidden"
                    alt="Gustavo Núñez"
                  />
                  <span>GN</span>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-purple-300 font-semibold">Expositor</div>
                  <h3 className="text-lg font-bold text-white leading-tight font-heading">{MAIN_SPEAKER.name}</h3>
                  <p className="text-xs text-slate-400">{MAIN_SPEAKER.title}</p>
                  <p className="text-xs text-purple-400/90 font-medium">{MAIN_SPEAKER.institution}</p>
                </div>
              </div>

              {/* Panel Details */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-950/70 border border-purple-800/50 text-purple-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Mesa / Panel</div>
                    <div className="font-semibold text-white">Usos de la IA en la Administración Pública</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-950/70 border border-purple-800/50 text-purple-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Fecha & Horario</div>
                    <div className="font-semibold text-white">Miércoles 4 de Noviembre de 2026 · 16:00 h</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-950/70 border border-purple-800/50 text-purple-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Lugar</div>
                    <div className="font-semibold text-white">Aula 5 | Aulario</div>
                    <div className="text-xs text-slate-400">Facultad de Ciencia Política y RRII – UNR (Rosario)</div>
                  </div>
                </div>
              </div>

              {/* Invitation button inside card */}
              <button
                onClick={onOpenCalendar}
                className="w-full py-3 px-4 bg-purple-600/90 hover:bg-purple-600 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-950 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Agregar a Google Calendar / iCal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Audio Player Strip (Full Width) */}
        <div className="mt-10 max-w-4xl mx-auto">
          <AudioPlayer
            src="/assets/aistudio/ElevenLabs_2026-11-06T15_56_49_Guideon_ivc_s50_sim95_v4_4b8892c2.mp3"
            title="Audio Oficial de la Ponencia · Locución completa de Gustavo Núñez en el Congreso"
          />
        </div>

        {/* Organizers Strip */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="text-center text-[11px] uppercase tracking-wider text-slate-500 mb-3">
            Organizan el VII Simposio de Administración Pública
          </div>
          <OrganizersRow />
        </div>
      </div>
    </section>
  );
}
