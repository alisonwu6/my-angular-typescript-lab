import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = 'Click Me'; // Default button text
  @Input() icon: string | null = null; // Optional Material icon
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary'; // Button color
  @Input() disabled = false; // Disable state
  @Input() type: 'button' | 'submit' = 'button'; // Button type
  @Input() variant: 'flat' | 'raised' | 'stroked' = 'raised'; // Button style
}
