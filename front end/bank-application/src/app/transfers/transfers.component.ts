import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder ,FormGroup } from '@angular/forms';
import { BankService } from '../bank.service'; 
@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  name : string | undefined = undefined;
  constructor(private _service: BankService, private _builder: FormBuilder, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  transfer: any | undefined = undefined;

  transferForm : FormGroup = this._builder.group({
    accountNumber:[], name:[], IFSC:[], Amount:[]
  });

  handleTransfer () {
    let transfer = this.transferForm.controls['transfer'].value;
    this._activatedRoute.parent?.parent?.params.subscribe({
      next: (params: Params) => {
        this._service.updateTransaction(params['id']).subscribe({
          next: (data:any[]): void => {
          },
          error: (err:any[]): void =>{

          } 
          
        });
      }
    });
  }

}

