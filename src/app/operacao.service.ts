import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private firestore: AngularFirestore) { }

  extrato(){
    return this.firestore.collection("operacao").snapshotChanges();
  }
}
