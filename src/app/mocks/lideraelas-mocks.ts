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
  { titulo: 'Introdução à Lógica de Programação', instituicao: 'Monitora Attekita', categoria: 'Tecnologia', status: 'Disponível', slug: 'logica-programacao' },
  { titulo: 'Preparação para Conferências Internacionais', instituicao: 'Instituto Diplomun', categoria: 'Geopolítica', status: 'Disponível', slug: 'conferencias-internacionais' },
  { titulo: 'Fundamentos de Liderança', instituicao: 'Latin American Leadership Academy', categoria: 'Carreira', status: 'Disponível', slug: 'lideranca-empregabilidade' }
];

export const NOVIDADES: Novidade[] = [
  { tag: 'OPORTUNIDADE', data: '22 Out 2026', titulo: 'Inscrições para Harvard MUN', resumo: 'Aplicações abertas para jovens líderes que desejam simular a ONU em Boston.', link: 'https://www.harvardmun.org/' },
  { tag: 'TECNOLOGIA', data: '18 Out 2026', titulo: 'Bolsas de Estudo em Programação', resumo: 'O SENAI Bahia abriu 50 novas vagas gratuitas exclusivas para o LideraElas.', link: 'https://www.senaibahia.com.br/' }
];

export const NOVIDADES_PUBLICAS: Novidade[] = [
  { tag: 'MERCADO', titulo: 'Mulheres que estão a transformar a indústria', resumo: 'Conheça trajetórias e oportunidades para jovens talentos que querem ocupar espaços de decisão.', data: 'Esta semana', link: 'https://forbes.com.br/forbes-mulher/' },
  { tag: 'OPORTUNIDADES', titulo: 'Bolsas e programas globais com inscrições abertas', resumo: 'Uma seleção de iniciativas gratuitas para desenvolver competências e ampliar a sua rede.', data: 'Esta semana', link: 'https://www.estudarfora.org.br/' },
  { tag: 'COMUNIDADE', titulo: 'LideraElas em destaque na próxima conferência', resumo: 'A nossa comunidade prepara novas vozes para representar as Américas em fóruns internacionais.', data: 'Há 3 dias', link: 'https://www.unwomen.org/' }
];

export const MENTORAS_DISPONIVEIS: Mentora[] = [
  { id: 1, nome: 'Yasmin Rodrigues', iniciais: 'YR', foto: '/yasmin.jpg', especializacao: 'Geopolítica', cargo: 'Especialista em Relações Internacionais', empresa: 'Instituto Diplomun', bio: 'Mentora sênior com experiência na preparação de jovens para conferências globais.' },
  { id: 2, nome: 'Engª. Carla Lemos', iniciais: 'CL', foto: '/carla.jpg', especializacao: 'Tecnologia', cargo: 'Tech Lead & Desenvolvedora', empresa: 'SENAI Bahia', bio: 'Foco em transição de carreira para a área de tecnologia, lógica e programação.' },
  { id: 3, nome: 'Sara Barbosa', iniciais: 'SB', foto: '/sara.jpg', especializacao: 'Carreira', cargo: 'Coordenadora de Finanças', empresa: 'Latin American Academy', bio: 'Especialista em empregabilidade, currículos e otimização de perfil no LinkedIn.' },
  { id: 4, nome: 'Giulia Guarniero', iniciais: 'GG', foto: '/giulia.jpg', especializacao: 'Comunicação', cargo: 'Diretora de Comunicação e Oratória', empresa: 'Vozes em Rede', bio: 'Acompanha jovens líderes no desenvolvimento da confiança, expressão e comunicação estratégica.' }
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
  { nome: 'Carla Lemos', cargo: 'Diretora de Estratégia e Inovação', empresa: 'Impacto Global', iniciais: 'LM', foto: '/carla.jpg', linkedin: 'https://www.linkedin.com' },
  { nome: 'Giulia Guarniero', cargo: 'Head de Pessoas e Cultura', empresa: 'Núcleo Atlântico', iniciais: 'PA', foto: '/giulia.jpg', linkedin: 'https://www.linkedin.com' },
  { nome: 'Yasmin Rodrigues', cargo: 'Investigadora e Consultora de Políticas Públicas', empresa: 'Instituto Horizonte', iniciais: 'RS', foto: '/yasmin.jpg', linkedin: 'https://www.linkedin.com' },
  { nome: 'Sara Barbosa', cargo: 'Executiva de Finanças Sustentáveis', empresa: 'Verde Capital', iniciais: 'MD', foto: '/sara.jpg', linkedin: 'https://www.linkedin.com' }
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

export const PERFIS_ALUNAS: Record<string, any> = {
  '1': {
    id: '1',
    nome: 'Beatriz Silva',
    iniciais: 'BS',
    email: 'beatriz.silva@lideraelas.org',
    nivelEscolaridade: 'Ensino Médio',
    objetivo: 'Aprender os fundamentos de lógica de programação e criar as suas primeiras soluções tecnológicas.',
    statusTrilha: 'Trilha de Tecnologia',
    progresso: '80%',
    historicoMentorias: [
      { data: '18 Out 2026', tema: 'Lógica e Algoritmos', notas: 'Aluna muito dedicada, concluiu os primeiros exercícios com facilidade.' }
    ],
    proximoEncontro: { tema: 'Revisão de Módulo 1', data: '25 Out 2026', hora: '15:00' }
  },
  '2': {
    id: '2',
    nome: 'Camila Rocha',
    iniciais: 'CR',
    email: 'camila.rocha@lideraelas.org',
    nivelEscolaridade: 'Ensino Médio',
    objetivo: 'Preparação avançada para conferências internacionais e técnicas de oratória.',
    statusTrilha: 'Trilha de Geopolítica',
    progresso: '45%',
    historicoMentorias: [
      { data: '12 Out 2026', tema: 'Posicionamento Diplomático', notas: 'Discutimos técnicas de argumentação para simulações da ONU.' }
    ],
    proximoEncontro: { tema: 'Simulação Prática', data: '27 Out 2026', hora: '16:30' }
  }
};