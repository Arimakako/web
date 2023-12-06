import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproduct6Component } from './listproduct6.component';

describe('Listproduct6Component', () => {
  let component: Listproduct6Component;
  let fixture: ComponentFixture<Listproduct6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listproduct6Component]
    });
    fixture = TestBed.createComponent(Listproduct6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
