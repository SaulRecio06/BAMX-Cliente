import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradaProductosRestService {


  readonly ApiUrl = "http://localhost:3000/producto";
  constructor(private http: HttpClient) { }

  public getEntradaProductos(): any {
    return this.http.get<any>(this.ApiUrl);
  }


  public getEntradaProductosId(id: any): any {
    return this.http.get<any>(this.ApiUrl + '/' + id);
  }


  public postEntradaProductos(data: any): any {
    return this.http.post<any>(this.ApiUrl, data);
  }

  public patchEntradaProductos(id: any, data: any): any {
    console.log(data);
    console.log(id);
    return this.http.patch(this.ApiUrl + '/' + id, data).subscribe((example: any) => {
      console.log(example);
    });
  }

  public deleteEntradaProductos(id: any): any {
    console.log(this.ApiUrl + '/' + id);
    return this.http.delete(this.ApiUrl + '/' + id);
  }


}
