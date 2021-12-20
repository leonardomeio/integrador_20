import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private firestore: AngularFirestore) { }


  adicionar(operacao){
    this.firestore.collection("operacao").add(operacao);
  }
  entrar(operacao){
    this.firestore.collection("entrar").add(this.entrar);
  }
}
