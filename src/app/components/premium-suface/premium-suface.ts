import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-suface',
  imports: [CommonModule],
  templateUrl: './premium-suface.html',
  styleUrl: './premium-suface.scss',
})
export class PremiumSuface {

  @Input() glow = true;
}
