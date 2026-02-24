import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Layout } from './features/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];