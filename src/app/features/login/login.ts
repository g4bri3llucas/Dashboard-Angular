import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; // Importação do "guia" de rotas

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // O constructor "pede" ao Angular para usar o serviço de rotas
  constructor(private router: Router) {}

  entrar() {
    // Esse comando muda a URL para /dashboard e o Angular troca a tela
    this.router.navigate(['/dashboard']);
  }
}