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
// A exclamação (!) garante ao Angular que esse elemento vai existir
@ViewChild('graficoCanvas') elementoCanvas!: ElementRef;

grafico: any;

constructor() {
// Isso é obrigatório para o Chart.js funcionar
Chart.register(...registerables);
}

ngAfterViewInit() {
// Damos 1 segundo para o Angular renderizar o HTML antes de desenhar
setTimeout(() => {
this.renderizarGrafico();
}, 1000);
}

renderizarGrafico() {
if (!this.elementoCanvas) {
alert("Erro: O Angular não encontrou o #graficoCanvas no HTML!");
return;
}

const ctx = this.elementoCanvas.nativeElement.getContext('2d');

if (this.grafico) {
  this.grafico.destroy();
}

this.grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [{
      label: 'Vendas da Semana (R$)',
      data: [450, 600, 800, 300, 1100, 950, 400],
      backgroundColor: '#3f51b5',
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

console.log("O gráfico foi renderizado com sucesso!");
}
}