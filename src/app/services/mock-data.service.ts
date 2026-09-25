import { Injectable } from '@angular/core';
import {
  ALUNAS_INICIAIS,
  ENCONTROS_MARCADOS,
  MENTORAS_DISPONIVEIS,
  METRICAS_MENTORA,
  MISSOES_MENTORIA,
  NOVIDADES,
  NOVIDADES_PUBLICAS,
  PEDIDOS_MENTORIA,
  PROGRESSO_INICIAL,
  PROXIMOS_PASSOS,
  REDE_MENTORAS,
  TRILHAS_DISPONIVEIS,
  PERFIS_ALUNAS
} from '../mocks/lideraelas-mocks';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  readonly trilhasDisponiveis = TRILHAS_DISPONIVEIS;
  readonly novidades = NOVIDADES;
  readonly novidadesPublicas = NOVIDADES_PUBLICAS;
  readonly mentorasDisponiveis = MENTORAS_DISPONIVEIS;
  readonly pedidosMentoria = PEDIDOS_MENTORIA;
  readonly alunasIniciais = ALUNAS_INICIAIS;
  readonly redeMentoras = REDE_MENTORAS;
  readonly encontrosMarcados = ENCONTROS_MARCADOS;
  readonly metricas = METRICAS_MENTORA;
  readonly progressoInicial = PROGRESSO_INICIAL;
  readonly missoesMentoria = MISSOES_MENTORIA;
  readonly proximosPassos = PROXIMOS_PASSOS;
  readonly perfisAlunas = PERFIS_ALUNAS;
  detalhesTrilhas: any;
}