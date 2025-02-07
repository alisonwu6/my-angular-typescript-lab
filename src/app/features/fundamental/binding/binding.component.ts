import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // primarily used for template-driven forms

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  staticInput: string = 'Static two-way binding';
  dynamicInput: string = '';


  // 2-24
  inputVal: string = '';
  dynamicVal: string = '';

  show() {
    this.dynamicVal = this.inputVal;
  }
}
