import { Component, EventEmitter, Input, Output, input, signal } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Muerte } from '../../../paginas/interfaces/muerte';


@Component({
  selector: 'app-frmmuertes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './frmmuertes.component.html',
  styleUrl: './frmmuertes.component.css'
})
export class FrmmuertesComponent {
// @Input() muertesSignal= signal<Muerte[]>;
 @Output() agregar = new EventEmitter<Muerte>();


  muertesSignal = input.required<Muerte[]>();
  


  itemForm = signal<FormGroup>(new FormGroup({
    Id: new FormControl({value:"",disabled:true}),
    IdCamada: new FormControl(""),//, [Validators.required]),
    Cantidad:  new FormControl( 0),
    Motivo: new FormControl(''),
    Fecha:  new FormControl(new Date())
  }));
  

   nuevoDato():Muerte|null{
     if (this.itemForm().valid) {

      let aux = this.itemForm().value as Muerte;
     // const siguiente = this.muertesSignal().length+1;
     const siguiente = this.muertesSignal().reduce((max,dato)=>dato.Id>max?dato.Id:max,this.muertesSignal()[0]?.Id??0);
      aux = {...aux,Id:siguiente+1};
       const newItem = this.itemForm().value;

       this.itemForm().reset({ Fecha: new Date() });

      return aux;
   } else {
     console.log('Formulario no válido');
     return null;
   }
 }
    // Método para emitir el evento de agregar dato al padre
    emitirAgregarDato() {
      //const nuevoDato: Muerte = { id: this.datos.length + 1, nombre: 'Carlos' };
      this.agregar.emit(this.nuevoDato()!);
      this.itemForm().reset();
      
    }

}
