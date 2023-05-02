import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContribuyentesRestService {
  readonly ApiUrl = "http://localhost:3000/contribuyentes";

  constructor(private http: HttpClient) { }
  public get(): any {
    return this.http.get<any>(this.ApiUrl);
  }
}
