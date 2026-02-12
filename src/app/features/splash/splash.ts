import { Component, EventEmitter, Output } from '@angular/core';
import { BackgroundSuface } from '../../components/background-suface/background-suface';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-splash',
  imports: [BackgroundSuface],
  templateUrl: './splash.html',
  styleUrl: './splash.scss',
})
export class Splash {

 
  constructor(private revealService: RevealService) {}

  @Output() finished = new EventEmitter<void>();

  fadeOut = false;

  ngOnInit(): void {

   setTimeout(() => {

  this.fadeOut = true;

  setTimeout(() => {

    this.revealService.unlock();
    this.finished.emit();

  }, 500);

}, 1000);

  }
}
