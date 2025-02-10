import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-destroy-child',
  imports: [],
  templateUrl: './destroy-child.component.html',
  styleUrl: './destroy-child.component.scss',
})
export class DestroyChildComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('child -> ngOnInit()');
  }
  ngOnDestroy(): void {
    console.log('child -> ngOnDestroy()');
  }
}
