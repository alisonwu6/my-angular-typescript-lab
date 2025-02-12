import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-contain-child-child',
  imports: [CommonModule],
  templateUrl: './contain-child-child.component.html',
  styleUrl: './contain-child-child.component.scss',
})
export class ContainChildChildComponent implements AfterContentInit {
  // to manipulate the DOM using the ContentChild - make use of the ngAfterContentInit() lifecycle hook.
  @ContentChild('showPara') paraRef?: ElementRef;

  ngAfterContentInit(): void {
    const content = this.paraRef?.nativeElement;
    content.style.fontStyle = 'Italic';
    content.style.fontWeight = 350;
  }
}
