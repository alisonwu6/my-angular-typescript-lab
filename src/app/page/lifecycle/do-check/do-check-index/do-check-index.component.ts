import { Component } from '@angular/core';
import { DoCheckChildComponent } from '../do-check-child/do-check-child.component';

@Component({
  selector: 'app-do-check-index',
  imports: [DoCheckChildComponent],
  templateUrl: './do-check-index.component.html',
  styleUrl: './do-check-index.component.scss',
})
export class DoCheckIndexComponent {
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
}
