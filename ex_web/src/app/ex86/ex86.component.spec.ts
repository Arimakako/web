import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex86Component } from './ex86.component';

describe('Ex86Component', () => {
  let component: Ex86Component;
  let fixture: ComponentFixture<Ex86Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex86Component]
    });
    fixture = TestBed.createComponent(Ex86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
