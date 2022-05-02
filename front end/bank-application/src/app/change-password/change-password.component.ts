import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BankService } from '../bank.service'; 
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  name : string | undefined = undefined;
  constructor(private _service : BankService, private _builder: FormBuilder, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  password : FormGroup = this._builder.group({
    pass: []
  });
  handleSubmit() {
    let pass = this.password.controls['pass'].value;
    this._activatedRoute.parent?.parent?.params.subscribe({
      next: (params: Params) => {
        this._service.updatePassword(params['id'],pass).subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (err) => console.log(err)
        })
      }
    })
  }
}
