import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostBindingChild]',
})
export class HostBindingChildDirective implements OnInit {
  // It is mostly used for styling directives or attribute manipulation. Third party integrations and animating the directives.
  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.color') textColor?: string;

  ngOnInit(): void {
    this.bgColor = '#f2aa4cff';
    this.textColor = '#101820ff';
  }
}
