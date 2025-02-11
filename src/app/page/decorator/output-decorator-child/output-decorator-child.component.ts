import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator-child',
  imports: [CommonModule],
  templateUrl: './output-decorator-child.component.html',
  styleUrl: './output-decorator-child.component.scss'
})
export class OutputDecoratorChildComponent {
  @Output() myEvent = new EventEmitter();

  emitEvent() {
    // emits the value that has been defined in it. 
    this.myEvent.emit('Event emitted from child component!');
                      // - is the payload
                      // - will be emitted when the event gets raised from the child component.
  }
}
