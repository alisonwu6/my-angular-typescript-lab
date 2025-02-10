import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorIndexComponent } from './decorator-index.component';

describe('DecoratorIndexComponent', () => {
  let component: DecoratorIndexComponent;
  let fixture: ComponentFixture<DecoratorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
