import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingclassComponent } from './bindingclass.component';

describe('BindingclassComponent', () => {
  let component: BindingclassComponent;
  let fixture: ComponentFixture<BindingclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingclassComponent]
    });
    fixture = TestBed.createComponent(BindingclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
