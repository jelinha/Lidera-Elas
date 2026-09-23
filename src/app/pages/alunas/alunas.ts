import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-alunas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alunas.html',
  styleUrl: './alunas.css'
})
export class Alunas {
  readonly alunaSelecionada = {
    nome: 'Beatriz Silva',
    email: 'beatriz.silva@email.com',
    statusTrilha: 'Trilha de Tecnologia',
    progresso: '80%',
    nivelEscolaridade: 'Ensino Médio',
    objetivo: 'Preparar-se para uma transição para a área de tecnologia e desenvolver confiança para participar em oportunidades internacionais.',
    proximoEncontro: {
      data: '22 de Outubro, 2026',
      hora: '14:00',
      tema: 'Revisão de Application'
    },
    historicoMentorias: [
      {
        data: '15 de Outubro, 2026',
        tema: 'Plano de transição para tecnologia',
        notas: 'Definimos as primeiras competências técnicas e os próximos cursos a realizar.'
      },
      {
        data: '2 de Outubro, 2026',
        tema: 'Objetivos e próximos passos',
        notas: 'Mapeámos interesses profissionais e organizámos um plano de desenvolvimento mensal.'
      },
      {
        data: '18 de Setembro, 2026',
        tema: 'Primeira conversa de mentoria',
        notas: 'Conhecemos a trajetória da Beatriz e alinhámos expectativas para o acompanhamento.'
      }
    ]
  };

  constructor(private readonly route: ActivatedRoute) {
    this.route.snapshot.paramMap.get('id');
  }
}
