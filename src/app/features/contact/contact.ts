import { Component } from '@angular/core';
import { HeaderPadrao } from "../../components/header-padrao/header-padrao";
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  imports: [HeaderPadrao, ScrollRevealDirective],
})
export class Contact {
}
