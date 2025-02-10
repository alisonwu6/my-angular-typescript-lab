import { Component } from '@angular/core';
import { InputDecoratorChildComponent } from '../input-decorator-child/input-decorator-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-decorator-index',
  imports: [InputDecoratorChildComponent, CommonModule],
  templateUrl: './input-decorator-index.component.html',
  styleUrl: './input-decorator-index.component.scss'
})
export class InputDecoratorIndexComponent {
  courses: { id: number; name: string }[] = [
    { id: 1, name: 'JavaScript - Marathon Interview Questions Series' },
    { id: 2, name: 'Mastering React With Interview Questions, eStore Project' },
    { id: 3, name: 'Mastering TypeScript With Marathon Interview Questions' },
    { id: 4, name: 'Mastering HTML,CSS,Sass,Bootstrap + Interview Questions' },
  ];
}
