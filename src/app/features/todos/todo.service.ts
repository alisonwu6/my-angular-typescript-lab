import { Injectable } from '@angular/core';
import {
  BehaviorSubject, //  Observer && Observable：是一個能夠持有並發送當前值的可觀察對象，當新訂閱者訂閱時會立即獲得最新值
  Observable, // 異步事件的數據流，允許其他組件或服務訂閱 todosSubject ，並對該數據流作出反應。是一個表示未來異步數據流的對象，可以被訂閱並且進行監聽。
} from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

  constructor() {
    // 初始的 todos 列表
    const initialTodos: Todo[] = [
      { id: 1, title: 'Learn Angular', completed: false },
      { id: 2, title: 'Learn RxJS', completed: false },
    ];
    this.todosSubject.next(initialTodos);
  }

  addTodo(newTodo: Todo): void {
    const currentTodos = this.todosSubject.getValue();
    this.todosSubject.next([...currentTodos, newTodo]);
  }

  toggleTodo(id: number): void {
    const currentTodos = this.todosSubject.getValue();
    const updatedTodos = currentTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(updatedTodos);
  }

  deleteTodo(id: number): void {
    const currentTodos = this.todosSubject.getValue();
    const updatedTodos = currentTodos.filter((todo) => todo.id !== id);
    this.todosSubject.next(updatedTodos);
  }
}
