import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTwoWayComponent } from './binding-two-way.component';

describe('BindingTwoWayComponent', () => {
  let component: BindingTwoWayComponent;
  let fixture: ComponentFixture<BindingTwoWayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingTwoWayComponent]
    });
    fixture = TestBed.createComponent(BindingTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
