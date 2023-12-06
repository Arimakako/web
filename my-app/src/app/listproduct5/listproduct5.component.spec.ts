import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproduct5Component } from './listproduct5.component';

describe('Listproduct5Component', () => {
  let component: Listproduct5Component;
  let fixture: ComponentFixture<Listproduct5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listproduct5Component]
    });
    fixture = TestBed.createComponent(Listproduct5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
