import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamental',
  imports: [],
  templateUrl: './fundamental.component.html',
  styleUrl: './fundamental.component.scss',
})
export class FundamentalComponent {
  // Property Binding & Interpolation
  inputValue: string = 'Hello';
  isDisabled: boolean = false;

  display(msg: string) {
    alert(msg);
  }

  // Counter Example
  count: number = 0;
  counter(type: string) {
    type === 'increment' ? this.count++ : this.count--;
  }

  // other mouse related event
  dblIncrement() {
    this.count++;
  }

  // $event
  onKeyPress(e: any) {
    e.preventDefault();
    console.log(e);
  }

  onClick(event: MouseEvent) {
    event.preventDefault(); // 阻止默認的點擊行為，常用於防止提交表單、取消鏈接跳轉或阻止頁面刷新等操作

    console.log('Button clicked, but default action prevented!');
  }

  isShift() {
    console.log('Shift + Y is pressed');
  }

  isShift_(e: any) {
    if (e.shiftKey && e.key === 'Y') {
      console.log('Shift_ + Y is pressed', e);
    }
  }
  
  counterNum: number = 0;
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.counterNum++;
    } else if (event.key === 'ArrowDown') {
      this.counterNum--;
    }
  }
}
