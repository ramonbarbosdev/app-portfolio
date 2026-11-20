import { useState } from 'react';
import type { CaseStudy } from '@/data/portfolio';
import { previewUrl } from '@/data/portfolio';

type Props = {
  item: CaseStudy;
};

export function ProjectCard({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-[28px] bg-surface">
      <div className="bg-preview px-[22px] pt-[22px]">
        <div className="overflow-hidden rounded-t-[14px] shadow-[0_18px_40px_rgba(10,16,30,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_48px_rgba(10,16,30,0.12)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)] dark:group-hover:shadow-[0_22px_48px_rgba(0,0,0,0.42)] motion-reduce:group-hover:translate-y-0">
          <div className="grid grid-cols-[auto_1fr] items-center gap-3 border-b border-black/10 bg-white px-3.5 py-2.5 dark:bg-zinc-100">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#c5c9d1]" />
              <span className="size-2.5 rounded-full bg-[#c5c9d1]" />
              <span className="size-2.5 rounded-full bg-[#c5c9d1]" />
            </span>
            <span className="truncate rounded-lg bg-zinc-100 px-3 py-1.5 text-left text-xs text-zinc-500">
              {previewUrl(item)}
            </span>
          </div>
          <img
            src={item.image}
            alt={`Tela de ${item.title}`}
            className="aspect-[16/10] w-full bg-white object-cover object-left-top transition duration-500 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="px-7 pb-8 pt-7">
        <p className="text-sm text-muted">{item.label}</p>
        <h3 className="mt-1.5 text-[clamp(1.375rem,2.2vw,1.875rem)] font-bold tracking-tight">{item.title}</h3>
        {item.proof ? <p className="mt-3.5 text-[15px] font-semibold leading-snug">{item.proof}</p> : null}
        <p className="mt-3 text-[17px] leading-relaxed">{item.result}</p>
        <button
          type="button"
          className="mt-[18px] min-h-11 border-0 bg-transparent p-0 text-left text-[15px] font-semibold text-accent hover:underline"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Como foi {open ? '−' : '+'}
        </button>
        {open ? (
          <dl className="mt-3.5 grid gap-4 border-t border-line pt-1">
            <div>
              <dt className="mb-1 text-sm font-bold">Contexto</dt>
              <dd className="text-[15px] leading-relaxed text-muted">{item.challenge}</dd>
            </div>
            <div>
              <dt className="mb-1 text-sm font-bold">O que fiz</dt>
              <dd className="text-[15px] leading-relaxed text-muted">{item.solution}</dd>
            </div>
          </dl>
        ) : null}
        <p className="mt-4 text-sm text-muted">{item.technologies}</p>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 inline-flex min-h-11 items-center text-base font-bold text-accent hover:underline"
          >
            {item.linkLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}