import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, type?: string): any {
    if (value === undefined||value==='') {
      return value;
    }
    if (type == 'show') {
      return value;
    } else {
      return '*'.repeat(value.length);
    }
  }

}
