import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  newTodoTitle: string = '';

  @Output() addTodo = new EventEmitter<Todo>();

  onAddTodo(): void {
    const newTodo: Todo = {
      id: Date.now(), // 假設使用當前時間戳作為 id
      title: this.newTodoTitle,
      completed: false,
    };
    this.addTodo.emit(newTodo);
    this.newTodoTitle = ''; // 清空表單
  }
}
