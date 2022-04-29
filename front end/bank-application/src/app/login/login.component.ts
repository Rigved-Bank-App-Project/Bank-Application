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
    private builder: FormBuilder, 
    private service: BankService, 
    private router: Router) { }
  
  loginForm : FormGroup =this.builder.group({
    _id:[], password:[]
  })
  errorMessage : string | undefined = undefined;

  ngOnInit(): void {
  }
  handleSubmit(){
    let id = this.loginForm.controls['_id'].value;
    let password = this.loginForm.controls['password'].value;
    this.service.login(id,password).subscribe({
      next : (data) => {
        this.router.navigate(['success', data._id, data.password])
      },
      error:(err)=>{
        this.errorMessage = err.error.message;
        this.loginForm.reset({});
      }
    })
    let name = this.loginForm.value;
    this.router.navigate(['success', name]);
  }
}
