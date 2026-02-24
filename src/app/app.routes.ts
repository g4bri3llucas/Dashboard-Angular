import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { LayoutComponent } from './features/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  // 1. Quando o endereço for /login, mostra o LoginComponent
  { path: 'login', component: LoginComponent },

  // 2. Quando o endereço estiver vazio, mostra o Layout e o Dashboard dentro dele
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // 3. Se digitar qualquer coisa errada, volta para o login
  { path: '**', redirectTo: 'login' }
];