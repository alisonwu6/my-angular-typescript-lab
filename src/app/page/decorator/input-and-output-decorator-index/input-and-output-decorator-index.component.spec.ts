import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndOutputDecoratorIndexComponent } from './input-and-output-decorator-index.component';

describe('InputAndOutputDecoratorIndexComponent', () => {
  let component: InputAndOutputDecoratorIndexComponent;
  let fixture: ComponentFixture<InputAndOutputDecoratorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAndOutputDecoratorIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAndOutputDecoratorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
