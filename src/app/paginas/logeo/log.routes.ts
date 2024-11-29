import { Routes } from "@angular/router"
import { routes } from './../../app.routes';
export default [
    {
    path:'sign-in',loadComponent: ()=> import('./sign-in/sign-in.component').then((r)=>r.SignInComponent)
},
{
    path:'sign-up',loadComponent:()=>import('./sign-up/sign-up.component').then((r)=>r.SignUpComponent)
}
] as Routes