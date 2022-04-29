import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  baseURL = "http://localhost:3001/bank"

  constructor(private http:HttpClient) { }


  constructor(private http:HttpClient) { }

  //login
  public login(id:number, password : string): Observable <any>{
    let url = `${this.baseURL}/${id}/${password}`;
    return this.http.get(url);
  }
}
