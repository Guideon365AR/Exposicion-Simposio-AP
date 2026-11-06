import React from 'react';

// UNR and Congreso sobre Democracia official styling vectors
export function CongresoDemocraciaLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Dome / Cúpula emblem */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-500/30 text-purple-300 shadow-inner">
        <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Classical Dome Silhouette matching the official poster */}
          <path d="M24 6v4" />
          <circle cx="24" cy="5" r="1.5" fill="currentColor" />
          <path d="M16 16c0-6 4-10 8-10s8 4 8 10" />
          <path d="M12 22h24" />
          <path d="M14 22v6M18 22v6M22 22v6M26 22v6M30 22v6M34 22v6" />
          <path d="M10 28h28" />
          <path d="M12 28v8M36 28v8" />
          <path d="M8 36h32" />
          <path d="M8 40h32" />
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-bold tracking-widest uppercase text-purple-300">Congreso sobre</span>
        <span className="text-sm font-extrabold tracking-tight text-white leading-none">DEMOCRACIA</span>
        <span className="text-[9px] text-slate-400 font-medium">ROSARIO, ARG. · 2026</span>
      </div>
    </div>
  );
}

export function UNRBadge({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 text-xs font-semibold ${className}`}>
      <span className="font-bold text-purple-400">FCPOLIT</span>
      <span className="text-slate-500">|</span>
      <span className="tracking-wide">UNR</span>
    </div>
  );
}

export function OrganizersRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-slate-400 text-xs font-medium">
      <div className="flex items-center gap-1.5">
        <span className="font-extrabold text-slate-300 text-sm tracking-wider">INPAE</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="font-extrabold text-purple-300 text-sm tracking-tight lowercase">aaeap</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-slate-300 text-sm">Política & Gestión</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-slate-300 text-sm">PoliLab <span className="text-purple-400 font-normal">UNR</span></span>
      </div>
      <div className="text-[11px] text-slate-500 hidden lg:inline">
        Cátedras Políticas Públicas & Organizaciones Públicas
      </div>
    </div>
  );
}
