import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex89Component } from './ex89.component';

describe('Ex89Component', () => {
  let component: Ex89Component;
  let fixture: ComponentFixture<Ex89Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex89Component]
    });
    fixture = TestBed.createComponent(Ex89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
