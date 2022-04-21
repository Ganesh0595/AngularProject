import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: any, ..._args: unknown[]): unknown {
    console.log("This is the Number Pipe "+ value);
    // let str = this.transform;
    return null;
  }

}
