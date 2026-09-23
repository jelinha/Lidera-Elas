import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

type TipoLegal = 'privacidade' | 'lgpd';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './legal.html',
  styleUrl: './legal.css'
})
export class Legal implements OnInit {
  tipo: TipoLegal = 'privacidade';

  readonly conteudos: Record<TipoLegal, { titulo: string; descricao: string; paragrafos: string[]; linkExterno?: string }> = {
    privacidade: {
      titulo: 'Política de Privacidade',
      descricao: 'Como tratamos os dados pessoais e protegemos a privacidade das pessoas participantes.',
      paragrafos: [
        'Coletamos dados necessários para criar e administrar sua conta, oferecer mentoria, acompanhar trilhas e personalizar sua jornada dentro da plataforma.',
        'As informações podem ser utilizadas para comunicação, segurança, melhoria dos serviços e suporte à experiência de aprendizagem e desenvolvimento.',
        'Seus dados não serão compartilhados com terceiros sem consentimento, salvo quando exigido por lei ou necessário para o funcionamento da plataforma.'
      ]
    },
    lgpd: {
      titulo: 'LGPD',
      descricao: 'A Lei Geral de Proteção de Dados regula o uso, armazenamento e tratamento de dados pessoais.',
      paragrafos: [
        'A Lidera Elas trata dados pessoais com base em legítimo interesse, consentimento e necessidade para prestação dos serviços oferecidos.',
        'Você pode solicitar acesso, correção, exclusão ou atualização de suas informações, conforme a legislação vigente e o processo estabelecido pela plataforma.',
        'A plataforma atua com medidas de segurança para proteger os dados e reduzir riscos de uso indevido ou acesso não autorizado.'
      ],
      linkExterno: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'
    }
  };

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    const tipoAtual = this.route.snapshot.routeConfig?.path ?? 'privacidade';
    this.tipo = tipoAtual === 'legal/lgpd' ? 'lgpd' : 'privacidade';
  }

  get conteudo() {
    return this.conteudos[this.tipo];
  }
}
