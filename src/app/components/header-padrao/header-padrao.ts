import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-padrao',
  imports: [],
  templateUrl: './header-padrao.html',
  styleUrl: './header-padrao.scss',
})
export class HeaderPadrao {

  @Input() titulo!: string;
  @Input() subtitulo!: string;

}
