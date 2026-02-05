import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { fadeSlideUp } from '../../animacao/fadeSlideUp';
import { staggerFade } from '../../animacao/staggerFade';
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';

@Component({
  selector: 'app-home',
  imports: [ButtonModule,ScrollRevealDirective],
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