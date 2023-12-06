import { ICustomerType } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'; // Don't forget to import HttpClient
import { Observable, catchError,throwError,retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {

  private _url: string = "/assets/data/customer.json";

  constructor(private _http: HttpClient) { }

  getCustomerTypes(): Observable<ICustomerType[]> {
    return this._http.get<ICustomerType[]>(this._url);
  }
  getCustomersHandleError()
  {
    return this._http.get<ICustomerType[]>(this._url).pipe(retry(3),catchError(this.handleError))
  }
handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
}
