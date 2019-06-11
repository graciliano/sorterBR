import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LetraService } from './letra.service';

import { LetraPage } from './letra.page';
import { ResultadoComponent } from '../letra/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: LetraPage },
  { path: 'resultado', component: ResultadoComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
     LetraPage,
     ResultadoComponent
   ],
   providers: [LetraService]
})
export class LetraPageModule {}
