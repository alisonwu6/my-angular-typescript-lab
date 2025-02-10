import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-test-index',
  imports: [],
  templateUrl: './test-index.component.html',
  styleUrl: './test-index.component.scss',
})
export class TestIndexComponent implements AfterViewInit {
  value: string = 'Initial value';
  stopInterval: any;

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit(): checking phase...');
    // this.stopInterval = setInterval(() => {
      // this.value = 'updated';
      // console.log('ngAfterViewInit(): view updated...');
      // clearInterval(this.stopInterval);
    // }, 2000);
  }
}
