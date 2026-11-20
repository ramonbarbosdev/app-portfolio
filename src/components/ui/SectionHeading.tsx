import { Reveal } from '@/components/ui/Reveal';

type Props = {
  index: string;
  title: string;
  lead?: string;
};

export function SectionHeading({ index, title, lead }: Props) {
  return (
    <Reveal>
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-accent">{index}</p>
      <h2 className="mt-3 text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em]">{title}</h2>
      {lead ? <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-muted">{lead}</p> : null}
    </Reveal>
  );
}