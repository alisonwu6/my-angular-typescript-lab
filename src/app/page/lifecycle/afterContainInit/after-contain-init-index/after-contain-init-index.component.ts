// Content projection is a way to pass the HTML or CSS content from the parent component to the child component by using the ‹ng-content > directive.

import { AfterContentInit, Component, DoCheck } from '@angular/core';
import { AfterContainInitChildComponent } from '../after-contain-init-child/after-contain-init-child.component';

@Component({
  selector: 'app-after-contain-init-index',
  imports: [AfterContainInitChildComponent],
  templateUrl: './after-contain-init-index.component.html',
  styleUrl: './after-contain-init-index.component.scss',
})
export class AfterContainInitIndexComponent implements DoCheck {
  dataFromParent: string = '';

  // ngAfterContentInit(): void {
  // console.log('#ngAfterContentInit() will only be called once');
  // The ngAfterContentInit hook is mostly used in relation with the child components & content-projection.

  // 涵蓋的 decorators
  // @ViewChild()
  // @ContentChild()
  // <ng-content></ng-content>
  // }

  ngDoCheck(): void {
    console.log('index -> #ngDoCheck()');
  }

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = 'Random number: ' + random;
  }
}
