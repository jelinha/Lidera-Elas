import { Injectable, computed, signal } from '@angular/core';
import { Aluna, PedidoMentoria, Reuniao, SolicitacaoMentoria, StatusSolicitacao } from '../models/mentoria.model';
import { MockDataService } from './mock-data.service';

@Injectable({ providedIn: 'root' })
export class MentoriaService {
  readonly solicitacoes = signal<SolicitacaoMentoria[]>(this.carregarSolicitacoes());
  readonly mentoraAtiva = computed(() => this.solicitacoes().find((item) => item.status === 'aceito')
    ?? this.solicitacoes().find((item) => item.status === 'pendente')
    ?? null);
  readonly alunas = signal<Aluna[]>([]);
  readonly aceitandoAlunas = signal(this.carregarDisponibilidade());
  readonly pedidos = signal<PedidoMentoria[]>([]);
  readonly passosConcluidos = signal(this.carregarLista('passosConcluidos'));
  readonly missoesConcluidas = signal(this.carregarLista('missoesMentoriaConcluidas'));

  constructor(private readonly mockData: MockDataService) {
    this.alunas.set(this.carregarAlunas());
    this.pedidos.set(this.mockData.pedidosMentoria.map((pedido) => ({ ...pedido })));
  }

  alternarPasso(passo: string) {
    this.passosConcluidos.update((atuais) => this.alternarItem(atuais, passo));
    this.guardarLista('passosConcluidos', this.passosConcluidos());
  }

  alternarMissao(missao: string) {
    this.missoesConcluidas.update((atuais) => this.alternarItem(atuais, missao));
    this.guardarLista('missoesMentoriaConcluidas', this.missoesConcluidas());
  }

  alternarDisponibilidade() {
    this.aceitandoAlunas.update((atual) => !atual);
    localStorage.setItem('mentoraAceitandoAlunas', String(this.aceitandoAlunas()));
  }

  adicionarSolicitacao(mentora: SolicitacaoMentoria) {
    this.solicitacoes.update((atuais) => [...atuais, mentora]);
    this.guardarSolicitacoes();
  }

  cancelarSolicitacao(idMentora: number) {
    this.solicitacoes.update((atuais) => atuais.filter((item) => item.id !== idMentora));
    this.guardarSolicitacoes();
  }

  atualizarStatusSolicitacao(idMentora: number, status: StatusSolicitacao) {
    this.solicitacoes.update((atuais) => atuais.map((item) =>
      item.id === idMentora ? { ...item, status } : item
    ));
    this.guardarSolicitacoes();
  }

  agendarReuniao(dados: Reuniao) {
    const mentora = this.mentoraAtiva();
    if (!mentora || mentora.status !== 'aceito') {
      return false;
    }

    this.solicitacoes.update((atuais) => atuais.map((item) =>
      item.id === mentora.id ? { ...item, reuniao: { ...dados } } : item
    ));
    this.guardarSolicitacoes();
    return true;
  }

  atualizarAluna(alunaAtualizada: Aluna) {
    this.alunas.update((atuais) => atuais.map((aluna) =>
      aluna.id === alunaAtualizada.id ? { ...alunaAtualizada } : aluna
    ));
    localStorage.setItem('dadosDasAlunas', JSON.stringify(this.alunas()));
  }

  adicionarMissaoAluna(id: string, missao: string) {
    this.alunas.update((atuais) => atuais.map((aluna) => aluna.id === id
      ? { ...aluna, missoes: [...(aluna.missoes ?? []), missao] }
      : aluna
    ));
    localStorage.setItem('dadosDasAlunas', JSON.stringify(this.alunas()));
  }

  aceitarPedido(pedido: PedidoMentoria) {
    this.pedidos.update((atuais) => atuais.map((item) =>
      item === pedido ? { ...item, status: 'aceito' } : item
    ));
  }

  removerPedido(pedido: PedidoMentoria) {
    this.pedidos.update((atuais) => atuais.filter((item) => item !== pedido));
  }

  private guardarSolicitacoes() {
    localStorage.setItem('minhasSolicitacoes', JSON.stringify(this.solicitacoes()));
  }

  private carregarSolicitacoes(): SolicitacaoMentoria[] {
    const guardadas = this.lerJson<SolicitacaoMentoria[]>('minhasSolicitacoes');
    if (guardadas) {
      return guardadas;
    }

    const legada = this.lerJson<SolicitacaoMentoria>('mentoraSolicitada');
    return legada ? [{ ...legada, criadaEm: legada.criadaEm ?? new Date().toISOString() }] : [];
  }

  private carregarAlunas() {
    const guardadas = this.lerJson<Aluna[]>('dadosDasAlunas');
    if (!guardadas) {
      return this.mockData.alunasIniciais.map((aluna) => ({ ...aluna, missoes: [...(aluna.missoes ?? [])] }));
    }

    return this.mockData.alunasIniciais.map((aluna) => ({
      ...aluna,
      ...(guardadas.find((item) => item.id === aluna.id) ?? {})
    }));
  }

  private carregarDisponibilidade() {
    const valor = localStorage.getItem('mentoraAceitandoAlunas');
    return valor === null ? true : valor === 'true';
  }

  private carregarLista(chave: string) {
    return this.lerJson<string[]>(chave) ?? [];
  }

  private lerJson<T>(chave: string): T | null {
    const valor = localStorage.getItem(chave);
    if (!valor) {
      return null;
    }

    try {
      return JSON.parse(valor) as T;
    } catch {
      localStorage.removeItem(chave);
      return null;
    }
  }

  private guardarLista(chave: string, itens: string[]) {
    localStorage.setItem(chave, JSON.stringify(itens));
  }

  private alternarItem(itens: string[], item: string) {
    return itens.includes(item) ? itens.filter((atual) => atual !== item) : [...itens, item];
  }
}
