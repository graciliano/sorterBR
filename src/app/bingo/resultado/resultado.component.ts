import { SorterService } from './../../sorter.service';
import { Component, OnInit } from '@angular/core';

import { BingoService } from './../bingo.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-resultado',
   templateUrl: './resultado.component.html',
   styleUrls: ['./resultado.component.scss'],
})

export class ResultadoComponent implements OnInit {

   bingo: number[]

   constructor(private bingoService: BingoService, private route: Router, private sorterService: SorterService) { 
      this.bingo = this.bingoService.numChamados
   }

   ngOnInit() {}

   subscription: any

   verificaResult(n: number) {
      return this.bingo.indexOf(n) == -1
   }


   // voltar() {
   //    this.route.navigateByUrl('/bingo')
   // }

}
