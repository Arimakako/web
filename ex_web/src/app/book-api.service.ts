import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ibook } from './books';
@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private _http: HttpClient) {}

  getBooks(): Observable<Array<Ibook>> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http.get<any>('/books', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Ibook>),
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
  getBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/books/' + bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Ibook),
      retry(3),
      catchError(this.handleError)
    );
  }
  postBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'ContentType',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/books', JSON.stringify(aBook), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Ibook>),
        retry(3),
        catchError(this.handleError)
      );
  }
  putBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'ContentType',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/books', JSON.stringify(aBook), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Ibook>),
        retry(3),
        catchError(this.handleError)
      );
  }
  deleteBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'ContentType',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.delete<any>('/books/' + bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Ibook>),
      retry(3),
      catchError(this.handleError)
    );
  }
}

