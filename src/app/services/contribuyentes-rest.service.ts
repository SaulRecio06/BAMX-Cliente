import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContribuyentesRestService {
  readonly ApiUrl = "http://localhost:3000/contribuyentes";

  constructor(private http: HttpClient) { }

  public getContribuyentes(): any {
    return this.http.get<any>(this.ApiUrl);
  }

  public getContribuyenteId(id: any): any {
    return this.http.get<any>(this.ApiUrl + '/' + id);
  }


  public postContribuyente(data: any): any {
    return this.http.post<any>(this.ApiUrl, data);
  }

  public patchContribuyente(id: any, data: any): any {
    console.log(data);
    console.log(id);
    return this.http.patch(this.ApiUrl + '/' + id, data).subscribe((example: any) => {
      console.log(example);
    });
  }

  public deleteContribuyente(id: any): any {
    console.log(this.ApiUrl + '/' + id);
    return this.http.delete(this.ApiUrl + '/' + id);
  }




}
