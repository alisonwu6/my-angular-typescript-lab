import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndOutputDecoratorChildComponent } from './input-and-output-decorator-child.component';

describe('InputAndOutputDecoratorChildComponent', () => {
  let component: InputAndOutputDecoratorChildComponent;
  let fixture: ComponentFixture<InputAndOutputDecoratorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAndOutputDecoratorChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAndOutputDecoratorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
