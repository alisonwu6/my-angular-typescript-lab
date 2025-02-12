import { Component } from '@angular/core';
import { ContainChildChildComponent } from '../contain-child-child/contain-child-child.component';

@Component({
  selector: 'app-contain-child-index',
  imports: [ContainChildChildComponent],
  templateUrl: './contain-child-index.component.html',
  styleUrl: './contain-child-index.component.scss'
})
export class ContainChildIndexComponent {
  
}
