import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function SectionWhatILove() {
  return (
    <section className="my-8 bg-[#113247]/80 backdrop-blur-md border border-cyan-300/20 rounded-2xl p-6 sm:p-8 shadow-xl text-center">
      <h3 className="font-serif italic text-3xl text-center mb-6 text-white drop-shadow-sm">
        Lo que más amo de Laura
      </h3>

      <div className="text-slate-200 space-y-2.5 text-base font-sans">
        <p className="flex items-center justify-center">
          <span>Amor cada pequeña parte de ti</span>
          <Heart className="inline w-4 h-4 text-cyan-300 fill-cyan-300 ml-1.5" />
        </p>

        <p className="flex items-center justify-center">
          <span>Desde la punta de tu cabello hasta la punta de tu pie</span>
          <Sparkles className="inline w-4 h-4 text-amber-200 ml-1.5" />
        </p>

        <p className="font-medium text-cyan-200 pt-2 text-sm tracking-wide uppercase">
          Pero amo más
        </p>

        <p className="font-serif italic text-lg text-white">Tu sonrisa</p>
        <p className="font-serif italic text-lg text-white">Tus ojitos</p>
        <p className="font-serif italic text-lg text-white">Tu pelito</p>
        <p className="font-serif italic text-lg text-white">Tus manitos</p>

        <p className="font-serif italic text-lg text-white flex items-center justify-center">
          <span>Tus abrazos</span>
          <Heart className="inline w-4 h-4 text-cyan-300 fill-cyan-300 ml-1.5" />
        </p>

        <p className="font-medium text-cyan-200 pt-2 text-sm tracking-wide uppercase">
          Y no menos importante
        </p>

        <p className="font-serif italic text-lg text-white flex items-center justify-center">
          <span>Cuando te molestas</span>
          <Sparkles className="inline w-4 h-4 text-amber-200 mx-1.5" />
          <Heart className="inline w-4 h-4 text-cyan-300 fill-cyan-300" />
        </p>
      </div>
    </section>
  );
}
