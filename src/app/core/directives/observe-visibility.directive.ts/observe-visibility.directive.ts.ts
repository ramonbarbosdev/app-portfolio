import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  NgZone,
  Output,
} from '@angular/core';

@Directive({
  selector: '[observeVisibility]',
  standalone: true,
})
export class ObserveVisibilityDirective implements AfterViewInit {
  @Output() visible = new EventEmitter<void>();

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private zone: NgZone // 🔥 IMPORTANTE
  ) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 🔥 entra no Angular Zone
          this.zone.run(() => {
            this.visible.emit();
          });

          this.observer?.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    this.observer.observe(this.el.nativeElement);
  }
}
