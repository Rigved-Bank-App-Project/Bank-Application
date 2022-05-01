import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BankService } from '../bank.service';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
 
  constructor(private _activatedRoute:ActivatedRoute,private _service:BankService) { }

  ngOnInit(): void {
    
          }
      }