import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecoratorChildComponent } from './output-decorator-child.component';

describe('OutputDecoratorChildComponent', () => {
  let component: OutputDecoratorChildComponent;
  let fixture: ComponentFixture<OutputDecoratorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputDecoratorChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputDecoratorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
