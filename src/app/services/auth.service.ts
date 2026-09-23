import { Injectable, signal } from '@angular/core';
import { PerfilUsuario } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly usuarioLogado = signal(this.sessaoAtiva());
  readonly perfil = signal<PerfilUsuario>(this.obterPerfil());

  iniciarSessao(perfil: PerfilUsuario) {
    localStorage.setItem('lideraElasSessao', 'ativa');
    localStorage.setItem('lideraElasPerfil', perfil);
    this.perfil.set(perfil);
    this.usuarioLogado.set(true);
  }

  encerrarSessao() {
    localStorage.removeItem('lideraElasSessao');
    localStorage.removeItem('lideraElasPerfil');
    this.perfil.set('jovem-lider');
    this.usuarioLogado.set(false);
  }

  rotaPublica(url: string) {
    return ['/login', '/cadastro', '/legal']
      .some((rota) => url === rota || url.startsWith(`${rota}/`));
  }

  private sessaoAtiva() {
    return localStorage.getItem('lideraElasSessao') === 'ativa';
  }

  private obterPerfil(): PerfilUsuario {
    return localStorage.getItem('lideraElasPerfil') === 'mentora' ? 'mentora' : 'jovem-lider';
  }
}
