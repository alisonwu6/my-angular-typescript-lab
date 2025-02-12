import { Component } from '@angular/core';
import { HostBindingChildDirective } from '../host-binding-child.directive';

@Component({
  selector: 'app-host-binding-index',
  imports: [HostBindingChildDirective],
  templateUrl: './host-binding-index.component.html',
  styleUrl: './host-binding-index.component.scss',
})
export class HostBindingIndexComponent {}
