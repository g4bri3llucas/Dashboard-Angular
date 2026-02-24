import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Layout } from './features/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  // 1. Prioridade máxima: se não digitou nada, vai para o login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // 2. Rota de Login
  { path: 'login', component: Login },

  // 3. Rotas internas (depois do login)
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
    ]
  },

  // 4. Qualquer outra coisa, volta para o login
  { path: '**', redirectTo: 'login' }
];