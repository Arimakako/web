import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproduct7Component } from './listproduct7.component';

describe('Listproduct7Component', () => {
  let component: Listproduct7Component;
  let fixture: ComponentFixture<Listproduct7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listproduct7Component]
    });
    fixture = TestBed.createComponent(Listproduct7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
