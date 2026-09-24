import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  mostrarSenha = false;
  mostrarConfirmacao = false;
  senhaInvalida = false;
  emailJaCadastrado = false;

  constructor(private readonly router: Router) {}

  tipoPerfil: 'mentora' | 'jovem-lider' = 'mentora';

  selecionarPerfil(tipo: 'mentora' | 'jovem-lider') {
    this.tipoPerfil = tipo;
  }

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  toggleConfirmacao() {
    this.mostrarConfirmacao = !this.mostrarConfirmacao;
  }

  fazerCadastro(event: Event) {
    event.preventDefault();

    const formulario = new FormData(event.currentTarget as HTMLFormElement);
    const senha = String(formulario.get('senha') ?? '');
    const confirmarSenha = String(formulario.get('confirmarSenha') ?? '');

    if (senha !== confirmarSenha) {
      this.senhaInvalida = true;
      return;
    }

    this.senhaInvalida = false;
    const utilizadores = this.obterUtilizadores();
    const email = String(formulario.get('email') ?? '').trim().toLowerCase();

    if (utilizadores.some((utilizador) => utilizador['email']?.trim().toLowerCase() === email)) {
      this.emailJaCadastrado = true;
      return;
    }

    this.emailJaCadastrado = false;
    const novoUtilizador = {
      nome: String(formulario.get('nome') ?? ''),
      nascimento: String(formulario.get('nascimento') ?? ''),
      email,
      senha,
      perfil: this.tipoPerfil,
      tipoPerfil: this.tipoPerfil,
    };

    utilizadores.push(novoUtilizador);
    localStorage.setItem('lideraElasUsuarios', JSON.stringify(utilizadores));
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']);
  }

  private obterUtilizadores(): Record<string, string>[] {
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
