import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildIndexComponent } from './view-child-index.component';

describe('ViewChildIndexComponent', () => {
  let component: ViewChildIndexComponent;
  let fixture: ComponentFixture<ViewChildIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
