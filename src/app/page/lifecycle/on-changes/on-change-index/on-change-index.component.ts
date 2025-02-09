import { Component } from '@angular/core';
import { OnChangeChildComponent } from '../on-change-child/on-change-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-on-change-index',
  imports: [FormsModule, OnChangeChildComponent],
  templateUrl: './on-change-index.component.html',
  styleUrl: './on-change-index.component.scss',
})
export class OnChangeIndexComponent {
  // ngOnChanges - Begins
  inputValue: string = 'Initial Value';
  updateValue() {
    this.inputValue = 'App Component';
  }
  // ngOnChanges - Ends
}
