// ngOnChanges() only responds to changes in input-bound properties.

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-change-child',
  imports: [],
  templateUrl: './on-change-child.component.html',
  styleUrl: './on-change-child.component.scss',
})
export class OnChangeChildComponent implements OnChanges {
  @Input() inputValue: string = ''; // used for passing the value from the parent component to the child component.
  previousValue: string | undefined;
  currentValue: string | undefined; // | undefined is used when uncertain of what value to initialize with a property

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Calling from the ngOnChanges hook!');

    if (changes['inputValue']) {
      this.previousValue = changes['inputValue'].previousValue;
      this.currentValue = changes['inputValue'].currentValue;
      // console.log('changes: ', changes);
    }

    // 1. When the input data is changed.
    // 2. Changed information is passed to the SimpleChanges interface.
    // 3. Change reflected in the output.
    // To handle input changes like reading the values & updating the fields,
    // the ngOnChanges hook comes handy!

    // The ngOnChanges) hook is used to detect & respond to changes in input
    // "@Input)" properties of an Angular component.
    // It is called whenever there are changes to input properties.
  }
}
