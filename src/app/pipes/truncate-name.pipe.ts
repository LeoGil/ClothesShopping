import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true
})
export class TruncateNamePipe implements PipeTransform {

  transform(value: string, maxLenght: number = 16, ellipsis: string = '...'): unknown {
    return value.length > maxLenght ? value.substring(0, maxLenght) + ellipsis : value
  }

}
