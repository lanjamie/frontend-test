import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookResponse } from './dm/bookresponse';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  
  getBook(query:string): Observable<BookResponse>{
    console.log('query: ' + query + ': from service!')
    return this.http.get<BookResponse>(`${this.apiUrl}?q=${query}&maxResults=20`);
  }

  constructor(private http: HttpClient) { }

}
