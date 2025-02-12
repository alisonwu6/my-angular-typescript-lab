import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBindingIndexComponent } from './host-binding-index.component';

describe('HostBindingIndexComponent', () => {
  let component: HostBindingIndexComponent;
  let fixture: ComponentFixture<HostBindingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostBindingIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostBindingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
