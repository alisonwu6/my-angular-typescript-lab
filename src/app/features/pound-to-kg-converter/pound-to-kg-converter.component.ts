import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pound-to-kg-converter',
  imports: [FormsModule, CommonModule],
  templateUrl: './pound-to-kg-converter.component.html',
  styleUrl: './pound-to-kg-converter.component.scss',
})
export class PoundToKgConverterComponent {
  weightInPounds: number = 0;
  weightInKilograms: number = 0;

  convertWeight() {
    this.weightInKilograms = this.weightInPounds * 0.453592;
  }
}
