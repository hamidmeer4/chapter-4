import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

   transform(value: string): string {
    if (!value) return '';
    return value
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');
  }

}
