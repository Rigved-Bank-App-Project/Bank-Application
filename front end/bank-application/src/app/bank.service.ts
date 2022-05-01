import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  baseURL = "http://localhost:3001/customer"

  constructor(private _http:HttpClient) { }

  //login
  public login(id:number, password : string): Observable <any>{
    let url = `${this.baseURL}/${id}/${password}`;
    return this._http.get(url);
  }
}
