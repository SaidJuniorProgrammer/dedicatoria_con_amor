import React from 'react';

export default function SectionPhotos4and5({ photo4Url, photo5Url }) {
  return (
    <section className="my-8 space-y-8">
      {/* Marco Polaroid 4 */}
      <div className="bg-white p-2.5 pb-6 rounded-2xl shadow-2xl transform rotate-2 aspect-[4/5] w-[85%] mx-auto overflow-hidden transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]">
        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
          <img
            src={photo4Url}
            alt="Momento especial 4"
            className="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>
      </div>

      {/* Marco Polaroid 5 */}
      <div className="bg-white p-2.5 pb-6 rounded-2xl shadow-2xl transform -rotate-2 aspect-[4/5] w-[85%] mx-auto overflow-hidden transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]">
        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
          <img
            src={photo5Url}
            alt="Momento especial 5"
            className="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
