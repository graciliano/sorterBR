import { NumeroService } from './../numero.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-resultado',
   templateUrl: './resultado.component.html',
   styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnInit {

   subscription: any
   resultErro: String
   numeros: number[]
   resultadoNumeros: String

   constructor(
      private numeroService: NumeroService,
   ) { }

   ngOnInit() {
      this.resultErro = this.numeroService.resultErro
      this.numeros = this.numeroService.numeros.sort((a, b) => a - b)
      this.resultadoNumeros = this.numeros.join(" - ")
   }

   sorteiaNovamente() {
      this.numeros = []
      this.numeroService.numeros = []
      this.resultErro = ''
      this.numeroService.resultErro = ''
      this.numeroService.sorteiaNumero()
      this.resultErro = this.numeroService.resultErro
      this.numeros = this.numeroService.numeros.sort((a, b) => a - b)
      this.resultadoNumeros = this.numeros.join(" - ")
   }

   // voltar() {
   //    this.numeroService.zeraValores()
   //    this.resultErro = null
   //    this.resultadoNumeros = null
   //    this.router.navigateByUrl('/numero')
   // }

}
