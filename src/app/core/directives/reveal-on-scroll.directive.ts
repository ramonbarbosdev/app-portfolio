import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  @Input() revealDelay = 0;
  @Input() revealFade = false;

  ngOnInit(): void {
    const el = this.element.nativeElement;
    el.classList.add('reveal');
    if (this.revealFade) {
      el.classList.add('reveal--fade');
    }
    if (this.revealDelay > 0) {
      el.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    }

    if (this.prefersReducedMotion() || this.isInView(el)) {
      el.classList.add('reveal-in');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          el.classList.add('reveal-in');
          this.observer?.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private isInView(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
  }
}