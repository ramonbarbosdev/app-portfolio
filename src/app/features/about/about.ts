import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';
import { HeaderPadrao } from "../../components/header-padrao/header-padrao";

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true,
  imports: [ScrollRevealDirective, HeaderPadrao],

})
export class About {
  show = false;
}
