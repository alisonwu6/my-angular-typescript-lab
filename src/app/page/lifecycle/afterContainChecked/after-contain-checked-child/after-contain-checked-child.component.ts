import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-after-contain-checked-child',
  imports: [],
  templateUrl: './after-contain-checked-child.component.html',
  styleUrl: './after-contain-checked-child.component.scss',
})
export class AfterContainCheckedChildComponent
  implements AfterContentInit, AfterContentChecked, AfterViewInit
{
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    // console.log('child -> ngAfterContentInit() was invoked...');
    // console.log('child -> ngAfterContentInit() wrapper', this.wrapper);
    // console.log('child -> ngAfterContentInit() contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    // console.log('child -> ngAfterContentChecked() was invoked...');
  }

  ngAfterViewInit(): void {
    const divElement: HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = 'maroon';
    divElement.style.fontSize = '15px';
    divElement.style.fontWeight = '300';

    // console.log('child -> AfterViewInit() was invoked...', this.wrapper);
    // So the ngAfterViewInit() hook is very handy when you want to perform tasks on the view of the component.

    /**
      Q1 - The first is what is the purpose of the ngAfterViewInit hook.
          
            So the ng after view init hook is a lifecycle hook in angular that is called after angular has fully initialized the component's view, or any child views, which are basically the related template files.
            So this hook is a good place to perform tasks that depend on the views children being available, such as interacting with child components or Dom elements.

      Q2 - The second question is what will be the difference if we apply the same code logic inside the ng on init hook instead of ng after view init.
          
            When you want to deal with the Dom manipulation task, it is recommended that you use the ng after view init hook instead of ng on init.

      Q3 - How do you ensure that tasks performed in ng after view init don't cause the expression has changed after it was checked error.
            check -> test-index file
    */
  }
}

// The ngAfterContentChecked hook is mostly used for the tasks that involve checking & responding to the changes on the content projected
// , like validation and error handling or debugging purposes.
// And as this hook gets fired immediately after the content is checked, there are high chances of performance

// ngAfterContentChecked(): void {
//   this.items.forEach((item) => {
//     // Your validation and error handling code goes here
//     if (!item.isValid()) {
//       // Assume these exist on ItemComponent
//       item.markAsInvalid();
//       console.error(`Item ${item.name} is valid.`);
//     }
//   });
// }
