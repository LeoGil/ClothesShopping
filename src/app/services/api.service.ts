import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Product } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private HttpCliente: HttpClient
  ) { }

  get<T>(url: string, options: Options): Observable<T> {
    return this.HttpCliente.get<T>(url, options) as Observable<T>;
  }

  post<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.HttpCliente.post<T>(url, body, options) as Observable<T>;
  }

  put<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.HttpCliente.put<T>(url, body, options) as Observable<T>;
  }

  delete<T>(url: string, options: Options): Observable<T> {
    return this.HttpCliente.delete<T>(url, options) as Observable<T>;
  }

}
