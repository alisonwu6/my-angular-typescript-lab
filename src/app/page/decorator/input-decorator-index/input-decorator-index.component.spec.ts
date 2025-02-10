import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecoratorIndexComponent } from './input-decorator-index.component';

describe('InputDecoratorIndexComponent', () => {
  let component: InputDecoratorIndexComponent;
  let fixture: ComponentFixture<InputDecoratorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDecoratorIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDecoratorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
