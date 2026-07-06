import { useRef, useState, useEffect } from 'react';

// Only the 5 genuinely distinct shots — the gateway/*-3 files are byte-for-byte copies
const IMAGES = [
  '/project-soc-1.png',
  '/project-malware-1.png',
  '/project-soc-2.png',
  '/project-malware-2.png',
  '/project-soc-3.png',
];

const ROW1 = IMAGES;
const ROW2 = [...IMAGES.slice(2), ...IMAGES.slice(0, 2)];

// Triple each row for seamless scrolling
const ROW1_TRIPLED = [...ROW1, ...ROW1, ...ROW1];
const ROW2_TRIPLED = [...ROW2, ...ROW2, ...ROW2];

export default function MarqueeSection() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0E131B] pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-28 overflow-hidden"
    >
      {/* Row 1 — moves RIGHT */}
      <div className="flex gap-3 mb-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {ROW1_TRIPLED.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="duotone-shot w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 bg-[#161E29] border border-[#ECEFF3]/10"
            />
          ))}
        </div>
      </div>

      {/* Row 2 — moves LEFT */}
      <div className="flex gap-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW2_TRIPLED.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="duotone-shot w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 bg-[#161E29] border border-[#ECEFF3]/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
