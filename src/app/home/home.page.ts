import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'

import { SorterService } from './../sorter.service';

import { Platform, NavController } from '@ionic/angular';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage {

   constructor(
      private router: Router,
      private platform: Platform,
      private sorterService: SorterService,
      private screenOrientation: ScreenOrientation
   ) { }

   subscription: any

   ngOnInit() {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
   }

   ionViewDidEnter() {
      this.subscription = this.platform.backButton.subscribe(() => {
         navigator['app'].exitApp();
      });
   }

   ionViewWillLeave() {
      this.sorterService.showBannerAd()
      this.subscription.unsubscribe();
   }

   numeroNavi() {
      this.router.navigateByUrl('/numero')
   }

   letraNavi() {
      this.router.navigateByUrl('/letra')
   }

   bingo() {
      this.router.navigateByUrl('/bingo')
   }
}
