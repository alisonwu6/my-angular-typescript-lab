import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  imports: [],
  templateUrl: './view-child-child.component.html',
  styleUrl: './view-child-child.component.scss'
})
export class ViewChildChildComponent {
  count: number = 0;

  incrCounter() {
    this.count++;
  }
}
