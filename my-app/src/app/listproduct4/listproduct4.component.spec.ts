import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproduct4Component } from './listproduct4.component';

describe('Listproduct4Component', () => {
  let component: Listproduct4Component;
  let fixture: ComponentFixture<Listproduct4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listproduct4Component]
    });
    fixture = TestBed.createComponent(Listproduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
