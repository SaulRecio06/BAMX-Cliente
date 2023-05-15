import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosRestService {


  readonly ApiUrl = "http://localhost:3000/producto";
  constructor(private http: HttpClient) { }

  public get(): any {
    return this.http.get<any>(this.ApiUrl);
  }
}
