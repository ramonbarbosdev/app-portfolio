import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input,
  inject,
  DestroyRef
} from '@angular/core';

import { RevealService } from '../../services/reveal.service';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit {

  @Input() delay: number = 0;

  private revealService = inject(RevealService);
  private destroyRef = inject(DestroyRef);

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {

    const element = this.el.nativeElement;

    // estado inicial
    this.renderer.setStyle(element, 'transition', 'none');
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'translateY(24px) scale(0.98)');
    this.renderer.setStyle(element, 'filter', 'blur(6px)');

    const startAnimation = () => {

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {

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

    };

    const sub = this.revealService.ready$.subscribe((ready:any) => {

      if (ready) {
        startAnimation();
      }

    });

    this.destroyRef.onDestroy(() => sub.unsubscribe());

  }

}