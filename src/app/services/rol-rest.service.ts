import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RolRestService {
  readonly ApiUrl = "http://localhost:3000/rol";

  constructor(private http: HttpClient) { }

  public get(): any {
    return this.http.get<any>(this.ApiUrl);
  }
}
