import { Component } from '@angular/core';
import { HeaderPadrao } from "../../components/header-padrao/header-padrao";
import { RevealDirective } from '../../core/directives/scroll-reaveal-directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true,
  imports: [RevealDirective, HeaderPadrao],

})
export class About {
  show = false;
}
