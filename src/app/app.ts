import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Splash } from "./features/splash/splash";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Splash, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-portfolio');

  showSplash = true;

  onSplashFinished() {

    this.showSplash = false;

    const splash = document.getElementById('app-splash');

    if (splash) {
      splash.remove();
    }

  }

}
