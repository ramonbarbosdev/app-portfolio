import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Input
} from '@angular/core';

export type ScrollAnimation =
  | 'fade'
  | 'fade-up'
  | 'slide-left'
  | 'slide-right'
  | 'zoom';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {

  @Input() animation: ScrollAnimation = 'fade-up';
  @Input() delay = 0;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {

    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'display', 'block');
    this.renderer.setStyle(
      element,
      'transition',
      `opacity 700ms ease ${this.delay}ms, transform 700ms ease ${this.delay}ms`
    );

    this.renderer.setStyle(element, 'will-change', 'transform, opacity');

    // aplica estado inicial
    this.applyInitialState(element);

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          this.applyFinalState(element);
        } else {
          this.applyInitialState(element);
        }

      },
      {
        threshold: 0.35
      }
    );

    observer.observe(element);
  }

  // ======================
  // ESTADO INICIAL
  // ======================

  private applyInitialState(element: HTMLElement) {

    this.renderer.setStyle(element, 'opacity', '0');

    switch (this.animation) {

      case 'slide-left':
        this.renderer.setStyle(element, 'transform', 'translateX(-40px)');
        break;

      case 'slide-right':
        this.renderer.setStyle(element, 'transform', 'translateX(40px)');
        break;

      case 'zoom':
        this.renderer.setStyle(element, 'transform', 'scale(0.9)');
        break;

      case 'fade':
        this.renderer.removeStyle(element, 'transform');
        break;

      case 'fade-up':
      default:
        this.renderer.setStyle(element, 'transform', 'translateY(30px)');
        break;
    }
  }

  // ======================
  // ESTADO FINAL
  // ======================

  private applyFinalState(element: HTMLElement) {

    this.renderer.setStyle(element, 'opacity', '1');

    switch (this.animation) {

      case 'slide-left':
      case 'slide-right':
      case 'fade-up':
        this.renderer.setStyle(element, 'transform', 'translate(0,0)');
        break;

      case 'zoom':
        this.renderer.setStyle(element, 'transform', 'scale(1)');
        break;

      case 'fade':
        this.renderer.removeStyle(element, 'transform');
        break;
    }
  }
}
