// !! Never use the ngOnChanges() & ngDoCheck() hooks together in the same component.

// - The ngDoCheck() is a lifecycle hook in Angular which is called during every change detection cycle.
//   - It allows developers to implement custom change detection logic.
//   - watches the non-input properties.

import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-do-check-child',
  imports: [CommonModule],
  templateUrl: './do-check-child.component.html',
  styleUrl: './do-check-child.component.scss',
})

// export class DoCheckChildComponent implements OnChanges {
//     @Input() user: any;

//     ngOnChanges(changes: SimpleChanges): void {
//       console.log('ngOnChanges called: ', changes);
//     }
//   }

export class DoCheckChildComponent implements DoCheck {
  @Input() user: any;
  private previousUserName: string | undefined;

  ngDoCheck(): void {
    if (this.user.name != this.previousUserName) {
      this.previousUserName = this.user.name;
      // console.log('ngDoCheck called - user name changed to: ', this.user.name);
    }
  }
}
