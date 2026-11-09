import React, { useState } from 'react';
import { Heart, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const INITIAL_COUPONS = [
  { id: 1, text: 'Vale por un beso' },
  { id: 2, text: 'Vale por un abrazo fuerte' },
  { id: 3, text: 'Vale por un deseo (casi) cualquiera' },
];

export default function SectionCoupons() {
  const [redeemedCoupons, setRedeemedCoupons] = useState({});

  const handleRedeem = (id) => {
    setRedeemedCoupons((prev) => ({
      ...prev,
      [id]: true,
    }));

    // Festive confetti burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#2CE5F6', '#47D7E3', '#ffffff', '#ffd166'],
    });
  };

  return (
    <section className="my-10">
      {/* Título centrado */}
      <h3 className="font-serif italic text-3xl text-white text-center">
        Nuestros vales de amor
      </h3>

      {/* Subtítulo */}
      <p className="text-sm text-slate-300 text-center mt-2 mb-6">
        Canjéalo cuando quieras. Pero solo se puede usar una vez
      </p>

      {/* 3 Tarjetas de cupones horizontales */}
      <div className="space-y-4">
        {INITIAL_COUPONS.map((coupon) => {
          const isRedeemed = !!redeemedCoupons[coupon.id];

          return (
            <div
              key={coupon.id}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                isRedeemed
                  ? 'bg-[#113247]/50 border-cyan-300/10 opacity-80'
                  : 'bg-[#113247]/80 backdrop-blur-md border-cyan-300/20 hover:border-cyan-300/40 shadow-lg'
              }`}
            >
              {/* Izquierda: Círculo cian brillante */}
              <div className="w-10 h-10 rounded-full bg-[#2CE5F6] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(44,229,246,0.5)]">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>

              {/* Centro: Etiqueta superior VALE y texto */}
              <div className="flex-1 mx-4 text-left">
                <span className="block text-[10px] tracking-[0.2em] text-slate-400 uppercase font-sans font-semibold">
                  VALE
                </span>
                <span className="font-serif italic text-lg text-white leading-tight block">
                  {coupon.text}
                </span>
              </div>

              {/* Derecha: Botón CANJEAR o Sello con Check */}
              <div className="shrink-0">
                {!isRedeemed ? (
                  <button
                    onClick={() => handleRedeem(coupon.id)}
                    type="button"
                    className="bg-[#22B8CF] hover:bg-[#2CE5F6] text-white hover:text-[#041E30] text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-200 active:scale-95 shadow-md"
                  >
                    CANJEAR
                  </button>
                ) : (
                  <div
                    className="border-2 border-[#2CE5F6] rounded-lg w-9 h-9 flex items-center justify-center rotate-6 text-[#2CE5F6] bg-[#2CE5F6]/10 shadow-[0_0_10px_rgba(44,229,246,0.3)]"
                    title="Canjeado"
                  >
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
