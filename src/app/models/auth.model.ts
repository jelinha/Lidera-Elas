export type PerfilUsuario = 'mentora' | 'jovem-lider';

export interface Utilizador {
  email?: string;
  senha?: string;
  perfil?: string;
  tipoPerfil?: string;
}
