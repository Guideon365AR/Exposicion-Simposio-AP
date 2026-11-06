import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, FastForward, Headphones } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export function AudioPlayer({
  src,
  title = 'Locución de la Ponencia: Discurso completo sobre Transformación Digital SRP'
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 505);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleSkip = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
  };

  const toggleRate = () => {
    const rates = [1, 1.25, 1.5];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const chapters = [
    { label: 'Inicio', time: 0 },
    { label: 'Paradoja de Solow', time: 27 },
    { label: 'Restricciones UNR', time: 75 },
    { label: 'IA Agéntica', time: 148 },
    { label: 'Herramientas SRP', time: 275 },
    { label: 'Pilares Institucionales', time: 371 },
    { label: 'Conclusión', time: 452 }
  ];

  return (
    <div className="w-full bg-slate-900/90 border border-purple-800/40 rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur-md">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">Audio Oficial</div>
            <div className="text-sm font-medium text-white truncate max-w-md">{title}</div>
          </div>
        </div>

        {/* Speed and mute controls */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={toggleRate}
            className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono transition-colors"
            title="Velocidad de reproducción"
          >
            {playbackRate}x
          </button>
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main playback and progress bar */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSkip(-10)}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Retroceder 10 segundos"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-950 active:scale-95 transition-transform"
            aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={() => handleSkip(10)}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Adelantar 10 segundos"
          >
            <FastForward className="w-4 h-4" />
          </button>

          {/* Slider */}
          <div className="flex-1 flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 w-10 text-right tabular-nums">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <span className="text-[11px] font-mono text-slate-400 w-10 tabular-nums">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Chapter shortcut pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] text-slate-500 font-medium mr-1">Capítulos:</span>
          {chapters.map((ch) => (
            <button
              key={ch.time}
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = ch.time;
                  setCurrentTime(ch.time);
                  if (!isPlaying) {
                    audioRef.current.play().catch(() => {});
                    setIsPlaying(true);
                  }
                }
              }}
              className={`text-[11px] px-2 py-0.5 rounded-md transition-colors ${
                currentTime >= ch.time && (ch.time === 452 || currentTime < ch.time + 90)
                  ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
