import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercasepipe'
})
export class LowercasepipePipe implements PipeTransform {

  // transform(value: any, ...args: unknown[]): unknown {
  //   return value.toLowerCase();
  // }

  transform(temp: number, ...args: unknown[]): any{
    const c=(temp -32)/1.8;
    return c.toFixed(2);
  }


}
