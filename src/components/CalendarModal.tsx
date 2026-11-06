import React, { useState } from 'react';
import { X, Calendar, Download, ExternalLink, Check, Clock, MapPin, Sparkles } from 'lucide-react';
import { generateIcsContent, generateGoogleCalendarUrl, CalendarEventData } from '../utils/calendar';
import { PanelSession } from '../data/congresoData';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  session?: PanelSession | null;
}

export function CalendarModal({ isOpen, onClose, session }: CalendarModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Defaults to featured Gustavo Núñez session if none selected
  const isDefault = !session;
  const title = session
    ? `${session.type}: ${session.title}`
    : 'Panel: Usos de la IA en la Administración Pública · Ponencia Gustavo Núñez (UNR)';

  const location = session
    ? `${session.room}, Facultad de Ciencia Política y RRII – UNR, Beruti y Riobamba, Rosario`
    : 'Aula 5 | Aulario, Facultad de Ciencia Política y RRII – UNR, Beruti y Riobamba, Rosario, Argentina';

  const timeStr = session ? `${session.day} a las ${session.time}` : 'Miércoles 4 de Noviembre de 2026 a las 16:00 h';

  const dateBase = session?.dateStr || '2026-11-04';
  const startHour = session ? parseInt(session.time.split(':')[0], 10) : 16;
  
  // Argentina is UTC-3, so 16:00 local is 19:00 UTC
  const startUtcHour = startHour + 3;
  const endUtcHour = startUtcHour + 2;

  const eventData: CalendarEventData = {
    title,
    location,
    description: `Ponencia en el XVII Congreso Nacional y X Internacional sobre Democracia / VII Simposio de Administración Pública (UNR).\n\nTransformación Digital del Servicio de Resguardo Patrimonial (SRP) por Gustavo Núñez.\n\nLugar: ${location}`,
    startDate: new Date(`${dateBase}T${startUtcHour.toString().padStart(2, '0')}:00:00.000Z`),
    endDate: new Date(`${dateBase}T${endUtcHour.toString().padStart(2, '0')}:00:00.000Z`),
  };

  const googleUrl = generateGoogleCalendarUrl(eventData);

  const handleDownloadIcs = () => {
    const icsString = generateIcsContent(eventData);
    const blob = new Blob([icsString], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ponencia-congreso-democracia-unr.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyDetails = () => {
    const text = `${title}\nFecha y hora: ${timeStr}\nLugar: ${location}\nExpositor: Gustavo Núñez (UNR)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-purple-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950 border border-purple-600/40 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendar en tu Calendario</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{title}</h3>
        </div>

        {/* Details preview */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="font-semibold text-white">{timeStr}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>{location}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-950 transition-all active:scale-[0.98]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Agregar a Google Calendar</span>
          </a>

          <button
            onClick={handleDownloadIcs}
            className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>Descargar archivo .ICS (Apple / Outlook / iCal)</span>
          </button>

          <button
            onClick={handleCopyDetails}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">¡Copiado al portapapeles!</span>
              </>
            ) : (
              <span>Copiar datos de la actividad</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
