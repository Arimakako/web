import { Injectable } from '@angular/core';
import  {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,map,retry } from 'rxjs/operators';
import { Fashion, Ifashion } from './fashion';
@Injectable({
  providedIn: 'root',
})
export class FashionApiService {
  constructor(private _http: HttpClient) {}
  getFashions(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/fashions', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Fashion>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
  getFashion(_id: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/fashions/' + _id, requestOptions).pipe(
      map((res) => JSON.parse(res) as Ifashion),
      retry(3),
      catchError(this.handleError)
    );
  }
  postFashion(aFashion:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.post<any>("/fashions",JSON.stringify(aFashion),requestOptions).pipe(
map(res=>JSON.parse(res) as Fashion),
retry(3),
catchError(this.handleError))
}
}
