import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _builder: FormBuilder, 
    private _service: BankService, 
    private _router: Router) { }

  loginForm : FormGroup =this._builder.group({
    _id:[], password:[]
  })
  errorMessage : string | undefined = undefined;

  ngOnInit(): void {
  }
  handleSubmit(){
    let id = this.loginForm.controls['_id'].value;
    let password = this.loginForm.controls['password'].value;
    this._service.login(id,password).subscribe({
      next : (data) => {

        // this._router.navigate(['success', data._id, data.password])
        this._router.navigate(['success', data._id])

      },
      error:(err)=>{
        this.errorMessage = err.error.message;
        this.loginForm.reset({});
      }
    })
  }
}
