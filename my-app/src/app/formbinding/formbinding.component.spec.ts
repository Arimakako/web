import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbindingComponent } from './formbinding.component';

describe('FormbindingComponent', () => {
  let component: FormbindingComponent;
  let fixture: ComponentFixture<FormbindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormbindingComponent]
    });
    fixture = TestBed.createComponent(FormbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
