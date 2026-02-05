import { Component, Input } from '@angular/core';
import { StackSection } from '../stack';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  imports: [CommonModule],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {
  @Input() accent: string = 'sky';
  @Input({ required: true }) section!: StackSection;

  trackByLabel(_: number, item: { label: string }) {
    return item.label;
  }
}
