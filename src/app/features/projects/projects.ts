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
      title: 'eSimples API',
      description: 'Backend SaaS multi-tenant (Spring Boot) com um banco isolado por organização, RBAC e CI/CD completo',
      longDescription: `
      **Resumo:** arquitetei e desenvolvi sozinho o backend de uma plataforma SaaS multi-tenant, com isolamento físico de dados por organização e provisionamento 100% automatizado de novos clientes.

      ## O problema

      Uma plataforma SaaS precisa atender várias organizações ao mesmo tempo sem misturar dados entre elas, controlar o que cada usuário pode acessar e permitir ligar/desligar módulos comerciais por cliente — tudo isso sem virar um monólito difícil de evoluir.

      ## O que eu construí

      • Arquitetura multi-tenant no modelo **Database per Organization**, com roteamento dinâmico de DataSource: cada requisição é direcionada ao banco correto em tempo de execução, a partir do tenant autenticado.
      • Provisionamento automático de novos tenants (criação de banco + aplicação de migrations).
      • Autenticação JWT stateless com RBAC (papéis, permissões por rota e módulos comerciais habilitáveis por organização).
      • Versionamento de schema com Flyway, tanto para o banco central quanto para os bancos de cada tenant.
      • Auditoria de dados com Hibernate Envers.
      • Pipeline de CI/CD completo: GitHub Actions → build → imagem Docker publicada no GHCR.

      ## Principais desafios técnicos

      • Isolar completamente plataforma e tenants sem duplicar lógica de infraestrutura a cada novo cliente.
      • Automatizar a criação de bancos e aplicação de migrations no momento do onboarding.
      • Desenhar um modelo de autorização que combina papéis, permissões granulares e módulos contratados.

      ## Stack

      **Backend:** Java 21, Spring Boot, Spring Security, Spring Data JPA, Spring AOP
      **Dados:** PostgreSQL, Flyway, Hibernate Envers
      **Infra:** Docker, GitHub Actions, GHCR
      **Integrações:** JWT, OpenAPI/Swagger, ViaCEP, consulta de CNPJ, SMTP

      ## Resultado

      Plataforma SaaS pronta para escalar em número de organizações, com onboarding automatizado, dados fisicamente isolados por cliente e controle de acesso granular — arquitetura pensada para ambiente corporativo, não um CRUD genérico.
      `,
      coverImage: '/assets/esimples.png',
      technologies: [
        'spring',
        'java',
        'postgresql',
        'docker',
        'github',
      ],
      githubUrl: undefined,
      liveUrl: undefined,
      type: 'professional',
      company: 'Produto próprio — backend SaaS',
    },

    {
      id: '8',
      title: 'Report Engine API',
      description: 'Motor de relatórios desacoplado do ERP (Spring Boot): datasets, exploração de dados, layouts e exportação multi-tenant',
      longDescription: `
      **Resumo:** projetei e implementei um motor de relatórios independente do ERP — um produto à parte, reutilizável entre sistemas, responsável por consultar, explorar, formatar e exportar dados sem acoplar essa lógica ao domínio operacional.

      ## O problema

      Sistemas ERP concentram dados e regras de negócio, mas não são o lugar certo para modelar relatórios, catálogos de dataset e exportações customizadas — isso aumenta o acoplamento e trava o reuso entre produtos diferentes.

      ## O que eu construí

      • Modelagem de domínio completa: provider, dataset, execution, layout, visualization e share.
      • API REST versionada (/api/v1), autenticada por API key, com dois canais de acesso: **ADMIN** (catálogo) e **CLIENT/EMBED** (uso incorporado ao ERP).
      • Multi-tenant real: cada organização pode ter seu próprio datasource JDBC, com pool de conexões (Hikari) roteado por X-Tenant-Id.
      • Pipeline de exploração de dados pós-consulta (filtro, ordenação, agrupamento e paginação), sem precisar reescrever SQL a cada interação do usuário.
      • Exportação em CSV, JSON, PNG e PDF/XLSX via JasperReports + templates .jrxml.
      • Migração do produto para modelo **SQL-only**, descontinuando um caminho legado (ERP_API), com schema controlado por Flyway.
      • Documentação arquitetural formal (ADR) definindo a fronteira entre ERP, Engine e Workspace.

      ## Principais desafios técnicos

      • Separar metadados de relatório da origem real dos dados, sem acoplar o Engine ao domínio do ERP.
      • Rodar consultas multi-tenant com pool JDBC isolado por organização.
      • Unificar exportação tabular simples e exportação Jasper (PDF/XLSX) num único fluxo.

      ## Stack

      **Backend:** Java 21, Spring Boot 3.4, Spring Data JPA, Spring Validation, Spring Actuator
      **Dados:** PostgreSQL (metadados), Flyway, JDBC/Hikari (datasources de tenant)
      **Exportação:** JasperReports, Apache POI, OpenPDF
      **Infra/testes:** Maven, Testcontainers (PostgreSQL)

      ## Resultado

      Motor de relatórios reutilizável entre produtos, com catálogo de datasets, exploração interativa, multi-tenant por datasource e exportações parametrizadas — sem misturar regra de relatório no domínio operacional do ERP.
      `,
      coverImage: '/assets/engine.png',
      technologies: [
        'spring',
        'java',
        'postgresql',
      ],
      githubUrl: undefined,
      liveUrl: undefined,
      type: 'professional',
      company: 'Produto próprio — motor de relatórios',
    },

    {
      id: '2',
      title: 'Crédito Rural e Financeiro',
      description: 'Sistema em produção há ~1 ano para crédito rural, pessoal e consórcios — do requisito ao deploy, sozinho',
      longDescription: `
      **Resumo:** único desenvolvedor Full Stack de um sistema em produção para uma empresa do setor financeiro (crédito rural, pessoal e consórcios), substituindo um controle feito em planilhas. Em uso diário há cerca de 1 ano, com ~10 usuários.

      ## O problema

      A operação era feita em planilhas: perda de documentos, sem controle de acesso por perfil e sem padronização entre os diferentes tipos de crédito — cada linha de negócio (rural, pessoal, consórcio) tem regras próprias, então um fluxo genérico não resolvia.

      ## O que eu construí

      • Levantamento de requisitos direto com o cliente, modelagem do banco (PostgreSQL + Flyway, ~25 tabelas) e desenvolvimento completo: backend, frontend, deploy e manutenção contínua.
      • **API REST principal:** autenticação JWT (Spring Security), operações específicas por tipo de serviço, anexos e notificações.
      • **API de relatórios separada:** JasperReports isolado e executado em fila, para não competir por memória/tempo com a API operacional — decisão tomada após um problema real de performance em produção.
      • Autorização por perfis (Administrador, Usuários, Projetistas, Técnicos e papéis customizados pelo admin), com restrição de anexos por papel.
      • Anexos armazenados em Amazon S3; notificações por e-mail e WhatsApp; geração de PDFs.
      • Infra em VPS com containers separados para front e back, nginx, ambientes de homologação e produção, CI/CD com GitHub Actions.

      ## Principais desafios técnicos

      • Lentidão em produção causada por payloads grandes — revisão analítica de cada requisição para reduzir o que era trafegado.
      • Jasper síncrono disputando recursos com a API principal — resolvido separando em API dedicada com fila.
      • Modelar regras e fluxos distintos por produto sem forçar um domínio genérico frágil.

      ## Stack

      **Backend:** Java, Spring Boot, Spring Security (JWT), Spring Data JPA, Flyway
      **Frontend:** Angular
      **Dados/Infra:** PostgreSQL, Amazon S3, Docker, nginx, GitHub Actions
      **Relatórios/Integrações:** JasperReports, e-mail, WhatsApp

      ## Resultado

      Sistema centralizado substituindo controle manual em planilhas, com permissões por perfil, relatórios que não derrubam a API principal e uso diário real (~1 ano em produção, ~10 usuários ativos).
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
      liveUrl: 'https://agrotechcredito.com.br',
      type: 'professional',
      company: 'Cliente privado',
    },

    {
      id: '3',
      title: 'SyncDb',
      description: 'Ferramenta interna (Spring Boot + Angular) para sincronizar bases locais e nuvem em teste e homologação',
      longDescription: `
      **Resumo:** criei sozinho uma ferramenta para automatizar a sincronização de dados entre ambiente local e nuvem, que saiu de projeto pessoal para uso interno real na empresa, evoluindo de versão web para desktop.

      ## O problema

      Manter bases locais e de nuvem alinhadas durante testes e homologação exigia trabalho manual repetitivo — lento e sujeito a erro para o time técnico.

      ## O que eu construí

      • Backend em Spring Boot expondo a lógica de sincronização.
      • Interface Angular para operar a ferramenta.
      • Persistência/orientação a dados via MongoDB no fluxo de sync.
      • Evolução da versão web para uma versão desktop, encaixando melhor no fluxo de trabalho do time.

      ## Principais desafios técnicos

      • Transformar um problema operacional de infraestrutura (local × nuvem) em ferramenta usável por outras pessoas do time, não só por mim.
      • Manter a ferramenta simples o suficiente para uso recorrente no dia a dia de teste/homologação.

      ## Stack

      Java, Spring Boot, Angular, MongoDB

      ## Resultado

      Processo manual automatizado, com adoção real dentro da empresa para apoiar ambientes de teste — não ficou como demonstração de portfólio, virou ferramenta que o time usa.
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

    {
      id: '5',
      title: 'Orçafácil',
      description: 'SaaS Full Stack para orçamentos comerciais com gateway próprio de WhatsApp',
      longDescription: `
      **Resumo:** produto SaaS desenvolvido do zero para digitalizar o processo comercial de pequenas e médias empresas — orçamentos, clientes e comunicação via WhatsApp num único fluxo, incluindo um gateway de WhatsApp construído por mim.

      ## O problema

      Muitas empresas ainda fazem o processo comercial em planilhas, documentos soltos e conversas dispersas no WhatsApp, o que dificulta acompanhar negociações e padronizar o atendimento.

      ## O que eu construí

      • Arquitetura, backend (Spring Boot) e frontend (Angular) completos, pensados desde o início para múltiplos usuários (multi-tenant SaaS).
      • Modelagem PostgreSQL do domínio comercial (orçamentos, clientes, negociações).
      • **Gateway próprio de WhatsApp**, desacoplado da API principal, para envio automatizado de orçamentos e notificações direto pela plataforma.
      • Deploy containerizado com Docker.

      ## Principais desafios técnicos

      • Modelar um domínio comercial que fosse além de um CRUD simples de clientes e orçamentos.
      • Construir um gateway de WhatsApp desacoplado, em vez de depender de uma integração de terceiros amarrada ao core da aplicação.
      • Estruturar a base do produto já pensando em evolução contínua como SaaS.

      ## Stack

      Java, Spring Boot, Angular, PostgreSQL, Docker, API REST, gateway próprio de integração com WhatsApp

      ## Resultado

      Processo comercial consolidado em um único ambiente — orçamentos, clientes e comunicação automatizada via WhatsApp através de um gateway desenvolvido especificamente para o produto.
      `, coverImage: '/assets/saas.png',
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
      id: '7',
      title: 'Memorix AI',
      description: 'Assistente de IA Full Stack com memória persistente entre conversas, usando Spring AI',
      longDescription: `
      **Resumo:** assistente de IA com memória persistente entre sessões, construído e publicado end-to-end por mim — do modelo de contexto no backend até o deploy em produção.

      ## O problema

      Assistentes de IA comuns tratam cada conversa isoladamente. O desafio era estruturar histórico e contexto de forma que fossem realmente reaproveitados entre sessões, com uma arquitetura própria — não apenas um frontend plugado numa API de terceiros.

      ## O que eu construí

      • Chat responsivo em Angular.
      • Backend em Spring Boot + **Spring AI** para integrar o modelo de linguagem de forma estruturada.
      • Persistência de histórico e contexto em PostgreSQL, permitindo memória entre conversas.
      • Deploy próprio com Docker e nginx.

      ## Principais desafios técnicos

      • Modelar memória e contexto de forma útil (não apenas um log de mensagens).
      • Integrar IA ao backend Java via Spring AI, em vez de um script isolado por fora do ecossistema.
      • Fechar o ciclo completo — do código ao ambiente publicado — sozinho.

      ## Stack

      Angular, Spring Boot, Spring AI, PostgreSQL, Docker, nginx

      ## Resultado

      Assistente publicado com memória persistente real entre conversas, aplicando o mesmo padrão de entrega (backend Java + frontend Angular + deploy próprio) que uso em projetos profissionais — agora num domínio de IA.
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
      company: 'Produto próprio em desenvolvimento',
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