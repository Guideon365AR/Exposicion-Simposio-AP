import React, { useState, useRef } from 'react';
import { Maximize } from 'lucide-react';

export function VideoHub() {
  const [activeTab, setActiveTab] = useState<'intro' | 'slides'>('intro');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = {
    intro: {
      id: 'intro',
      title: 'Presentación del Expositor: Gustavo Núñez',
      subtitle: 'Introducción a la experiencia del Servicio de Resguardo Patrimonial',
      src: '/assets/aistudio/Presentacion_Congreso_intro_769e4df9.mp4',
      badge: 'Video Intro',
      description:
        'Gustavo Núñez explica el origen histórico del Servicio de Resguardo Patrimonial (evolución de la guardia de los años 80), las funciones críticas de custodia y el inicio del proyecto de transformación digital hace dos años en la UNR.'
    },
    slides: {
      id: 'slides',
      title: 'Presentación Explicativa Completa: Arquitectura y Métricas',
      subtitle: 'Despliegue de las 3 capas tecnológicas, analítica predictiva y resultados',
      src: '/assets/aistudio/Transformaci_n_Digital_SRP_UNR__1__0c398983.mp4',
      badge: 'Video Explicativo Completo',
      description:
        'Video oficial con voz en off que detalla el diagnóstico inicial (el "Antes"), los 3 pilares del plan integral (TOGAF/ADKAR/IoT), la arquitectura de 3 capas (SGD-SRP, Cloud privada e IA predictiva con mapas de calor espaciotemporales) y los indicadores de impacto cuantificable.'
    }
  };

  const currentVideo = videos[activeTab];

  const handleTabChange = (tab: 'intro' | 'slides') => {
    setActiveTab(tab);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="video" className="py-20 md:py-32 bg-slate-950 border-t border-purple-900/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
            Material Audiovisual Oficial
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Introducción en Video de la Ponencia
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light">
            Conocé de primera mano el recorrido del proyecto, su marco conceptual y los resultados demostrables en la
            Universidad Nacional de Rosario.
          </p>

          {/* Video Selector Tabs */}
          <div className="inline-flex p-1.5 mt-8 bg-slate-900 border border-slate-800 rounded-2xl gap-2">
            <button
              onClick={() => handleTabChange('intro')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'intro'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              1. Introducción de Gustavo Núñez
            </button>
            <button
              onClick={() => handleTabChange('slides')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'slides'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              2. Video Explicativo & Arquitectura
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-purple-800/40 shadow-2xl group">
          <div className="w-full bg-black relative flex items-center justify-center">
            <video
              ref={videoRef}
              key={currentVideo.src}
              src={currentVideo.src}
              className="w-full h-auto max-h-[80vh] object-contain"
              playsInline
              controls
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>

          {/* Under-video metadata description bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-purple-950/40 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider">
                  {currentVideo.badge}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-medium">UNR 2026</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading">{currentVideo.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">{currentVideo.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={toggleFullscreen}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Maximize className="w-4 h-4" />
                <span>Pantalla Completa</span>
              </button>
              <a
                href="#desafio"
                className="px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Leer Caso Teórico</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
