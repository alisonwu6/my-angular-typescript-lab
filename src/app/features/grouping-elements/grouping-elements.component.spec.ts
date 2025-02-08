import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingElementsComponent } from './grouping-elements.component';

describe('GroupingElementsComponent', () => {
  let component: GroupingElementsComponent;
  let fixture: ComponentFixture<GroupingElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupingElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupingElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
