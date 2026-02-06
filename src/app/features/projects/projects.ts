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
  type?: 'personal' | 'professional';
  company?: string;
  technologies: string[];

  githubUrl?: string;
  liveUrl?: string;
  date?: string;
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

      type: 'professional',

      company: 'Empresa confidencial',

      description: 'Sistema completo de gestão pública municipal',

      longDescription: `
      Desenvolvimento de sistema completo para prefeituras com múltiplos módulos,
      incluindo administração, finanças e relatórios.
      `,

      coverImage: '/assets/sipec.png',

      technologies: [
        'php',
        'postgresql',
        'linux'
      ],

      githubUrl: undefined,
      liveUrl: 'https://sipec.w5i.com.br'

    },


    {
      id: '2',
      title: 'Crédito Rural e Financeiro',
      description: '',
      longDescription: `
        Desenvolvimento de sistema para crédito rural, consórcios e crédito pessoal, 
        atuando como Desenvolvedor Full Stack com Spring Boot, Angular. Responsável 
        também pela hospedagem em VPS, com banco de dados separado da aplicação 
        e storage dedicado para anexos, garantindo organização, segurança e 
        escalabilidade, além da criação e manutenção de relatórios gerenciais e 
        operacionais utilizando JasperSoft. 
      `,
      coverImage: '/assets/agrotech.png',
      technologies: [
        'spring',
        'angular',
        'java',
        'docker',
        'postgresql',

      ],
      githubUrl: undefined,
      liveUrl: 'https://cliente.com.br',
      type: 'professional',
      company: 'Cliente privado',


    },
    {
      id: '3',
      title: 'SyncDb',
      description: '',
      longDescription: `
      Projeto autoral para sincronizar dados entre bancos locais e na nuvem. Devido à 
      sua utilidade, foi estendido para uma versão desktop e adotado internamente 
      pela empresa para auxiliar o ambiente de testes.
      `,
      coverImage: '/assets/syncdb2.png',
      technologies: [
        'spring',
        'angular',
        'mongodb',

      ],
      githubUrl: 'https://github.com/ramonbarbosdev',
      liveUrl: 'https://cliente.com.br',
      type: 'personal',
      company: 'Projeto comercial próprio',

    },
    {
      id: '4',
      title: 'Sistema de Business Intelligence',
      description: '',
      longDescription: `
      Desenvolvimento de dashboards interativos para análise e visualização de 
      dados públicos. Solução moderna e responsiva, pensada para facilitar a leitura 
      de informações por gestores municipais. Projeto realizado em equipe sob 
      contrato de confidencialidade.
      `,
      coverImage: '/assets/bi.png',
      technologies: [
        'react',
        'nestjs',
        'mongodb',
      ],
      githubUrl: undefined,
      liveUrl: 'https://cliente.com.br',
      type: 'professional',
      company: 'Empresa confidencial',

    },
    {
      id: '5',
      title: 'Sistema de Orçamentos SaaS',
      description: 'Plataforma SaaS com precificação dinâmica',
      longDescription: `
      Sistema SaaS completo para criação e gestão de orçamentos com arquitetura multi-tenant.
      `,
      coverImage: '/assets/saas.png',
      technologies: [
        'spring',
        'angular',
        'postgresql',
        'docker'
      ],

      githubUrl: undefined,
      liveUrl: 'https://cliente.com.br',
      type: 'personal',
      company: 'Projeto comercial próprio',

    },


    {
      id: '6',
      title: 'Portal de Transparência',
      description: 'Sistema público de consulta de dados',
      longDescription: `
      Sistema SaaS completo para criação e gestão de orçamentos com arquitetura multi-tenant.
      `,
      coverImage: '/assets/portal.png',
      technologies: [
        'nestjs',
        'react',
        'postgresql',
        'mongodb'
      ],

      githubUrl: undefined,
      liveUrl: 'https://cliente.com.br',
      type: 'professional',
      company: 'Empresa confidencial',


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
