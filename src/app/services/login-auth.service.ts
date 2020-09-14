import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { switchMap, map, take } from 'rxjs/operators';
import { SERVER_URL, PATIENT_URL, LOOKUP_URL } from 'src/config';
import { Storage } from '@ionic/storage';

import { SwasthStorageService } from '../storage/swasth-storage.service';

const helper = new JwtHelperService();
const TOKEN_KEY = "patient-jwt-token";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  LOGINUSER_PROFILE = "patient_profile";

  public user: Observable<any>;
  private userData = new BehaviorSubject(null);
  private loginUserProfile = new BehaviorSubject(null);
  storageObs:any;
  decodedToken:any;

  constructor(private storage: Storage, private http: HttpClient, private plt: Platform,
    private router: Router, private swasthStorage: SwasthStorageService) {
      this.loadStoredToken();
  }

  loadStoredToken() {
    let platformObs = from (this.plt.ready());
    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY))
      }),
      map(token => {
        console.log("token from storage", token);
        if(token) {    
          this.decodedToken = helper.decodeToken(token);
          console.log('decoded: ', this.decodedToken);
          this.userData.next(this.decodedToken);          
            return true;
          
        } else {
          return false;
        } 
      })
    );
  }

  // user session login 
  login(values: any,rememberValues:any): Observable<any> {
    return this.http.post(`${SERVER_URL}/circlelogin`, values, {responseType: 'text'}).pipe(
      take(1),
      map(token => {
      if(token !== 'NOTEXISTS'){
        /* if(rememberValues==1)
        {
          return this.handleJwtResponse(jwt);
        } */     
        
        return token;
      } else if(token == 'NOTEXISTS') {
        return token;
      }else {
        alert("user not exists");
      }      
    }),
    switchMap(token => {
      this.decodedToken = helper.decodeToken(token);
      console.log('decoded: ', this.decodedToken);
      //this.getUserApi(this.decodedToken.UID);
      this.userData.next(this.decodedToken);
      this.storageObs = from(this.storage.set(TOKEN_KEY, token));
      return this.storageObs;
    })
    );
  }

  getUser() {
    return this.userData.getValue();
  }

  getUserApi(uid) {
    console.log("user id", uid);
    this.http.get(`${LOOKUP_URL}/getcirclepatientdetails/`+uid, {responseType: "json"}).subscribe(data=>{
      console.log("pt api response-->", data);
      if(data!=null) {
        console.log("pt api response-->", data);
        //this.swasthStorage.setStorage(this.LOGINUSER_PROFILE,data);
        this.storage.set(this.LOGINUSER_PROFILE,data);
        return this.loginUserProfile.next(data);        
      } else {
        return this.loginUserProfile.next(null);
      }
    });
  }

  getUserdetail() {
    /* console.log("after set",this.loginUserProfile.getValue());
    return this.loginUserProfile.getValue(); */
    this.storage.get(this.LOGINUSER_PROFILE).then(data=>{
      console.log("storage profile----->",data);
      if(data != undefined) {
        return data;
      } else {
        return null;
      }
      
    });
  }

  logout() {
    // this.swasthStorage.clearStorage();
    //   this.storage.clear();
    //   localStorage.clear();
    //   window.location.href='';
    //   //this.router.navigateByUrl('login']); 
    this.storage.remove(TOKEN_KEY).then(() => {
      //this.router.navigateByUrl('/');
      // this.userData.next(null);
      // this.loginUserProfile.next(null);
      this.swasthStorage.clearStorage();
      this.storage.clear();
      localStorage.clear();
      //window.location.href='';
      this.router.navigateByUrl('login');          
    })
  }
}
