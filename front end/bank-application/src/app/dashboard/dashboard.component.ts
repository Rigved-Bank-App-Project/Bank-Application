import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BankService } from '../bank.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _service:BankService) { }
  name:string |undefined=undefined;
  accountNumber:number|undefined=undefined;
  accountType:string|undefined=undefined;
  balance:number|undefined=undefined;
  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe({
      next: (params:Params) => {
        this._service.getAccount(params['id']).subscribe({
          next: (data) => {
            this.name = data.name;
            this.accountNumber=data.ac_number;
            this.accountType=data.ac_type;
            this.balance=data.ac_balance
          }
        });
              }
            });
  }

}
