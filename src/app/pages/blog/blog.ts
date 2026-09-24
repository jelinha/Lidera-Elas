import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BlogPost {
  titulo: string;
  data: string;
  resumo: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  readonly posts: BlogPost[] = [
    {
      titulo: 'Como construir uma trajetória de liderança com propósito',
      data: '12 de setembro de 2026',
      resumo: 'Estratégias práticas para transformar objetivos pessoais em um plano de desenvolvimento consistente e conectado ao impacto que você quer gerar.'
    },
    {
      titulo: 'Mentoria e rede: duas forças para ampliar oportunidades',
      data: '28 de agosto de 2026',
      resumo: 'Descubra como boas conexões, conversas intencionais e apoio entre mulheres podem abrir caminhos para estudo, carreira e autonomia.'
    },
    {
      titulo: 'Independência financeira começa com informação',
      data: '09 de agosto de 2026',
      resumo: 'Conhecimento, planejamento e acesso a oportunidades formam uma base essencial para decisões financeiras mais seguras.'
    }
  ];
}
