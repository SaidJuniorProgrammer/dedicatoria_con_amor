import React from 'react';

export default function SectionPhoto3({ photoUrl }) {
  return (
    <section className="my-8">
      <div className="bg-white p-2.5 pb-6 rounded-2xl shadow-2xl transform -rotate-1 aspect-[4/5] w-[85%] mx-auto overflow-hidden transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]">
        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
          <img
            src={photoUrl}
            alt="Momento especial 3"
            className="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
