import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgZone, OnDestroy, inject } from '@angular/core';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';

const heroEnter = trigger('heroEnter', [
  transition(':enter', [
    query(
      '.hero-reveal',
      [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        stagger(65, [
          animate(
            '620ms cubic-bezier(0.22, 1, 0.36, 1)',
            style({ opacity: 1, transform: 'translateY(0)' }),
          ),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);

const storyAccordion = trigger('storyAccordion', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-8px)' }),
    animate(
      '420ms cubic-bezier(0.22, 1, 0.36, 1)',
      style({ opacity: 1, transform: 'translateY(0)' }),
    ),
  ]),
  transition(':leave', [
    animate(
      '320ms cubic-bezier(0.22, 1, 0.36, 1)',
      style({ opacity: 0, transform: 'translateY(-6px)' }),
    ),
  ]),
]);

interface NavItem {
  label: string;
  targetId: string;
}

interface CaseStudy {
  title: string;
  label: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string;
  link?: string;
  linkLabel?: string;
  proof?: string;
}

interface FeaturedCase extends CaseStudy {
  proof: string;
}

interface MoreItem {
  title: string;
  text: string;
  image: string;
}

interface StackGroup {
  label: string;
  items: string;
  where: string;
}

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [heroEnter, storyAccordion],
})
export class Layout implements AfterViewInit, OnDestroy {
  private readonly ngZone = inject(NgZone);

  menuOpen = false;
  theme: Theme = 'light';
  headerScrolled = false;
  readonly reduceMotion =
    typeof globalThis !== 'undefined' &&
    globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  private readonly expandedStories = new Set<string>();

  constructor() {
    this.theme = this.initialTheme();
  }

  ngAfterViewInit(): void {
    this.syncHeaderScroll();
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onWindowScroll, { passive: true });
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  private readonly onWindowScroll = (): void => {
    const scrolled = window.scrollY > 12;
    if (scrolled === this.headerScrolled) {
      return;
    }
    this.ngZone.run(() => {
      this.headerScrolled = scrolled;
    });
  };

  private syncHeaderScroll(): void {
    this.headerScrolled = window.scrollY > 12;
  }

  readonly links = {
    email: 'ramonlegendario21@gmail.com',
    github: 'https://github.com/ramonbarbosdev',
    linkedin: 'https://www.linkedin.com/in/ramonbarbosdev',
  };

  readonly nav: NavItem[] = [
    { label: 'Projetos', targetId: 'cases' },
    { label: 'Sobre', targetId: 'sobre' },
    { label: 'Stack', targetId: 'stack' },
    { label: 'Contato', targetId: 'contato' },
  ];

  readonly hero = {
    name: 'Ramon Barbosa',
    role: 'Desenvolvedor full stack e líder técnico. Java, PHP, Angular, React e React Native.',
    lead:
      'Trabalho com times e clientes, da conversa sobre o problema até a API, as telas, o banco e o deploy. Também lidero entregas e entro quando produção ou escopo travam.',
    note:
      '',
    primaryCta: 'Ver projetos',
    secondaryCta: 'Falar comigo',
    photo: '/assets/perfil.jpeg',
  };
  
  readonly casesIntro = {
    title: 'Projetos',
    lead:
      '',
  };

  readonly featured: FeaturedCase = {
    title: 'Agrotech, crédito rural e financeiro',
    label: 'Cliente, em produção',
    image: '/assets/agrotech.png',
    proof:
      'Relatórios de várias páginas levavam de 2 a 4 minutos. Hoje saem em até 10 segundos.',
    challenge:
      'A operação rodava em planilha, documentos se perdiam e cada linha de crédito (rural, pessoal, consórcio) tinha regra própria.',
    solution:
      'Fui líder técnico no time do cliente. Conduzi a API principal, uma segunda API só para relatórios com fila, anexos no S3, login com JWT e perfis, e um Kanban por produto. O Jasper pesava na memória e deixava a API lenta, então propus tirá-lo da API principal.',
    result:
      'Cerca de um ano no ar, umas 10 pessoas usando todo dia. É pouca gente, mas eles dependem dele.',
    technologies: 'Spring Boot, Angular, PostgreSQL, S3, Jasper, Docker',
    link: 'https://sistema.agrotechcredito.com.br',
    linkLabel: 'Ver o sistema',
  };

  readonly cases: CaseStudy[] = [
    {
      title: 'eSimples',
      label: 'Cliente · multi-organização',
      image: '/assets/esimples.png',
      challenge:
        'Várias organizações no mesmo produto, cada uma com seus planos, módulos e contratos, sem misturar dado.',
      solution:
        'Presto serviço na API do cliente: banco central, database por organização, Flyway nos dois lados, JWT e módulos habilitáveis por tenant. Atuo com o time em arquitetura e evolução do backend.',
      result:
        'Plataforma em evolução, com isolamento real de dados entre organizações e módulo de contratos no schema dedicado.',
      technologies: 'Java 21, Spring Boot, PostgreSQL, Flyway, Docker',
    },
    {
      title: 'API de notificação WhatsApp',
      label: 'Produto próprio · integração',
      image: '/assets/notificacao.png',
      challenge:
        'Cada sistema do cliente precisava de WhatsApp sem montar gateway, sessão e fila do zero — e ainda controlar uso por empresa.',
      solution:
        'API própria em Spring Boot: sessões por organização, planos de uso, fila de envio e integração via API key nos sistemas dos clientes, bots e agents.',
      result:
        'Plataforma no ar com gestão multi-organização e cobrança por plano; os clientes consomem a API sem acoplar o gateway ao ERP deles.',
      technologies: 'Java, Spring Boot, PostgreSQL, Docker, WhatsApp gateway',
      link: 'https://notificacao.ramoncode.com.br/',
      linkLabel: 'Ver a plataforma',
    },
    {
      title: 'SyncDb',
      label: 'App de desktop',
      image: '/assets/sync.png',
      challenge:
        'Manter os dados das tabelas de apoio iguais entre ambientes, numa base com mais de 480 tabelas.',
      solution:
        'Ferramenta desktop (evolução de um projeto Spring + Angular) que compara duas bases, mostra pendências e sincroniza, com progresso e cancelamento.',
      result: 'A verificação e a sincronização da base inteira rodam numa tela só.',
      technologies: 'Spring Boot, Angular, MongoDB, PostgreSQL',
    },
    {
      title: 'NexFiscal',
      label: 'Gestão comercial',
      image: '/assets/nexfiscal.png',
      challenge:
        'Orçamento, proposta e nota fiscal ficavam em lugares diferentes, e o sistema precisava funcionar no celular.',
      solution:
        'Spring Boot no backend e React no front, com o fluxo comercial e o fiscal no mesmo sistema.',
      result:
        'Dá para montar a proposta e formalizar o serviço sem trocar de ferramenta.',
      technologies: 'Spring Boot, React, PostgreSQL',
      link: 'https://nexfiscal.ramoncode.com.br/',
      linkLabel: 'Abrir o NexFiscal',
    },
    {
      title: 'SIPEC Mobile',
      label: 'App publicado',
      image: '/assets/sipec-mobile.png',
      challenge:
        'O sistema vinha de um backend legado e precisava virar app Android e iOS mantendo as regras de negócio.',
      solution:
        'Criei APIs reaproveitáveis e fiz o app em React Native com Expo, incluindo versionamento, testes e gestão de usuários.',
      result: 'Está publicado na Google Play e App Store.',
      technologies: 'React Native, Expo, PHP, PostgreSQL',
      link: 'https://play.google.com/store/apps/details?id=br.com.w5i.sipecmobile&hl=pt_BR',
      linkLabel: 'Ver na Play Store',
    },
   
  ];

  readonly moreTitle = 'Outras Projetos';

  readonly more: MoreItem[] = [
    {
      title: 'Questify',
      text: 'App de desafio diário com quizzes e perguntas de cálculo, com taxa de vitória.',
      image: '/assets/questify.png',
    },
    {
      title: 'BI de despesas',
      text: 'Painel com despesas por classe e por ano. Os dados são atualizados todo dia.',
      image: '/assets/bi.png',
    },
    {
      title: 'Portal de consulta',
      text: 'Consulta de empenhos, receitas, repasses e emendas.',
      image: '/assets/portal.png',
    },
  ];

  readonly aboutTitle = 'Sobre';

  readonly about: string[] = [
    'Desenvolvedor Full Stack com foco em backend Java/Spring Boot e PHP. Atuo no desenvolvimento de soluções web e mobile com forte orientação a produto, buscando transformar problemas reais em sistemas funcionais, intuitivos e de fácil evolução.',
    'Tenho experiência no desenvolvimento de APIs REST, sistemas multi-tenant, integrações entre serviços e aplicações full stack utilizando Java, PHP, Angular e TypeScript. Trabalho desde a modelagem da solução até a entrega em produção, sempre com foco em organização arquitetural, experiência do usuário e escalabilidade.',
    'Também possuo vivência com infraestrutura e deploy utilizando Docker, Linux e ambientes VPS, participando ativamente do ciclo completo de desenvolvimento e entrega de aplicações.'

  ];

  readonly stackTitle = 'Stack';

  readonly stack: StackGroup[] = [
    {
      label: 'Backend',
      items: 'Java 21, Spring Boot, Security, JPA, Flyway',
      where: '',
    },
    {
      label: 'Frontend',
      items: 'Angular, React, React Native',
      where: '',
    },
    {
      label: 'Dados',
      items: 'PostgreSQL, MongoDB',
      where: '',
    },
    {
      label: 'Infra',
      items: 'Docker, nginx, GitHub Actions, JWT, RBAC',
      where: '',
    },
  ];

  readonly contact = {
    title: 'Contato',
    lead:
      'Procuro vaga pleno, sênior ou liderança técnica em Java/Spring Boot, remoto. Também faço consultoria em projetos. Parte do código está no GitHub. Sistemas de clientes são privados, mas explico arquitetura e papel do time numa conversa.',
  };

  readonly footer = {
    tagline: 'Full stack · liderança técnica · consultoria',
  };

  get primaryProjects(): CaseStudy[] {
    const { proof, ...agrotech } = this.featured;
    return [
      { ...agrotech, proof },
      ...this.cases.filter((item) =>
        ['API de notificação WhatsApp', 'NexFiscal'].includes(item.title),
      ),
    ];
  }

  get secondaryProjects(): CaseStudy[] {
    return this.cases.filter((item) =>
      ['eSimples', 'SyncDb', 'SIPEC Mobile'].includes(item.title),
    );
  }

  isStoryOpen(title: string): boolean {
    return this.expandedStories.has(title);
  }

  toggleStory(title: string): void {
    if (this.expandedStories.has(title)) {
      this.expandedStories.delete(title);
      return;
    }
    this.expandedStories.add(title);
  }

  previewUrl(item: CaseStudy): string {
    if (!item.link) {
      return 'app.local';
    }
    try {
      return new URL(item.link).hostname;
    } catch {
      return item.link.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', this.theme);
    } catch {}
  }

  scrollTo(id: string): void {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    const offset = 68;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    this.menuOpen = false;
  }

  private initialTheme(): Theme {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return 'light';
    } catch {
      return 'light';
    }
  }
}
