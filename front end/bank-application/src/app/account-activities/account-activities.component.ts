import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities.component.html',
  styleUrls: ['./account-activities.component.css']
})
export class AccountActivitiesComponent implements OnInit {
  name : string | undefined = undefined;
  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((parameter: Params) => {
      this.name = parameter['name']
    })
  }

}
