import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumOfNumbers',
  pure: false,

  /**
        So when we declare the pipe as impure it can modify the `input array`.
        And as we have discussed in the previous lecture, the impure pipe is 
        executed on every change detection cycle.
   */
})
export class SumOfNumbersPipe implements PipeTransform {
  transform(value: number[]): number {
    let sum = 0;
    for (let num of value) {
      sum += num;
    }
    return sum;
  }
}
