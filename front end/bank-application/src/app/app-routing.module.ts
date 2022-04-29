import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountActivitiesComponent } from './account-activities/account-activities.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InvestorsComponent } from './investors/investors.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "home", component : HomeComponent},
  {path : "login", component : LoginComponent, children : [
    {path : "", component : SuccessComponent},
    {path : "success", component : SuccessComponent},
    {path : "accountact", component : AccountActivitiesComponent},
    {path : "transfer", component : TransfersComponent},
    {path : "changepass", component : ChangePasswordComponent}
  ]},
  {path : "investers", component :InvestorsComponent},
  {path : "about", component : AboutUsComponent},
  {path : "contact", component : ContactUsComponent},
  {path : "advertisement", component : AdvertisementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 