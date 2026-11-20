import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import BlurText from '@/components/ui/BlurText';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { Marquee } from '@/components/ui/Marquee';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Timeline } from '@/components/ui/Timeline';
import {
  about,
  aboutTitle,
  casesIntro,
  contact,
  featured,
  footer,
  hero,
  links,
  mailto,
  marqueeTools,
  nav,
  primaryProjects,
  secondaryProjects,
  stack,
  stackTitle,
  timeline,
  timelineTitle,
} from '@/data/portfolio';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark';

const wrap = 'mx-auto w-full max-w-[1180px] px-[clamp(20px,4vw,48px)]';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const dark = theme === 'dark';

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
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme, dark]);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.targetId))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const primary = primaryProjects();
  const secondary = secondaryProjects();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-bg text-ink">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Ir para o conteúdo
        </a>

        <header
          className={cn(
            'sticky top-0 z-30 border-b transition-[background-color,border-color,box-shadow] duration-300',
            headerScrolled
              ? 'border-line bg-bg/80 shadow-[0_8px_24px_rgba(10,16,30,0.06)] backdrop-blur-xl dark:shadow-[0_8px_28px_rgba(0,0,0,0.3)]'
              : 'border-transparent bg-transparent',
          )}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent"
            style={{ scaleX: progress }}
          />
          <div className={cn(wrap, 'relative flex h-[64px] items-center gap-6')}>
            <a
              href="#inicio"
              className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('inicio');
              }}
            >
              <span className="grid size-8 place-items-center rounded-lg bg-ink text-[13px] font-extrabold text-bg">RB</span>
              Ramon Barbosa
            </a>

            <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Principal">
              {nav.map((item) => {
                const current = active === item.targetId;
                return (
                  <button
                    key={item.targetId}
                    type="button"
                    aria-current={current ? 'true' : undefined}
                    className={cn(
                      'relative min-h-11 rounded-full px-3.5 text-sm transition-colors duration-150',
                      current ? 'text-ink' : 'text-muted hover:text-ink',
                    )}
                    onClick={() => scrollTo(item.targetId)}
                  >
                    {current ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-1 inset-y-1.5 -z-10 rounded-full bg-surface"
                        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                      />
                    ) : null}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-1 max-md:ml-auto">
              <button
                type="button"
                className="relative grid size-11 place-items-center overflow-hidden rounded-full text-ink transition-colors hover:bg-surface active:scale-95"
                onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                aria-label={dark ? 'Usar tema claro' : 'Usar tema escuro'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ y: 14, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -14, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    {dark ? <SunIcon /> : <MoonIcon />}
                  </motion.span>
                </AnimatePresence>
              </button>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full hover:bg-surface md:hidden"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="menu-mobile"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                <span className="relative block h-3 w-5" aria-hidden="true">
                  <span
                    className={cn(
                      'absolute left-0 top-0 h-[1.5px] w-5 bg-ink transition-transform duration-200',
                      menuOpen && 'translate-y-[5px] rotate-45',
                    )}
                  />
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-[1.5px] w-5 bg-ink transition-transform duration-200',
                      menuOpen && '-translate-y-[5px] -rotate-45',
                    )}
                  />
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen ? (
              <motion.nav
                id="menu-mobile"
                aria-label="Principal"
                className="absolute inset-x-0 top-full border-b border-line bg-bg/95 backdrop-blur-xl md:hidden"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <ul className={cn(wrap, 'py-2')}>
                  {nav.map((item) => (
                    <li key={item.targetId}>
                      <button
                        type="button"
                        className="flex min-h-12 w-full items-center justify-between border-b border-line text-left text-[17px] last:border-b-0"
                        onClick={() => scrollTo(item.targetId)}
                      >
                        {item.label}
                        <span aria-hidden="true" className="text-muted">→</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </header>

        <main id="conteudo">
          <section id="inicio" className="relative -mt-[64px] overflow-hidden pt-[64px]">
            <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />

            <div
              className={cn(
                wrap,
                'relative grid min-h-[calc(100svh-64px)] items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16',
              )}
            >
              <div>
                <motion.p
                  className="inline-flex items-center gap-2.5 rounded-full border border-line bg-bg/70 px-3.5 py-1.5 text-[13px] text-muted backdrop-blur"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="status-dot size-2 rounded-full bg-accent" aria-hidden="true" />
                  Aberto a vagas, desenvolvimento e consultoria
                </motion.p>

                <BlurText
                  as="h1"
                  text={hero.name}
                  trigger="load"
                  animateBy="letters"
                  direction="bottom"
                  delay={45}
                  stepDuration={0.4}
                  blur={12}
                  distance={28}
                  className="mt-6 text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.055em]"
                />

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mt-7 max-w-[30ch] text-[clamp(1.375rem,2.4vw,1.875rem)] font-semibold leading-[1.2] tracking-tight">
                    {hero.role}
                  </p>
                  <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-muted">{hero.lead}</p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                    <button
                      type="button"
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-on-accent shadow-[0_12px_32px_-12px_var(--color-accent)] transition duration-150 hover:-translate-y-px hover:brightness-110 active:translate-y-px active:scale-[0.985]"
                      onClick={() => scrollTo('cases')}
                    >
                      {hero.primaryCta}
                      <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-[3px]">
                        →
                      </span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-bg/60 px-7 text-base font-medium backdrop-blur transition duration-150 hover:-translate-y-px hover:border-ink/30 hover:bg-surface active:translate-y-px active:scale-[0.985]"
                      onClick={() => scrollTo('contato')}
                    >
                      {hero.secondaryCta}
                    </button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none"
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_28%,transparent),transparent)] blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface p-2 shadow-[0_40px_80px_-40px_rgba(10,16,30,0.45)]">
                  <img
                    className="aspect-[4/5] w-full rounded-[26px] object-cover object-[50%_12%]"
                    src={hero.photo}
                    alt="Retrato de Ramon Barbosa"
                    width={480}
                    height={600}
                    fetchPriority="high"
                  />
                  <BorderBeam
                    size={160}
                    duration={9}
                    borderWidth={1.5}
                    colorFrom={dark ? '#f07030' : '#e8590c'}
                    colorTo={dark ? '#e8590c' : '#f5a574'}
                  />
                </div>

                <motion.div
                  className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-line bg-bg/85 p-4 shadow-[0_24px_48px_-24px_rgba(10,16,30,0.4)] backdrop-blur-xl sm:-left-10 sm:right-auto sm:max-w-[300px]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[15px] font-semibold leading-snug">{hero.tagline}</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <div className="border-y border-line bg-surface/50 py-5">
            <Marquee pauseOnHover repeat={3} className="[--duration:45s] [--gap:3rem]" aria-label="Tecnologias que uso">
              {marqueeTools.map((tool) => (
                <span key={tool.name} className="flex items-center gap-2.5 whitespace-nowrap text-[15px] font-medium text-muted">
                  <img src={tool.icon} alt="" className="h-6 w-auto" width={24} height={24} />
                  {tool.name}
                </span>
              ))}
            </Marquee>
          </div>

          <section id="cases" className={cn(wrap, 'scroll-mt-20 pb-8 pt-24 md:pt-32')}>
            <SectionHeading index="01 · Projetos" title={casesIntro.title} lead={casesIntro.lead || undefined} />

            <Reveal className="mt-12">
              <ProjectCard item={featured} dark={dark} featured />
            </Reveal>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {primary.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <ProjectCard item={item} dark={dark} />
                </Reveal>
              ))}
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {secondary.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <ProjectCard item={item} dark={dark} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="sobre" className={cn(wrap, 'scroll-mt-20 pb-8 pt-24 md:pt-32')}>
            <SectionHeading index="02 · Sobre" title={aboutTitle} />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <Reveal>
                <p className="text-[clamp(1.375rem,2.6vw,2rem)] font-semibold leading-[1.3] tracking-tight">{about[0]}</p>
              </Reveal>
              <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
                {about.slice(1).map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </Reveal>
            </div>
          </section>

          <section id="trajetoria" className={cn(wrap, 'scroll-mt-20 pb-8 pt-24 md:pt-32')}>
            <SectionHeading index="03 · Trajetória" title={timelineTitle} />
            <div className="mt-14">
              <Timeline data={timeline} />
            </div>
          </section>

          <section id="stack" className={cn(wrap, 'scroll-mt-20 pb-8 pt-24 md:pt-32')}>
            <SectionHeading index="04 · Stack" title={stackTitle} />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {stack.map((group, i) => (
                <Reveal key={group.label} delay={i * 0.06}>
                  <div className="h-full rounded-3xl border border-line bg-surface/60 p-6 transition-colors duration-200 hover:border-ink/20 md:p-8">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-bold tracking-tight">{group.label}</h3>
                      <span className="font-mono text-xs text-muted">{String(group.tools.length).padStart(2, '0')}</span>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2.5">
                      {group.tools.map((tool) => (
                        <li
                          key={tool.name}
                          className="flex min-h-11 items-center gap-2.5 rounded-xl border border-line bg-bg px-3.5 text-[15px] transition duration-150 hover:-translate-y-0.5 hover:border-ink/25"
                        >
                          {tool.icon ? (
                            <img src={tool.icon} alt="" className="h-5 w-auto" width={20} height={20} loading="lazy" />
                          ) : (
                            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                          )}
                          {tool.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="contato" className={cn(wrap, 'scroll-mt-20 pb-24 pt-24 md:pt-32')}>
            <Reveal>
              <div className="contact-glow relative overflow-hidden rounded-[36px] px-6 py-14 text-white sm:px-12 md:px-16 md:py-20">
                <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
                <div className="relative">
                  <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-accent-soft">05</p>
                  <h2 className="mt-3 text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1] tracking-[-0.045em]">
                    {contact.title}
                  </h2>
                  <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-white/75">{contact.lead}</p>
                  <a
                    href={mailto()}
                    className="group mt-10 inline-flex max-w-full items-center gap-3 text-[clamp(1.25rem,3.6vw,2.75rem)] font-bold tracking-tight"
                  >
                    <span className="link-draw break-all">{links.email}</span>
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-on-accent text-lg text-ink transition-transform duration-150 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border border-white/20 bg-white/5 px-5 text-[15px] font-semibold transition duration-150 hover:-translate-y-px hover:bg-white/10 active:translate-y-px"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border border-white/20 bg-white/5 px-5 text-[15px] font-semibold transition duration-150 hover:-translate-y-px hover:bg-white/10 active:translate-y-px"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className={cn(wrap, 'flex flex-wrap justify-between gap-4 border-t border-line py-8 text-[13px] text-muted')}>
          <span>{footer.tagline}</span>
          <small>© 2026 Ramon Barbosa</small>
        </footer>
      </div>
    </MotionConfig>
  );
}