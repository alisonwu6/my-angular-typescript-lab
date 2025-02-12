import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainChildIndexComponent } from './contain-child-index.component';

describe('ContainChildIndexComponent', () => {
  let component: ContainChildIndexComponent;
  let fixture: ComponentFixture<ContainChildIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainChildIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainChildIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
