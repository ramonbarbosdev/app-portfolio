import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { fadeSlideUp } from '../../animacao/fadeSlideUp';
import { staggerFade } from '../../animacao/staggerFade';

@Component({
  selector: 'app-home',
  imports: [ButtonModule,],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  animations: [fadeSlideUp,staggerFade ],
})
export class Home implements AfterViewInit {
  visible = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.visible = true;

      this.cdr.detectChanges();
    });
  }
}