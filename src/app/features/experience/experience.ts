import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';
import { HeaderPadrao } from "../../components/header-padrao/header-padrao";

@Component({
  selector: 'app-experience',
  imports: [ScrollRevealDirective, HeaderPadrao],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

}
