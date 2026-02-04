import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Section } from "./section/section";

export interface StackItem {
  icon: string;
  label: string;
}

export interface StackSection {
  title: string;
  items: StackItem[];
}

// stack.data.ts

export const STACK: StackSection[] = [
  {
    title: 'Frontend',
    items: [
      { icon: 'devicon-angularjs-plain', label: 'Angular' },
      { icon: 'devicon-react-original', label: 'React' },
      { icon: 'devicon-typescript-plain', label: 'TypeScript' },
      { icon: 'devicon-tailwindcss-plain', label: 'Tailwind' }
    ]
  },
  {
    title: 'Backend',
    items: [
      { icon: 'devicon-java-plain', label: 'Java' },
      { icon: 'devicon-spring-plain', label: 'Spring Boot' },
      { icon: 'devicon-nestjs-plain', label: 'NestJS' },
      { icon: 'devicon-php-plain', label: 'PHP' }
    ]
  },
  {
    title: 'Banco de Dados',
    items: [
      { icon: 'devicon-postgresql-plain', label: 'PostgreSQL' },
      { icon: 'devicon-mysql-plain', label: 'MySQL' },
      { icon: 'devicon-mongodb-plain', label: 'MongoDB' }
    ]
  },
  {
    title: 'Infraestrutura',
    items: [
      { icon: 'devicon-docker-plain', label: 'Docker' },
      { icon: 'devicon-nginx-original', label: 'Nginx' },
      { icon: 'devicon-linux-plain', label: 'Linux' },
      { icon: 'devicon-github-original', label: 'CI / CD' }
    ]
  }
];


@Component({
  selector: 'app-stack',
  imports: [CommonModule, Section],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  readonly stackLeft: StackSection[] = [
    STACK.find(s => s.title === 'Frontend')!,
    STACK.find(s => s.title === 'Banco de Dados')!
  ];

  readonly stackRight: StackSection[] = [
    STACK.find(s => s.title === 'Backend')!,
    STACK.find(s => s.title === 'Infraestrutura')!
  ];

  trackByTitle(_: number, section: StackSection) {
    return section.title;
  }

  trackByLabel(_: number, item: { label: string }) {
    return item.label;
  }
}
