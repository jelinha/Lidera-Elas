import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarState {
  readonly aberto = signal(false);

  alternar() {
    this.aberto.update((aberto) => !aberto);
  }

  fechar() {
    this.aberto.set(false);
  }
}
