import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdpkr'
})
export class UsdpkrPipe implements PipeTransform {

 transform(value: number, rate: number = 300): string {
    if (!value || isNaN(value)) return 'Invalid amount';
    const converted = value * rate;
    return `${converted.toLocaleString()} PKR`;
  }

}
