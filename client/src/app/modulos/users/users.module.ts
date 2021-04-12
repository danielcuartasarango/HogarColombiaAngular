import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { ResetPass2Component } from './reset-pass2/reset-pass2.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, ResetPassComponent, ResetPass2Component],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule

  ],
  exports:[
    LoginComponent,
    LogoutComponent
  ], 
  providers: [
  ]
})
export class UsersModule { }
