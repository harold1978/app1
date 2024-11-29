import { Component, inject, signal } from '@angular/core';
import { Igalpon } from './../igalpon';
import { FirehemmService } from '../../../servicios/firehemm.service';
import { GalponComponent } from "../galpon/galpon.component";
@Component({
  selector: 'app-listgalpones',
  standalone: true,
  imports: [GalponComponent],

  templateUrl: './listgalpones.component.html',
  styleUrl: './listgalpones.component.css',
})
export class ListgalponesComponent {
  private serviciofire = inject(FirehemmService);

  listag = this.serviciofire.getGalpones();

  lista = signal<Igalpon[]>([]);

  constructor() {
    this.listag.subscribe(g=>{this.lista.set(g)});
  }
  
}
