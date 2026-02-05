import { Component } from '@angular/core';
import { fadeSlideUp } from '../../animacao/fadeSlideUp.js';
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true,
  imports: [ScrollRevealDirective],

})
export class About {
  show = false;
}
