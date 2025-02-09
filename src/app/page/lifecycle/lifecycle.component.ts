import { Component, OnInit } from '@angular/core';
import { DoCheckComponent } from './do-check/do-check.component';
import { OnChangeIndexComponent } from './on-changes/on-change-index/on-change-index.component';

@Component({
  selector: 'app-lifecycle',
  imports: [OnChangeIndexComponent, DoCheckComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})
export class LifecycleComponent implements OnInit {
  constructor() {
    // console.log('LifecycleComponent constructor', this.inputValue);
    // - The constructor of a component class is called immediately when the component is instantiated.
    // - This happens before Angular sets up the component's inputs or runs change detection.
    //   However, the constructor doesn't wait for the component's view to be fully rendered.
  }

  // ngOnInit - Begins
  count: number = 0;
  counterInterval: any;
  startCounter() {
    this.counterInterval = setInterval(() => {
      if (this.count < 3) {
        console.log(this.count++, this.counterInterval);
      } else {
        clearInterval(this.counterInterval);
        console.log('this.counterInterval', this.counterInterval);
      }
    }, 1000);
  }
  ngOnInit(): void {
    // console.log('[LC] - ngOnInit: Component has been initialized');
    // this.startCounter();
    // - While the ngOnInit( lifecycle hook is called after the component has been initialized,
    //   meaning that Angular has finished creating the component & has set up all its inputs.
    // - This is also before the component's view is rendered in the DOM, but it's after Angular has set up the data-bound properties.
  }
  // ngOnInit - Ends

  // ngDoCheck - Begins
  // 1. Use the ngOnChanges) to check the limitations.
  // 2. Refactor it using the ngDoCheck().
  user = {
    name: 'UserA',
  };
  changeUserName() {
    this.user.name = 'UserB';
    // Changing the entire user object would have triggered the change, but not for a particular object property.
    // With the ngDoCheck) hook a custom change detection for a component can be created
  }

  // ngDoCheck - Ends

  // creation phases in order
  // (1) -> `constructor()`: constructor() gets called & object is created for the component. [Memory initialization] <-> [Browser DOM] the component is not completely rendered.
  // (2) -> `ngOnInit()`: ngOnInit() waits for the component to get rendered. it's a preferred phase to fetch api.
  // (3) -> `ngOnChanges()`: responded to the changes made with the data bound input property.
  // (4) -> `ngDoCheck()`: is used for performing a custom change detection & responding to the changes in a component.
  // - (Main used in the child components & DOM manipulation)
  // | ngAfterContentInit
  // | ngAfterContentChecked
  // | ngAfterViewInit
  // - ngAfterViewChecked
  // ngDestroy
}
