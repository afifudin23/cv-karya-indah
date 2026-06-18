import { useState, useEffect, useRef, useCallback } from 'react';

export default function PageHeroSlider({ images: heroImages }) {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);
  const total = heroImages.length;
  const isMultiple = total > 1;
  const images = isMultiple ? [...heroImages, heroImages[0]] : heroImages;
  const timerRef = useRef(null);
  const isMovingRef = useRef(false);

  const advance = useCallback(() => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setCurrent((i) => i + 1);
  }, []);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 5000);
  }, [advance]);

  useEffect(() => {
    if (!isMultiple) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer, isMultiple]);

  const handleTransitionEnd = () => {
    isMovingRef.current = false;
    if (current >= total) {
      setAnimated(false);
      setCurrent(0);
    }
  };

  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 20);
      return () => clearTimeout(t);
    }
  }, [animated]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`flex h-full ease-in-out ${animated ? 'transition-transform duration-[2000ms]' : ''}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden="true"
              className="h-full w-full shrink-0 object-cover object-center"
            />
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      {isMultiple && <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAnimated(true);
              setCurrent(i);
            }}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current % total === i ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>}
    </>
  );
}
