import { useCallback, useEffect, useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import {
  about,
  aboutTitle,
  casesIntro,
  contact,
  footer,
  hero,
  links,
  mailto,
  more,
  moreTitle,
  nav,
  primaryProjects,
  secondaryProjects,
  stack,
  stackTitle,
} from '@/data/portfolio';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark';

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    const top = target.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const primary = primaryProjects();
  const secondary = secondaryProjects();

  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-ink">
      <header
        className={cn(
          'sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur-md transition-shadow',
          headerScrolled && 'shadow-[0_8px_24px_rgba(10,16,30,0.06)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.28)]',
        )}
      >
        <div className="relative mx-auto flex h-[60px] max-w-[1120px] items-center gap-6 px-[clamp(20px,4vw,96px)]">
          <a
            href="#inicio"
            className="text-[17px] font-bold tracking-tight text-ink no-underline"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('inicio');
            }}
          >
            Ramon Barbosa
          </a>
          <nav
            className={cn(
              'ml-auto flex gap-7 max-[860px]:absolute max-[860px]:left-0 max-[860px]:right-0 max-[860px]:top-[60px] max-[860px]:flex-col max-[860px]:gap-0 max-[860px]:border-b max-[860px]:border-line max-[860px]:bg-bg max-[860px]:px-[clamp(20px,4vw,96px)] max-[860px]:py-2',
              !menuOpen && 'max-[860px]:hidden',
            )}
            aria-label="Principal"
          >
            {nav.map((item) => (
              <button
                key={item.targetId}
                type="button"
                className="min-h-11 border-0 bg-transparent text-sm text-muted hover:text-ink max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line max-[860px]:py-3.5 max-[860px]:text-left max-[860px]:text-[17px]"
                onClick={() => scrollTo(item.targetId)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex gap-1 max-[860px]:ml-auto">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border-0 bg-transparent hover:bg-surface"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              aria-label={theme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}
            >
              <span className="text-sm font-medium">{theme === 'dark' ? 'Claro' : 'Escuro'}</span>
            </button>
            <button
              type="button"
              className="hidden size-11 place-items-center rounded-full border-0 bg-transparent hover:bg-surface max-[860px]:grid"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? '×' : '≡'}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="scroll-mt-[72px] mx-auto grid max-w-[1120px] items-center gap-10 px-[clamp(20px,4vw,96px)] pb-6 pt-12 min-[861px]:grid-cols-[1.25fr_0.75fr] min-[861px]:gap-16 min-[861px]:pt-[72px]"
        >
          <div>
            <h1
              className={cn(
                'text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]',
                !reduceMotion && 'hero-reveal',
              )}
            >
              {hero.name}
            </h1>
            <p
              className={cn(
                'mt-5 max-w-[38ch] text-[clamp(1.125rem,2.2vw,1.375rem)] font-semibold leading-snug tracking-tight',
                !reduceMotion && 'hero-reveal',
              )}
              style={!reduceMotion ? { animationDelay: '65ms' } : undefined}
            >
              {hero.role}
            </p>
            <p
              className={cn(
                'mt-4 max-w-[52ch] text-lg leading-relaxed text-muted',
                !reduceMotion && 'hero-reveal',
              )}
              style={!reduceMotion ? { animationDelay: '130ms' } : undefined}
            >
              {hero.lead}
            </p>
            <div
              className={cn('mt-8 flex items-center gap-[22px]', !reduceMotion && 'hero-reveal')}
              style={!reduceMotion ? { animationDelay: '195ms' } : undefined}
            >
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center rounded-full border-0 bg-accent px-6 text-base font-semibold text-on-accent transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 motion-reduce:transform-none"
                onClick={() => scrollTo('cases')}
              >
                {hero.primaryCta}
              </button>
              <button
                type="button"
                className="min-h-11 border-0 bg-transparent px-0 text-base font-medium text-accent hover:underline"
                onClick={() => scrollTo('contato')}
              >
                {hero.secondaryCta}
              </button>
            </div>
          </div>
          <img
            className={cn(
              'aspect-[4/5] w-full max-w-[420px] rounded-[28px] bg-surface object-cover object-[50%_12%] min-[861px]:max-w-none',
              !reduceMotion && 'hero-reveal',
            )}
            style={!reduceMotion ? { animationDelay: '260ms' } : undefined}
            src={hero.photo}
            alt="Retrato de Ramon Barbosa"
            width={480}
            height={600}
            fetchPriority="high"
          />
        </section>

        <section
          id="cases"
          className="scroll-mt-[72px] mx-auto max-w-[1120px] px-[clamp(20px,4vw,96px)] pb-6 pt-20 min-[861px]:pt-28"
        >
          <h2 className="text-[clamp(2.125rem,4.4vw,3.75rem)] font-bold leading-tight tracking-[-0.035em]">
            {casesIntro.title}
          </h2>

          <div className="mt-12 grid gap-7 min-[1024px]:grid-cols-3">
            {primary.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>

          {secondary.length > 0 ? (
            <div className="mt-7 grid gap-7 min-[1024px]:grid-cols-3">
              {secondary.map((item) => (
                <ProjectCard key={item.title} item={item} />
              ))}
            </div>
          ) : null}

          <h3 className="mt-[72px] text-[22px] font-bold tracking-tight">{moreTitle}</h3>
          <ul className="mt-3 border-t border-line">
            {more.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[132px_1fr] items-center gap-6 border-b border-line py-[18px] max-[500px]:grid-cols-1"
              >
                <img
                  src={item.image}
                  alt={`Tela de ${item.title}`}
                  className="aspect-video w-[132px] rounded-lg border border-line object-cover object-left-top max-[500px]:w-full"
                  loading="lazy"
                />
                <div>
                  <strong className="block font-bold">{item.title}</strong>
                  <span className="mt-1 block text-[15px] leading-relaxed text-muted">{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="sobre"
          className="scroll-mt-[72px] mx-auto max-w-[1120px] px-[clamp(20px,4vw,96px)] pb-6 pt-20 min-[861px]:pt-28"
        >
          <h2 className="text-[clamp(2.125rem,4.4vw,3.75rem)] font-bold leading-tight tracking-[-0.035em]">
            {aboutTitle}
          </h2>
          <div className="mt-6 max-w-[62ch] space-y-5 text-lg leading-relaxed">
            {about.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </section>

        <section
          id="stack"
          className="scroll-mt-[72px] mx-auto max-w-[1120px] px-[clamp(20px,4vw,96px)] pb-6 pt-20 min-[861px]:pt-28"
        >
          <h2 className="text-[clamp(2.125rem,4.4vw,3.75rem)] font-bold leading-tight tracking-[-0.035em]">
            {stackTitle}
          </h2>
          <div className="mt-10 border-t border-line">
            {stack.map((group) => (
              <div
                key={group.label}
                className="grid gap-6 border-b border-line py-[22px] min-[640px]:grid-cols-[1fr_2fr_2fr]"
              >
                <h3 className="text-lg font-bold tracking-tight">{group.label}</h3>
                <p className="text-[15px] leading-relaxed text-muted min-[640px]:col-start-2">{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-[72px] mx-auto max-w-[1120px] px-[clamp(20px,4vw,96px)] pb-28 pt-20"
        >
          <h2 className="text-[clamp(2.125rem,4.4vw,3.75rem)] font-bold leading-tight tracking-[-0.035em]">
            {contact.title}
          </h2>
          <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-muted">{contact.lead}</p>
          <a
            href={mailto()}
            className="mt-8 inline-block break-all text-[clamp(1.375rem,4.2vw,3rem)] font-bold tracking-tight text-ink underline decoration-accent decoration-2 underline-offset-8"
          >
            {links.email}
          </a>
          <p className="mt-7 flex flex-wrap gap-6">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-[17px] font-semibold text-accent hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-[17px] font-semibold text-accent hover:underline"
            >
              GitHub
            </a>
          </p>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-4 border-t border-line px-[clamp(20px,4vw,96px)] py-6 pb-10 text-[13px] text-muted">
        <span>{footer.tagline}</span>
        <small>© 2026 Ramon Barbosa</small>
      </footer>
    </div>
  );
}