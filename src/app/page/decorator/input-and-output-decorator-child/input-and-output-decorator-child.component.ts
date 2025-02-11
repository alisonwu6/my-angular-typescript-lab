import { NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-input-and-output-decorator-child',
  imports: [NgFor],
  templateUrl: './input-and-output-decorator-child.component.html',
  styleUrl: './input-and-output-decorator-child.component.scss',
})
export class InputAndOutputDecoratorChildComponent
  implements OnInit, OnDestroy
{
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index: number) {
    this.itemDeleted.emit(index);
  }

  ngOnInit(): void {
    // console.log('child -> ngOnInit');
  }
  ngOnDestroy(): void {
    // console.log('child -> ngOnDestroy');
  }
}
