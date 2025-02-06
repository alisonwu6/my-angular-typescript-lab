import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, TodoFormComponent, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  onToggle(todo: Todo): void {
    this.todoService.toggleTodo(todo.id);
  }

  onDelete(todo: Todo): void {
    this.todoService.deleteTodo(todo.id);
  }

  // 新增方法來處理新增待辦事項
  onAddTodo(newTodo: Todo): void {
    this.todoService.addTodo(newTodo);
  }
}
