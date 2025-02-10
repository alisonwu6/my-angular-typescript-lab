import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-after-contain-init-child',
  imports: [],
  templateUrl: './after-contain-init-child.component.html',
  styleUrl: './after-contain-init-child.component.scss',
})
export class AfterContainInitChildComponent implements AfterContentInit {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    // console.log('child -> ngAfterContentInit() was invoked...');
    // console.log('child -> ngAfterContentInit() wrapper', this.wrapper);
    // console.log('child -> ngAfterContentInit() contentWrapper', this.content);
  }

  // Processing Steps
  // 1) So first the ng do check gets invoked, which is from the parent component.
  // 2) Then the ng after content in it gets invoked as the division content gets projected.
  // 3) And next is the wrapper division which says undefined because the component has not initialized the
  //    content at that point, and straight after it we have the content wrapper which shows the native element as division.
  // 4) This is where the content gets initialized and the ng after content init gets invoked for the last time.

  // So this is how the ng after content init hook gets triggered upon component initialization.
}
