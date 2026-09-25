import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BlogPost {
  titulo: string;
  data: string;
  resumo: string;
  conteudo: string;
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
      resumo: 'Estratégias práticas para transformar objetivos pessoais em um plano de desenvolvimento consistente e conectado ao impacto que você quer gerar.',
      conteudo: 'Comece definindo um propósito em uma frase e desdobre-o em metas trimestrais. Registre pequenas conquistas, peça retorno com frequência e revise o plano com a sua mentora a cada ciclo: consistência vale mais do que intensidade.'
    },
    {
      titulo: 'Mentoria e rede: duas forças para ampliar oportunidades',
      data: '28 de agosto de 2026',
      resumo: 'Descubra como boas conexões, conversas intencionais e apoio entre mulheres podem abrir caminhos para estudo, carreira e autonomia.',
      conteudo: 'Uma rede forte nasce de conversas com objetivo claro. Antes de cada encontro, prepare perguntas, compartilhe o que você já tentou e combine um próximo passo. Depois, agradeça e conte o resultado: é assim que a relação cresce.'
    },
    {
      titulo: 'Independência financeira começa com informação',
      data: '09 de agosto de 2026',
      resumo: 'Conhecimento, planejamento e acesso a oportunidades formam uma base essencial para decisões financeiras mais seguras.',
      conteudo: 'Anotar entradas e saídas por um mês já revela muito. A partir daí, separe uma reserva para imprevistos, pesquise bolsas e auxílios disponíveis e busque conteúdos gratuitos de educação financeira antes de assumir compromissos.'
    }
  ];

  protected readonly abertos = signal<string[]>([]);

  alternar(titulo: string) {
    this.abertos.update((atuais) => atuais.includes(titulo) ? atuais.filter((item) => item !== titulo) : [...atuais, titulo]);
  }
}
