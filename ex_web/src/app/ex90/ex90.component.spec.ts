import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex90Component } from './ex90.component';

describe('Ex90Component', () => {
  let component: Ex90Component;
  let fixture: ComponentFixture<Ex90Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex90Component]
    });
    fixture = TestBed.createComponent(Ex90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
