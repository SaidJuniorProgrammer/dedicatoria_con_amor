import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function WelcomeScreen({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center transition-all duration-700 select-none ${
        isOpening ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtítulo superior */}
      <p className="tracking-[0.25em] text-xs text-slate-200 uppercase font-sans font-semibold mb-1">
        UN REGALO PARA TI
      </p>

      {/* Nombre principal en fuente Serif Cursiva */}
      <h1 className="font-serif italic text-4xl sm:text-5xl text-[#2CE5F6] mt-2 mb-8 drop-shadow-[0_0_15px_rgba(44,229,246,0.3)]">
        Laura
      </h1>

      {/* Ilustración interactiva de Sobre (Envelope) */}
      <div
        onClick={handleOpenClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpenClick();
        }}
        className="w-full max-w-[320px] aspect-[16/10] rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] border border-cyan-300/30 bg-[#0E3547]"
      >
        {/* Fondo del interior del sobre */}
        <div className="absolute inset-0 bg-[#0c2f42] flex items-center justify-center">
          <div className="w-11/12 h-4/5 bg-slate-100/10 rounded-lg border border-cyan-200/20" />
        </div>

        {/* Solapas triangulares con SVG para precisión absoluta */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 320 200"
          preserveAspectRatio="none"
        >
          {/* Solapa izquierda: tono #1B7A85 */}
          <polygon
            points="0,0 0,200 160,100"
            fill="#1B7A85"
            opacity="0.95"
          />
          {/* Solapa derecha: tono #1B7A85 */}
          <polygon
            points="320,0 320,200 160,100"
            fill="#1B7A85"
            opacity="0.90"
          />
          {/* Solapa inferior: tono #22929F */}
          <polygon
            points="0,200 320,200 160,95"
            fill="#22929F"
          />
          {/* Solapa superior: tono #47D7E3 */}
          <polygon
            points="0,0 320,0 160,105"
            fill="#47D7E3"
            opacity="0.9"
            className={`transition-all duration-500 origin-top ${
              isOpening ? 'opacity-20 transform -translate-y-4' : ''
            }`}
          />
        </svg>

        {/* Botón circular central con efecto 3D y resplandor */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-200 to-[#19C3D6] shadow-[0_0_20px_rgba(44,229,246,0.6)] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 border-2 border-white/60">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Botón tipo píldora debajo del sobre */}
      <button
        onClick={handleOpenClick}
        type="button"
        className="mt-8 bg-[#31D7E8] hover:bg-[#2CE5F6] text-[#041E30] font-semibold px-8 py-3 rounded-full shadow-[0_0_25px_rgba(49,215,232,0.5)] transition-all duration-300 active:scale-95 text-base tracking-wide flex items-center gap-2"
      >
        <span>Toca para abrir</span>
        <Sparkles className="w-4 h-4 text-[#041E30]" />
      </button>
    </div>
  );
}
