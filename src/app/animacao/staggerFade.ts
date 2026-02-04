import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const staggerFade = trigger('staggerFade', [
  transition(':enter', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateY(8px)',
        }),
        stagger(70, [
          animate(
            '400ms cubic-bezier(0.16, 1, 0.3, 1)',
            style({
              opacity: 1,
              transform: 'translateY(0)',
            })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
