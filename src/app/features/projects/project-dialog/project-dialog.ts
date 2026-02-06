import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../projects';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-dialog',
  imports: [DialogModule, CommonModule],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.scss',
})
export class ProjectDialog {
  @Input()
  project?: Project;


  @Input()
  visible = false;


  @Output()
  visibleChange = new EventEmitter<boolean>();


  onClose() {

    this.visible = false;

    this.visibleChange.emit(false);

  }
}
