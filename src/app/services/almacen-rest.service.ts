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

  public getAlmacenId(id: any): any {
    return this.http.get<any>(this.ApiUrl + '/' + id);
  }


  public postAlmacen(data: any): any {
    return this.http.post<any>(this.ApiUrl, data);
  }

  public patchAlmacen(id: any, data: any): any {
    console.log(data);
    console.log(id);
    return this.http.patch(this.ApiUrl + '/' + id, data).subscribe((example: any) => {
      console.log(example);
    });
  }

  public deleteAlmacen(id: any): any {
    console.log(this.ApiUrl + '/' + id);
    return this.http.delete(this.ApiUrl + '/' + id);
  }




}
