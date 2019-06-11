import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {

   // bannerId: string = "ca-app-pub-8197986182204627/9992258799"
   // intersId: string = "ca-app-pub-8197986182204627/2552698575"

   constructor(private admobFree: AdMobFree, private platform: Platform) { }


   showBannerAd() {
      const bannerConfig: AdMobFreeBannerConfig = {
         isTesting: false,
         autoShow: true,
         id: 'ca-app-pub-8197986182204627/9992258799',
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare().then(() => {
         // success
      }).catch(e => alert(e));
   }

   hideBannerAd() {
      let bannerConfig: AdMobFreeBannerConfig = {
         isTesting: false,
         autoShow: false,
         id: 'ca-app-pub-8197986182204627/9992258799',
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare().then(() => {
         // success
      }).catch(e => alert(e));
   }

   showInterstitialAds() {
      let interstitialConfig: AdMobFreeInterstitialConfig = {
         isTesting: false,
         autoShow: true,
         id: 'ca-app-pub-8197986182204627/2552698575',
      };

      this.admobFree.interstitial.config(interstitialConfig);
      this.admobFree.interstitial.prepare().then(() => {
      }).catch(e => alert(e));
   }

}