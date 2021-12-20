import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.page.html',
  styleUrls: ['./saldo.page.scss'],
})
export class SaldoPage implements OnInit {
cliente: string;

  constructor() { }

  ngOnInit() {
    
  }

remover(){
  var remover_dinheiro = function(){
    this.cliente.saldo = this.cliente.saldo; 
}

var consultar_saldo = function(){
    console.log('SALDO: ' + this.cliente.saldo);
}
var consultar_cliente = function(){
    console.log('Nome: ' + this.cliente.nome);
    console.log('Login:' + this.cliente.login);
    console.log('Senha:' + this.cliente.senha);
    console.log('Conta:' + this.cliente.conta);
    console.log('Saldo:' + this.cliente.saldo);
}

'add_dinheiro();'
consultar_saldo();
remover_dinheiro();
consultar_saldo(); 
}

}
