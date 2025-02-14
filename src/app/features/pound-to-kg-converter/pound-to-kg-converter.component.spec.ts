import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoundToKgConverterComponent } from './pound-to-kg-converter.component';

describe('PoundToKgConverterComponent', () => {
  let component: PoundToKgConverterComponent;
  let fixture: ComponentFixture<PoundToKgConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoundToKgConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoundToKgConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
