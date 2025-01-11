/* eslint-disable prefer-const */
import { AfterViewInit, Component, ChangeDetectorRef } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-questao1',
  templateUrl: './app-questao1.component.html',
  styleUrls: ['./app-questao1.component.scss']
})
export class AppQuestao1Component implements AfterViewInit {
  soma = 0;
  explicacao = '';
  formattedExplicacao = '';

  texto = 'Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0 Enquanto K < INDICE, Faça { K = K + 1; SOMA = SOMA + K; } Imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?';

  constructor(private cdr: ChangeDetectorRef) {
    let indice = 13, k = 0, soma = 0;
    while (k < indice) {
      k++;
      soma += k;
    }
    this.soma = soma;
    this.explicacao =
      `let indice = 13, k = 0, soma = 0;
      while (k < indice) {
        k++;
        soma += k;
      }
      this.soma = soma;`;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const highlightedCode = Prism.highlight(this.explicacao, Prism.languages.javascript, 'javascript');
      this.formattedExplicacao = highlightedCode;
    });
  }
}
