import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para o [(ngModel)]
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, // Adicione aqui para liberar o uso de formulários
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // Criamos este objeto para vincular aos campos do HTML
  usuario = {
    email: '',
    senha: ''
  };

  constructor(private router: Router) {}

  entrar() {
    // Definindo uma regra de acesso:
    if (this.usuario.email === 'admin@teste.com' && this.usuario.senha === '123456') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('E-mail ou senha inválidos! Tente admin@teste.com e senha 123456');
    }
  }
}