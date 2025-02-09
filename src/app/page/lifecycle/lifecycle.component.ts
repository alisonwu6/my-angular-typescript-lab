import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-lifecycle',
  imports: [TestComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})
export class LifecycleComponent {
  inputValue: string = 'Initial Value';

  constructor() {
    console.log('LifecycleComponent constructor', this.inputValue);
  }

  updateValue() {
    this.inputValue = 'App Component';
  }

  // creation phases in order
  // constructor
  // ngOnChanges
  // ngOnInit
  // ngDoCheck
  // - (Main used in the child components & DOM manipulation)
  // | ngAfterContentInit    
  // | ngAfterContentChecked
  // | ngAfterViewInit
  // - ngAfterViewChecked
  // ngDestroy
}
