import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostBindingChild]',
})
export class HostBindingChildDirective implements OnInit {
  // It is mostly used for styling directives or attribute manipulation. Third party integrations and animating the directives.
  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.color') textColor?: string;

  colorArray = ['seagreen', 'yellow', 'blue', 'red'];

  private setRandomColor() {
    const colorPick = Math.floor(Math.random() * this.colorArray.length);

    if (this.bgColor !== this.colorArray[colorPick]) {
      this.bgColor = this.colorArray[colorPick];
      this.textColor = '#ccc';
    } else {
      this.setRandomColor();
    }
  }

  // any dom event like click, focus, keyup, keydown, blur etc.
  @HostListener('click') onToggle() {
    // if (this.bgColor === '#f2aa4cff') {
    //   this.bgColor = '#101820ff';
    //   this.textColor = '#f2aa4cff';
    // } else {
    //   this.bgColor = '#f2aa4cff';
    //   this.textColor = '#101820ff';
    // }

    this.setRandomColor();
  }

  ngOnInit(): void {
    this.bgColor = '#f2aa4cff';
    this.textColor = '#101820ff';
  }
}
