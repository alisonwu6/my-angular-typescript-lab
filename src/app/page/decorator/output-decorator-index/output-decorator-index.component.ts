import { Component } from '@angular/core';
import { OutputDecoratorChildComponent } from '../output-decorator-child/output-decorator-child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output-decorator-index',
  imports: [CommonModule, FormsModule, OutputDecoratorChildComponent],
  templateUrl: './output-decorator-index.component.html',
  styleUrl: './output-decorator-index.component.scss',
})
export class OutputDecoratorIndexComponent {
  message: string = '';

  receiveChildEvent(eventDate: string) {
    this.message = eventDate;
  }
}
