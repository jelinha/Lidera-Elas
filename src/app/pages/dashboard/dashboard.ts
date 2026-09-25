import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SidebarState } from '../../services/sidebar-state';
import { AuthService } from '../../services/auth.service';
import { MentoriaService } from '../../services/mentoria.service';
import { MockDataService } from '../../services/mock-data.service';
import { Aluna, Mentora, PedidoMentoria, Reuniao, SolicitacaoMentoria, StatusSolicitacao } from '../../models/mentoria.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  abaAtiva = 'visao-geral';
  mensagemFeedback: string | null = null;
  novaReuniao: Reuniao = { data: '', hora: '', pauta: '' };
  pedidoEmRecusa: PedidoMentoria | null = null;
  motivoRecusa = '';
  alunaExpandidaId: string | null = null;
  novaMissao: Record<string, string> = {};

  constructor(
    private readonly router: Router,
    private readonly sidebarState: SidebarState,
    private readonly authService: AuthService,
    private readonly mentoriaService: MentoriaService,
    private readonly mockData: MockDataService
  ) {}

  get tipoUsuario() { return this.authService.perfil(); }
  get trilhasDisponiveis() { return this.mockData.trilhasDisponiveis; }
  get novidades() { return this.mockData.novidades; }
  get mentorasDisponiveis() { return this.mockData.mentorasDisponiveis; }
  get redeMentoras() { return this.mockData.redeMentoras; }
  get encontrosMarcados() { return this.mockData.encontrosMarcados; }
  get metricas() { return this.mockData.metricas; }
  get meuProgresso() { return this.mockData.progressoInicial; }
  get proximosPassos() { return this.mockData.proximosPassos; }
  get missoesMentoria() { return this.mockData.missoesMentoria; }
  get sidebarAberta() { return this.sidebarState.aberto(); }
  get aceitandoAlunas() { return this.mentoriaService.aceitandoAlunas(); }
  get minhasSolicitacoes() { return this.mentoriaService.solicitacoes(); }
  get minhaMentora() { return this.mentoriaService.mentoraAtiva(); }
  get minhasAlunas() { return this.mentoriaService.alunas(); }
  get pedidosMentoria() { return this.mentoriaService.pedidos(); }
  get passosConcluidos() { return this.mentoriaService.passosConcluidos(); }
  get missoesMentoriaConcluidas() { return this.mentoriaService.missoesConcluidas(); }
  get mentoriaDesbloqueada() { return this.minhaMentora?.status === 'aceito'; }
  get progressoXp() { return Math.min(100, Math.round((this.meuProgresso.xp / this.meuProgresso.proximoNivel) * 100)); }

  alternarProximoPasso(passo: string) { this.mentoriaService.alternarPasso(passo); }
  alternarMissaoMentoria(missao: string) { this.mentoriaService.alternarMissao(missao); }

  solicitarAgendamento() {
    this.mensagemFeedback = 'Pedido de agendamento enviado para a sua mentora.';
    setTimeout(() => this.mensagemFeedback = null, 5000);
  }

  alternarDetalhesAluna(id: string) {
    this.alunaExpandidaId = this.alunaExpandidaId === id ? null : id;
  }

  salvarAnotacoes(aluna: Aluna) {
    this.mentoriaService.atualizarAluna(aluna);
    this.mensagemFeedback = `Notas de ${aluna.nome} guardadas.`;
  }

  adicionarMissao(aluna: Aluna) {
    const missao = (this.novaMissao[aluna.id] ?? '').trim();
    if (!missao) return;
    this.mentoriaService.adicionarMissaoAluna(aluna.id, missao);
    this.novaMissao[aluna.id] = '';
  }

  toggleDisponibilidade() { this.mentoriaService.alternarDisponibilidade(); }

  selecionarAba(aba: string) {
    if (aba === 'minha-mentoria' && !this.mentoriaDesbloqueada) {
      this.abaAtiva = 'minhas-solicitacoes';
      this.mensagemFeedback = 'A sua mentoria será desbloqueada quando uma solicitação for aceita.';
      return;
    }
    this.abaAtiva = aba;
    this.mensagemFeedback = null;
    this.fecharSidebar();
  }

  temSolicitacaoAtiva(idMentora: number) {
    return this.minhasSolicitacoes.some((solicitacao) => solicitacao.id === idMentora && solicitacao.status !== 'recusado');
  }

  textoStatus(status: StatusSolicitacao) {
    return status === 'pendente' ? 'Em Análise' : status === 'aceito' ? 'Aceito' : 'Recusado';
  }

  enviarSolicitacaoMentoria(mentora: Mentora) {
    if (this.temSolicitacaoAtiva(mentora.id)) {
      this.mensagemFeedback = 'Já existe uma solicitação ativa para esta mentora.';
      return;
    }
    const solicitacao: SolicitacaoMentoria = { ...mentora, status: 'pendente', criadaEm: new Date().toISOString() };
    this.mentoriaService.adicionarSolicitacao(solicitacao);
    this.mensagemFeedback = `Solicitação enviada para ${mentora.nome}! Assim que ela aceitar, você será notificada.`;
    this.abaAtiva = 'visao-geral';
    setTimeout(() => this.mensagemFeedback = null, 5000);
  }

  cancelarSolicitacao(idMentora: number) {
    this.mentoriaService.cancelarSolicitacao(idMentora);
    this.mensagemFeedback = 'Solicitação cancelada. Já pode procurar outra mentora.';
  }

  atualizarStatusSolicitacao(idMentora: number, status: StatusSolicitacao) {
    this.mentoriaService.atualizarStatusSolicitacao(idMentora, status);
  }

  agendarReuniao(dados: Reuniao) {
    if (!this.mentoriaService.agendarReuniao(dados)) {
      this.mensagemFeedback = 'Você só pode marcar uma reunião depois de a mentora aceitar a solicitação.';
      return;
    }
    this.mensagemFeedback = 'Reunião marcada com sucesso!';
    this.novaReuniao = { data: '', hora: '', pauta: '' };
  }

  fecharSidebar() { this.sidebarState.fechar(); }

  abrirNoticias() {
    this.fecharSidebar();
    this.router.navigate(['/novidades']);
  }

  aceitarPedido(pedido: PedidoMentoria) {
    this.mentoriaService.aceitarPedido(pedido);
    this.pedidoEmRecusa = null;
    this.motivoRecusa = '';
    this.mensagemFeedback = `Você aceitou o pedido de ${pedido.nome}. Ela foi adicionada ao seu histórico de alunas.`;
    setTimeout(() => this.mensagemFeedback = null, 5000);
  }

  iniciarRecusa(pedido: PedidoMentoria) {
    this.pedidoEmRecusa = pedido;
    this.motivoRecusa = '';
  }

  cancelarRecusa() {
    this.pedidoEmRecusa = null;
    this.motivoRecusa = '';
  }

  confirmarRecusa() {
    if (!this.pedidoEmRecusa || !this.motivoRecusa) return;
    const nomePedido = this.pedidoEmRecusa.nome;
    this.mentoriaService.removerPedido(this.pedidoEmRecusa);
    this.cancelarRecusa();
    this.mensagemFeedback = `Pedido de ${nomePedido} recusado com sucesso.`;
    setTimeout(() => this.mensagemFeedback = null, 5000);
  }

  sair() {
    this.sidebarState.fechar();
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }
}