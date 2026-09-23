import {
  Aluna,
  Encontro,
  Mentora,
  MentoraDaRede,
  MetricasMentora,
  Novidade,
  PedidoMentoria,
  ProgressoAluna,
  Trilha
} from '../models/mentoria.model';

export const TRILHAS_DISPONIVEIS: Trilha[] = [
  { titulo: 'Introdução à Lógica de Programação', instituicao: 'SENAI Bahia', categoria: 'Tecnologia', status: 'Disponível', slug: 'logica-programacao' },
  { titulo: 'Preparação para Conferências Internacionais', instituicao: 'Instituto Diplomun', categoria: 'Geopolítica', status: 'Disponível', slug: 'model-un' },
  { titulo: 'Fundamentos de Liderança', instituicao: 'Latin American Leadership Academy', categoria: 'Carreira', status: 'Disponível', slug: 'lideranca-empregabilidade' }
];

export const NOVIDADES: Novidade[] = [
  { tag: 'OPORTUNIDADE', data: '22 Out 2026', titulo: 'Inscrições para Harvard MUN', resumo: 'Aplicações abertas para jovens líderes que desejam simular a ONU em Boston.' },
  { tag: 'TECNOLOGIA', data: '18 Out 2026', titulo: 'Bolsas de Estudo em Programação', resumo: 'O SENAI Bahia abriu 50 novas vagas gratuitas exclusivas para o LideraElas.' }
];

export const NOVIDADES_PUBLICAS: Novidade[] = [
  { tag: 'MERCADO', titulo: 'Mulheres que estão a transformar a indústria', resumo: 'Conheça trajetórias e oportunidades para jovens talentos que querem ocupar espaços de decisão.', data: 'Esta semana' },
  { tag: 'OPORTUNIDADES', titulo: 'Bolsas e programas globais com inscrições abertas', resumo: 'Uma seleção de iniciativas gratuitas para desenvolver competências e ampliar a sua rede.', data: 'Esta semana' },
  { tag: 'COMUNIDADE', titulo: 'LideraElas em destaque na próxima conferência', resumo: 'A nossa comunidade prepara novas vozes para representar as Américas em fóruns internacionais.', data: 'Há 3 dias' }
];

export const MENTORAS_DISPONIVEIS: Mentora[] = [
  { id: 1, nome: 'Dra. Helena Ribeiro', iniciais: 'HR', especializacao: 'Geopolítica', cargo: 'Especialista em Relações Internacionais', empresa: 'Instituto Diplomun', bio: 'Mentora sênior com experiência na preparação de jovens para conferências globais.' },
  { id: 2, nome: 'Engª. Sofia Costa', iniciais: 'SC', especializacao: 'Tecnologia', cargo: 'Tech Lead & Desenvolvedora', empresa: 'SENAI Bahia', bio: 'Foco em transição de carreira para a área de tecnologia, lógica e programação.' },
  { id: 3, nome: 'Carla Mendes', iniciais: 'CM', especializacao: 'Carreira', cargo: 'Coordenadora de RH', empresa: 'Latin American Academy', bio: 'Especialista em empregabilidade, currículos e otimização de perfil no LinkedIn.' },
  { id: 4, nome: 'Marta Oliveira', iniciais: 'MO', especializacao: 'Comunicação', cargo: 'Diretora de Comunicação e Oratória', empresa: 'Vozes em Rede', bio: 'Acompanha jovens líderes no desenvolvimento da confiança, expressão e comunicação estratégica.' }
];

export const PEDIDOS_MENTORIA: PedidoMentoria[] = [
  { nome: 'Ana Paula Santos', foco: 'Transição para Tecnologia', data: 'Hoje', status: 'pendente' },
  { nome: 'Mariana Lima', foco: 'Preparação para Model UN (Geopolítica)', data: 'Ontem', status: 'pendente' }
];

export const ALUNAS_INICIAIS: Aluna[] = [
  { nome: 'Beatriz Silva', status: 'Trilha de Tecnologia', progresso: '80%', id: '1', anotacoesPrivadas: '', missoes: [] },
  { nome: 'Camila Rocha', status: 'Trilha de Geopolítica', progresso: '45%', id: '2', anotacoesPrivadas: '', missoes: [] }
];

export const REDE_MENTORAS: MentoraDaRede[] = [
  { nome: 'Dra. Lívia Martins', cargo: 'Diretora de Estratégia e Inovação', empresa: 'Impacto Global', iniciais: 'LM', linkedin: 'https://www.linkedin.com' },
  { nome: 'Patrícia Almeida', cargo: 'Head de Pessoas e Cultura', empresa: 'Núcleo Atlântico', iniciais: 'PA', linkedin: 'https://www.linkedin.com' },
  { nome: 'Dra. Renata Souza', cargo: 'Investigadora e Consultora de Políticas Públicas', empresa: 'Instituto Horizonte', iniciais: 'RS', linkedin: 'https://www.linkedin.com' },
  { nome: 'Marina Duarte', cargo: 'Executiva de Finanças Sustentáveis', empresa: 'Verde Capital', iniciais: 'MD', linkedin: 'https://www.linkedin.com' }
];

export const ENCONTROS_MARCADOS: Encontro[] = [
  { titulo: 'Revisão de Application (Toronto)', data: '22 de Outubro, 2026', hora: '14:00' },
  { titulo: 'Mentoria de Oratória', data: '9 de Novembro, 2026', hora: '16:30' }
];

export const METRICAS_MENTORA: MetricasMentora = {
  horasDoadas: 45,
  alunasImpactadas: 5,
  avaliacao: '4.9/5.0'
};

export const PROGRESSO_INICIAL: ProgressoAluna = {
  nivel: 'Iniciante',
  xp: 450,
  proximoNivel: 1000
};

export const MISSOES_MENTORIA = [
  'Revisar o perfil do LinkedIn',
  'Completar o módulo introdutório da trilha',
  'Preparar três perguntas para a próxima reunião'
];

export const PROXIMOS_PASSOS = [
  'Completar módulo 1 de Lógica',
  'Analisar 3 perfis no Banco de Mentoras'
];
