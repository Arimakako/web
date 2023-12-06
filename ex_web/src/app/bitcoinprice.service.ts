import { Injectable } from '@angular/core';
import { BitcoinApiResponse } from './bitcoinprice';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError,Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BitcoinpriceService {

  private _url:string='/v1/bpi/currentprice.json'
  constructor(private _http: HttpClient) { }
  getExchangeRateData():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>(this._url,requestOptions).pipe(
    map(res=>JSON.parse(res) as BitcoinApiResponse),
    retry(3),
    catchError(this.handleError))
    } 
    handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
    }
    }