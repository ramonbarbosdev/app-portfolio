import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';
import { HeaderPadrao } from "../../components/header-padrao/header-padrao";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  imports: [HeaderPadrao],
})
export class Contact {
}
