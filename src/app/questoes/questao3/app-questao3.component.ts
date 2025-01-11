import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Dado } from 'src/interface/dado.interface';
import { TableColumn } from 'src/interface/global-table.interface';
import { FileService } from 'src/services/file.service';
import { FileType } from 'src/util/enum';

@Component({
  selector: 'app-questao3',
  templateUrl: './app-questao3.component.html',
  styleUrls: ['./app-questao3.component.scss']
})
export class AppQuestao3Component  {
  dados: Dado[] = [];
  resultados: { menor: number; maior: number; diasAcimaMedia: number } | null = null;
  texto = ' Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: • O menor valor de faturamento ocorrido em um dia do mês; • O maior valor de faturamento ocorrido em um dia do mês; • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. IMPORTANTE: a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;';
  xmlString = '';
  selectedType?: FileType;
  fileTypes = Object.values(FileType);
  resultadosArray: { descricao: string; valor: number }[] = [];
  resultadosColumns: TableColumn<{ descricao: string; valor: number }>[] = []

  constructor(private fileService: FileService,private http: HttpClient) {
    this.resultadosColumns = [
      { header: 'Descrição', field: 'descricao' },
      { header: 'Valor', field: 'valor' },
    ];
   }

  processarArquivo(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.lerArquivo(file);
    }
  }

  onFileDropped(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.lerArquivo(file);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    target.classList.add('dragging');
  }

  onDragLeave(event: DragEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove('dragging');
  }

  private lerArquivo(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string;

      try {
        const isXML = fileContent.trim().startsWith('<');

        if (isXML) {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(fileContent, 'text/xml');
          const rows = xmlDoc.getElementsByTagName('row');

          this.dados = Array.from(rows).map((row) => ({
            dia: parseInt(row.querySelector('dia')?.textContent || '0', 10),
            valor: parseFloat(row.querySelector('valor')?.textContent || '0')
          }));
        } else {
          this.dados = JSON.parse(fileContent);
        }

        const valores = this.dados.map((d) => d.valor).filter((v) => v > 0);
        if (valores.length === 0) {
          console.error('Nenhum valor válido encontrado.');
          return;
        }

        const media = valores.reduce((a, b) => a + b, 0) / valores.length;
        this.resultados = {
          menor: Math.min(...valores),
          maior: Math.max(...valores),
          diasAcimaMedia: valores.filter((v) => v > media).length,
        };
        this.resultadosArray = [
          { descricao: 'Menor Faturamento', valor: this.resultados.menor },
          { descricao: 'Maior Faturamento', valor: this.resultados.maior },
          { descricao: 'Dias Acima da Média', valor: this.resultados.diasAcimaMedia },
        ];
      } catch (error) {
        console.error('Erro ao processar o arquivo:', error);
      }
    };

    reader.readAsText(file);
  }
  simularErro500() {
    this.fileService.simularErro()
      .subscribe(
        () => {
          console.log('Erro 500 simulado com sucesso');
        },
        (error) => {
          console.error('Erro ao simular erro 500:', error);
        }
      );
  }
}

