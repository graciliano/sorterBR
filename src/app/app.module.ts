import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'

import { SorterService } from './sorter.service'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//ADMOB
import { AdMobFree } from '@ionic-native/admob-free/ngx'


@NgModule({
   declarations: [AppComponent],
   entryComponents: [],
   imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
   ],
   providers: [
      SorterService,
      StatusBar,
      SplashScreen,
      AdMobFree,
      ScreenOrientation,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
