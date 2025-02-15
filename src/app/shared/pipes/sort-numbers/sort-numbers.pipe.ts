import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumbers',
})
export class SortNumbersPipe implements PipeTransform {
  // 'asc' | 'desc' Explain
  // Note that the ` | ` sign is not the custom pipe or any built in pipe.
  // Rather, it is the union type operator provided by the TypeScript,
  // which means that the parameter sort order can have a value that is either ascending or descending.

  transform(arr: number[], sortOrder: 'asc' | 'desc'): number[] {
    if (sortOrder === 'asc') {
      return arr.sort((a, b) => a - b);
    } else {
      return arr.sort((a, b) => b - a);
    }
  }
}
