import { AnimatePresence, motion } from 'motion/react';
import { useId, useState } from 'react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import type { CaseStudy } from '@/data/portfolio';
import { previewUrl } from '@/data/portfolio';
import { cn } from '@/lib/utils';

type Props = {
  item: CaseStudy;
  dark: boolean;
  featured?: boolean;
};

export function ProjectCard({ item, dark, featured = false }: Props) {
  const [open, setOpen] = useState(false);
  const storyId = useId();

  return (
    <SpotlightCard
      theme={dark ? 'dark' : 'light'}
      spotlightColor={dark ? '#f07030' : '#e8590c'}
      intensity={dark ? 0.12 : 0.08}
      spotlightSize={featured ? 420 : 280}
      borderGlow={0.4}
      softness={0.8}
      shape={featured ? 'beam' : 'circle'}
      className="group h-full !rounded-[28px] !p-0 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
      style={{ '--spotlight-card-surface': dark ? '#141418' : '#ffffff' } as React.CSSProperties}
    >
      <article className={cn('flex h-full flex-col', featured && 'lg:grid lg:grid-cols-[1.25fr_1fr] lg:items-stretch')}>
        <div className={cn('relative overflow-hidden bg-preview px-5 pt-5 sm:px-6 sm:pt-6', featured && 'lg:px-8 lg:pt-8')}>
          <div className="overflow-hidden rounded-t-[14px] border border-b-0 border-black/10 shadow-[0_24px_48px_-24px_rgba(10,16,30,0.35)] dark:border-white/10">
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 border-b border-black/10 bg-white px-3.5 py-2.5 dark:border-white/10 dark:bg-zinc-900">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </span>
              <span className="truncate rounded-md bg-zinc-100 px-3 py-1 text-left font-mono text-[11px] text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                {previewUrl(item)}
              </span>
            </div>
            <div className="overflow-hidden bg-white">
              <img
                src={item.image}
                alt={`Tela de ${item.title}`}
                className={cn(
                  'w-full object-cover object-left-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100',
                  featured ? 'aspect-[16/10] lg:aspect-auto lg:h-[420px]' : 'aspect-[16/10]',
                )}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className={cn('flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7', featured && 'lg:justify-center lg:px-10 lg:py-10')}>
          <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">{item.label}</p>
          <h3
            className={cn(
              'mt-2 font-bold tracking-tight',
              featured ? 'text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08]' : 'text-[clamp(1.375rem,2vw,1.625rem)] leading-tight',
            )}
          >
            {item.title}
          </h3>
          {item.proof ? (
            <p className="mt-4 border-l-2 border-accent pl-4 text-[clamp(1.0625rem,1.6vw,1.25rem)] font-semibold leading-snug">
              {item.proof}
            </p>
          ) : null}
          <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.result}</p>

          <button
            type="button"
            className="mt-4 inline-flex min-h-11 w-fit items-center gap-2 text-[15px] font-semibold text-accent"
            aria-expanded={open}
            aria-controls={storyId}
            onClick={() => setOpen((v) => !v)}
          >
            Como foi
            <motion.span
              aria-hidden="true"
              className="grid size-6 place-items-center rounded-full border border-current text-sm leading-none"
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.dl
                id={storyId}
                key="story"
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mt-2 grid gap-4 border-t border-line pt-4">
                  <div>
                    <dt className="mb-1 text-sm font-bold">Contexto</dt>
                    <dd className="text-[15px] leading-relaxed text-muted">{item.challenge}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-sm font-bold">O que fiz</dt>
                    <dd className="text-[15px] leading-relaxed text-muted">{item.solution}</dd>
                  </div>
                </div>
              </motion.dl>
            ) : null}
          </AnimatePresence>

          <div className="mt-auto pt-5">
            <ul className="flex flex-wrap gap-1.5">
              {item.technologies.split(',').map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tech.trim()}
                </li>
              ))}
            </ul>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-4 inline-flex min-h-11 items-center gap-1.5 text-base font-bold text-accent"
              >
                <span className="link-draw">{item.linkLabel}</span>
                <span aria-hidden="true" className="transition-transform duration-150 group-hover/link:translate-x-[3px]">
                  →
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}