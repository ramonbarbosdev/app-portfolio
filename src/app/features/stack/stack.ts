import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface StackItem {
  name: string;
  icon: string;
  description?: string;
  size?: 'sm' | 'lg';
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.html',
  styleUrl: './stack.scss'
})
export class Stack {

  viewMode: 'grid' | 'carousel' = 'carousel';

  showAllStacks = false;

  animationClass = 'max-h-[520px]';


  toggleStacks() {

    this.showAllStacks = !this.showAllStacks;

    this.animationClass = this.showAllStacks
      ? 'max-h-[2000px]'
      : 'max-h-[520px]';

  }


  setView(mode: 'grid' | 'carousel') {
    this.viewMode = mode;
  }


  stackColumns: StackItem[][] = [

    [
      {
        name: 'React',
        description: 'Biblioteca moderna para interfaces reativas e escaláveis.',
        icon: 'devicon-react-original colored',
        size: 'sm'
      },
      {
        name: 'TypeScript',
        description: 'Superset do JavaScript com tipagem estática robusta.',
        icon: 'devicon-typescript-plain colored',
        size: 'sm'
      }
    ],

    [
      {
        name: 'Java',
        description: 'Plataforma sólida para aplicações backend de alta performance.',
        icon: 'devicon-java-plain colored',
        size: 'lg'
      }
    ],

    [
      {
        name: 'Spring Boot',
        description: 'Framework enterprise para microsserviços e APIs escaláveis.',
        icon: 'devicon-spring-plain colored',
        size: 'sm'
      },
      {
        name: 'NestJS',
        description: 'Framework Node.js moderno com arquitetura escalável.',
        icon: 'devicon-nestjs-plain colored',
        size: 'sm'
      }
    ],

    [
      {
        name: 'PostgreSQL',
        description: 'Banco relacional robusto, confiável e altamente performático.',
        icon: 'devicon-postgresql-plain colored',
        size: 'lg'
      }
    ],

    [
      {
        name: 'MongoDB',
        description: 'Banco NoSQL flexível ideal para aplicações modernas.',
        icon: 'devicon-mongodb-plain colored',
        size: 'sm'
      },
      {
        name: 'Docker',
        description: 'Containerização para ambientes consistentes e escaláveis.',
        icon: 'devicon-docker-plain colored',
        size: 'sm'
      }
    ],

    [
      {
        name: 'Tailwind CSS',
        description: 'Framework CSS utilitário para interfaces modernas.',
        icon: 'devicon-tailwindcss-plain colored',
        size: 'lg'
      }
    ],

    [
      {
        name: 'JavaScript',
        description: 'Linguagem essencial para aplicações web modernas.',
        icon: 'devicon-javascript-plain colored',
        size: 'sm'
      },
      {
        name: 'PHP',
        description: 'Linguagem backend amplamente utilizada em sistemas web.',
        icon: 'devicon-php-plain colored',
        size: 'sm'
      }
    ],

    [
      {
        name: 'Nginx',
        description: 'Servidor web de alta performance e proxy reverso.',
        icon: 'devicon-nginx-original colored',
        size: 'sm'
      },
      {
        name: 'Linux',
        description: 'Sistema operacional confiável para ambientes de produção.',
        icon: 'devicon-linux-plain ',
        size: 'sm'
      }
    ],

    [
      {
        name: 'GitHub',
        description: 'Plataforma de versionamento e colaboração de código.',
        icon: 'devicon-github-original ',
        size: 'lg'
      }
    ]

  ];

}
