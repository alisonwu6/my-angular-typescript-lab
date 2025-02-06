import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { TodoListComponent } from './features/todos/todo-list/todo-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoListComponent },
];
