import { Component } from '@angular/core';
import { HeaderPadrao } from "../../components/header-padrao/header-padrao";
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';

@Component({
  selector: 'app-experience',
  imports: [HeaderPadrao, ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

}
