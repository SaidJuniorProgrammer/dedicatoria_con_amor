import React, { useState } from 'react';
import { Heart, Bird, Users, Sparkles } from 'lucide-react';

export default function SectionLetter() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <section className="my-8">
      {!isLetterOpen ? (
        /* VISTA CERRADA */
        <div className="relative bg-[#113247]/80 backdrop-blur-md border border-cyan-300/30 rounded-2xl p-8 text-center shadow-xl overflow-hidden transition-all duration-300 hover:border-cyan-300/50">
          {/* Líneas diagonales internas simulando un sobre técnico */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0" y1="0" x2="50%" y2="50%" stroke="#2CE5F6" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100%" y1="0" x2="50%" y2="50%" stroke="#2CE5F6" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Pequeños corchetes decorativos en las esquinas inferiores */}
          <div className="absolute bottom-3 left-3 text-cyan-400/50 font-mono text-xs select-none">
            &#91; + &#93;
          </div>
          <div className="absolute bottom-3 right-3 text-cyan-400/50 font-mono text-xs select-none">
            &#91; + &#93;
          </div>

          {/* Texto superior */}
          <p className="tracking-[0.2em] text-xs text-cyan-200/80 uppercase font-sans font-semibold mb-6">
            MENSAJE PRIVADO
          </p>

          {/* Círculo central turquesa brillante */}
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#2CE5F6] shadow-[0_0_20px_rgba(44,229,246,0.6)] flex items-center justify-center transform transition-transform hover:scale-105">
            <Heart className="w-6 h-6 text-[#06263D] fill-[#06263D]" />
          </div>

          {/* Botón ABRIR CARTA */}
          <button
            onClick={() => setIsLetterOpen(true)}
            type="button"
            className="border border-cyan-400/40 px-8 py-2.5 rounded-full font-serif italic tracking-widest text-cyan-200 hover:bg-cyan-400/10 hover:border-cyan-400/80 active:scale-95 transition-all text-sm uppercase"
          >
            ABRIR CARTA
          </button>
        </div>
      ) : (
        /* VISTA ABIERTA */
        <div className="bg-[#113247]/90 backdrop-blur-md border border-cyan-300/40 rounded-2xl p-6 sm:p-8 text-center shadow-2xl transition-all duration-500 animate-fade-in relative">
          <div className="font-serif italic text-lg leading-relaxed text-slate-100 space-y-6">
            {/* Párrafo 1 */}
            <p>
              Holi mi Patita{' '}
              <Bird className="inline w-4 h-4 text-amber-300 mx-1 align-middle" />
              <Heart className="inline w-4 h-4 text-cyan-300 fill-cyan-300 mx-1 align-middle" />{' '}
              No siempre te lo digo, pero me encanta la vida que tenemos{' '}
              <Users className="inline w-4 h-4 text-pink-300 mx-1 align-middle" />. Los momentos
              chiquitos que vivimos, las risas, la tranquilidad y la forma en que hacemos que lo
              normal se sienta especial. Si tuviera que elegir otra vez, te elegiría a ti. Todas las
              veces que sean necesarias{' '}
              <Sparkles className="inline w-4 h-4 text-amber-200 mx-1 align-middle" /> de aquí hasta el
              infinito, al igual de mi gran amor hacia ti{' '}
              <Heart className="inline w-4 h-4 text-cyan-300 fill-cyan-300 mx-1 align-middle" />.
            </p>

            {/* Párrafo 2 */}
            <p>
              Prometo estar contigo en los días buenos y en los difíciles. Caminar a tu lado, reír
              contigo y sostener tu mano siempre que lo necesites.
            </p>

            {/* Firma */}
            <div className="pt-4 space-y-1">
              <div className="flex items-center justify-center gap-1">
                <span>Att:</span>
                <Heart className="inline w-4 h-4 text-cyan-300 fill-cyan-300" />
              </div>
              <p className="font-sans font-medium text-sm text-cyan-100">M²</p>
              <p className="font-sans text-xs text-cyan-200/70">Jjjj</p>
              <div className="text-xs tracking-[0.25em] uppercase text-cyan-200/80 font-sans pt-3 font-semibold">
                CON AMOR
              </div>
              <div className="font-serif italic text-2xl text-white pt-1">
                Mateo
              </div>
            </div>
          </div>

          {/* Botón CERRAR */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsLetterOpen(false)}
              type="button"
              className="border border-cyan-400/30 px-6 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase text-cyan-200 hover:bg-cyan-400/10 active:scale-95 transition-all"
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
