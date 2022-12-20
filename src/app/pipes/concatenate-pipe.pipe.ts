import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenatePipe'
})

export class ConcatenatePipePipe implements PipeTransform {

  transform(value: any, firstName: string, lastName: string): any {
    return value[firstName] +' '+ value[lastName];
  }

}
