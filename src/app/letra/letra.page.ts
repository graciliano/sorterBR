import { Platform } from '@ionic/angular';
import { SorterService } from 'src/app/sorter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

import { LetraService } from './letra.service';

@Component({
   selector: 'app-letra',
   templateUrl: './letra.page.html',
   styleUrls: ['./letra.page.scss'],
})
export class LetraPage implements OnInit {

   inputNumero = new FormControl('')
   checkRepetir: FormGroup
   subscription: any;


   constructor(
      private router: Router,
      private platform: Platform,
      private letraService: LetraService,
      private formBuilder: FormBuilder,
      private sorterService: SorterService
   ) {
      this.checkRepetir = this.formBuilder.group({
         value: []
      });
   }

   ngOnInit() { }

   ionViewDidEnter() {
      this.subscription = this.platform.backButton.subscribe(() => {
         this.sorterService.hideBannerAd()
      });
   }


   resultado() {
      this.letraService.numero = this.inputNumero.value - this.inputNumero.value % 1
      this.letraService.repetir = this.checkRepetir.get('value').value
      this.letraService.sorteiaLetra()
      this.sorterService.showInterstitialAds()
      this.router.navigateByUrl('/letra/resultado')
   }

   // voltar() {
   //    this.router.navigateByUrl('/home')
   // }


}

