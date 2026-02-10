import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[ScrollAppReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {

  @Input() delay: number = 0;

  private observer?: IntersectionObserver;
  private revealed = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {

    const element = this.el.nativeElement;

    // estado inicial
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'translateY(24px) scale(0.98)');
    this.renderer.setStyle(element, 'filter', 'blur(6px)');

    this.renderer.setStyle(
      element,
      'transition',
      `
      opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 700ms cubic-bezier(0.16, 1, 0.3, 1),
      filter 700ms cubic-bezier(0.16, 1, 0.3, 1)
      `
    );

    this.renderer.setStyle(
      element,
      'transition-delay',
      `${this.delay}ms`
    );

    this.observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting && !this.revealed) {

          this.renderer.setStyle(element, 'opacity', '1');
          this.renderer.setStyle(element, 'transform', 'translateY(0) scale(1)');
          this.renderer.setStyle(element, 'filter', 'blur(0)');

          this.revealed = true;

          this.observer?.disconnect();

        }

      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(element);

  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
