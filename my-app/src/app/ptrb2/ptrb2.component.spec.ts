import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptrb2Component } from './ptrb2.component';

describe('Ptrb2Component', () => {
  let component: Ptrb2Component;
  let fixture: ComponentFixture<Ptrb2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ptrb2Component]
    });
    fixture = TestBed.createComponent(Ptrb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
