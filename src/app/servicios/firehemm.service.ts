import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable, Observer } from 'rxjs';
import { Igalpon } from '../paginas/galpones/igalpon';

@Injectable({
  providedIn: 'root'
})
export class FirehemmService {
  private _firestore = inject(Firestore);
  private _coleccion = collection(this._firestore,'galpones');

  getGalpones(){
    return collectionData(this._coleccion) as Observable<Igalpon[]>;
  }
  addGalpon(nuevo:Igalpon){
    return addDoc(this._coleccion,nuevo);
  }

  constructor() { }
}
