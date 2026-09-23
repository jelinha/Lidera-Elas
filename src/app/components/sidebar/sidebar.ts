import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { SidebarState } from '../../services/sidebar-state';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit, OnDestroy {
  @HostBinding('class.visivel') mostrar = false;

  @HostBinding('class.aberto')
  get menuAberto() {
    return this.sidebarState.aberto();
  }

  private rotaSubscription?: Subscription;

  constructor(
    private readonly router: Router,
    private readonly sidebarState: SidebarState,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.verificarVisibilidade(this.router.url);
    this.rotaSubscription = this.router.events
      .pipe(filter((evento): evento is NavigationEnd => evento instanceof NavigationEnd))
      .subscribe((evento) => {
        this.verificarVisibilidade(evento.urlAfterRedirects);
        this.sidebarState.fechar();
      });
  }

  ngOnDestroy() {
    this.rotaSubscription?.unsubscribe();
  }

  get perfilMentora() {
    return this.authService.perfil() === 'mentora';
  }

  sair() {
    this.sidebarState.fechar();
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

  fechar() {
    this.sidebarState.fechar();
  }

  private verificarVisibilidade(url: string) {
    const dashboard = url === '/dashboard' || url.startsWith('/dashboard/');
    const sessaoAtiva = this.authService.usuarioLogado();

    // O Dashboard possui a sua própria sidebar; as restantes páginas autenticadas usam esta.
    this.mostrar = sessaoAtiva && !this.authService.rotaPublica(url) && !dashboard;

    if (!this.mostrar) {
      this.sidebarState.fechar();
    }
  }
}
