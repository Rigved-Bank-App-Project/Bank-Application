import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InvestorsComponent } from './investors/investors.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { SuccessComponent } from './success/success.component';
import { AccountActivitiesComponent } from './account-activities/account-activities.component';
import { TransfersComponent } from './transfers/transfers.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InvestorsComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdvertisementsComponent,
    SuccessComponent,
    AccountActivitiesComponent,
    TransfersComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
