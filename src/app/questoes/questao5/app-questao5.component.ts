import { Component } from '@angular/core';

@Component({
  selector: 'app-questao5',
  templateUrl: './app-questao5.component.html',
  styleUrls: ['./app-questao5.component.scss']
})
export class AppQuestao5Component  {
  cabecalho = 'Escreva um programa que inverta os caracteres de um string. IMPORTANTE: a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; b) Evite usar funções prontas, como, por exemplo, reverse;';
  texto = '';
  textoInvertido = '';
  letrasInvertidas = '';

  inverterTexto(): void {
    this.textoInvertido = this.texto.split('').reverse().join('');

    this.letrasInvertidas = this.texto
      .split(' ')
      .map((palavra) => this.inverterVogaisNaPalavra(palavra))
      .join(' ');
  }

  private inverterVogaisNaPalavra(palavra: string): string {
    const vogais = Array.from(palavra).filter((char) => 'aeiouAEIOU'.includes(char));
    let indiceVogal = vogais.length - 1;

    return Array.from(palavra)
      .map((char) =>
        'aeiouAEIOU'.includes(char) ? vogais[indiceVogal--] : char
      )
      .join('');
  }
}
