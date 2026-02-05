import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-background-suface',
  imports: [],
  templateUrl: './background-suface.html',
  styleUrl: './background-suface.scss',
})
export class BackgroundSuface {
  isTransitioning = false;

  constructor(private theme: ThemeService) { }

  ngOnInit() {

    setInterval(() => {
      this.isTransitioning = this.theme.isTransitioning();
    }, 50);

  }
}
