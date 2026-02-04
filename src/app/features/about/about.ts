import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../core/directives/observe-visibility.directive.ts/observe-visibility.directive.ts';
import { fadeSlideUp } from '../../animacao/fadeSlideUp.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [fadeSlideUp],
  standalone: true,


})
export class About {
  show = false;
}
