import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BingoService } from './bingo.service';

import { BingoPage } from './bingo.page';
import { TradicionalComponent } from './tradicional/tradicional.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  { path: '', component: TradicionalComponent },
  { path: 'bingo', component: TradicionalComponent },
  { path: 'resultado', component: ResultadoComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ResultadoComponent],
  declarations: [
     BingoPage,
     TradicionalComponent,
     ResultadoComponent
   ],
   providers: [BingoService]
})
export class BingoPageModule {}
