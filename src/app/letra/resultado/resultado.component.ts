import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { LetraService } from './../letra.service';

@Component({
   selector: 'app-resultado',
   templateUrl: './resultado.component.html',
   styleUrls: ['./resultado.component.scss'],
})

export class ResultadoComponent implements OnInit {

   subscription: any
   numero: number
   letras: String[]
   letrasSorteadas: String

   constructor(
      private platform: Platform,
      private letraService: LetraService,
   ) { }

   ngOnInit() { 
      this.letras = this.letraService.letrasSorteadas.sort()
      this.letrasSorteadas = this.letras.join(" ")
   }

   ionViewDidEnter() {
      this.subscription = this.platform.backButton.subscribe(() => {
         this.letras = []
         this.letraService.letrasSorteadas = []
      });
   }

   novoSorteio() {
      this.letras = []
      this.letraService.letrasSorteadas = []
      this.letraService.sorteiaLetra()
      this.letras = this.letraService.letrasSorteadas.sort()
      this.letrasSorteadas = this.letras.join(" ")
   }

   // voltar() {
   //    this.letras = []
   //    this.letraService.letrasSorteadas = []
   //    this.letraService.repetir = null
   //    this.router.navigateByUrl('/letra')
   // }

}
