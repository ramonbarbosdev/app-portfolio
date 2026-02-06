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
      description: '',
      longDescription: `
        Desenvolvimento de um sistema completo para prefeituras, abrangendo módulos 
      de administração, finanças, RH, Almoxarifado, Patrimônio, Contabilidade, 
      Relatórios, entre outros. Projeto realizado em equipe sob contrato de confidencialidade. 
      `,
      coverImage: '/assets/projects/orcamento.png',
      technologies: [
        'php',
        'postgresql',
        'linux'
      ],
      githubUrl: 'https://github.com/ramonbarbosdev',
      liveUrl: 'https://ramoncode.com.br',
      date: ''
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
      coverImage: '/assets/projects/portal.png',
      technologies: [
        'spring',
        'angular',
        'java',
        'docker',
        'postgresql',

      ],

      githubUrl: 'https://github.com/ramonbarbosdev'

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
      coverImage: '/assets/projects/portal.png',
      technologies: [
        'spring',
        'angular',
        'mongodb',

      ],
      githubUrl: 'https://github.com/ramonbarbosdev'
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
      coverImage: '/assets/projects/portal.png',
      technologies: [
        'react',
        'nestjs',
        'mongodb',
      ],
      githubUrl: 'https://github.com/ramonbarbosdev'
    },
    {
      id: '5',
      title: 'Sistema de Orçamentos SaaS',
      description: '',
      longDescription: `
      Sistema SaaS completo para criação, simulação e gestão de orçamentos com arquitetura moderna e escalável.
      A plataforma permite configurar regras de precificação dinâmicas, definir campos personalizados e calcular valores automaticamente com base em diferentes estratégias de precificação.
      O backend foi desenvolvido em Java com Spring Boot, seguindo princípios de arquitetura limpa e APIs REST robustas, enquanto o frontend foi construído em Angular com foco em experiência do usuário e reatividade.
      O sistema suporta arquitetura multi-tenant, garantindo isolamento e flexibilidade para múltiplos clientes, além de ter sido projetado para alta escalabilidade, manutenibilidade e evolução contínua.
      Principais características:
      • precificação dinâmica baseada em regras  
      • arquitetura multi-tenant  
      • APIs REST escaláveis  
      • frontend moderno e responsivo  
      • arquitetura modular e extensível  
      `,
      coverImage: '/assets/projects/portal.png',
      technologies: [
        'spring',
        'angular',
        'postgresql',
        'docker',
        'typescript'
      ],
      githubUrl: 'https://github.com/ramonbarbosdev'

    },



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
