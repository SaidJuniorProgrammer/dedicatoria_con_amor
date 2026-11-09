import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function SectionOurList() {
  const items = [
    {
      id: 1,
      content: (
        <>
          Amaría poder cocinar juntos{' '}
          <Sparkles className="w-4 h-4 text-amber-200 inline ml-1 align-middle" />
        </>
      ),
    },
    {
      id: 2,
      content: 'Ver películas',
    },
    {
      id: 3,
      content: (
        <>
          Tener una familia{' '}
          <Heart className="w-4 h-4 text-cyan-300 fill-cyan-300 inline ml-1 align-middle" />
        </>
      ),
    },
    {
      id: 4,
      content: 'Ver el atardecer',
    },
    {
      id: 5,
      content: 'Bailar juntos',
    },
    {
      id: 6,
      content: (
        <>
          Comer chocolates hasta no poder más{' '}
          <Sparkles className="w-4 h-4 text-amber-200 inline ml-1 align-middle" />
        </>
      ),
    },
  ];

  return (
    <section className="my-8 p-6 bg-[#113247]/80 backdrop-blur-md border border-cyan-300/20 rounded-2xl shadow-xl text-left">
      {/* Subtítulo superior */}
      <p className="text-xs tracking-[0.2em] uppercase text-cyan-300 font-semibold mb-1">
        COSAS QUE QUIERO HACER CONTIGO
      </p>

      {/* Título */}
      <h3 className="font-serif italic text-3xl text-white mb-6">
        Nuestra lista
      </h3>

      {/* Lista de elementos */}
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3 text-slate-200 text-base">
            <Sparkles className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
            <span className="font-sans leading-snug">{item.content}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
