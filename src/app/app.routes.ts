import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cadastro } from './pages/cadastro/cadastro';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth.guard';
import { Trilha } from './pages/trilha/trilha';
import { Alunas } from './pages/alunas/alunas';
import { Novidades } from './pages/novidades/novidades';

import { Legal } from './pages/legal/legal';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'trilhas/:slug', component: Trilha },
  { path: 'alunas/:id', component: Alunas, canActivate: [authGuard] },
  { path: 'novidades', component: Novidades, canActivate: [authGuard] },
  { path: 'legal/privacidade', component: Legal },
  { path: 'legal/lgpd', component: Legal }
];