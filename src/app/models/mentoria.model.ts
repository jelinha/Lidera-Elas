export type StatusSolicitacao = 'pendente' | 'aceito' | 'recusado';

export interface Mentora {
  id: number;
  nome: string;
  iniciais: string;
  foto?: string;
  especializacao: string;
  cargo: string;
  empresa: string;
  bio: string;
}

export interface Reuniao {
  data: string;
  hora: string;
  pauta: string;
}

export interface SolicitacaoMentoria extends Mentora {
  status: StatusSolicitacao;
  criadaEm: string;
  reuniao?: Reuniao;
}

export interface Aluna {
  nome: string;
  status: string;
  progresso: string;
  id: string;
  anotacoesPrivadas?: string;
  missoes?: string[];
}

export interface PedidoMentoria {
  nome: string;
  foco: string;
  data: string;
  status: StatusSolicitacao;
}

export interface Trilha {
  titulo: string;
  instituicao: string;
  categoria: string;
  status: string;
  slug: string;
}

export interface Novidade {
  tag: string;
  data: string;
  titulo: string;
  resumo: string;
  link?: string;
}

export interface MentoraDaRede {
  nome: string;
  cargo: string;
  empresa: string;
  iniciais: string;
  foto?: string;
  linkedin: string;
}

export interface Encontro {
  titulo: string;
  data: string;
  hora: string;
}

export interface MetricasMentora {
  horasDoadas: number;
  alunasImpactadas: number;
  avaliacao: string;
}

export interface ProgressoAluna {
  nivel: string;
  xp: number;
  proximoNivel: number;
}