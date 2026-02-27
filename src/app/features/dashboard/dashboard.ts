import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements AfterViewInit {
  @ViewChild('graficoCanvas') elementoCanvas!: ElementRef;
  grafico: any;

  constructor() {
    // Registra os componentes globais do Chart.js
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    // Timeout para garantir que o DOM dark mode carregou 100%
    setTimeout(() => {
      this.renderizarGrafico();
    }, 800);
  }

  renderizarGrafico() {
    if (!this.elementoCanvas) return;

    const ctx = this.elementoCanvas.nativeElement.getContext('2d');

    if (this.grafico) {
      this.grafico.destroy();
    }

    this.grafico = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Vendas (R$)',
          data: [450, 600, 800, 350, 1100, 950, 400],
          backgroundColor: '#bb86fc', // Roxo Neon
          hoverBackgroundColor: '#03dac6', // Muda para Turquesa ao passar o mouse
          borderRadius: 6,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' // Linhas de grade sutis
            },
            ticks: {
              color: '#b0b0b0',
              font: { size: 12 }
            }
          },
          x: {
            grid: {
              display: false // Remove linhas verticais para ficar mais limpo
            },
            ticks: {
              color: '#b0b0b0',
              font: { size: 12 }
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#e0e0e0',
              font: { size: 14 }
            }
          },
          tooltip: {
            backgroundColor: '#333',
            titleColor: '#bb86fc',
            bodyColor: '#fff',
            padding: 12,
            displayColors: false
          }
        }
      }
    });
  }
}