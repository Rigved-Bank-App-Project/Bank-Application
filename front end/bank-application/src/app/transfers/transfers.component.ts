import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  name : string | undefined = undefined;
  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((parameter: Params) => {
      this.name = parameter['name']
    })
  }

}
