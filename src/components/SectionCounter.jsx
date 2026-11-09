import React, { useState, useEffect } from 'react';

const START_DATE = new Date('2026-09-10T00:00:00');

function getTimeDifference(targetDate) {
  const now = new Date();
  const isPast = now >= targetDate;

  const dEarlier = isPast ? targetDate : now;
  const dLater = isPast ? now : targetDate;

  // Calculate full calendar months
  let temp = new Date(dEarlier);
  let months = 0;

  while (true) {
    const nextMonth = new Date(temp);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    if (nextMonth <= dLater) {
      temp = nextMonth;
      months++;
    } else {
      break;
    }
  }

  // Calculate remaining days, hours, minutes, seconds
  const remainingMs = dLater.getTime() - temp.getTime();
  const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingMs / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingMs / 1000) % 60);

  // Format main counter text
  let mainText = '';
  if (months > 0) {
    const monthStr = months === 1 ? '1 mes' : `${months} meses`;
    if (days > 0) {
      const dayStr = days === 1 ? '1 día' : `${days} días`;
      mainText = `${monthStr} y ${dayStr}`;
    } else {
      mainText = monthStr;
    }
  } else {
    mainText = days === 1 ? '1 día' : `${days} días`;
  }

  return {
    mainText,
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}

export default function SectionCounter() {
  const [time, setTime] = useState(() => getTimeDifference(START_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeDifference(START_DATE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-8 p-6 text-center bg-[#113247]/80 backdrop-blur-md border border-cyan-300/20 rounded-2xl shadow-xl transition-all duration-300 hover:border-cyan-300/40">
      {/* Texto superior */}
      <p className="font-serif italic text-xl text-slate-100">
        Juntos desde hace
      </p>

      {/* Contador principal dinámico */}
      <h3 className="font-serif italic text-3xl text-white my-3 tracking-wide">
        {time.mainText}
      </h3>

      {/* Sub-contador en vivo corriendo segundo a segundo */}
      <p className="font-sans text-lg tracking-wider text-cyan-200/90 font-medium font-mono">
        {time.hours}h {time.minutes}m {time.seconds}s
      </p>
    </section>
  );
}
