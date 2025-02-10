import { Component, OnInit } from '@angular/core';
import { DestroyChildComponent } from '../destroy-child/destroy-child.component';

@Component({
  selector: 'app-destroy-index',
  imports: [DestroyChildComponent],
  templateUrl: './destroy-index.component.html',
  styleUrl: './destroy-index.component.scss',
})
export class DestroyIndexComponent implements OnInit {
  displayComponent: boolean = true;

  ngOnInit(): void {
    console.log('App Component: OnInit');
  }

  toggle() {
    this.displayComponent = !this.displayComponent;
  }
}
