import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BankService } from '../bank.service';
@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities.component.html',
  styleUrls: ['./account-activities.component.css']
})
export class AccountActivitiesComponent implements OnInit {
  transaction: undefined | any = undefined;
  constructor(private _service: BankService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe({
      next: (params: Params) => {
        this._service.getTransactions(params['id']).subscribe({
          next: (data) => {
            this.transaction = data;
          }
        });
      }
    });
  }


}
