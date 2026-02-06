import { Component } from '@angular/core';
import { ProjectCard } from "./project-card/project-card";
import { ProjectDialog } from "./project-dialog/project-dialog";
import { CommonModule } from '@angular/common';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;

  coverImage: string;
  videoUrl?: string;

  technologies: string[];

  githubUrl?: string;
  liveUrl?: string;
}


@Component({
  selector: 'app-projects',
  imports: [ProjectCard, ProjectDialog, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [

    {
      id: '1',

      title: 'Sistema de Gestão Pública',

      description: 'Plataforma SaaS para criação de orçamentos',

      longDescription: `
        Sistema completo de orçamentos com arquitetura escalável,
        backend em Spring Boot e frontend em Angular.

        Inclui:
        - precificação dinâmica
        - multi-tenant
        - APIs REST robustas
        - arquitetura modular
      `,

      coverImage: '/assets/projects/orcamento.png',

      technologies: [
        'angular',
        'spring',
        'postgresql',
        'docker'
      ],

      githubUrl: 'https://github.com/ramonbarbosdev',

      liveUrl: 'https://ramoncode.com.br'
    },

    {
      id: '2',

      title: 'Portal Transparência',

      description: 'Portal público de dados governamentais',

      longDescription: `
        Portal com sincronização entre PostgreSQL e MongoDB,
        usando cronjobs e arquitetura desacoplada.
      `,

      coverImage: '/assets/projects/portal.png',

      technologies: [
        'React',
        'NestJS',
        'MongoDB'
      ],

      githubUrl: 'https://github.com/ramonbarbosdev'

    }

  ];


  selectedProject?: Project;

  dialogVisible = false;


  openProject(project: Project) {

    this.selectedProject = project;

    this.dialogVisible = true;

  }


  closeDialog() {

    this.dialogVisible = false;

    this.selectedProject = undefined;

  }
}
