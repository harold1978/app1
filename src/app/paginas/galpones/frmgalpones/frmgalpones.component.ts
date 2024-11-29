import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FirehemmService } from '../../../servicios/firehemm.service';
import { Igalpon } from '../igalpon';

@Component({
  selector: 'app-frmgalpones',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './frmgalpones.component.html',
  styleUrl: './frmgalpones.component.css'
})
export class FrmgalponesComponent {
  //itemForm = signal<FormGroup>(new FormGroup({
  private _servicioFire = inject(FirehemmService);
   
  frmgalp = signal<FormGroup>(new FormGroup({
    Id: new FormControl({value:"",disabled:true}),
    Nombre: new FormControl(""),
    Cantidad: new FormControl(0),
    FechaCreacion:new FormControl(new Date())
  }));
 async crearGalpon(){
    if(this.frmgalp().invalid)return;
    const newgalpon = this.frmgalp().value as Igalpon;
    try{
    const documento =  await this._servicioFire.addGalpon(newgalpon);

    }catch(error){}
  }
}
