import { Component, DoCheck } from '@angular/core';
import { AfterContainCheckedChildComponent } from '../after-contain-checked-child/after-contain-checked-child.component';

@Component({
  selector: 'app-after-contain-checked-index',
  imports: [AfterContainCheckedChildComponent],
  templateUrl: './after-contain-checked-index.component.html',
  styleUrl: './after-contain-checked-index.component.scss',
})
export class AfterContainCheckedIndexComponent implements DoCheck {
  dataFromParent: string = '';

  ngDoCheck(): void {
    console.log('index -> #ngDoCheck()');
  }

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = 'Random number: ' + random;
  }
  // ngAfterContentChecked() checks for the content of the component on every change detection cycle.
  // So this hook will get invoked each time the content of the component is checked after being projected.
}
