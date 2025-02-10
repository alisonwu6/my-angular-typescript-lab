import {
  AfterContentChecked,
  AfterContentInit,
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
  implements AfterContentInit, AfterContentChecked
{
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('child -> ngAfterContentInit() was invoked...');
    console.log('child -> ngAfterContentInit() wrapper', this.wrapper);
    console.log('child -> ngAfterContentInit() contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('child -> ngAfterContentChecked() was invoked...');
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
