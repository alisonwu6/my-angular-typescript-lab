import { Routes } from '@angular/router';
import { FundamentalComponent } from './features/fundamental/fundamental.component';
import { BindingComponent } from './features/fundamental/binding/binding.component';
import { CartCalculationComponent } from './features/fundamental/cart-calculation/cart-calculation.component';
import { LoginComponent } from './features/auth/login/login.component';
import { TodoListComponent } from './features/todos/todo-list/todo-list.component';
import { DirectivesComponent } from './features/directives/directives.component';

export const routes: Routes = [
  { path: 'fundamental', component: FundamentalComponent },
  { path: 'template-driven-form', component: BindingComponent},
  { path: 'cart-calculation', component: CartCalculationComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoListComponent },
];
