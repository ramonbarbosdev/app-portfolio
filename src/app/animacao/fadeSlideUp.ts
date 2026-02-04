import { animate, style, transition, trigger } from '@angular/animations';

export const fadeSlideUp = trigger('fadeSlideUp', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(10px)',
    }),
    animate(
      '500ms cubic-bezier(0.16, 1, 0.3, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);
