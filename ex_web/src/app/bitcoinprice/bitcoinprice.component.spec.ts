import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinpriceComponent } from './bitcoinprice.component';

describe('BitcoinpriceComponent', () => {
  let component: BitcoinpriceComponent;
  let fixture: ComponentFixture<BitcoinpriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitcoinpriceComponent]
    });
    fixture = TestBed.createComponent(BitcoinpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
