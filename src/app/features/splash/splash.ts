import { Component, EventEmitter, Output } from '@angular/core';
import { BackgroundSuface } from '../../components/background-suface/background-suface';

@Component({
  selector: 'app-splash',
  imports: [BackgroundSuface],
  templateUrl: './splash.html',
  styleUrl: './splash.scss',
})
export class Splash {

   @Output() finished = new EventEmitter<void>();

  fadeOut = false;

  ngOnInit(): void {

    setTimeout(() => {

      this.fadeOut = true;

      setTimeout(() => {

        this.finished.emit();

      }, 1500);

    }, 1500);

  }
}
