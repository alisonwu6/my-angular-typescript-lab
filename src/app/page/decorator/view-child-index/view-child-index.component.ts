import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewChildChildComponent } from '../view-child-child/view-child-child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-child-index',
  imports: [ViewChildChildComponent, CommonModule, FormsModule],
  templateUrl: './view-child-index.component.html',
  styleUrl: './view-child-index.component.scss',
})
export class ViewChildIndexComponent implements AfterViewInit {
  @ViewChild(ViewChildChildComponent)
  viewChildChildComponent?: ViewChildChildComponent;
  // ? this property has no value at the initial stage but will be assigned with a value at later stage.

  @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>;

  incrChildCounter() {
    console.log(this.viewChildChildComponent);

    this.viewChildChildComponent?.incrCounter();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()')
    if (this.btnRef?.nativeElement) {
      this.btnRef.nativeElement.innerHTML = 'Counter ++';
    }
  }
}

/**
@ViewChild is used whenever you want to interact with the child components, properties, methods or the template elements.

- It is used as a query to obtain the references of the child, component methods and elements.
  In order to perform tasks such as Dom manipulation or passing the data between the components.

- It's a lifecycle hook in angular that is commonly used with ngAfterViewInit, it is called after the view and child 
  components have been initialized, making it a suitable place to interact with the child components obtained using the view child.
*/
