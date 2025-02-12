import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainChildChildComponent } from './contain-child-child.component';

describe('ContainChildChildComponent', () => {
  let component: ContainChildChildComponent;
  let fixture: ComponentFixture<ContainChildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainChildChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
