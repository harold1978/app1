import { Routes } from '@angular/router';

import { Component } from '@angular/core';

import { InicioComponent } from './paginas/inicio/inicio.component';

export const routes: Routes = [
   
    {path:'',component:InicioComponent},
    {path:'pollos',loadComponent:()=>import('./paginas/pollos/pollos.component').then((m)=>m.PollosComponent)}
];
