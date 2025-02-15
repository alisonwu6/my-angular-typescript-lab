import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText',
})
export class AppendTextPipe implements PipeTransform {
  transform(value: string, suffixVal: string): string {
    // value -> The input value to transform
    // suffixVal -> The string to append with the input value
    return value + suffixVal;
  }
}
