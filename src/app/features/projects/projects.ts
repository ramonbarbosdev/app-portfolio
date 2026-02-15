import { Component } from '@angular/core';
import { ProjectCard } from "./project-card/project-card";
import { ProjectDialog } from "./project-dialog/project-dialog";
import { CommonModule } from '@angular/common';
import { HeaderPadrao } from "../../components/header-padrao/header-padrao";
import { ScrollRevealDirective } from '../../core/directives/scroll-reaveal-directive';

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
  imports: [ProjectCard, ProjectDialog, CommonModule, HeaderPadrao, ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [

    // {
    //   id: '1',

    //   title: 'Sistema de Gestão Pública',

    //   type: 'professional',

    //   company: 'Empresa confidencial',

    //   description: 'Sistema completo de gestão pública municipal',

    //   longDescription: `
    //   Desenvolvimento de sistema completo para prefeituras com múltiplos módulos,
    //   incluindo administração, finanças e relatórios. Projeto realizado em equipe sob contrato de confidencialidade.
    //   `,

    //   coverImage: '/assets/sipec.png',

    //   technologies: [
    //     'php',
    //     'postgresql',
    //     'linux'
    //   ],

    //   githubUrl: undefined,
    //   liveUrl: 'https://sipec.w5i.com.br'

    // },


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
      liveUrl: 'https://sistema.agrotechcredito.com.br',
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
      githubUrl: 'https://github.com/ramonbarbosdev/app-sincdb',
      liveUrl: undefined,
      type: 'personal',
      company: 'Projeto comercial próprio',

    },
    // {
    //   id: '4',
    //   title: 'Sistema de Business Intelligence',
    //   description: '',
    //   longDescription: `
    //   Desenvolvimento de dashboards interativos para análise e visualização de 
    //   dados públicos. Solução moderna e responsiva, pensada para facilitar a leitura 
    //   de informações por gestores municipais. Projeto realizado em equipe sob 
    //   contrato de confidencialidade. Projeto realizado em equipe sob contrato de confidencialidade.
    //   `,
    //   coverImage: '/assets/bi.png',
    //   technologies: [
    //     'react',
    //     'nestjs',
    //     'mongodb',
    //   ],
    //   githubUrl: undefined,
    //   liveUrl: 'https://bi.w5i.com.br',
    //   type: 'professional',
    //   company: 'Empresa confidencial',

    // },
    {
      id: '5',
      title: 'Sistema de Orçamentos SaaS',
      description: 'Plataforma SaaS com precificação dinâmica',
      longDescription: `
      Sistema SaaS de geração e gestão de orçamentos desenvolvido para permitir que empresas criem, simulem e gerenciem orçamentos de forma estruturada, rápida e escalável.
      `,
      coverImage: '/assets/saas.png',
      technologies: [
        'spring',
        'angular',
        'postgresql',
        'docker'
      ],

      githubUrl: 'https://github.com/ramonbarbosdev/api-orcafacil',
      liveUrl: undefined,
      type: 'personal',
      company: 'Projeto comercial próprio',

    },


    // {
    //   id: '6',
    //   title: 'Portal Transparência',
    //   description: 'Sistema público de consulta de dados',
    //   longDescription: 'Sistema público de consulta de dados, solução moderna e responsiva, pensada para facilitar a leitura de informações por gestores municipais. Projeto realizado em equipe sob contrato de confidencialidade.',
    //   coverImage: '/assets/portal.png',
    //   technologies: [
    //     'nestjs',
    //     'react',
    //     'postgresql',
    //     'mongodb'
    //   ],

    //   githubUrl: undefined,
    //   liveUrl: 'https://apresentacao.w5i.com.br',
    //   type: 'professional',
    //   company: 'Empresa confidencial',


    // }
    {
      id: '7',
      title: 'Memorix AI',

      description: 'Assistente de IA com memória persistente, capaz de manter contexto entre conversas e oferecer respostas contínuas e personalizadas.',

      longDescription: `
Memorix AI é um assistente de inteligência artificial com memória persistente, desenvolvido para simular interações contínuas e contextuais, semelhante a plataformas como ChatGPT, porém com arquitetura própria e controle completo de backend e frontend.

O sistema utiliza Angular no frontend para fornecer uma interface moderna, responsiva e otimizada, com gerenciamento reativo de estado, simulação de respostas, e experiência de chat fluida. O backend foi construído com Spring Boot e Spring AI, integrando modelos de linguagem e implementando um sistema de memória persistente baseado em PostgreSQL.
`,

      coverImage: '/assets/portal.png',

      technologies: [
        'angular',
        'spring',
        'springai',
        'postgresql',
        'docker',
        'nginx',
        'github'
      ],

      githubUrl: 'https://github.com/ramonbarbosdev/api-ai',

      liveUrl: 'https://memorixai.ramoncode.com.br/',

      type: 'personal',

      company: 'Projeto comercial próprio'
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
