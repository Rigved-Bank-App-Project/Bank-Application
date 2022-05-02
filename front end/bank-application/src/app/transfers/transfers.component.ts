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
  // name : string | undefined = undefined;
  // transfer: any | undefined = undefined;
  constructor(private _service: BankService, private _builder: FormBuilder, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  transferForm : FormGroup = this._builder.group({
    accountNumber:[], name:[], IFSC:[], Amount:[]
  });

  handleTransfer () {
    this._activatedRoute.parent?.params.subscribe({
      next: (params: Params) => {
        let debit = this.transferForm.value;
        this._service.storeTransaction(params['id'], debit).subscribe({
          next: (data) => {
            let balance = data.amount ;
            alert(`Money Transferred Successfully`);
            // this._service.getBalance(params['id'], balance );
          }
        });
      }
    });
  }

}
//     modifiedCount:undefined| any=undefined
//     constructor(private _actived_rout:ActivatedRoute, private _customer_service:CustomerService,private _transaction_service:TransactionService, private _rout:Router) { }
  
//     password=new FormControl('',Validators.required)
//     again_pass=new FormControl('',Validators.required)
//     handleUpdate(){
//       if(this.password.value==this.again_pass.value){
//         this._actived_rout.parent?.parent?.params.subscribe({
//           next:(params:Params)=>{
//             this._customer_service.updateLoginPass(params['cust_id'],this.password.value,undefined).subscribe({
//               next:(data)=>{console.log(data)
//                 //this.modifiedCount=data.modifiedCount
//               }
//             });
//             this._transaction_service.updatePasslogin(params['cust_id'],params['pass'],this.password.value,undefined).subscribe({
//               next:(data)=>console.log(data)
//             })
            
            
//             this._rout.navigate(['/home'])
//           }
//         })
  
//       } else{
        
//         alert('password is not match')
//       }
//     }
  
//   }
// }

