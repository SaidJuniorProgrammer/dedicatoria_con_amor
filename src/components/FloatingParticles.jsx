import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

export default function FloatingParticles() {
  // Pre-generate a fixed set of floating hearts for consistent rendering
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => {
      const left = Math.floor((index * 5.5 + (index % 3) * 7) % 94) + 3; // 3% to 97%
      const duration = 10 + (index % 6) * 2.5; // 10s - 22.5s
      const delay = (index * 1.3) % 12; // 0s - 12s
      const size = 12 + (index % 4) * 6; // 12px - 30px
      const opacity = 0.12 + (index % 3) * 0.05; // 0.12 - 0.22

      return {
        id: index,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `-${delay}s`,
        size,
        opacity,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-heart"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        >
          <Heart
            className="text-[#2CE5F6] fill-[#2CE5F6]"
            style={{ width: `${p.size}px`, height: `${p.size}px` }}
          />
        </div>
      ))}
    </div>
  );
}
