import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private transitioning = false;

  setTheme(primary: string, secondary: string) {

    const root = document.documentElement;

    root.style.setProperty('--bg-glow-primary-next', primary);
    root.style.setProperty('--bg-glow-secondary-next', secondary);

    this.transitioning = true;

    setTimeout(() => {

      root.style.setProperty('--bg-glow-primary', primary);
      root.style.setProperty('--bg-glow-secondary', secondary);

      this.transitioning = false;

    }, 1200);
  }

  isTransitioning() {
    return this.transitioning;
  }
}
