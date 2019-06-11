import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', loadChildren: './home/home.module#HomePageModule' },
   { path: 'numero', loadChildren: './numero/numero.module#NumeroPageModule' },
   { path: 'letra', loadChildren: './letra/letra.module#LetraPageModule' },
   { path: 'bingo', loadChildren: './bingo/bingo.module#BingoPageModule' },
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { useHash: true })],
   exports: [RouterModule]
})

export class AppRoutingModule { }
