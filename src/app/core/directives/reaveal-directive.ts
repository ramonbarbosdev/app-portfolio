import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit {

  @Input() delay: number = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {

    const element = this.el.nativeElement;

    // estado inicial SEM transition
    this.renderer.setStyle(element, 'transition', 'none');
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'translateY(24px) scale(0.98)');
    this.renderer.setStyle(element, 'filter', 'blur(6px)');

    // frame 1 → browser aplica estado inicial
    requestAnimationFrame(() => {

      // frame 2 → garante renderização completa
      requestAnimationFrame(() => {

        // agora aplica transition
        this.renderer.setStyle(
          element,
          'transition',
          `
          opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
          transform 700ms cubic-bezier(0.16, 1, 0.3, 1),
          filter 700ms cubic-bezier(0.16, 1, 0.3, 1)
          `
        );

        setTimeout(() => {

          this.renderer.setStyle(element, 'opacity', '1');
          this.renderer.setStyle(element, 'transform', 'translateY(0) scale(1)');
          this.renderer.setStyle(element, 'filter', 'blur(0)');

        }, this.delay);

      });

    });

  }

}
