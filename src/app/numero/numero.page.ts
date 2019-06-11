import { SorterService } from './../sorter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms'
import { NumeroService } from './numero.service';
import { Platform } from '@ionic/angular';

@Component({
   selector: 'app-numero',
   templateUrl: './numero.page.html',
   styleUrls: ['./numero.page.scss'],
})
export class NumeroPage implements OnInit {

   inputNumero = new FormControl('')
   inputMin = new FormControl('')
   inputMax = new FormControl('')
   subscription: any;

   constructor(
      private router: Router,
      private platform: Platform,
      private numeroService: NumeroService,
      private sorterService: SorterService
   ) { }

   ionViewDidEnter() {
      this.subscription = this.platform.backButton.subscribe(() => {
         this.sorterService.hideBannerAd()
      });
   }

   resultado() {
      this.numeroService.numero = this.inputNumero.value - this.inputNumero.value % 1
      this.numeroService.numMin = this.inputMin.value - this.inputMin.value % 1
      this.numeroService.numMax = this.inputMax.value - this.inputMax.value % 1
      this.numeroService.sorteiaNumero()
      this.sorterService.showInterstitialAds()
      this.router.navigateByUrl('/numero/resultado')
   }

   // voltar() {
   //    this.router.navigateByUrl('/home')
   // }
   
   ngOnInit() {}

}
