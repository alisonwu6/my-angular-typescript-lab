import { Component, DoCheck } from '@angular/core';
import { DoCheckChildComponent } from '../do-check-child/do-check-child.component';

@Component({
  selector: 'app-do-check-index',
  imports: [DoCheckChildComponent],
  templateUrl: './do-check-index.component.html',
  styleUrl: './do-check-index.component.scss',
})
export class DoCheckIndexComponent implements DoCheck {
  user = {
    name: 'UserA',
  };
  changeUserName() {
    this.user.name = 'UserB';
    // Changing the entire user object would have triggered the change, but not for a particular object property.
    // With the ngDoCheck) hook a custom change detection for a component can be created
  }

  items: number[] = [1, 2, 3, 4];
  previousItems: number[] = [...this.items];
  ngDoCheck(): void {
    // detect array
    if (this.items.length !== this.previousItems.length) {
      console.log(`Array changed: ${this.previousItems} => ${this.items}`);
      this.previousItems = [...this.items];
    }
  }

  addItem() {
    this.items.push(this.items.length + 1);
  }
}
