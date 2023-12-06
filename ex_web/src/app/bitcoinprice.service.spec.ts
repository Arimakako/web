import { TestBed } from '@angular/core/testing';

import { BitcoinpriceService } from './bitcoinprice.service';

describe('BitcoinpriceService', () => {
  let service: BitcoinpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
