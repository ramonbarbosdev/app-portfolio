import { Component } from '@angular/core';
import { HeaderPadrao } from "../../components/header-padrao/header-padrao";
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';
import { CardAbout } from "../../components/card-about/card-about";

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true,
  imports: [ScrollRevealDirective, HeaderPadrao, CardAbout],

})
export class About {
  show = false;
}
