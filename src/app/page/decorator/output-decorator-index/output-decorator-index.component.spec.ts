import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecoratorIndexComponent } from './output-decorator-index.component';

describe('OutputDecoratorIndexComponent', () => {
  let component: OutputDecoratorIndexComponent;
  let fixture: ComponentFixture<OutputDecoratorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputDecoratorIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputDecoratorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
