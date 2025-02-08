import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  display: boolean = true;
  num: number = 0;

  // trackBy function in NgFor
  items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
  ];

  trackById(item: any) {
    return item.id;
  }

  updateItem() {
    this.items[1] = { id: 2, name: 'Grape' };
  }

  age: number = 18;
  isEligible: boolean = false;

  checkEligibility() {
    this.isEligible = this.age >= 18;
  }

  // Attribute directive
  updateStyles: any = 'updateStyles';

  hasText: boolean = false;

  textInput(e: any) {
    this.hasText = e.target.value !== '';
  }

  // 36. Task - Toggle functionality using ngClass
  colorMode: string = 'lightMode';

  toggleMode() {
    if (this.colorMode === 'lightMode') {
      this.colorMode = 'darkMode';
    } else {
      this.colorMode = 'lightMode';
    }
  }

  // 38. Task [ngStyle] - Changing the color of input field
  nm: string = '';
  em: string = '';
  emailIsValid: boolean = false;
  formSubmitted: boolean = false;

  checkEmailValidation(em: string): void {
    if (em.includes('@') && em.includes('.com')) {
      this.emailIsValid = true;
    } else {
      this.emailIsValid = false;
    }
  }
  showMessage() {
    if (this.nm && this.emailIsValid) {
      this.formSubmitted = true;
    } else {
      this.formSubmitted = false;
    }
  }
}
