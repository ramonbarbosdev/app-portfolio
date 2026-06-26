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

    {
      id: '1',
      title: 'Questify Go',
      type: 'personal',
      company: 'Produto próprio em desenvolvimento',
      description: 'Aplicativo mobile de desafios diários com backend próprio e persistência em PostgreSQL',
      longDescription: `
      Aplicativo mobile criado para estimular o raciocínio lógico por meio de desafios diários rápidos e objetivos.

      Atuei na construção da solução fullstack, com aplicativo em Expo, backend em Spring Boot e persistência em PostgreSQL. A proposta é criar uma experiência simples, recorrente e sem distrações, com estrutura preparada para evolução de conteúdo, usuários e histórico de respostas.

      Destaques: produto autoral, backend próprio, banco relacional e experiência mobile focada em uso diário.
      `,
      coverImage: '/assets/questify.png',
      technologies: [
        'expo',
        'postgresql',
        'spring',
        'github',
       
      ],
      githubUrl: 'https://github.com/ramonbarbosdev/app-questify',
      liveUrl: undefined,

    },

    {
      id: '2',
      title: 'Crédito Rural e Financeiro',
      description: 'Sistema web para gestão de operações financeiras, anexos e relatórios gerenciais',
      longDescription: `
        Sistema web para gestão de crédito rural, consórcios e crédito pessoal, desenvolvido para organizar operações, clientes, anexos e relatórios de uma empresa do setor financeiro.

        Atuei como desenvolvedor fullstack, criando funcionalidades no backend com Spring Boot, frontend em Angular, modelagem de dados e relatórios operacionais com JasperSoft. Também participei da hospedagem em VPS, com banco de dados separado da aplicação e storage dedicado para anexos.

        Destaques: sistema em produção, cliente privado, relatórios gerenciais, separação entre aplicação, banco e arquivos, além de responsabilidade técnica em backend, frontend e deploy.
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
      description: 'Ferramenta para sincronização de dados entre ambientes locais e nuvem',
      longDescription: `
      Ferramenta autoral criada para sincronizar dados entre bancos locais e ambiente em nuvem, reduzindo trabalho manual em cenários de teste, homologação e atualização de bases.

      Desenvolvi a solução com backend em Spring Boot e interface em Angular. Pela utilidade prática, o projeto evoluiu para uma versão desktop e passou a ser usado internamente na empresa para apoiar ambientes de teste.

      Destaques: automação de processo técnico, sincronização entre ambientes, uso interno real e evolução de projeto pessoal para ferramenta operacional.
      `,
      coverImage: '/assets/syncdb2.png',
      technologies: [
        'spring',
        'angular',
        'mongodb',


      ],
      githubUrl: 'https://github.com/ramonbarbosdev/app-sincdb',
      liveUrl: undefined,
      type: 'professional',
      company: 'Ferramenta autoral',

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
      title: 'Orçafácil',
      description: 'SaaS para criação de orçamentos, gestão de clientes e geração de relatórios',
      longDescription: `
      Plataforma SaaS para criação e gestão de orçamentos comerciais, com cadastro de clientes, controle de informações e base preparada para múltiplos usuários.

      Atuei na construção do backend com Spring Boot, estruturação do banco PostgreSQL, organização das regras de negócio e integração com frontend Angular. O projeto foi pensado para transformar um processo comercial manual em um fluxo mais organizado, rastreável e escalável.

      Destaques: arquitetura SaaS, API REST, PostgreSQL, Docker e foco em operação comercial.
      `,
      coverImage: '/assets/saas.png',
      technologies: [
        'spring',
        'angular',
        'postgresql',
        'docker',

      ],

      githubUrl: 'https://github.com/ramonbarbosdev/api-orcafacil',
      liveUrl: undefined,
      type: 'professional',
      company: 'Produto próprio em desenvolvimento',

    },


    {
      id: '6',
      title: 'Portal Transparência',
      description: 'Sistema público de consulta de dados',
      longDescription: 'Sistema público de consulta de dados, solução moderna e responsiva, pensada para facilitar a leitura de informações por gestores municipais. Projeto realizado em equipe sob contrato de confidencialidade.',
      coverImage: '/assets/portal.png',
      technologies: [
        'nestjs',
        'react',
        'postgresql',
        'mongodb'
      ],

      githubUrl: undefined,
      liveUrl: 'https://apresentacao.w5i.com.br',
      type: 'professional',
      company: 'Empresa confidencial',


    },
    {
      id: '7',
      title: 'Memorix AI',

      description: 'Assistente de IA com memória persistente, contexto entre conversas e arquitetura fullstack própria.',

      longDescription: `
Memorix AI é um assistente de inteligência artificial com memória persistente, criado para manter contexto entre conversas e oferecer interações mais contínuas e personalizadas.

Desenvolvi o frontend em Angular com experiência de chat responsiva e backend em Spring Boot/Spring AI, integrando modelo de linguagem com persistência em PostgreSQL. O foco técnico foi estruturar histórico, contexto e memória para permitir respostas mais relevantes ao longo do uso.

Destaques: integração com IA, memória persistente, PostgreSQL, arquitetura fullstack própria e deploy com Docker/nginx.
      `,

      coverImage: '/assets/ai.png',

      technologies: [
        'angular',
        'spring',
        'postgresql',
        'docker',
        'nginx',
        'github',

      ],

      githubUrl: 'https://github.com/ramonbarbosdev/api-ai',

      liveUrl: 'https://memorixai.ramoncode.com.br/',

      type: 'personal',

      company: 'Produto pr?prio em desenvolvimento'
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
