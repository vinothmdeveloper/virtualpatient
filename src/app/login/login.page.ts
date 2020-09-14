import { Component, OnInit } from '@angular/core';
import {NavController, LoadingController, NavParams, ToastController, Platform} from '@ionic/angular';
import {finalize} from 'rxjs/operators';
import { AuthService } from "../auth.service";
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import { SwasthStorageService } from '../storage/swasth-storage.service';

import * as firebase from 'Firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  rememberMe=true;
  userType="";  
  signUpStatus=false;
  forgetPasswordStatus=false;
  welcomePageStatus=true;
  patientDetails:any;
  familyMembers: any = [];
  LOGINUSER_PROFILE = "patient_profile";

  //ref = firebase.database().ref('autorefresh/chatupdate');

  constructor(private readonly loadingController: LoadingController,private readonly authService: AuthService,private readonly toastCtrl: ToastController,
    private readonly jwtHelper: JwtHelperService,private router: Router, private loginAuth: LoginAuthService,
    private swasthStorage: SwasthStorageService) { 

  }

  ngOnInit() {
    // this.ref.on('value', resp => {
    //   console.log("values---->", resp.val());
    //   this.fncheck();
    // });

  }

  fncheck() {
    this.authService.getPtCircleList('cvinoth03')
    .subscribe(data => {      
      console.log("res--", data);
    });
  }

  // to signup component
  signup() {
    this.welcomePageStatus=false
    this.signUpStatus=true;
  }

  // signup component to login page
  signUpToLogin(event) {
    this.signUpStatus=event;
  }

  // to forget password component
  forgot() {
    this.forgetPasswordStatus=true;
  }

  // forgetpassword component to login page
  forgetPassToLogin(event) {
    this.forgetPasswordStatus=event;
  }

  // welcome page to login page
  linkLogin() {
    this.welcomePageStatus=false;
  }

  // for user login
  async login(value: any) {
   console.log(this.userType);
    let loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Logging in ...'
    });
    let rememberValue:any=0;
    if(value.rememberMe)
    {
      rememberValue=1;
    }
    await loading.present();
    console.log(value,rememberValue);
    this.loginAuth
    .login(value,rememberValue)
    .pipe(finalize(() => loading.dismiss()))
    .subscribe((data) => {
      // console.log("login data",data);
      if(data=='NOTEXISTS'){  
        this.showSuccesToast(data);
      }else {   
        this.checkAccountType(data);     
        //this.checkPatientCircleStatus(data);
        //this.router.navigateByUrl('/pt-profile');
        //this.router.navigateByUrl('/familymembers');
      }
    },
    err => {
      console.log(err);
      this.handleError(err);
    });
  }

  checkAccountType(tokendata)
  {
    const authDetail = this.jwtHelper.decodeToken(tokendata);
    console.log("token data--", authDetail);
    this.authService
    .getPrimaryUserProfile(authDetail.UID)
    .subscribe(data=>{
      this.patientDetails=data;
      console.log("Patient Details==>",data);
      let accountType=this.patientDetails.accountType;
      if(accountType=="Family")
      {
        this.authService
          .getFamilyMember(this.patientDetails.userID)
          .subscribe(data => {
            this.familyMembers=data;
            if(this.familyMembers.length>0)
            {
              this.router.navigateByUrl('/familymembers');
            }
            else
            {
              this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, this.patientDetails);
              this.router.navigateByUrl('/pt-profile');
            }
          });
      }
      else if(accountType=="Normal")
      {
        this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, this.patientDetails);
              this.router.navigateByUrl('/pt-profile');
        this.router.navigateByUrl('/pt-profile');
      }
      else
      {
        this.swasthStorage.setStorage(this.LOGINUSER_PROFILE, this.patientDetails);
        this.router.navigateByUrl('/pt-profile');
        this.router.navigateByUrl('/pt-profile');
      }
    });
  }

  checkPatientCircleStatus(tokendata) {
    const authDetail = this.jwtHelper.decodeToken(tokendata);
    console.log("token data--", authDetail);
    this.authService.getPtCircleList(authDetail.UID)
    .subscribe(data => {      
      console.log("res--", data);
      if(data != null) {        
        let response:any = data;
        this.router.navigateByUrl('/subscribed-doctor-circle');
      } else {        
        this.router.navigateByUrl('/select-virtual-hospital');
      }
    });    
  }

  private async showSuccesToast(data: string) {
    // console.log("Response Message======"+data);      
    const toast = await this.toastCtrl.create({
      message: 'Invalid User ID',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async handleError(error: any) {
    let message: string;
    if (error.status && error.status === 401) {
      message = 'Invalid password';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });
    toast.present();
  }  
  
}
