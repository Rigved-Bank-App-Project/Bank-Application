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
    // get account details
    public getAccount(id: number) : Observable<any> {
      let url = `${this.baseURL}/${id}`;
      return this._http.get(url);
}
// update transaction based on cutomer id
public updateTransaction(id: number): Observable<any> {
  let url = `${this.baseURL}/${id}/tran`;
  return this._http.put(url, id);
}
 // update customer password.
 public updatePassword(id: number, pass : string) : Observable<any> {
  let url = `${this.baseURL}/${id}/password/${pass}`;
  return this._http.put(url, pass);
}

}
