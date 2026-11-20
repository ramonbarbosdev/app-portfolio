import { motion, useScroll, useTransform } from 'motion/react';
import { useLayoutEffect, useRef, useState } from 'react';
import type { TimelineEntry } from '@/data/portfolio';

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 55%'] });
  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div className="relative">
      <ol ref={listRef} className="relative grid gap-14 md:gap-20">
        {data.map((item) => (
          <li key={item.role} className="relative grid gap-3 pl-12 md:grid-cols-[260px_1fr] md:gap-10 md:pl-16">
            <span
              aria-hidden="true"
              className="absolute left-[11px] top-1.5 grid size-[22px] place-items-center rounded-full border border-line bg-bg md:left-[19px]"
            >
              <span className="size-2 rounded-full bg-accent" />
            </span>
            <div className="md:sticky md:top-28 md:self-start">
              <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">{item.period}</p>
              <p className="mt-2 text-sm text-muted">{item.place}</p>
            </div>
            <div className="rounded-3xl border border-line bg-surface/60 p-6 md:p-8">
              <h3 className="text-[clamp(1.375rem,2.4vw,1.875rem)] font-bold tracking-tight">{item.role}</h3>
              <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div
        aria-hidden="true"
        className="absolute left-[21px] top-0 w-px bg-line md:left-[29px]"
        style={{ height }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-transparent via-accent to-accent"
          style={{ height: beamHeight, opacity: beamOpacity }}
        />
      </div>
    </div>
  );
}