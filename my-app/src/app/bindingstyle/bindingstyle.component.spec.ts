import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingstyleComponent } from './bindingstyle.component';

describe('BindingstyleComponent', () => {
  let component: BindingstyleComponent;
  let fixture: ComponentFixture<BindingstyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingstyleComponent]
    });
    fixture = TestBed.createComponent(BindingstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
