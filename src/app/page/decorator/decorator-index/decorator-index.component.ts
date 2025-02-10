import { Component } from '@angular/core';
import { DecoratorChildComponent } from '../decorator-child/decorator-child.component';

@Component({
  selector: 'app-decorator-index',
  imports: [DecoratorChildComponent],
  templateUrl: './decorator-index.component.html',
  styleUrl: './decorator-index.component.scss'
})
export class DecoratorIndexComponent {
  displayMessage: string = 'Hello, Message from parent component';
  displayMessageAliasFromIndex: string = '(Alias) Hello, Message from parent component';

  showMsg() {
    this.displayMessage = 'Child Component: Message Updated';
    this.displayMessageAliasFromIndex = 'Alias Message Updated'
  }
}
