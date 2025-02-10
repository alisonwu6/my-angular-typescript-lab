import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorChildComponent } from './decorator-child.component';

describe('DecoratorChildComponent', () => {
  let component: DecoratorChildComponent;
  let fixture: ComponentFixture<DecoratorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
