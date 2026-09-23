import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface TrilhaDetalhe {
  titulo: string;
  instituicao: string;
  categoria: string;
  descricao: string;
  etapas: string[];
  recursoUrl: string;
}

@Component({
  selector: 'app-trilha',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trilha.html',
  styleUrl: './trilha.css'
})
export class Trilha {
  detalhe: TrilhaDetalhe;

  private readonly trilhas: Record<string, TrilhaDetalhe> = {
    'logica-programacao': {
      titulo: 'Introdução à Lógica de Programação',
      instituicao: 'SENAI Bahia',
      categoria: 'Tecnologia',
      descricao: 'Aprenda os fundamentos para pensar de forma lógica e começar a criar soluções com tecnologia.',
      etapas: ['Algoritmos e raciocínio lógico', 'Variáveis e estruturas de decisão', 'Primeiros exercícios práticos'],
      recursoUrl: 'https://www.freecodecamp.org/portuguese/learn/'
    },
    'conferencias-internacionais': {
      titulo: 'Preparação para Conferências Internacionais (Model UN)',
      instituicao: 'Instituto Diplomun',
      categoria: 'Geopolítica',
      descricao: 'Prepare-se para representar países, negociar propostas e falar com segurança em conferências internacionais.',
      etapas: ['Pesquisa e posicionamento', 'Oratória e negociação', 'Simulação de uma conferência'],
      recursoUrl: 'https://www.un.org/en/model-united-nations'
    },
    'lideranca-empregabilidade': {
      titulo: 'Fundamentos de Liderança e Empregabilidade',
      instituicao: 'Latin American Leadership Academy',
      categoria: 'Carreira',
      descricao: 'Desenvolva competências para apresentar o seu potencial, liderar projetos e encontrar novas oportunidades.',
      etapas: ['Autoconhecimento e propósito', 'Comunicação profissional', 'Plano de desenvolvimento'],
      recursoUrl: 'https://www.ev.org.br/cursos'
    },
    'cidadania-relacoes-internacionais': {
      titulo: 'Cursos Livres: Cidadania e Relações Internacionais',
      instituicao: 'UFMG',
      categoria: 'Academia',
      descricao: 'Explore temas de cidadania, relações internacionais e participação consciente no mundo contemporâneo.',
      etapas: ['Cidadania e democracia', 'Cooperação entre países', 'Desafios globais atuais'],
      recursoUrl: 'https://open.umn.edu/opentextbooks/subjects/political-science'
    }
  };

  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug') ?? '';
    this.detalhe = this.trilhas[slug] ?? this.trilhas['logica-programacao'];
  }
}