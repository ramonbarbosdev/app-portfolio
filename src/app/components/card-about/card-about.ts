import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-about',
  imports: [  CommonModule],
  templateUrl: './card-about.html',
  styleUrl: './card-about.scss',
})
export class CardAbout {

  @Input() titulo!: string
  @Input() subtitulo!: string
  @Input() icon!: string

}
