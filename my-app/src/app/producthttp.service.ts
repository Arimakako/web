import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProducthttpService {


  private _url: string = "/assets/dataset/products.Json";
  constructor(private _http:HttpClient) { }
  getProduct():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._url);
  }
}
