import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // Prepend R$ to the price
    return 'R$ ' + value;
  }

}
