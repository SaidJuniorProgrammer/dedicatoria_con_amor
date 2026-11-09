import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioController({ isPlaying, togglePlay }) {
  return (
    <button
      onClick={togglePlay}
      type="button"
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-[#113247]/80 backdrop-blur-md border border-cyan-300/30 text-[#2CE5F6] shadow-[0_0_15px_rgba(44,229,246,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 group"
      title={isPlaying ? 'Silenciar música' : 'Activar música'}
      aria-label={isPlaying ? 'Silenciar música' : 'Activar música'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-cyan-300 animate-pulse" />
      ) : (
        <VolumeX className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 transition-colors" />
      )}
    </button>
  );
}
