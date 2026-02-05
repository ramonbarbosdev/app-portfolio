import { Component } from '@angular/core';
import { fadeSlideUp } from '../../animacao/fadeSlideUp.js';
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';
import { PremiumSuface } from "../../components/premium-suface/premium-suface";

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true,
  imports: [ScrollRevealDirective, PremiumSuface],

})
export class About {
  show = false;
}
