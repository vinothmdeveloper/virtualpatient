import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

const config = {
  apiKey: 'AIzaSyBrF9C3m2KSRI7b-ctKLInSaFcVRacZT5Y',
  authDomain: 'ionic-push-demo-6914e.firebaseapp.com',
  databaseURL: 'https://ionic-push-demo-6914e.firebaseio.com',
  projectId: 'ionic-push-demo-6914e',
  storageBucket: 'ionic-push-demo-6914e.appspot.com',
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profile',
      url: '/pt-profile',
      icon: 'person'
    },
    {
      title: 'Change Network',
      url: '/select-virtual-hospital',
      icon: 'git-network-outline'
    }
    // {
    //   title: 'Add Family Members',
    //   url: '/subscribe-family-member',
    //   icon: 'people'
    // }
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform, private router : Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

  ngOnInit() {
    this.authService.logout();
    /* const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    } */
  }
}
