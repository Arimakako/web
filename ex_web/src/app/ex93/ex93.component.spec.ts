import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex93Component } from './ex93.component';

describe('Ex93Component', () => {
  let component: Ex93Component;
  let fixture: ComponentFixture<Ex93Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex93Component]
    });
    fixture = TestBed.createComponent(Ex93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
