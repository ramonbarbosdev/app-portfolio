import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StackItem {
  icon: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.html',
  styleUrl: './stack.scss'
})
export class Stack implements OnInit {

  items = signal<StackItem[]>([]);

  loopItems = signal<StackItem[]>([]);

  activeStack = signal<StackItem | null>(null);


  ngOnInit() {

    const base: StackItem[] = [

      { icon: 'devicon-angularjs-plain', label: 'Angular', url: '#' },
      { icon: 'devicon-react-original', label: 'React', url: '#' },
      { icon: 'devicon-typescript-plain', label: 'TypeScript', url: '#' },
      { icon: 'devicon-javascript-plain', label: 'JavaScript', url: '#' },
      { icon: 'devicon-tailwindcss-plain', label: 'Tailwind', url: '#' },

      { icon: 'devicon-java-plain', label: 'Java', url: '#' },
      { icon: 'devicon-spring-plain', label: 'Spring Boot', url: '#' },
      { icon: 'devicon-nestjs-plain', label: 'NestJS', url: '#' },
      { icon: 'devicon-php-plain', label: 'PHP', url: '#' },

      { icon: 'devicon-postgresql-plain', label: 'PostgreSQL', url: '#' },
      { icon: 'devicon-mongodb-plain', label: 'MongoDB', url: '#' },
      { icon: 'devicon-docker-plain', label: 'Docker', url: '#' },
      { icon: 'devicon-nginx-original', label: 'Nginx', url: '#' },
      { icon: 'devicon-linux-plain', label: 'Linux', url: '#' },
      { icon: 'devicon-github-original', label: 'GitHub', url: '#' }

    ];

    this.items.set(base);

    // duplicação obrigatória para loop infinito
    this.loopItems.set([...base, ...base]);

    this.activeStack.set(base[0]);

  }


  setActive(item: StackItem) {

    this.activeStack.set(item);

  }

  goTo(item: StackItem): void {

  if (!item?.url) return;

  window.open(item.url, '_blank', 'noopener,noreferrer');

}


}

