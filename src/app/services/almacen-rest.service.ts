import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlmacenRestService {

  constructor(private http: HttpClient) { }
  readonly ApiUrl = "http://localhost:3000/almacen";


  public getAlmacen(): any {
    return this.http.get<any>(this.ApiUrl);
  }


  public postAlmacen(data: any): any {
    return this.http.post<any>(this.ApiUrl, data);
  }

  public putAlmacen(data: any, id: string): any {
    this.http.put(this.ApiUrl + '/' + id, data);
  }



}
