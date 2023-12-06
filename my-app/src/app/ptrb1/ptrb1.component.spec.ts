import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptrb1Component } from './ptrb1.component';

describe('Ptrb1Component', () => {
  let component: Ptrb1Component;
  let fixture: ComponentFixture<Ptrb1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ptrb1Component]
    });
    fixture = TestBed.createComponent(Ptrb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
