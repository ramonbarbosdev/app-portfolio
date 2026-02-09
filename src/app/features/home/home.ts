import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { fadeSlideUp } from '../../animacao/fadeSlideUp';
import { staggerFade } from '../../animacao/staggerFade';
import { RevealDirective } from '../../core/directives/scroll-reaveal-directive';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  animations: [fadeSlideUp, staggerFade],
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


  scrollToId(id: string): void {

    const element = document.getElementById(id);

    if (!element) return;

    const offset = -55;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });

  }


}