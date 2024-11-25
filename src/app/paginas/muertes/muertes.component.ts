import { Component, NgModule, signal } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Muerte } from '../interfaces/muerte';
import { FrmmuertesComponent } from "../../componentes/muertes/frmmuertes/frmmuertes.component";

@Component({
  selector: 'app-muertes',
  standalone: true,
  imports: [CommonModule, FrmmuertesComponent,FrmmuertesComponent],//FormsModule  
  templateUrl: './muertes.component.html',
  styleUrl: './muertes.component.css'
})
export class MuertesComponent {
muestra = signal(true);
muertesSignal = signal<Muerte[]>([
  { Id: 1, IdCamada: 101, Cantidad: 10, Motivo: 'Venta', Fecha: new Date() },
  { Id: 2, IdCamada: 102, Cantidad: 5, Motivo: 'Devolución', Fecha: new Date() }
]);

newItem: Muerte = { Id: 0, IdCamada: 0, Cantidad: 0, Motivo: '', Fecha: new Date() };


    // Método para eliminar un ítem por ID
    deleteItem(Id: number) {
      
      this.muertesSignal.update((p)=> p.filter(item => item.Id !== Id));
    }
    agregarDato(nuevoDato: Muerte) {
      const datosActuales = this.muertesSignal();
      const nuevosDatos = [...datosActuales, nuevoDato];
      this.muertesSignal.set(nuevosDatos);
    }


}



