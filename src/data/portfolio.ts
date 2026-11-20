export type CaseStudy = {
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
};

export type FeaturedCase = CaseStudy & { proof: string };

export type Tool = {
  name: string;
  icon?: string;
};

export type StackGroup = {
  label: string;
  tools: Tool[];
};

export type TimelineEntry = {
  period: string;
  role: string;
  place: string;
  text: string;
};

export const links = {
  email: 'ramonlegendario21@gmail.com',
  github: 'https://github.com/ramonbarbosdev',
  linkedin: 'https://www.linkedin.com/in/ramonbarbosdev',
} as const;

export const nav = [
  { label: 'Projetos', targetId: 'cases' },
  { label: 'Sobre', targetId: 'sobre' },
  { label: 'Trajetória', targetId: 'trajetoria' },
  { label: 'Stack', targetId: 'stack' },
  { label: 'Contato', targetId: 'contato' },
] as const;

export const hero = {
  name: 'Ramon Barbosa',
  role: 'Desenvolvedor full stack e líder técnico. Java, PHP, Angular, React e React Native.',
  lead:
    'Trabalho com times e clientes, da conversa sobre o problema até a API, as telas, o banco e o deploy. Também lidero entregas e entro quando produção ou escopo travam.',
  note: '',
  tagline: 'Pego o problema difícil e levo até produção.',
  primaryCta: 'Ver projetos',
  secondaryCta: 'Falar comigo',
  photo: '/assets/perfil.jpeg',
} as const;

export const casesIntro = {
  title: 'Projetos',
  lead: '',
} as const;

export const featured: FeaturedCase = {
  title: 'Agrotech, crédito rural e financeiro',
  label: 'Cliente, em produção',
  image: '/assets/agrotech-mock.png',
  proof: 'Relatórios de várias páginas levavam de 2 a 4 minutos. Hoje saem em até 10 segundos.',
  challenge:
    'A operação rodava em planilha, documentos se perdiam e cada linha de crédito (rural, pessoal, consórcio) tinha regra própria.',
  solution:
    'Fui líder técnico no time do cliente. Conduzi a API principal, uma segunda API só para relatórios com fila, anexos no S3, login com JWT e perfis, e um Kanban por produto. O Jasper pesava na memória e deixava a API lenta, então propus tirá-lo da API principal.',
  result: 'Cerca de um ano no ar, umas 10 pessoas usando todo dia. É pouca gente, mas eles dependem dele.',
  technologies: 'Spring Boot, Angular, PostgreSQL, S3, Jasper, Docker',
  link: 'https://sistema.agrotechcredito.com.br',
  linkLabel: 'Ver o sistema',
};

export const cases: CaseStudy[] = [
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
      'Cada sistema do cliente precisava de WhatsApp sem montar gateway, sessão e fila do zero, e ainda controlar uso por empresa.',
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
      'Ferramenta desktop que compara duas bases, mostra pendências e sincroniza, com progresso e cancelamento.',
    result: 'A verificação e a sincronização da base inteira rodam numa tela só.',
    technologies: 'Spring Boot, Angular, MongoDB, PostgreSQL',
    link: 'https://syncdb.ramoncode.com.br',
    linkLabel: 'Abrir o SyncDb',
  },
  {
    title: 'NexFiscal',
    label: 'Gestão comercial',
    image: '/assets/nexfiscal.png',
    challenge:
      'Orçamento, proposta e nota fiscal ficavam em lugares diferentes, e o sistema precisava funcionar no celular.',
    solution:
      'Spring Boot no backend e React no front, com o fluxo comercial e o fiscal no mesmo sistema.',
    result: 'Dá para montar a proposta e formalizar o serviço sem trocar de ferramenta.',
    technologies: 'Spring Boot, React, PostgreSQL',
    link: '',
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

export const aboutTitle = 'Sobre';

export const about = [
  'Desenvolvedor Full Stack com foco em backend Java/Spring Boot e PHP. Atuo no desenvolvimento de soluções web e mobile com forte orientação a produto, buscando transformar problemas reais em sistemas funcionais, intuitivos e de fácil evolução.',
  'Tenho experiência no desenvolvimento de APIs REST, sistemas multi-tenant, integrações entre serviços e aplicações full stack utilizando Java, PHP, Angular e TypeScript. Trabalho desde a modelagem da solução até a entrega em produção, sempre com foco em organização arquitetural, experiência do usuário e escalabilidade.',
  'Também possuo vivência com infraestrutura e deploy utilizando Docker, Linux e ambientes VPS, participando ativamente do ciclo completo de desenvolvimento e entrega de aplicações.',
] as const;

export const stackTitle = 'Stack';

export const stack: StackGroup[] = [
  {
    label: 'Backend',
    tools: [
      { name: 'Java 21', icon: '/icons/java.svg' },
      { name: 'Spring Boot', icon: '/icons/spring.svg' },
      { name: 'PHP', icon: '/icons/php.svg' },
      { name: 'Security' },
      { name: 'JPA' },
      { name: 'Flyway' },
    ],
  },
  {
    label: 'Frontend',
    tools: [
      { name: 'Angular', icon: '/icons/angular.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'React Native', icon: '/icons/react.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
    ],
  },
  {
    label: 'Dados',
    tools: [
      { name: 'PostgreSQL', icon: '/icons/postgres.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    ],
  },
  {
    label: 'Infra',
    tools: [
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'nginx', icon: '/icons/nginx.svg' },
      { name: 'GitHub Actions', icon: '/icons/github-actions.svg' },
      { name: 'Linux', icon: '/icons/linux-tux.svg' },
      { name: 'JWT' },
      { name: 'RBAC' },
    ],
  },
];

export const marqueeTools: Tool[] = [
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'Spring Boot', icon: '/icons/spring.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgres.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'nginx', icon: '/icons/nginx.svg' },
  { name: 'GitHub Actions', icon: '/icons/github-actions.svg' },
  { name: 'PHP', icon: '/icons/php.svg' },
  { name: 'Expo', icon: '/icons/expo.svg' },
];

export const timelineTitle = 'Trajetória';

export const timeline: TimelineEntry[] = [
  {
    period: '2025 até hoje',
    role: 'Desenvolvedor Freelancer',
    place: 'Projetos independentes · Remoto',
    text: 'Desenvolvimento de sistemas sob demanda com atuação de ponta a ponta: levantamento de necessidades, modelagem do banco, APIs em Spring Boot, interfaces Angular ou React, deploy e suporte inicial.',
  },
  {
    period: '2024 até hoje',
    role: 'Programador de Internet',
    place: 'W5i Tecnologia · Salvador/BA',
    text: 'Atuação no desenvolvimento e manutenção de sistemas web, APIs REST e ferramentas internas. Trabalho com PHP em sistemas existentes e Java/Spring Boot em serviços backend, participando de entregas Scrum, homologações e evolução de funcionalidades usadas por clientes reais.',
  },
  {
    period: '2022 a 2023',
    role: 'Programador Júnior',
    place: 'GPI Sistemas · Salvador/BA',
    text: 'Atuação em migração de dados, scripts ETL e automações para conversão, validação e homologação de bases, apoiando a implantação de sistemas em ambientes de cliente.',
  },
];

export const contact = {
  title: 'Contato',
  lead: 'Procuro vaga pleno, sênior ou liderança técnica em Java/Spring Boot, remoto. Também faço consultoria em projetos. Parte do código está no GitHub. Sistemas de clientes são privados, mas explico arquitetura e papel do time numa conversa.',
} as const;

export const footer = {
  tagline: 'Full stack · liderança técnica · consultoria',
} as const;

export function primaryProjects(): CaseStudy[] {
  return cases.filter((item) => ['SyncDb', 'SIPEC Mobile'].includes(item.title));
}

export function secondaryProjects(): CaseStudy[] {
  return cases.filter((item) =>
    ['eSimples', 'API de notificação WhatsApp', 'NexFiscal'].includes(item.title),
  );
}

export function previewUrl(item: CaseStudy): string {
  if (!item.link) {
    return 'app.local';
  }
  try {
    return new URL(item.link).hostname;
  } catch {
    return item.link.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
}

export function mailto(): string {
  return `mailto:${links.email}`;
}