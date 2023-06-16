import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoRestService {
  readonly ApiUrl = "http://localhost:3000/empleado";

  constructor(private http: HttpClient) { }

  public getEmpleado(): any {
    return this.http.get<any>(this.ApiUrl);
  }

  public getEmpleadoId(id: any): any {
    return this.http.get<any>(this.ApiUrl + '/' + id);
  }
  public postEmpleado(data: any): any {
    return this.http.post<any>(this.ApiUrl, data);
  }
  public patchEmpleado(id: any, data: any): any {
    console.log(data);
    console.log(id);
    return this.http.patch(this.ApiUrl + '/' + id, data).subscribe((example: any) => {
      console.log(example);
    });
  }
  public deleteEmpleado(id: any): any {
    console.log(this.ApiUrl + '/' + id);
    return this.http.delete(this.ApiUrl + '/' + id);
  }

  public getRoles() {
    return this.http.get<any>("http://localhost:3000/rol");
  }

}
