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





//   modifiedCount:undefined| any=undefined
//   constructor(private _actived_rout:ActivatedRoute, private _customer_service:CustomerService,private _transaction_service:TransactionService, private _rout:Router) { }

//   ngOnInit(): void {
    
//   }

//   password=new FormControl('',Validators.required)
//   again_pass=new FormControl('',Validators.required)
//   handleUpdate(){
//     if(this.password.value==this.again_pass.value){
//       this._actived_rout.parent?.parent?.params.subscribe({
//         next:(params:Params)=>{
//           this._customer_service.updateLoginPass(params['cust_id'],this.password.value,undefined).subscribe({
//             next:(data)=>{console.log(data)
//               //this.modifiedCount=data.modifiedCount
//             }
//           });
//           this._transaction_service.updatePasslogin(params['cust_id'],params['pass'],this.password.value,undefined).subscribe({
//             next:(data)=>console.log(data)
//           })
          
          
//           this._rout.navigate(['/home'])
//         }
//       })

//     } else{
      
//       alert('password is not match')
//     }
//   }

// }