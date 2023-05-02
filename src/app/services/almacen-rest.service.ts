import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlmacenRestService {

  constructor(private http: HttpClient) { }
  readonly ApiUrl = "http://localhost:3000/almacen";


  public get(): any {
    return this.http.get<any>(this.ApiUrl);
  }
}
