import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Star, Eye, Image as ImageIcon, X, ChevronRight } from 'lucide-react';
import { CONGRESS_PROGRAM, PanelSession } from '../data/congresoData';

interface ProgramSectionProps {
  onSelectSession: (session: PanelSession) => void;
}

export function ProgramSection({ onSelectSession }: ProgramSectionProps) {
  const [selectedDay, setSelectedDay] = useState<string>('Miércoles 4/11');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const flyers = [
    {
      title: 'Afiche Oficial del VII Simposio AP',
      subtitle: 'Del expediente al ALGORITMO: mutaciones del Estado en la era exponencial',
      src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.21.58_PM_583ad3fc.jpeg'
    },
    {
      title: 'Programa Miércoles 4/11 (Panel Central)',
      subtitle: '16:00 h: Usos de la IA en la Administración Pública · Gustavo Núñez',
      src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.21.59_PM__1__d8739a64.jpeg'
    },
    {
      title: 'Apertura: Conferencia Oscar Oszlak',
      subtitle: 'Martes 3/11 y Miércoles mañana · Federalismo Digital',
      src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.21.59_PM_a71175c8.jpeg'
    },
    {
      title: 'Programa Jueves 5/11 (Mañana)',
      subtitle: 'Políticas públicas comparadas y formación en la era exponencial',
      src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.21.59_PM__2__92257f60.jpeg'
    },
    {
      title: 'Programa Jueves 5/11 (Tarde)',
      subtitle: 'Formación pública para Estados en transición y Diálogo abierto',
      src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.21.59_PM__3__cdddf4f7.jpeg'
    }
  ];

  const days = ['Todos', 'Miércoles 4/11', 'Martes 3/11', 'Jueves 5/11'];

  const filteredSessions = CONGRESS_PROGRAM.filter((s) => {
    if (selectedDay === 'Todos') return true;
    return s.day === selectedDay;
  });

  return (
    <section id="programa" className="py-20 md:py-32 bg-slate-950 border-t border-purple-900/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
            Cronograma Oficial del Simposio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Programa del VII Simposio de Administración Pública
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Explorá todas las actividades y paneles del congreso. La ponencia sobre{' '}
            <strong className="text-purple-300 font-medium">Transformación Digital SRP</strong> tendrá lugar el{' '}
            <strong className="text-white font-medium">Miércoles 4 de noviembre a las 16:00 h en el Aula 5</strong>.
          </p>

          {/* Day Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDay(d)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedDay === d
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {d === 'Miércoles 4/11' ? '⭐ ' + d + ' (Ponencia SRP)' : d}
              </button>
            ))}
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-4 mb-20">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className={`p-6 sm:p-7 rounded-3xl border transition-all ${
                session.isFeatured
                  ? 'bg-gradient-to-r from-purple-950/80 via-slate-900 to-slate-900 border-purple-500 shadow-xl shadow-purple-950/40 ring-1 ring-purple-500/50'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    {session.isFeatured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500 text-white font-bold tracking-wide text-[11px]">
                        <Star className="w-3 h-3 fill-current" />
                        <span>MESA CENTRAL · PONENCIA GUSTAVO NÚÑEZ</span>
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium">
                      {session.day}
                    </span>
                    <span className="inline-flex items-center gap-1 text-purple-300 font-semibold font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {session.time}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {session.room}
                    </span>
                    <span className="text-slate-500 uppercase tracking-wider font-semibold text-[10px]">
                      {session.type}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                    {session.title}
                  </h3>

                  {session.description && (
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-3xl">
                      {session.description}
                    </p>
                  )}

                  {/* Speakers list */}
                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      {session.presenter ? 'Conferencista' : 'Exponen'}:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {session.speakers.map((spk, idx) => (
                        <div
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs ${
                            spk.isMain
                              ? 'bg-purple-600/30 border border-purple-400/60 text-white font-bold'
                              : 'bg-slate-950/70 border border-slate-800 text-slate-300'
                          }`}
                        >
                          <User className="w-3 h-3 text-purple-400" />
                          <span>{spk.name}</span>
                          <span className="text-slate-500 text-[10px]">({spk.affiliation})</span>
                        </div>
                      ))}
                    </div>
                    {session.moderator && (
                      <div className="text-xs text-slate-400 mt-2">
                        <span className="text-slate-500 font-medium">Modera:</span> {session.moderator}
                      </div>
                    )}
                    {session.presenter && (
                      <div className="text-xs text-slate-400 mt-2">
                        <span className="text-slate-500 font-medium">Presenta:</span> {session.presenter}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex lg:flex-col items-center gap-2 shrink-0">
                  <button
                    onClick={() => onSelectSession(session)}
                    className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      session.isFeatured
                        ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-950'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar Actividad</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Flyers & Graphic Material Gallery */}
        <div className="pt-12 border-t border-purple-900/30">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
              <ImageIcon className="w-4 h-4" />
              <span>Material Gráfico Oficial</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Afiches y Programas Oficiales del Evento
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Hacé clic en cualquier afiche para visualizarlo en alta resolución y verificar la programación completa.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {flyers.map((flyer, index) => (
              <div
                key={index}
                onClick={() => setLightboxImage(flyer.src)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-purple-500 cursor-pointer transition-all shadow-md hover:shadow-purple-950/50 flex flex-col"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-slate-950 relative">
                  <img
                    src={flyer.src}
                    alt={flyer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-slate-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/20">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-slate-900 flex-1 flex flex-col justify-between">
                  <div className="text-xs font-bold text-white line-clamp-1">{flyer.title}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{flyer.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-white/20 z-10 transition-colors"
                aria-label="Cerrar imagen"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={lightboxImage}
                alt="Afiche oficial"
                className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl mx-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
