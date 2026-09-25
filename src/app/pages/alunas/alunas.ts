import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-alunas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './alunas.html',
  styleUrl: './alunas.css'
})
export class Alunas implements OnInit {
  private readonly mockData = inject(MockDataService);
  private readonly route = inject(ActivatedRoute);

  protected readonly id = signal<string>('');

  protected readonly alunaSelecionada = computed(() => {
    const alunoId = this.id();
    return this.mockData.perfisAlunas?.[alunoId] ?? null;
  });

  protected readonly primeiroNome = computed(() => this.alunaSelecionada()?.nome.split(' ')[0] ?? '');

  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get('id') ?? '';
    this.id.set(routeId);
  }
}