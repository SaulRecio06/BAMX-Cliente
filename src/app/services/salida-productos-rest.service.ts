import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalidaProductosRestService {

  constructor(private http: HttpClient) { }
  readonly ApiUrl = "http://localhost:3000/salidas";



  public getSalidaProductos(): any {
    return this.http.get<any>(this.ApiUrl);
  }

  public getSalidaProductoId(id: any): any {
    return this.http.get<any>(this.ApiUrl + '/' + id);
  }


  public postSalidaProducto(data: any): any {
    return this.http.post<any>(this.ApiUrl, data);
  }

  public patchSalidaProducto(id: any, data: any): any {
    console.log(data);
    console.log(id);
    return this.http.patch(this.ApiUrl + '/' + id, data).subscribe((example: any) => {
      console.log(example);
    });
  }

  public deleteSalidaProducto(id: any): any {
    console.log(this.ApiUrl + '/' + id);
    return this.http.delete(this.ApiUrl + '/' + id);
  }
}
