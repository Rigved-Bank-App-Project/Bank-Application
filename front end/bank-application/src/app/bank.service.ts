import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  baseURL = "http://localhost:3001/customer"
  transURL = "http://localhost:3001/tran";
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
// // update transaction based on cutomer id
// public updateTransaction(id: number): Observable<any> {
//   let url = `${this.baseURL}/${id}/tran`;
//   return this._http.put(url, id);
// }
 // update customer password.
 public updatePassword(id: number, pass : string) : Observable<any> {
  let url = `${this.baseURL}/${id}/password/${pass}`;
  return this._http.put(url, pass);
}
//store
public storeTransaction(id: number, debit:any): Observable<any> {
  let url = `${this.baseURL}/${id}/transfer/${debit}`;
  return this._http.post(url,debit);

}
//activity
public getTransactions(id: any): Observable<any> {
  let url = `${this.transURL}/customer/${id}`;
  return this._http.get(url)
}


// public getTransaction_sender(account_id_sender:number):Observable<any>{
//   let url=`${this.baseURL}/customer/cust_id/transaction/${account_id_sender}`;
//   return this._http.get(url)
// }

// public getTransaction_receiver(account_id_receiver:number):Observable<any>{
//   let url=`${this.baseURL}/customer/cust_id/transaction/account_receiver/${account_id_receiver}`;
//   return this._http.get(url)
// }

// public updatePassTrans(cust_id:number,old_pass:any,new_pass:any,data:any):Observable<any>{
//   let url=`${this.baseURL}/customer/${cust_id}/transaction/${old_pass}/change_pass/${new_pass}`;
//   return this._http.put(url,data)
// }
}



