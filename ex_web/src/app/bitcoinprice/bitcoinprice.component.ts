import { Component } from '@angular/core';
import { BitcoinpriceService } from '../bitcoinprice.service';

@Component({
  selector: 'app-bitcoinprice',
  templateUrl: './bitcoinprice.component.html',
  styleUrls: ['./bitcoinprice.component.css']
})
export class BitcoinpriceComponent{
  data: any;
  errMessage: string = '';

  constructor(private _service: BitcoinpriceService) {
    this.getExchangeRateData();
  }

  getExchangeRateData(): void {
    this._service.getExchangeRateData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }
}


