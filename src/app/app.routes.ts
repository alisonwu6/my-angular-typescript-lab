import { Routes } from '@angular/router';
import { FundamentalComponent } from './features/fundamental/fundamental.component';
import { BindingComponent } from './features/fundamental/binding/binding.component';
import { CartCalculationComponent } from './features/fundamental/cart-calculation/cart-calculation.component';
import { LoginComponent } from './features/auth/login/login.component';
import { TodoListComponent } from './features/todos/todo-list/todo-list.component';
import { DirectivesComponent } from './features/directives/directives.component';
import { GroupingElementsComponent } from './features/grouping-elements/grouping-elements.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { LifecycleComponent } from './page/lifecycle/lifecycle.component';
import { DecoratorIndexComponent } from './page/decorator/decorator-index/decorator-index.component';
import { InputDecoratorIndexComponent } from './page/decorator/input-decorator-index/input-decorator-index.component';
import { OutputDecoratorIndexComponent } from './page/decorator/output-decorator-index/output-decorator-index.component';
import { InputAndOutputDecoratorIndexComponent } from './page/decorator/input-and-output-decorator-index/input-and-output-decorator-index.component';
import { ViewChildIndexComponent } from './page/decorator/view-child-index/view-child-index.component';
import { ContainChildIndexComponent } from './page/decorator/contain-child-index/contain-child-index.component';
import { HostBindingIndexComponent } from './page/decorator/host-binding-index/host-binding-index.component';
import { ColorPickerIndexComponent } from './page/decorator/color-picker-index/color-picker-index.component';
import { PipeComponent } from './features/pipe/pipe.component';
import { PageNavigationComponent } from './features/page-navigation/page-navigation.component';
import { PoundToKgConverterComponent } from './features/pound-to-kg-converter/pound-to-kg-converter.component';
import { JsonPipeComponent } from './features/json-pipe/json-pipe.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ParentComponent } from './page/parent/parent.component';
import { Child1Component } from './page/parent/child1/child1.component';
import { Child2Component } from './page/parent/child2/child2.component';
import { EmployeeComponent } from './page/employee/employee.component';

export const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'fundamental', component: FundamentalComponent },
  { path: 'template-driven-form', component: BindingComponent},
  { path: 'cart-calculation', component: CartCalculationComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'grouping-elements', component: GroupingElementsComponent},
  { path: 'lifecycle', component: LifecycleComponent},
  { path: 'decorator', component: DecoratorIndexComponent},
  { path: 'input-decorator', component: InputDecoratorIndexComponent},
  { path: 'output-decorator', component: OutputDecoratorIndexComponent},
  { path: 'input-output-decorator', component: InputAndOutputDecoratorIndexComponent},
  { path: 'view-child', component: ViewChildIndexComponent},
  { path: 'contain-child', component: ContainChildIndexComponent},
  { path: 'host-binding', component: HostBindingIndexComponent},
  { path: 'color-pick', component: ColorPickerIndexComponent},
  { path: 'pipe', component: PipeComponent},
  { path: 'pipe-page-navigation', component: PageNavigationComponent},
  { path: 'pound-to-kg-converter', component: PoundToKgConverterComponent},
  { path: 'json-pipe', component: JsonPipeComponent},
  { 
    path: 'nesting-route',
    component: ParentComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'employee/:id/:name', component: EmployeeComponent },
  { path: '',redirectTo: '/login', pathMatch: 'full' },  // redirectTo & pathMatch should be used together
  { path: '**', component: NotFoundComponent },
];
