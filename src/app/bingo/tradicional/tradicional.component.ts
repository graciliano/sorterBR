import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { BingoService } from './../bingo.service';
import { SorterService } from 'src/app/sorter.service';

@Component({
   selector: 'app-tradicional',
   templateUrl: './tradicional.component.html',
   styleUrls: ['./tradicional.component.scss'],
})

export class TradicionalComponent implements OnInit {

   bingo: String[] = []
   mostraResultado: String
   subscription: any;

   constructor(
      private route: Router,
      private platform: Platform,
      private bingoService: BingoService,
      private sorteService: SorterService
   ) { }

   ngOnInit() {
      this.sorteService.showBannerAd()
   }

   ionViewDidEnter() {
      this.subscription = this.platform.backButton.subscribe(() => {
         this.sorteService.hideBannerAd()
      });
   }

   chamarBola() {
      this.bingoService.sorteio()
      this.bingo = this.bingoService.bolasSorteadas
      this.mostraResultado = this.bingo.join(' . ')
   }

   zeraBingo() {
      this.bingo = []
      this.bingoService.zeraBingo()
      this.mostraResultado = null
   }

   resultado() {
      this.sorteService.showInterstitialAds()
      this.route.navigateByUrl('/bingo/resultado')
   } 

   // voltar() {
   //    this.route.navigateByUrl('/home')
   // }

}
