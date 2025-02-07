import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCalculationComponent } from './cart-calculation.component';

describe('CartCalculationComponent', () => {
  let component: CartCalculationComponent;
  let fixture: ComponentFixture<CartCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
