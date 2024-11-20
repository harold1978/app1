import { Routes } from '@angular/router';

import { Component } from '@angular/core';

import { InicioComponent } from './paginas/inicio/inicio.component';

export const routes: Routes = [
   
    {path:'',component:InicioComponent},
    {path:'pollos',loadComponent:()=>import('./paginas/pollos/pollos.component').then((m)=>m.PollosComponent)},
    {path:'galpones',loadComponent:()=>import('./paginas/galpones/galpones.component').then((m)=>m.GalponesComponent)},
    {path:'gastos',loadComponent:()=>import('./paginas/gastos/gastos.component').then((g)=>g.GastosComponent)},
    {path:'muertes',loadComponent:()=>import('./paginas/muertes/muertes.component').then((g)=>g.MuertesComponent)}

];
