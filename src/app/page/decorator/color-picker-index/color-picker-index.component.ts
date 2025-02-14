import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-color-picker-index',
  imports: [],
  templateUrl: './color-picker-index.component.html',
  styleUrl: './color-picker-index.component.scss',
})
export class ColorPickerIndexComponent implements AfterViewInit {
  @ViewChild('colorInput') colorInput!: ElementRef;
  @HostBinding('style.backgroundColor') selectedColor!: string;
  @HostListener('input', ['$event.target.value']) onColorChange(color: string) {
    this.selectedColor = color;
  }

  ngAfterViewInit(): void {
    // TODOS ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    this.selectedColor = this.colorInput.nativeElement.value;
  }
}
