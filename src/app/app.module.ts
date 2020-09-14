import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';
// import { AndroidPermissions } from '@ionic-native/android-permissions';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {Storage, IonicStorageModule} from "@ionic/storage";
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {WebserviceService} from './webservice.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DatePipe } from '@angular/common';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { PaginationServiceService } from "../app/pagination-service.service";
import { ChatAudioRecordingService } from '../app/chatAudioRecording.service';

// import { Transfer } from '@ionic-native/transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Media } from '@ionic-native/media/ngx';
import { FilterPipeModule } from 'ngx-filter-pipe';

export function jwtOptionsFactory(storage: Storage) {
  return {  
    tokenGetter: () => storage.get('jwt_token'),
    whitelistedDomains: ['localhost:8080']
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    Ng2SearchPipeModule,
    JwtModule.forRoot({
      jwtOptionsProvider: { 
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
    IonicStorageModule.forRoot({
      driverOrder: ['localstorage']}      
    ),
    FilterPipeModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    File,
    FileOpener,
    // Transfer,
    Camera,
    FilePath,
    Media,
    PaginationServiceService,
    DatePipe,
    ChatAudioRecordingService,
    // AndroidPermissions,
    WebserviceService,
    Clipboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
