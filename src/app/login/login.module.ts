import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SignUpComponent } from "./../sign-up/sign-up.component";
import { ForgetPasswordComponent } from "./../forget-password/forget-password.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage,
    SignUpComponent,
    ForgetPasswordComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule {}
