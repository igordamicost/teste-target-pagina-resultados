import { Component } from '@angular/core';
import { Estado } from 'src/interface/estado.interface';
import { TableColumn } from 'src/interface/global-table.interface';

@Component({
  selector: 'app-questao4',
  templateUrl: './app-questao4.component.html',
  styleUrls: ['./app-questao4.component.scss'],
})
export class AppQuestao4Component  {
  estados: Estado[];
  columns: TableColumn<Estado>[] = [];
  constructor() {
    this.estados = [
      { nome: 'SP', valor: 67836.43, percentual: 0 },
      { nome: 'RJ', valor: 36678.66, percentual: 0 },
      { nome: 'MG', valor: 29229.88, percentual: 0 },
      { nome: 'ES', valor: 27165.48, percentual: 0 },
      { nome: 'Outros', valor: 19849.53, percentual: 0 }
    ];
    this.atualizarPercentual();

    this.columns = [
      { header: 'Estado', field: 'nome' },
      { header: 'Valor', field: 'valor' },
      { header: 'Percentual', field: 'percentual' },
    ];
    this.atualizarPercentual()
  }
  atualizarPercentual() {
    const total = this.estados.reduce((sum, estado) => sum + estado.valor, 0);
    this.estados.forEach((estado) => {
      estado.percentual = (estado.valor / total) ;
    });
  }
  texto = 'Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: • SP – R$67.836,43 • RJ – R$36.678,66 • MG – R$29.229,88 • ES – R$27.165,48 • Outros – R$19.849,53 Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  ';
}
