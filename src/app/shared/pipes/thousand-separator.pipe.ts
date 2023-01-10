import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeparator'
})
export class ThousandSeparatorPipe implements PipeTransform {

  transform(value: string): string{
  
    if (value.length==8){
      return value.split('')
        .map((char, index) => index % 3 === 2 && index !== 0 ? `.${char}` : char)
        .join('')
    }

    if (value.length==7){
      return value.split('')
        .map((char, index) => index % 3 === 1 && index !== 0 ? `.${char}` : char)
        .join('')
    }

    return 'undefined'
  }
}