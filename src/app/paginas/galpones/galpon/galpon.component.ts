import { Component, input, signal } from '@angular/core';
import { Igalpon } from '../igalpon';

@Component({
  selector: 'app-galpon',
  standalone: true,
  imports: [],
  templateUrl: './galpon.component.html',
  styleUrl: './galpon.component.css'
})
export class GalponComponent {
galpon = input.required<Igalpon>();

//galpon=signal<Igalpon>({Id:'0',Nombre:'',Cantidad:0,FechaCreacion:""});

}
