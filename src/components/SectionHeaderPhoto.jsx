import React from 'react';

export default function SectionHeaderPhoto({ photoUrl }) {
  return (
    <section className="mb-10 text-center">
      {/* Título principal */}
      <h2 className="font-serif italic text-4xl sm:text-5xl mb-6 text-white tracking-wide">
        Mateo <span className="text-[#2CE5F6] not-italic font-sans">&</span> Laura
      </h2>

      {/* Marco Polaroid 1 */}
      <div className="bg-white p-2.5 pb-6 rounded-2xl shadow-2xl transform -rotate-2 aspect-[4/5] w-[85%] mx-auto overflow-hidden transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]">
        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
          <img
            src={photoUrl}
            alt="Mateo y Laura"
            className="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
