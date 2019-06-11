import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
   selector: 'app-bingo',
   templateUrl: './bingo.page.html',
   styleUrls: ['./bingo.page.scss'],
})
export class BingoPage implements OnInit {

   constructor(private route: Router) { }

   ngOnInit() {}

}
