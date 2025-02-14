import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  imports: [CommonModule],
  templateUrl: './json-pipe.component.html',
  styleUrl: './json-pipe.component.scss'
})
export class JsonPipeComponent {
  // 89. Understanding JSON Pipe
  userDetails = {
    name: 'User',
    email: 'user@example.com',
    address: {
      street: '23 Main St',
      city: 'las vegas',
      state: 'nevada',
      zip: 88901,
    },
  };

  // 90. Displaying Table Data To JSON string

  showJson: boolean = false;

  students = [
    { name: 'user a', age: 21, gender: 'female', major: 'computer science' },
    { name: 'user b', age: 23, gender: 'male', major: 'electrical engineering' },
    { name: 'user c', age: 20, gender: 'male', major: 'sociology' },
    { name: 'user d', age: 25, gender: 'female', major: 'biomedical science' },
  ];

  toggleJson() {
    this.showJson = !this.showJson;
  }
}
