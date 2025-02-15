import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incrementCount',
  // pure: false,  
  // detect 1st time for updating the view, 
  // 2ed to check if the input value has changed
})
export class IncrementCountPipe implements PipeTransform {
  transform(value: number): number {
    console.log('Counter incremented to: ', value);
    return value;
  }
}

/**

# Pure Pipes
  A pure change is just a simple and steady change in the input value, such as a string or number, or 
  a boolean, or changes in object reference for array, function or object, etc..

  !!  The pure pipe used to `get called only on the input value change`, so using pure pipes ensures more optimized
      performance than the impure pipes.
      
      So a pure pipe processes inputs and returns values `without any side effects`.

# Impure pipes
  The impure pipe, on the other hand, transforms the data even if the input data has not changed.

  */
