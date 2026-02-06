import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, ScrollRevealDirective]
})
export class Stack {

  stackItems = signal<StackItem[]>([]);

  ngOnInit() {

    this.stackItems.set([

      { icon: 'devicon-angularjs-plain', label: 'Angular', accent: 'sky' },
      { icon: 'devicon-react-original', label: 'React', accent: 'sky' },
      { icon: 'devicon-typescript-plain', label: 'TypeScript', accent: 'sky' },
      { icon: 'devicon-javascript-plain', label: 'JavaScript', accent: 'sky' },
      { icon: 'devicon-tailwindcss-plain', label: 'Tailwind', accent: 'sky' },

      { icon: 'devicon-java-plain', label: 'Java', accent: 'emerald' },
      { icon: 'devicon-spring-plain', label: 'Spring Boot', accent: 'emerald' },
      { icon: 'devicon-nestjs-plain', label: 'NestJS', accent: 'emerald' },
      { icon: 'devicon-php-plain', label: 'PHP', accent: 'emerald' },

      { icon: 'devicon-postgresql-plain', label: 'PostgreSQL', accent: 'violet' },
      { icon: 'devicon-microsoftsqlserver-plain', label: 'SQLServer', accent: 'violet' },
      { icon: 'devicon-mongodb-plain', label: 'MongoDB', accent: 'violet' },
      { icon: 'devicon-docker-plain', label: 'Docker', accent: 'violet' },
      { icon: 'devicon-nginx-original', label: 'Nginx', accent: 'violet' },
      { icon: 'devicon-linux-plain', label: 'Linux', accent: 'violet' },
      { icon: 'devicon-github-original', label: 'Git', accent: 'violet' }

    ]);

  }

  getBg(accent: StackItem['accent']): string {

    switch (accent) {

      case 'sky':
        return 'rgba(56,189,248,0.18)';

      case 'emerald':
        return 'rgba(52,211,153,0.18)';

      case 'violet':
        return 'rgba(167,139,250,0.18)';

      default:
        return 'rgba(255,255,255,0.08)';
    }

  }

}
