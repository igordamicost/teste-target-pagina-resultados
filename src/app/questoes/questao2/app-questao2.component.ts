import { Component } from '@angular/core';

@Component({
  selector: 'app-questao2',
  templateUrl: './app-questao2.component.html',
  styleUrls: ['./app-questao2.component.scss'],
})
export class AppQuestao2Component  {
  numero: number | null = null;
  mensagem = '';
  fibonacci = false;
  texto =
    'Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.';

  verificarFibonacci(): void {
    if (this.numero === null || this.numero < 0) {
      this.mensagem = 'Por favor, insira um número válido maior ou igual a zero.';
      this.fibonacci = false;
      return;
    }

    let a = 0,
      b = 1,
      temp;
    const sequencia = [a];
    while (b <= this.numero) {
      sequencia.push(b);
      temp = a + b;
      a = b;
      b = temp;
    }

    if (this.numero === 0 || sequencia.includes(this.numero)) {
      this.mensagem = `O número ${this.numero} pertence à sequência de Fibonacci. Sequência: ${sequencia.join(
        ', '
      )}`;
      this.fibonacci = true;
    } else {
      this.mensagem = `O número ${this.numero} não pertence à sequência de Fibonacci.`;
      this.fibonacci = false;
    }
  }
}
