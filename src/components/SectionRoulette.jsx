import React, { useState, useRef } from 'react';
import {
  IceCream,
  Utensils,
  Film,
  Sun,
  Music,
  Gift,
  CalendarCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const ROULETTE_OPTIONS = [
  {
    id: 0,
    label: 'Helado',
    question: '¿Quieres comer un helado conmigo?',
    Icon: IceCream,
  },
  {
    id: 1,
    label: 'Cocinar',
    question: '¿Quieres cocinar juntos conmigo?',
    Icon: Utensils,
  },
  {
    id: 2,
    label: 'Cine',
    question: '¿Quieres ir al cine conmigo?',
    Icon: Film,
  },
  {
    id: 3,
    label: 'Picnic',
    question: '¿Quieres tener un picnic conmigo?',
    Icon: Sun,
  },
  {
    id: 4,
    label: 'Baile',
    question: '¿Quieres bailar conmigo?',
    Icon: Music,
  },
  {
    id: 5,
    label: 'Sorpresa',
    question: '¿Aceptas una salida sorpresa conmigo?',
    Icon: Gift,
  },
];

export default function SectionRoulette() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningOption, setWinningOption] = useState(null);
  const [showProposal, setShowProposal] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  const currentRotationRef = useRef(0);

  const spinRoulette = () => {
    if (isSpinning) return;

    setShowProposal(false);
    setIsBooked(false);
    setNoOffset({ x: 0, y: 0 });
    setIsSpinning(true);

    // Pick a random winner from 0 to 5
    const winnerIndex = Math.floor(Math.random() * ROULETTE_OPTIONS.length);
    const winner = ROULETTE_OPTIONS[winnerIndex];

    // Compute extra full spins (5 to 8 rotations)
    const fullSpins = 5 + Math.floor(Math.random() * 4); // 5, 6, 7, 8
    const currentRot = currentRotationRef.current;
    const currentNormalized = ((currentRot % 360) + 360) % 360;

    // Target rotation to land winnerIndex at the top pointer (0 deg)
    const targetDeg = (360 - winnerIndex * 60) % 360;
    let delta = targetDeg - currentNormalized;
    if (delta < 0) {
      delta += 360;
    }

    const nextRotation = currentRot + fullSpins * 360 + delta;
    currentRotationRef.current = nextRotation;
    setRotation(nextRotation);

    // Wait for the 4s animation to finish
    setTimeout(() => {
      setIsSpinning(false);
      setWinningOption(winner);
      setShowProposal(true);
    }, 4100);
  };

  const moveNoButton = () => {
    // Escape calculation: random jump between -110px and +110px horizontal, -60px and +60px vertical
    const randomX = (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random() * 60);
    const randomY = (Math.random() > 0.5 ? 1 : -1) * (30 + Math.random() * 40);
    setNoOffset({ x: randomX, y: randomY });
  };

  const handleAccept = () => {
    setIsBooked(true);

    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#2CE5F6', '#47D7E3', '#ffffff', '#ffd166', '#ff70a6'],
    });
  };

  const resetRoulette = () => {
    setShowProposal(false);
    setIsBooked(false);
    setWinningOption(null);
    setNoOffset({ x: 0, y: 0 });
  };

  return (
    <section className="my-10 text-center">
      {/* Subtítulo */}
      <p className="text-xs tracking-[0.25em] uppercase text-cyan-300 font-semibold mb-1">
        PARA TI
      </p>

      {/* Título */}
      <h3 className="font-serif italic text-3xl text-white mt-1">
        La ruleta tiene una pregunta
      </h3>

      {/* Bajada */}
      <p className="text-sm text-slate-300 mt-1 mb-8">
        Gira... y responde con el corazón
      </p>

      {/* Contenedor de la Ruleta con Puntero Superior Fijo */}
      <div className="relative w-[300px] h-[300px] mx-auto mb-6">
        {/* Puntero Superior Fijo (indicador apuntando hacia abajo en el borde superior) */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[22px] border-t-[#2CE5F6] filter drop-shadow-[0_2px_8px_rgba(44,229,246,0.8)]" />
        </div>

        {/* Ruleta Circular */}
        <div
          className="w-full h-full rounded-full relative overflow-hidden shadow-[0_0_35px_rgba(4,30,48,0.9)] border-4 border-cyan-400/40"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)'
              : 'none',
          }}
        >
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <defs>
              <filter id="shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#2CE5F6" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* 6 Segmentos de 60 grados cada uno */}
            {ROULETTE_OPTIONS.map((opt, i) => {
              // Draw 60deg wedge centered at angle i*60, from i*60-30 to i*60+30
              const startAngle = (i * 60 - 30) * (Math.PI / 180);
              const endAngle = (i * 60 + 30) * (Math.PI / 180);
              const r = 148;
              const cx = 150;
              const cy = 150;

              // Arc points (where 0 rad is at 12 o'clock => x = cx + r*sin(a), y = cy - r*cos(a))
              const x1 = cx + r * Math.sin(startAngle);
              const y1 = cy - r * Math.cos(startAngle);
              const x2 = cx + r * Math.sin(endAngle);
              const y2 = cy - r * Math.cos(endAngle);

              const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
              const bgColor = i % 2 === 0 ? '#0B2C42' : '#14465B';

              return (
                <path
                  key={opt.id}
                  d={pathData}
                  fill={bgColor}
                  stroke="#2CE5F6"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                />
              );
            })}

            {/* Iconos y Etiquetas de cada segmento */}
            {ROULETTE_OPTIONS.map((opt, i) => {
              const IconComp = opt.Icon;
              return (
                <g
                  key={`content-${opt.id}`}
                  transform={`rotate(${i * 60} 150 150)`}
                >
                  <foreignObject
                    x="115"
                    y="32"
                    width="70"
                    height="75"
                    className="overflow-visible"
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <IconComp className="w-5 h-5 text-cyan-300 drop-shadow-[0_0_6px_rgba(44,229,246,0.8)] mb-1" />
                      <span className="font-sans font-semibold text-[10px] tracking-wider uppercase text-slate-100 select-none">
                        {opt.label}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Centro Decorativo */}
            <circle
              cx="150"
              cy="150"
              r="24"
              fill="#06263D"
              stroke="#2CE5F6"
              strokeWidth="2.5"
              filter="url(#shadow)"
            />
          </svg>
        </div>
      </div>

      {/* Botón Girar ruleta */}
      {!showProposal && (
        <button
          onClick={spinRoulette}
          disabled={isSpinning}
          type="button"
          className={`bg-[#31D7E8] hover:bg-[#2CE5F6] text-[#041E30] font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(49,215,232,0.5)] transition-all duration-300 active:scale-95 text-base tracking-wide ${
            isSpinning ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {isSpinning ? 'Girando...' : 'Girar ruleta'}
        </button>
      )}

      {/* Modal / Tarjeta de Propuesta al detenerse la ruleta */}
      {showProposal && winningOption && (
        <div className="mt-6 bg-[#113247]/95 backdrop-blur-md border border-cyan-300/40 rounded-2xl p-6 shadow-2xl animate-fade-in relative max-w-sm mx-auto">
          {!isBooked ? (
            <div>
              {/* Icono de la opción ganadora */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2CE5F6]/20 border border-[#2CE5F6]/50 flex items-center justify-center shadow-[0_0_15px_rgba(44,229,246,0.3)]">
                <winningOption.Icon className="w-8 h-8 text-[#2CE5F6]" />
              </div>

              {/* Pregunta correspondiente en grande */}
              <h4 className="font-serif italic text-2xl text-white mb-6 leading-snug px-2">
                {winningOption.question}
              </h4>

              {/* Contenedor de Botones (Sí y No que huye) */}
              <div className="relative min-h-[90px] flex items-center justify-center gap-4">
                {/* Botón Sí, acepto */}
                <button
                  onClick={handleAccept}
                  type="button"
                  className="bg-[#31D7E8] hover:bg-[#2CE5F6] text-[#041E30] font-bold px-7 py-3 rounded-full shadow-[0_0_20px_rgba(49,215,232,0.6)] text-base active:scale-95 transition-all z-10"
                >
                  ¡Sí, acepto!
                </button>

                {/* Botón No fugitivo (Runaway Button) */}
                <div
                  style={{
                    transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
                    transition: 'transform 0.15s ease-out',
                  }}
                  className="inline-block"
                >
                  <button
                    onMouseEnter={moveNoButton}
                    onTouchStart={moveNoButton}
                    onClick={moveNoButton}
                    type="button"
                    className="bg-slate-700/80 hover:bg-slate-600 text-slate-300 font-medium px-6 py-3 rounded-full text-sm select-none cursor-pointer border border-slate-600/50 shadow-md"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Tarjeta especial de confirmación estilo ticket */
            <div className="space-y-4 py-2 animate-fade-in">
              <CalendarCheck className="w-14 h-14 text-[#2CE5F6] mx-auto drop-shadow-[0_0_12px_rgba(44,229,246,0.8)]" />

              <h4 className="font-serif italic text-3xl text-white">
                ¡Cita Reservada!
              </h4>

              <div className="p-4 bg-[#0A2234] border border-dashed border-cyan-300/40 rounded-xl my-4 text-slate-200 font-sans text-sm leading-relaxed">
                <p>
                  Queda oficialmente agendada nuestra cita de:{' '}
                  <strong className="text-[#2CE5F6] font-semibold">
                    {winningOption.label}
                  </strong>{' '}
                  con Mateo.
                </p>
              </div>

              {/* Botón para volver a girar */}
              <button
                onClick={resetRoulette}
                type="button"
                className="border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10 px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all font-sans"
              >
                Girar de nuevo
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
