import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-alunas',
  imports: [RouterLink],
  templateUrl: './alunas.html',
  styleUrl: './alunas.css'
})
export class Alunas {
  private readonly mockData = inject(MockDataService);

  readonly id = input<string>('');

  protected readonly alunaSelecionada = computed(() => this.mockData.perfisAlunas[this.id()] ?? null);
  protected readonly primeiroNome = computed(() => this.alunaSelecionada()?.nome.split(' ')[0] ?? '');
}
