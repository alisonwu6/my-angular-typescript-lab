import { Routes } from '@angular/router';
import { FundamentalComponent } from './features/fundamental/fundamental.component';
import { BindingComponent } from './features/fundamental/binding/binding.component';
import { CartCalculationComponent } from './features/fundamental/cart-calculation/cart-calculation.component';
import { LoginComponent } from './features/auth/login/login.component';
import { TodoListComponent } from './features/todos/todo-list/todo-list.component';
import { DirectivesComponent } from './features/directives/directives.component';
import { GroupingElementsComponent } from './features/grouping-elements/grouping-elements.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'fundamental', component: FundamentalComponent },
  { path: 'template-driven-form', component: BindingComponent},
  { path: 'cart-calculation', component: CartCalculationComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'grouping-elements', component: GroupingElementsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoListComponent },
];
