import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { SidebarState } from '../../services/sidebar-state';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {
  isLightMode = true;
  mostrarMenuLateral = false;
  private rotaSubscription?: Subscription;

  constructor(
    private readonly router: Router,
    private readonly sidebarState: SidebarState,
    private readonly authService: AuthService
  ) {}

  get isLogado() {
    return this.authService.usuarioLogado();
  }

  ngOnInit() {
    document.body.classList.add('light-mode');
    this.verificarAutenticacao(this.router.url);
    this.rotaSubscription = this.router.events
      .pipe(filter((evento): evento is NavigationEnd => evento instanceof NavigationEnd))
      .subscribe((evento) => this.verificarAutenticacao(evento.urlAfterRedirects));
  }

  ngOnDestroy() {
    this.rotaSubscription?.unsubscribe();
  }

  alternarTema() {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }

  sair() {
    this.sidebarState.fechar();
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

  verificarAutenticacao(url: string = this.router.url) {
    this.mostrarMenuLateral = this.isLogado && !this.authService.rotaPublica(url);

    if (!this.isLogado) {
      this.sidebarState.fechar();
    }
  }

  alternarMenu() {
    this.sidebarState.alternar();
  }

  navegarParaSecao(secao: string, evento: Event) {
    evento.preventDefault();

    const destino = document.getElementById(secao);

    if (this.router.url === '/' || this.router.url.startsWith('/?') || this.router.url.startsWith('/#')) {
      destino?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `/#${secao}`);
      return;
    }

    this.router.navigateByUrl(`/?${new URLSearchParams({ section: secao }).toString()}`);
    setTimeout(() => {
      const secaoDestino = document.getElementById(secao);
      secaoDestino?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}