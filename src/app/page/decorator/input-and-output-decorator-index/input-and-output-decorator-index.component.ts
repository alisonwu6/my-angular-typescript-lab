import { Component, OnInit } from '@angular/core';
import { InputAndOutputDecoratorChildComponent } from '../input-and-output-decorator-child/input-and-output-decorator-child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-and-output-decorator-index',
  imports: [InputAndOutputDecoratorChildComponent, FormsModule, CommonModule],
  templateUrl: './input-and-output-decorator-index.component.html',
  styleUrl: './input-and-output-decorator-index.component.scss',
})
export class InputAndOutputDecoratorIndexComponent implements OnInit {
  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    const newItem = `Item ${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem);
  }
  deleteItem(index: number) {
    if (index >= 0 && index < this.itemsArr.length) {
      this.itemsArr.splice(index, 1);
    }
  }
  ngOnInit(): void {
    // console.log('index -> ngOnInit()');
  }
}
