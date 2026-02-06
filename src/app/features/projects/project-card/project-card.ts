import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../projects';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {

  @Input() project!: Project;

  @Output() view = new EventEmitter<Project>();

  onViewClick(event: MouseEvent) {
    event.stopPropagation();
    this.view.emit(this.project);
  }
}
