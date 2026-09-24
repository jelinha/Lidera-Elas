import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PerfilUsuario } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  mostrarSenha = false;
  loginInvalido = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  fazerLogin(event: Event) {
    event.preventDefault();

    const formulario = new FormData(event.currentTarget as HTMLFormElement);
    const email = String(formulario.get('email') ?? '').trim().toLowerCase();
    const senha = String(formulario.get('senha') ?? '');
    const utilizadores = this.obterUtilizadores();
    const utilizadorValido = utilizadores.find(
      (utilizador) => utilizador.email === email && utilizador.senha === senha
    );

    if (!utilizadorValido) {
      this.authService.encerrarSessao();
      this.loginInvalido = true;
      return;
    }

    this.loginInvalido = false;
    const perfil: PerfilUsuario = utilizadorValido.perfil === 'mentora' || utilizadorValido.tipoPerfil === 'mentora'
      ? 'mentora'
      : 'jovem-lider';
    this.authService.iniciarSessao(perfil);
    this.router.navigate(['/dashboard']);
  }

  private obterUtilizadores(): { email?: string; senha?: string; perfil?: string; tipoPerfil?: string }[] {
    const dadosGuardados = localStorage.getItem('lideraElasUsuarios');

    if (!dadosGuardados) {
      return [];
    }

    try {
      const utilizadores = JSON.parse(dadosGuardados);
      return Array.isArray(utilizadores) ? utilizadores : [];
    } catch {
      return [];
    }
  }
}