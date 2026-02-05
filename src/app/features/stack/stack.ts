import { Component, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';
export interface StackItem {
  icon: string;
  label: string;
  accent: 'sky' | 'emerald' | 'violet';
}

@Component({
  selector: 'app-stack',
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
  imports:[CarouselModule,ScrollRevealDirective]
})
export class Stack {

  stackItems = signal<StackItem[]>([]);

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 6, numScroll: 1 },
    { breakpoint: '1024px', numVisible: 5, numScroll: 1 },
    { breakpoint: '768px',  numVisible: 4, numScroll: 1 },
    { breakpoint: '575px',  numVisible: 3, numScroll: 1 }
  ];

  ngOnInit() {
    this.stackItems.set([
      // Frontend
      { icon: 'devicon-angularjs-plain', label: 'Angular', accent: 'sky' },
      { icon: 'devicon-react-original', label: 'React', accent: 'sky' },
      { icon: 'devicon-typescript-plain', label: 'TypeScript', accent: 'sky' },
      { icon: 'devicon-tailwindcss-plain', label: 'Tailwind', accent: 'sky' },

      // Backend
      { icon: 'devicon-java-plain', label: 'Java', accent: 'emerald' },
      { icon: 'devicon-spring-plain', label: 'Spring', accent: 'emerald' },
      { icon: 'devicon-nestjs-plain', label: 'NestJS', accent: 'emerald' },
      { icon: 'devicon-php-plain', label: 'PHP', accent: 'emerald' },

      // Infra / DB
      { icon: 'devicon-postgresql-plain', label: 'PostgreSQL', accent: 'violet' },
      { icon: 'devicon-docker-plain', label: 'Docker', accent: 'violet' },
      { icon: 'devicon-nginx-original', label: 'Nginx', accent: 'violet' }
    ]);
  }

  getBg(accent: StackItem['accent']) {
    switch (accent) {
      case 'sky': return 'rgba(56,189,248,0.18)';
      case 'emerald': return 'rgba(52,211,153,0.18)';
      case 'violet': return 'rgba(167,139,250,0.18)';
    }
  }
}
