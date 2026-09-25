import { Component, OnInit, signal } from '@angular/core';
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
export class Trilha implements OnInit {

  detalhe = signal<TrilhaDetalhe | null>(null);
  outrasTrilhas = signal<(TrilhaDetalhe & { slug: string })[]>([]);

  private readonly trilhas: Record<string, TrilhaDetalhe> = {
    'logica-programacao': {
      titulo: 'Introdução à Lógica de Programação',
      instituicao: 'Monitora Attekita',
      categoria: 'Tecnologia',
      descricao: 'Aprenda os fundamentos para pensar de forma lógica e começar a criar soluções com tecnologia.',
      etapas: ['Algoritmos e raciocínio lógico', 'Variáveis e estruturas de decisão', 'Primeiros exercícios práticos'],
      recursoUrl: 'https://www.youtube.com/watch?v=gMxQ8vxH9Vk'
    },
    'conferencias-internacionais': {
      titulo: 'Preparação para Conferências Internacionais (Model UN)',
      instituicao: 'Instituto Diplomun',
      categoria: 'Geopolítica',
      descricao: 'Prepare-se para representar países, negociar propostas e falar com segurança em conferências internacionais.',
      etapas: ['Pesquisa e posicionamento', 'Oratória e negociação', 'Simulação de uma conferência'],
      recursoUrl: 'https://diplomun.com/'
    },
    'lideranca-empregabilidade': {
      titulo: 'Fundamentos de Liderança e Empregabilidade',
      instituicao: 'Latin American Leadership Academy',
      categoria: 'Carreira',
      descricao: 'Desenvolva competências para apresentar o seu potencial, liderar projetos e encontrar novas oportunidades.',
      etapas: ['Autoconhecimento e propósito', 'Comunicação profissional', 'Plano de desenvolvimento'],
      recursoUrl: 'https://latinamericanleadershipacademy.org/'
    }
  };

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    
   
    this.detalhe.set(this.trilhas[slug] || null);


    const outras = Object.entries(this.trilhas)
      .filter(([key]) => key !== slug)
      .map(([key, value]) => ({ ...value, slug: key }));

    this.outrasTrilhas.set(outras);
  }
}