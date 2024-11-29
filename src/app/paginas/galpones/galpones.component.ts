import { Component, inject, signal } from '@angular/core';
import { FrmgalponesComponent } from './frmgalpones/frmgalpones.component';
import { ListgalponesComponent } from './listgalpones/listgalpones.component';
import { FirehemmService } from '../../servicios/firehemm.service';

@Component({
  selector: 'app-galpones',
  standalone: true,
  imports: [FrmgalponesComponent, ListgalponesComponent],
  templateUrl: './galpones.component.html',
  styleUrl: './galpones.component.css',
})
export class GalponesComponent {
  muestra = signal(false);

 

  muestrafrm() {
    this.muestra.set(!this.muestra());
  }

}
