import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-decorator-child',
  imports: [NgFor],
  templateUrl: './input-decorator-child.component.html',
  styleUrl: './input-decorator-child.component.scss',
})
export class InputDecoratorChildComponent {
  @Input() showData: { id: number; name: string }[] = [];
}
