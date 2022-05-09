import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullable'
})
export class NullablePipe implements PipeTransform {

  transform(value: any, replace: string): any {
    let rep = replace !== undefined ? replace : "-";
    return value ? value : rep; 
  }

}
