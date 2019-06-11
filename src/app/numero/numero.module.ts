import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumeroPage } from './numero.page';
import { ResultadoComponent } from './resultado/resultado.component';
import { NumeroService } from './numero.service';

const routes: Routes = [
  { path: '', component: NumeroPage },
  { path: 'resultado', component: ResultadoComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NumeroPage,
    ResultadoComponent
   ],
   providers: [NumeroService]
})
export class NumeroPageModule { }
