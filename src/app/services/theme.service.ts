import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  
  private readonly STORAGE_KEY = 'theme';

  private currentTheme: Theme = 'dark';

  constructor() {
    this.init();
  }

  private init(): void {

    const saved = localStorage.getItem(this.STORAGE_KEY) as Theme | null;

    if (saved) {
      this.setTheme(saved);
      return;
    }

    // detecta preferência do sistema
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    this.setTheme(prefersLight ? 'light' : 'dark');

  }

  setTheme(theme: Theme): void {

    this.currentTheme = theme;

    const root = document.documentElement;

    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }

    localStorage.setItem(this.STORAGE_KEY, theme);

  }

  toggle(): void {

    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');

  }

  getTheme(): Theme {

    return this.currentTheme;

  }

  isLight(): boolean {

    return this.currentTheme === 'light';

  }

}
