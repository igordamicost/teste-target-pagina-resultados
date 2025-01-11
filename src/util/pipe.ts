import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentual'
})
export class PercentualPipe implements PipeTransform {
  transform(value: number, decimalCount = 2): string {
    return `${(value * 100).toFixed(decimalCount)}%`;
  }
}
