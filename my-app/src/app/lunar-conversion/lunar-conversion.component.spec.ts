import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunarConversionComponent } from './lunar-conversion.component';

describe('LunarConversionComponent', () => {
  let component: LunarConversionComponent;
  let fixture: ComponentFixture<LunarConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunarConversionComponent]
    });
    fixture = TestBed.createComponent(LunarConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
