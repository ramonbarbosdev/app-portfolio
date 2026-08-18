import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CaseStudy { title: string; label: string; image: string; challenge: string; solution: string; result: string; technologies: string; link?: string; linkLabel?: string; }

@Component({ selector: 'app-layout', imports: [CommonModule], templateUrl: './layout.html', styleUrl: './layout.scss' })
export class Layout {
  menuOpen = false;
  cases: CaseStudy[] = [
    { title: 'Plataforma de crédito e gestão financeira', label: 'Sistema sob medida', image: '/assets/agrotech.png', challenge: 'A operação dependia de planilhas, documentos dispersos e fluxos diferentes para cada linha de crédito.', solution: 'Uma plataforma centralizada com processos específicos, permissões por perfil, anexos, notificações e relatórios.', result: 'Sistema em uso diário, com mais controle operacional e rastreabilidade para uma operação antes manual.', technologies: 'Spring Boot · Angular · PostgreSQL · Docker' },
    { title: 'NexFiscal — escritório digital', label: 'Sistema de gestão comercial', image: '/assets/nexfiscal.png', challenge: 'Criar propostas, orçamentos e documentos fiscais com agilidade, sem comprometer a experiência de quem trabalha no computador ou no celular.', solution: 'Um sistema de gestão comercial para produtos e serviços, com geração rápida de propostas, orçamentos e notas fiscais em uma interface adaptada para desktop e mobile.', result: 'Processo comercial e fiscal reunido em uma única plataforma, pensado para reduzir o tempo entre montar uma proposta e formalizar a prestação de serviço.', technologies: 'React · Spring Boot · PostgreSQL', link: 'https://nexfiscal.ramoncode.com.br/', linkLabel: 'Conhecer o NexFiscal' },
    { title: 'SIPEC Mobile', label: 'Aplicativo publicado', image: 'https://play-lh.googleusercontent.com/X6OjCg0Tesy0ErCQ_YxNk8xG8sgaEiDl_sEN5VxaS9Aa8_6q0IiskhOfC3XExXY_FsUnzTzYH7sgEHjflGnftw=w832-h470-rw', challenge: 'Levar uma operação baseada em backend legado para iOS e Android, preservando regras de negócio e adaptando integrações a novos ambientes.', solution: 'Evolução do backend em APIs reutilizáveis e desenvolvimento mobile com gestão de versões, testes e administração de usuários.', result: 'Produto disponível publicamente para instalação na Google Play.', technologies: 'React Native · PHP · Expo · PostgreSQL', link: 'https://play.google.com/store/apps/details?id=br.com.w5i.sipecmobile&hl=pt_BR', linkLabel: 'Ver na Google Play' },
  ];
  scrollTo(id: string): void { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); this.menuOpen = false; }
}
