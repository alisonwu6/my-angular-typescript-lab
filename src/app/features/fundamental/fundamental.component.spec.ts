import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalComponent } from './fundamental.component';

describe('FundamentalComponent', () => {
  let component: FundamentalComponent;
  let fixture: ComponentFixture<FundamentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
