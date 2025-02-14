import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerIndexComponent } from './color-picker-index.component';

describe('ColorPickerIndexComponent', () => {
  let component: ColorPickerIndexComponent;
  let fixture: ComponentFixture<ColorPickerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPickerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
