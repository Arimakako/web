import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'; // Don't forget to import HttpClient
import { Observable, catchError,throwError,retry } from 'rxjs';
import { IProduct } from './product'; // Update the path accordingly

@Injectable({
  providedIn: 'root'
})
export class ProducthttpService {

  private _url: string = "/assets/data/product.json";

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url);
  }
  getProductsHandleError()
  {
    return this._http.get<IProduct[]>(this._url).pipe(retry(3),catchError(this.handleError))
  }
handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
}