import React, { useState, useRef, useEffect } from 'react';
import { AUDIO_BASE64, PHOTOS_BASE64 } from './data/mediaBase64';

import FloatingParticles from './components/FloatingParticles';
import AudioController from './components/AudioController';
import WelcomeScreen from './components/WelcomeScreen';
import SectionHeaderPhoto from './components/SectionHeaderPhoto';
import SectionCounter from './components/SectionCounter';
import SectionPhoto2 from './components/SectionPhoto2';
import SectionLetter from './components/SectionLetter';
import SectionPhoto3 from './components/SectionPhoto3';
import SectionWhatILove from './components/SectionWhatILove';
import SectionPhotos4and5 from './components/SectionPhotos4and5';
import SectionOurList from './components/SectionOurList';
import SectionCoupons from './components/SectionCoupons';
import SectionRoulette from './components/SectionRoulette';
import { Heart } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(AUDIO_BASE64);
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio autoplay prevented by browser policy:', err);
          setIsPlaying(false);
        });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error('Error playing audio:', err);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041E30] via-[#06263D] to-[#041B2D] text-white relative overflow-x-hidden selection:bg-[#2CE5F6] selection:text-[#041E30]">
      {/* Partículas de Fondo con iconos Heart flotantes en turquesa */}
      <FloatingParticles />

      {/* Botón flotante para silenciar/activar música una vez abierto */}
      {isOpen && (
        <AudioController isPlaying={isPlaying} togglePlay={toggleAudio} />
      )}

      {/* Contenedor Mobile-First centrado */}
      <main className="max-w-md mx-auto min-h-screen relative overflow-x-hidden px-5 py-8 text-white shadow-2xl z-10">
        {!isOpen ? (
          /* ESTADO 1: PANTALLA DE BIENVENIDA (SOBRE CERRADO) */
          <WelcomeScreen onOpen={handleOpenEnvelope} />
        ) : (
          /* ESTADO 2: CONTENIDO PRINCIPAL (SCROLL VERTICAL) */
          <div className="animate-fade-in space-y-2">
            {/* SECCIÓN 1: Encabezado y Foto 1 */}
            <SectionHeaderPhoto photoUrl={PHOTOS_BASE64[0]} />

            {/* SECCIÓN 2: Contador en Tiempo Real */}
            <SectionCounter />

            {/* SECCIÓN 3: Foto 2 */}
            <SectionPhoto2 photoUrl={PHOTOS_BASE64[1]} />

            {/* SECCIÓN 4: Carta Interactiva ("Mensaje Privado") */}
            <SectionLetter />

            {/* SECCIÓN 5: Foto 3 */}
            <SectionPhoto3 photoUrl={PHOTOS_BASE64[2]} />

            {/* SECCIÓN 6: "Lo que más amo de Laura" */}
            <SectionWhatILove />

            {/* SECCIÓN 7: Fotos 4 y 5 */}
            <SectionPhotos4and5
              photo4Url={PHOTOS_BASE64[3]}
              photo5Url={PHOTOS_BASE64[4]}
            />

            {/* SECCIÓN 8: "Nuestra lista" */}
            <SectionOurList />

            {/* SECCIÓN 9: "Nuestros vales de amor" */}
            <SectionCoupons />

            {/* SECCIÓN 10: La Ruleta de Citas + Botón "No" que Huye */}
            <SectionRoulette />

            {/* Pie de página romántico */}
            <footer className="pt-12 pb-6 text-center text-xs tracking-widest text-slate-400 font-sans uppercase">
              <p className="flex items-center justify-center gap-1">
                <span>De Mateo para Laura</span>
                <Heart className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300" />
                <span>Por siempre</span>
              </p>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}
